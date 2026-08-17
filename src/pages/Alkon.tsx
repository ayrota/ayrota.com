import { Link } from 'react-router-dom';

import { Footer } from '../components/footer';
import { Reveal } from '../components/RevealSection';
import type { TranslationKey } from '../i18n/translations';
import { useLanguage } from '../lib/LanguageContext';

const ALKON_SCOPE_GROUPS: {
  title: TranslationKey;
  items: TranslationKey[];
}[] = [
  {
    title: 'alkonNavigationGroupTitle',
    items: [
      'alkonCapabilityInertialNavigation',
      'alkonCapabilityPositioning',
      'alkonCapabilityHeading',
    ],
  },
  {
    title: 'alkonMissionGroupTitle',
    items: [
      'alkonCapabilityMissionPlanning',
      'alkonCapabilityMissionExecution',
      'alkonCapabilityWaypoint',
    ],
  },
  {
    title: 'alkonIntegrationGroupTitle',
    items: [
      'alkonCapabilityAutonomousPlatforms',
      'alkonCapabilityGroundControl',
      'alkonCapabilityMavlink',
    ],
  },
];

const WORKFLOW_ITEMS: {
  number: string;
  title: TranslationKey;
  text: TranslationKey;
}[] = [
  {
    number: '01',
    title: 'alkonWorkflowSenseTitle',
    text: 'alkonWorkflowSenseText',
  },
  {
    number: '02',
    title: 'alkonWorkflowNavigateTitle',
    text: 'alkonWorkflowNavigateText',
  },
  {
    number: '03',
    title: 'alkonWorkflowPlanTitle',
    text: 'alkonWorkflowPlanText',
  },
  {
    number: '04',
    title: 'alkonWorkflowExecuteTitle',
    text: 'alkonWorkflowExecuteText',
  },
];

export default function Alkon() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 bg-bg text-fg">
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg pb-16 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(30,90,255,0.16),transparent_43%)]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div>
                <Link
                  to="/#products"
                  className="text-[11px] font-semibold tracking-[0.18em] text-fg/40 transition hover:text-fg"
                >
                  ← AYROTA
                </Link>

                <div className="mt-12 text-[22px] font-semibold tracking-[0.24em] text-blue-400">
                  ALKON
                </div>

                <div className="mt-4 text-[11px] font-medium tracking-[0.2em] text-cyan-300/70">
                  {t('alkonProductCategory')}
                </div>

                <h1 className="mt-6 max-w-[680px] text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-fg md:text-[62px]">
                  {t('alkonHeroStatement')}
                </h1>

                <p className="mt-7 max-w-[610px] text-base leading-8 text-fg/58">
                  {t('alkonHeroText')}
                </p>

                <div className="mt-10 flex max-w-[620px] flex-wrap gap-x-8 gap-y-4 text-[12px] font-medium tracking-[0.04em] text-fg/52">
                  <span>{t('alkonMiniNavigation')}</span>
                  <span>{t('alkonMiniMission')}</span>
                  <span>{t('alkonMiniAutonomy')}</span>
                  <span>{t('alkonMiniIntegration')}</span>
                </div>
              </div>

              <div className="relative min-h-[430px] overflow-hidden border border-fg/10 bg-panel/10 shadow-2xl shadow-black/30 md:min-h-[520px]">
                <img
                  src="/products/alkon.png"
                  alt="Alkon autonomous navigation and mission system"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg/20 via-transparent to-bg/5" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SYSTEM CAPABILITIES */}
      <section
        id="alkon-capabilities"
        className="relative overflow-hidden border-t border-fg/10 bg-bg py-20 md:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.24em] text-blue-400">
                  {t('alkonScopeTitle')}
                </div>

                <h2 className="mt-6 max-w-[620px] text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-fg md:text-[56px]">
                  {t('alkonScopeMainTitle')}
                </h2>

                <p className="mt-8 max-w-lg text-base leading-8 text-fg/58">
                  {t('alkonScopeText')}
                </p>
              </div>

              <div className="space-y-5">
                {ALKON_SCOPE_GROUPS.map((group) => (
                  <div
                    key={group.title}
                    className="border border-fg/10 bg-panel/10 p-7 transition hover:border-fg/20 hover:bg-panel/20 md:p-8"
                  >
                    <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-fg">
                        {t(group.title)}
                      </h3>

                      <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="border-l border-blue-500/65 pl-5 text-sm leading-7 text-fg/68"
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

      {/* WORKFLOW */}
      <section className="relative overflow-hidden border-t border-fg/10 bg-bg py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="text-[11px] font-semibold tracking-[0.24em] text-blue-400">
              {t('alkonHowItWorks')}
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-fg md:text-[52px]">
              {t('alkonHowItWorksTitle')}
            </h2>

            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {WORKFLOW_ITEMS.map((item) => (
                <div
                  key={item.number}
                  className="border-t border-fg/10 pt-7"
                >
                  <div className="text-2xl font-semibold text-blue-500">
                    {item.number}
                  </div>

                  <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.04em] text-fg">
                    {t(item.title)}
                  </h3>

                  <p className="mt-5 max-w-xs text-sm leading-7 text-fg/55">
                    {t(item.text)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-fg/10 bg-bg py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="flex flex-col gap-10 border-t border-fg/10 pt-12 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[11px] font-medium tracking-[0.2em] text-cyan-300/70">
                  ALKON
                </div>

                <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-fg md:text-[42px]">
                  {t('alkonFinalCtaTitle')}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-fg/55">
                  {t('alkonFinalCtaText')}
                </p>
              </div>

              <Link
                to="/#contact"
                className="flex w-fit flex-shrink-0 items-center justify-center gap-8 bg-blue-600 px-10 py-4 text-[12px] font-semibold tracking-[0.1em] text-white transition hover:bg-blue-500"
              >
                {t('alkonCtaButton')}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}