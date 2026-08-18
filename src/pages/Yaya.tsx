import { Link } from 'react-router-dom';

import { Footer } from '../components/footer';
import { Reveal } from '../components/RevealSection';
import type { TranslationKey } from '../i18n/translations';
import { useLanguage } from '../lib/LanguageContext';

const YAYA_SCOPE_GROUPS: {
  title: TranslationKey;
  items: TranslationKey[];
}[] = [
  {
    title: 'yayaNavigationGroupTitle',
    items: [
      'yayaCapabilityPdr',
      'yayaCapabilityRelativeMovement',
      'yayaCapabilityIndoorNavigation',
    ],
  },
  {
    title: 'yayaMotionGroupTitle',
    items: [
      'yayaCapabilityStepDetection',
      'yayaCapabilityMovementPatterns',
      'yayaCapabilityMovementAnalytics',
    ],
  },
  {
    title: 'yayaIntegrationGroupTitle',
    items: ['yayaCapabilityMobile', 'yayaCapabilityMapContext', 'yayaCapabilityApplicationOutput'],
  },
];

const WORKFLOW_ITEMS: {
  number: string;
  title: TranslationKey;
  text: TranslationKey;
}[] = [
  {
    number: '01',
    title: 'yayaWorkflowSenseTitle',
    text: 'yayaWorkflowSenseText',
  },
  {
    number: '02',
    title: 'yayaWorkflowEstimateTitle',
    text: 'yayaWorkflowEstimateText',
  },
  {
    number: '03',
    title: 'yayaWorkflowContextTitle',
    text: 'yayaWorkflowContextText',
  },
  {
    number: '04',
    title: 'yayaWorkflowInsightTitle',
    text: 'yayaWorkflowInsightText',
  },
];

export default function Yaya() {
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
                  YAYA
                </div>

                <div className="mt-4 text-[11px] font-medium tracking-[0.2em] text-cyan-300/70">
                  {t('yayaProductCategory')}
                </div>

                <h1 className="mt-6 max-w-[680px] text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-fg md:text-[62px]">
                  {t('yayaHeroStatement')}
                </h1>

                <p className="mt-7 max-w-[610px] text-base leading-8 text-fg/58">
                  {t('yayaHeroText')}
                </p>

                <div className="mt-10 flex max-w-[650px] flex-wrap gap-x-8 gap-y-4 text-[12px] font-medium tracking-[0.04em] text-fg/52">
                  <span>{t('yayaMiniPdr')}</span>
                  <span>{t('yayaMiniIndoor')}</span>
                  <span>{t('yayaMiniMovement')}</span>
                  <span>{t('yayaMiniMobile')}</span>
                </div>
              </div>

              <div className="relative min-h-[430px] overflow-hidden border border-fg/10 bg-panel/10 shadow-2xl shadow-black/30 md:min-h-[520px]">
                <img
                  src="/products/yaya.png"
                  alt="Yaya indoor movement and navigation"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg/20 via-transparent to-bg/5" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="yaya-capabilities"
        className="relative overflow-hidden border-t border-fg/10 bg-bg py-20 md:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.24em] text-blue-400">
                  {t('yayaScopeTitle')}
                </div>

                <h2 className="mt-6 max-w-[620px] text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-fg md:text-[56px]">
                  {t('yayaScopeMainTitle')}
                </h2>

                <p className="mt-8 max-w-lg text-base leading-8 text-fg/58">{t('yayaScopeText')}</p>
              </div>

              <div className="space-y-5">
                {YAYA_SCOPE_GROUPS.map((group) => (
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
              {t('yayaHowItWorks')}
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-fg md:text-[52px]">
              {t('yayaHowItWorksTitle')}
            </h2>

            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {WORKFLOW_ITEMS.map((item) => (
                <div key={item.number} className="border-t border-fg/10 pt-7">
                  <div className="text-2xl font-semibold text-blue-500">{item.number}</div>

                  <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.04em] text-fg">
                    {t(item.title)}
                  </h3>

                  <p className="mt-5 max-w-xs text-sm leading-7 text-fg/55">{t(item.text)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="relative overflow-hidden border-t border-fg/10 bg-bg py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.24em] text-blue-400">
                  {t('yayaApplicationsKicker')}
                </div>

                <h2 className="mt-6 max-w-[580px] text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-fg md:text-[52px]">
                  {t('yayaApplicationsTitle')}
                </h2>
              </div>

              <div className="grid gap-px border border-fg/10 bg-fg/10 md:grid-cols-2">
                <ApplicationItem
                  number="01"
                  title={t('yayaApplicationHospital')}
                  text={t('yayaApplicationHospitalText')}
                />

                <ApplicationItem
                  number="02"
                  title={t('yayaApplicationDepot')}
                  text={t('yayaApplicationDepotText')}
                />
              </div>
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
                  YAYA
                </div>

                <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-fg md:text-[42px]">
                  {t('yayaFinalCtaTitle')}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-fg/55">
                  {t('yayaFinalCtaText')}
                </p>
              </div>

              <Link
                to="/#contact"
                className="flex w-fit flex-shrink-0 items-center justify-center gap-8 bg-blue-600 px-10 py-4 text-[12px] font-semibold tracking-[0.1em] text-white transition hover:bg-blue-500"
              >
                {t('yayaCtaButton')}
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

function ApplicationItem({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="min-h-[260px] bg-bg p-7">
      <div className="text-sm font-semibold text-blue-500">{number}</div>

      <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em] text-fg">{title}</h3>

      <p className="mt-5 text-sm leading-7 text-fg/55">{text}</p>
    </div>
  );
}
