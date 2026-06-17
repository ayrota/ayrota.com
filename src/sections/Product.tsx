import { Link } from 'react-router-dom';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const KOMAN_FEATURE_KEYS = [
  'productsKomanFeatureImu',
  'productsKomanFeatureGnss',
  'productsKomanFeatureDynamic',
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
      className="relative overflow-hidden bg-bg py-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(56,189,248,0.035),transparent_48%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,10,18,0.20),rgba(5,10,18,0.48))]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-9 bg-cyan-300/85" />

            <span className="text-[11px] font-medium tracking-[0.24em] text-fg/70">
              {t('productsKicker')}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.66fr_1.74fr] lg:items-center">
            <div className="max-w-md">
              <h2 className="text-5xl font-semibold tracking-[0.16em] text-fg md:text-[58px]">
                KOMAN
              </h2>

              <p className="mt-8 max-w-sm text-[17px] leading-9 text-fg/66">
                {t('productsKomanLead')}
              </p>

              <ul className="mt-10 space-y-4">
                {KOMAN_FEATURE_KEYS.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-4 text-[15px] text-fg/75"
                  >
                    <span className="text-cyan-300/90">✓</span>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/koman"
                className="mt-10 inline-flex items-center gap-10 border border-fg/30 px-7 py-4 text-[12px] font-semibold tracking-[0.12em] text-fg/90 transition hover:border-cyan-300/60 hover:bg-cyan-300/5 hover:text-fg"
              >
                {t('productsExploreKoman')}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="relative min-h-[430px] overflow-hidden rounded-md border border-fg/10 shadow-[0_0_40px_rgba(34,211,238,0.04)]">
              <img
                src="/products/koman-visual.png"
                alt="KOMAN platform visualization"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-bg/18 via-transparent to-bg/5" />

              <div className="absolute inset-0 bg-gradient-to-t from-bg/10 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {OTHER_PRODUCTS.map((product) => (
              <Link
                key={product.name}
                to={product.href}
                className="group relative min-h-[165px] overflow-hidden rounded-md border border-fg/10 p-8 transition hover:border-cyan-300/35"
              >
                <div className="flex h-full items-center gap-8">
                  <div className="h-[120px] w-[120px] flex-shrink-0 overflow-hidden rounded-sm border border-fg/10">
                    <img
                      src={product.image}
                      alt={`${product.name} visualization`}
                      className="h-full w-full object-cover opacity-70 transition group-hover:opacity-90"
                    />
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] text-fg">
                      {product.name}
                    </h3>

                    <p className="mt-4 max-w-[230px] text-[16px] leading-7 text-fg/58">
                      {t(product.description)}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 text-2xl text-fg/40 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                  →
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}