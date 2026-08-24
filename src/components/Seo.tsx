import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SeoConfig = {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown>;
};

const SITE_URL = 'https://ayrota.com';
const DEFAULT_IMAGE = `${SITE_URL}/hero.png`;

const SEO_BY_PATH: Record<string, SeoConfig> = {
  '/': {
    title: 'Ayrota | Inertial Navigation & Motion Intelligence',
    description:
      'Ayrota develops inertial navigation, motion estimation and operational intelligence technologies for autonomous systems, vehicles and indoor environments.',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Ayrota',
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description:
        'Ayrota develops inertial navigation, motion estimation and operational intelligence technologies for autonomous systems, vehicles and indoor environments.',
    },
  },
  '/alkon': {
    title: 'ALKON | GNSS-Denied IMU Navigation | Ayrota',
    description:
      'ALKON is Ayrota’s IMU-based navigation capability for autonomous platforms operating where GNSS cannot be fully relied upon.',
    image: `${SITE_URL}/products/alkon.png`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ALKON — GNSS-Denied IMU Navigation',
      description:
        'IMU-based navigation capability for autonomous platforms operating where GNSS cannot be fully relied upon.',
      publisher: {
        '@type': 'Organization',
        name: 'Ayrota',
        url: SITE_URL,
      },
      mainEntityOfPage: `${SITE_URL}/alkon`,
    },
  },
  '/yaya': {
    title: 'YAYA | Indoor Pedestrian Movement Intelligence | Ayrota',
    description:
      'YAYA estimates relative pedestrian movement from mobile inertial sensors and turns indoor motion into route, coverage and operational insights.',
    image: `${SITE_URL}/products/yaya.png`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'YAYA — Indoor Pedestrian Movement Intelligence',
      description:
        'Relative pedestrian movement estimation from mobile inertial sensors for indoor route, coverage and operational insights.',
      publisher: {
        '@type': 'Organization',
        name: 'Ayrota',
        url: SITE_URL,
      },
      mainEntityOfPage: `${SITE_URL}/yaya`,
    },
  },
  '/yoruk': {
    title: 'YÖRÜK | Road & Driving Analytics | Ayrota',
    description:
      'YÖRÜK transforms vehicle movement data into road-condition, maintenance and driving-safety insights for operational decision making.',
    image: `${SITE_URL}/products/yoruk.png`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'YÖRÜK — Road & Driving Analytics',
      description:
        'Vehicle movement analytics for road condition, maintenance and driving-safety insights.',
      publisher: {
        '@type': 'Organization',
        name: 'Ayrota',
        url: SITE_URL,
      },
      mainEntityOfPage: `${SITE_URL}/yoruk`,
    },
  },
  '/privacy': {
    title: 'Privacy Policy | Ayrota',
    description: 'Ayrota privacy policy.',
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

  useEffect(() => {
    const normalizedPath = pathname !== '/' ? pathname.replace(/\/$/, '').toLowerCase() : '/';
    const config = SEO_BY_PATH[normalizedPath] ?? {
      title: 'Ayrota | Inertial Navigation & Motion Intelligence',
      description:
        'Ayrota develops inertial navigation, motion estimation and operational intelligence technologies for autonomous systems, vehicles and indoor environments.',
      noindex: true,
    };

    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
    const image = config.image ?? DEFAULT_IMAGE;

    document.title = config.title;
    document.documentElement.lang = 'en';

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: config.description,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: config.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Ayrota' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: config.title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: config.description,
    });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: config.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: config.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: image,
    });
    upsertCanonical(canonicalUrl);

    document.head.querySelectorAll('script[data-ayrota-seo="structured-data"]').forEach((script) => {
      script.remove();
    });

    if (config.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.ayrotaSeo = 'structured-data';
      script.textContent = JSON.stringify(config.structuredData);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}
