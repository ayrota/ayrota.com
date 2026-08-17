import { Link } from 'react-router-dom';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const PRODUCTS = [
  {
    name: 'ALKON',
    eyebrow: 'productsAlkonEyebrow',
    description: 'productsAlkonDescription',
    image: '/products/alkon.png',
    href: '/alkon',
  },
  {
    name: 'YÖRÜK',
    eyebrow: 'productsYorukEyebrow',
    description: 'productsYorukDescription',
    image: '/products/yoruk.png',
    href: '/yoruk',
  },
  {
    name: 'YAYA',
    eyebrow: 'productsYayaEyebrow',
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
      className="relative overflow-hidden bg-bg py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(56,189,248,0.035),transparent_48%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,10,18,0.12),rgba(5,10,18,0.42))]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <div className="max-w-[760px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-cyan-300/85" />

              <span className="text-[11px] font-medium tracking-[0.24em] text-fg/70">
                {t('productsKicker')}
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-fg md:text-[54px]">
              {t('productsTitle')}
            </h2>

            <p className="mt-6 max-w-2xl text-[16px] leading-8 text-fg/58">
              {t('productsLead')}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
            {PRODUCTS.map((product, index) => (
              <Link
                key={product.name}
                to={product.href}
                className="group relative flex h-full flex-col overflow-hidden border border-fg/10 bg-panel/[0.08] transition duration-300 hover:border-cyan-300/35 hover:bg-panel/[0.14]"
              >
                <div className="relative h-[280px] overflow-hidden border-b border-fg/10 bg-bg/40">
                  <img
                    src={product.image}
                    alt={`${product.name} visualization`}
                    className="h-full w-full object-cover object-center opacity-90 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center border border-cyan-300/45 bg-bg/70 text-[11px] font-semibold text-cyan-200 backdrop-blur">
                    0{index + 1}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div>
                    <div className="min-h-[32px] text-[10px] font-medium leading-5 tracking-[0.18em] text-cyan-300/70">
                      {t(product.eyebrow)}
                    </div>

                    <h3 className="mt-4 text-[34px] font-semibold tracking-[-0.045em] text-fg">
                      {product.name}
                    </h3>

                    <p className="mt-5 text-[15px] leading-7 text-fg/58">
                      {t(product.description)}
                    </p>
                  </div>

                  <div className="mt-auto pt-10">
                    <div className="flex items-center justify-between border-t border-fg/10 pt-6">
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-fg/50 transition group-hover:text-cyan-300">
                        {t('productsExplore')}
                      </span>

                      <span
                        aria-hidden
                        className="text-xl text-fg/35 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}