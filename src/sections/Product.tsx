import { Link } from 'react-router-dom';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

type Product = {
  name: string;
  eyebrow: string;
  description: string;
  applications: string[];
  image: string;
  href: string;
  index: string;
};

const PRODUCTS: Product[] = [
  {
    name: 'ALKON',
    eyebrow: 'productsAlkonEyebrow',
    description: 'productsAlkonDescription',
    applications: [
      'productsAlkonApplicationOne',
      'productsAlkonApplicationTwo',
    ],
    image: '/products/alkon.png',
    href: '/alkon',
    index: '01',
  },
  {
    name: 'YAYA',
    eyebrow: 'productsYayaEyebrow',
    description: 'productsYayaDescription',
    applications: [
      'productsYayaApplicationOne',
      'productsYayaApplicationTwo',
    ],
    image: '/products/yaya.png',
    href: '/yaya',
    index: '02',
  },
  {
    name: 'YÖRÜK',
    eyebrow: 'productsYorukEyebrow',
    description: 'productsYorukDescription',
    applications: [
      'productsYorukApplicationOne',
      'productsYorukApplicationTwo',
    ],
    image: '/products/yoruk.png',
    href: '/yoruk',
    index: '03',
  },
];

export function Products() {
  const { t } = useLanguage();

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#0c1721] py-20 text-white md:py-24"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[12%] top-[-180px] h-[520px] w-[620px] rounded-full bg-blue-500/[0.025] blur-[170px]" />

        <div className="absolute right-[8%] bottom-[-180px] h-[500px] w-[600px] rounded-full bg-cyan-300/[0.018] blur-[170px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10">
        {/* Header */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-200/35" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/60">
                  {t('productsKicker')}
                </span>
              </div>

              <h2 className="mt-5 max-w-[580px] text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                {t('productsTitle')}
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 text-white/50 lg:justify-self-end">
              {t('productsLead')}
            </p>
          </div>
        </Reveal>

        {/* Products */}
        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal
              key={product.name}
              delay={0.06 + index * 0.06}
              className="h-full"
            >
              <Link
                to={product.href}
                className="group relative flex h-full min-h-[510px] flex-col overflow-hidden border border-white/[0.07] bg-[#09131d] !text-white transition duration-300 hover:border-cyan-100/20 hover:!text-white"
              >
                {/* Visual */}
                <div className="relative h-[265px] shrink-0 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,20,0.02),rgba(5,12,20,0.12)_65%,rgba(9,19,29,0.92))]" />

                  <div className="absolute right-6 top-6 text-[9px] font-medium tracking-[0.22em] text-white/28">
                    {product.index}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-7 pb-7 md:px-8 md:pb-8">
                  <div className="relative z-10 -mt-2">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/48">
                      {t(product.eyebrow)}
                    </div>

                    <h3 className="mt-3 text-[30px] font-semibold tracking-[-0.045em] text-white">
                      {product.name}
                    </h3>
                  </div>

                  <p className="mt-5 min-h-[84px] text-[14px] leading-7 text-white/52">
                    {t(product.description)}
                  </p>

                  {/* Applications */}
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {product.applications.map((application) => (
                      <span
                        key={application}
                        className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/34"
                      >
                        {t(application)}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-7">
                    <div className="flex items-center justify-between border-t border-white/[0.07] pt-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/42 transition-colors duration-300 group-hover:text-white/72">
                        {t('productsDetail')}
                      </span>

                      <span
                        aria-hidden
                        className="text-[16px] text-cyan-100/38 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-100/70"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}