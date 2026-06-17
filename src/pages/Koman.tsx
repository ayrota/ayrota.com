import { Link } from 'react-router-dom';

import { Footer } from '../components/footer';
import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const KOMAN_SCOPE_GROUPS = [
  {
    title: 'komanNavigationGroupTitle',
    items: [
      'komanCapabilityPositioning',
      'komanCapabilityHeading',
      'komanCapabilityGnssDenied',
    ],
  },
  {
    title: 'komanAutonomyGroupTitle',
    items: [
      'komanCapabilityAutonomy',
      'komanCapabilityWaypoint',
      'komanCapabilityRealtime',
    ],
  },
  {
    title: 'komanGroundControlGroupTitle',
    items: [
      'komanCapabilityGroundControl',
      'komanCapabilityMission',
    ],
  },
];

const WORKFLOW_ITEMS = [
  {
    number: '01',
    title: 'komanWorkflowSenseTitle',
    text: 'komanWorkflowSenseText',
  },
  {
    number: '02',
    title: 'komanWorkflowEstimateTitle',
    text: 'komanWorkflowEstimateText',
  },
  {
    number: '03',
    title: 'komanWorkflowNavigateTitle',
    text: 'komanWorkflowNavigateText',
  },
  {
    number: '04',
    title: 'komanWorkflowMonitorTitle',
    text: 'komanWorkflowMonitorText',
  },
];

export default function Koman() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 bg-bg text-fg">
      <section className="relative overflow-hidden bg-bg pt-28 pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(30,90,255,0.18),transparent_42%)]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div>
                <Link
                  to="/#products"
                  className="text-[11px] font-semibold tracking-[0.18em] text-fg/40 transition hover:text-fg"
                >
                  ← AYROTA
                </Link>

                <div className="mt-12 text-[22px] font-semibold tracking-[0.24em] text-blue-400">
                  KOMAN
                </div>

                <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-fg md:text-7xl">
                  {t('komanHeroStatement')}
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-fg/58">
                  {t('komanHeroText')}
                </p>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[13px] text-fg/60">
                  <span>{t('komanMiniImu')}</span>
                  <span>{t('komanMiniGnss')}</span>
                  <span>{t('komanMiniAutonomy')}</span>
                  <span>{t('komanMiniRealtime')}</span>
                </div>
              </div>

              <div className="relative overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="/products/koman-report.png"
                  alt="KOMAN autonomous drone and ground control interface"
                  className="w-full object-cover opacity-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg/15 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="koman-scope"
        className="relative overflow-hidden border-t border-fg/10 bg-bg py-20"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-14 md:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.24em] text-blue-400">
                  {t('komanScopeTitle')}
                </div>

                <h2 className="mt-6 max-w-[620px] text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-fg md:text-6xl">
                  {t('komanScopeMainTitle')}
                </h2>

                <p className="mt-8 max-w-lg text-base leading-8 text-fg/58">
                  {t('komanScopeText')}
                </p>
              </div>

              <div className="space-y-5">
                {KOMAN_SCOPE_GROUPS.map((group) => (
                  <div
                    key={group.title}
                    className="border border-fg/10 bg-panel/10 p-7 transition hover:bg-panel/20 md:p-8"
                  >
                    <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-start">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-fg">
                        {t(group.title)}
                      </h3>

                      <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="border-l border-blue-500/70 pl-5 text-sm leading-7 text-fg/68"
                          >
                            {t(item)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-fg/10 bg-bg py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="text-[11px] font-semibold tracking-[0.24em] text-blue-400">
              {t('komanHowItWorks')}
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-4">
              {WORKFLOW_ITEMS.map((item) => (
                <div key={item.number}>
                  <div className="text-2xl font-semibold text-blue-500">
                    {item.number}
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-fg">
                    {t(item.title)}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-fg/55">
                    {t(item.text)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
            <Link
            to="/#contact"
            className="mt-10 mx-auto flex w-fit items-center justify-center gap-8 bg-blue-600 px-10 py-4 text-[12px] font-semibold tracking-[0.1em] text-white transition hover:bg-blue-500"
          >
            {t('komanCtaButton')}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

  

      <Footer />
    </main>
  );
}