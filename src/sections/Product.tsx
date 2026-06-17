import { Link } from 'react-router-dom';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const ALKON_FEATURE_KEYS = [
  'productsAlkonFeatureImu',
  'productsAlkonFeatureGnss',
  'productsAlkonFeatureDynamic',
];

const OTHER_PRODUCTS = [
  {
    name: 'YAYA',
    description: 'productsYayaDescription',
    image: '/products/yaya.png',
    href: '/yaya',
  },
  {
    name: 'YÖRÜK',
    description: 'productsYorukDescription',
    image: '/products/yoruk.png',
    href: '/yoruk',
  },
  {
    name: 'İLBER',
    description: 'productsIlberDescription',
    image: '/products/ilber.png',
    href: '/ilber',
  },
];

export function Products() {
  const { t } = useLanguage();

  return (
    <section
      id="products"
      className="relative overflow-hidden border-t border-fg/10 bg-bg py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(80,145,190,0.10),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-300/80" />

            <span className="text-[11px] font-medium tracking-[0.22em] text-fg/60">
              {t('productsKicker')}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid min-h-[390px] border-b border-fg/10 md:grid-cols-[0.78fr_1.72fr]">
            <div className="border-r border-fg/10 py-6 pr-8">
              <h2 className="text-5xl font-semibold tracking-[0.14em] text-fg">
                KOMAN
              </h2>

              <p className="mt-6 max-w-xs text-[15px] leading-8 text-fg/60">
                {t('productsAlkonLead')}
              </p>

              <ul className="mt-7 space-y-3">
                {ALKON_FEATURE_KEYS.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-3 text-[13px] text-fg/70"
                  >
                    <span className="text-cyan-300/80">✓</span>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/koman"
                className="mt-8 inline-flex items-center gap-8 border border-fg/25 px-5 py-3 text-[11px] font-semibold tracking-[0.08em] text-fg/85 transition hover:border-fg/60 hover:bg-fg/5"
              >
                {t('productsExploreAlkon')}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="relative min-h-[390px] overflow-hidden bg-bg/20">
              <img
                src="/products/alkon-visual.png"
                alt="KOMAN platform visualization"
                className="absolute inset-0 h-full w-full scale-105 object-cover object-[50%_34%] opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-bg/32 via-transparent to-bg/12" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/14 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8">
            <div className="grid gap-5 md:grid-cols-3">
              {OTHER_PRODUCTS.map((product) => (
                <Link
                  key={product.name}
                  to={product.href}
                  className="group relative min-h-[135px] overflow-hidden border border-fg/10 bg-panel/20 p-5 transition hover:border-fg/30 hover:bg-panel/35"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} visualization`}
                    className="absolute left-4 top-1/2 h-[88px] w-[112px] -translate-y-1/2 object-contain opacity-45 transition group-hover:opacity-65"
                  />

                  <div className="relative ml-[118px]">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-fg">
                      {product.name}
                    </h3>

                    <p className="mt-3 max-w-[210px] text-sm leading-6 text-fg/55">
                      {t(product.description)}
                    </p>
                  </div>

                  <div className="absolute bottom-5 right-5 text-fg/35 transition group-hover:translate-x-1 group-hover:text-fg">
                    →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}