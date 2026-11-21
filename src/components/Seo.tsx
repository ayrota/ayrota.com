import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import type { Language } from '../i18n/translations';

type Localized = Record<Language, string>;
type SeoConfig = {
  title: Localized;
  description: Localized;
  image?: string;
  noindex?: boolean;
  article?: boolean;
};

const SITE_URL = 'https://ayrota.com';
const DEFAULT_IMAGE = `${SITE_URL}/hero.png`;

const SEO_BY_PATH: Record<string, SeoConfig> = {
  '/': {
    title: {
      en: 'Ayrota | Inertial Navigation & Motion Intelligence',
      tr: 'Ayrota | Ataletsel Navigasyon ve Hareket Analitiği',
    },
    description: {
      en: 'Ayrota develops inertial navigation, motion estimation and operational intelligence technologies for autonomous systems, vehicles and indoor environments.',
      tr: 'Ayrota; otonom sistemler, araçlar ve kapalı alan uygulamaları için ataletsel navigasyon, hareket kestirimi ve operasyonel analiz teknolojileri geliştirir.',
    },
  },
  '/alkon': {
    title: {
      en: 'ALKON | GNSS-Denied IMU Navigation | Ayrota',
      tr: 'ALKON | GNSS Kısıtlı IMU Navigasyonu | Ayrota',
    },
    description: {
      en: 'ALKON is Ayrota’s IMU-based navigation capability for autonomous platforms operating where GNSS cannot be fully relied upon.',
      tr: 'ALKON, GNSS güvenilirliğinin sınırlı olduğu koşullarda otonom platformlar için IMU tabanlı navigasyon kabiliyeti sağlar.',
    },
    image: `${SITE_URL}/products/alkon.png`,
    article: true,
  },
  '/yaya': {
    title: {
      en: 'YAYA | Indoor Pedestrian Movement Intelligence | Ayrota',
      tr: 'YAYA | Kapalı Alan Yaya Hareket Analitiği | Ayrota',
    },
    description: {
      en: 'YAYA estimates relative pedestrian movement from mobile inertial sensors and turns indoor motion into route, coverage and operational insights.',
      tr: 'YAYA, mobil ataletsel sensörlerle göreli yaya hareketini kestirerek kapalı alanlarda rota, kapsama ve operasyonel analiz sunar.',
    },
    image: `${SITE_URL}/products/yaya.png`,
    article: true,
  },
  '/privacy': {
    title: {
      en: 'Privacy & Data Notice | Ayrota',
      tr: 'Gizlilik ve Veri Bildirimi | Ayrota',
    },
    description: {
      en: 'Ayrota privacy and data notice.',
      tr: 'Ayrota gizlilik ve veri bildirimi.',
    },
    noindex: true,
  },
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }

  element.href = href;
}

export function Seo() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '').toLowerCase();
    const config: SeoConfig = SEO_BY_PATH[normalizedPath] ?? {
      title: SEO_BY_PATH['/'].title,
      description: SEO_BY_PATH['/'].description,
      noindex: true,
    };
    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '/' : `${normalizedPath}/`}`;
    const title = config.title[lang];
    const description = config.description[lang];
    const image = config.image ?? DEFAULT_IMAGE;

    document.title = title;
    document.documentElement.lang = lang;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: config.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: config.article ? 'article' : 'website',
    });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Ayrota' });
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: lang === 'tr' ? 'tr_TR' : 'en_US',
    });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    upsertCanonical(canonicalUrl);

    document.head
      .querySelectorAll('script[data-ayrota-seo="structured-data"]')
      .forEach((script) => script.remove());

    if (!config.noindex) {
      const structuredData = config.article
        ? {
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: title,
            description,
            inLanguage: lang === 'tr' ? 'tr-TR' : 'en-US',
            mainEntityOfPage: canonicalUrl,
            publisher: {
              '@type': 'Organization',
              name: 'Ayrota',
              url: `${SITE_URL}/`,
            },
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Ayrota',
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/icon.png`,
            description,
          };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.ayrotaSeo = 'structured-data';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [pathname, lang]);

  return null;
}
