import { Link } from 'react-router-dom';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const ALKON_FEATURE_KEYS = [
  'productsAlkonFeatureImu',
  'productsAlkonFeatureGnss',
  'productsAlkonFeatureDynamic',
  'productsAlkonFeatureRealtime',
];

const OTHER_PRODUCTS = [
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
  {
    name: 'YAYA',
    description: 'productsYayaDescription',
    image: '/products/yaya.png',
    href: '/yaya',
  },
];

export function Products() {
  const { t } = useLanguage();

  return (
    <section
      id="products"
      className="relative overflow-hidden border-t border-fg/10 bg-bg pt-5 pb-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(80,145,190,0.10),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <div className="grid min-h-[460px] border-b border-fg/10 md:grid-cols-[0.85fr_1.65fr]">
            <div className="border-r border-fg/10 py-8 pr-8">
              <div className="text-[10px] font-semibold tracking-[0.22em] text-fg/45">
                {t('productsFlagshipKicker')}
              </div>

              <h2 className="mt-4 text-5xl font-semibold tracking-[0.18em] text-fg">
                ALKON
              </h2>

              <p className="mt-5 max-w-xs text-sm leading-6 text-fg/60">
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
                to="/alkon"
                className="mt-8 inline-flex items-center gap-8 border border-fg/25 px-5 py-3 text-[11px] font-semibold tracking-[0.08em] text-fg/85 transition hover:border-fg/60 hover:bg-fg/5"
              >
                {t('productsExploreAlkon')}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="relative min-h-[420px] bg-bg/20">
              <img
                src="/products/alkon-visual.png"
                alt="ALKON platform visualization"
                className="absolute inset-0 h-full w-full object-cover opacity-85"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-bg/45 via-transparent to-bg/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/35 via-transparent to-bg/15" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 ">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-fg/55">
                {t('productsOtherTitle')}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {OTHER_PRODUCTS.map((product) => (
                <Link
                  key={product.name}
                  to={product.href}
                  className="group relative min-h-[150px] overflow-hidden border border-fg/10 bg-panel/20 p-6 transition hover:border-fg/30 hover:bg-panel/35"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} visualization`}
                    className="absolute left-4 top-1/2 h-[100px] w-[120px] -translate-y-1/2 object-contain opacity-45 transition group-hover:opacity-65"
                  />

                  <div className="relative ml-[120px]">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-fg">
                      {product.name}
                    </h3>

                    <p className="mt-3 max-w-[190px] text-sm leading-6 text-fg/55">
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