import { Link } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-bg pt-20">
      {/* Background atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-[360px] w-[360px] rounded-full bg-blue-600/[0.06] blur-[130px]" />

        <div className="absolute right-[10%] top-[18%] h-[480px] w-[480px] rounded-full bg-cyan-400/[0.035] blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1500px] items-center px-6 py-8 md:px-10">
        <div className="grid w-full gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center xl:gap-14">
          {/* LEFT */}
          <Reveal className="relative z-20">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-cyan-300/75" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200/70">
                {t('homeHeroKicker')}
              </span>
            </div>

            <h1 className="mt-7 max-w-[700px] text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-fg sm:text-[52px] md:text-[60px] xl:text-[68px]">
              {t('homeHeroTitle')}
            </h1>

            <p className="mt-8 max-w-[610px] text-[16px] leading-8 text-fg/58 md:text-[17px]">
              {t('homeHeroLead')}
            </p>

            <Link
              to="/#applications"
              className="group mt-10 inline-flex min-h-[50px] items-center gap-10 bg-blue-600 px-7 text-[12px] font-semibold tracking-[0.12em] text-white transition duration-300 hover:bg-blue-500 hover:text-white"
            >
              {t('homeHeroPrimaryCta')}

              <ArrowDownRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
          </Reveal>

          {/* RIGHT VISUAL */}
          <Reveal
            delay={0.12}
            className="relative h-[420px] sm:h-[480px] lg:h-[min(58vh,560px)]"
          >
            <div
              aria-hidden
              className="absolute -left-5 top-[18%] hidden h-px w-16 bg-gradient-to-r from-transparent to-cyan-300/30 lg:block"
            />

            <div
              aria-hidden
              className="absolute -left-5 top-[18%] hidden h-16 w-px bg-gradient-to-b from-cyan-300/30 to-transparent lg:block"
            />

            <div className="relative h-full overflow-hidden bg-panel/5">
              <img
                src="/hero.png"
                alt="Ayrota inertial navigation and motion intelligence"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  objectPosition: '58% 50%',
                }}
              />

              {/* Image overlays */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,18,0.5)_0%,rgba(5,10,18,0.12)_40%,rgba(5,10,18,0.02)_100%)]" />

              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-bg/8" />

              {/* Subtle grid */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(125,211,252,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.045)_1px,transparent_1px)] bg-[size:78px_78px]"
              />

              {/* Technical corners */}
              <div
                aria-hidden
                className="absolute left-5 top-5 h-7 w-7 border-l border-t border-cyan-300/35"
              />

              <div
                aria-hidden
                className="absolute right-5 top-5 h-7 w-7 border-r border-t border-cyan-300/35"
              />

              <div
                aria-hidden
                className="absolute bottom-5 left-5 h-7 w-7 border-b border-l border-cyan-300/35"
              />

              <div
                aria-hidden
                className="absolute bottom-5 right-5 h-7 w-7 border-b border-r border-cyan-300/35"
              />

              {/* Status */}
              <div className="absolute left-6 top-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />

                <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-fg/45">
                  {t('homeHeroVisualStatus')}
                </span>
              </div>

              {/* Info card */}
              <div className="absolute bottom-6 right-6 w-[270px] bg-bg/82 p-5 backdrop-blur-xl">
                <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-300/65">
                  {t('homeHeroVisualKicker')}
                </div>

                <div className="mt-3 text-[14px] font-medium leading-6 text-fg/85">
                  {t('homeHeroVisualText')}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fg/12 to-transparent"
      />
    </section>
  );
}
