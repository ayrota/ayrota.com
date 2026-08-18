import { Link } from 'react-router-dom';

import { Footer } from '../components/footer';
import { Reveal } from '../components/RevealSection';
import type { TranslationKey } from '../i18n/translations';
import { useLanguage } from '../lib/LanguageContext';

const ANALYSIS_SCOPE_GROUPS: {
  title: TranslationKey;
  items: TranslationKey[];
}[] = [
  {
    title: 'ilberIntegrityGroupTitle',
    items: ['ilberRepairTitle', 'ilberConsistencyTitle', 'ilberCadenceTitle'],
  },
  {
    title: 'ilberSensorGroupTitle',
    items: ['ilberSensorDomainTitle', 'ilberSensorHealthTitle', 'ilberPhysicalTitle'],
  },
  {
    title: 'ilberNavigationGroupTitle',
    items: ['ilberGnssTitle', 'ilberSpectralTitle', 'ilberMotionTitle'],
  },
];

const WORKFLOW_ITEMS = [
  {
    number: '01',
    title: 'ilberWorkflowSendTitle',
    text: 'ilberWorkflowSendText',
  },
  {
    number: '02',
    title: 'ilberWorkflowAnalyzeTitle',
    text: 'ilberWorkflowAnalyzeText',
  },
  {
    number: '03',
    title: 'ilberWorkflowReportTitle',
    text: 'ilberWorkflowReportText',
  },
  {
    number: '04',
    title: 'ilberWorkflowPreventTitle',
    text: 'ilberWorkflowPreventText',
  },
];

export default function Ilber() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 bg-bg text-fg">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(30,90,255,0.18),transparent_42%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10">
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
                  İLBER
                </div>

                <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-7xl">
                  {t('ilberHeroStatement')}
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-fg/58">{t('ilberHeroText')}</p>

                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[13px] text-fg/60">
                  <span>{t('ilberMiniDetect')}</span>
                  <span>{t('ilberMiniRepair')}</span>
                  <span>{t('ilberMiniAnalyze')}</span>
                  <span>{t('ilberMiniValidate')}</span>
                </div>
              </div>

              <div className="relative overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="/products/ilber-report.png"
                  alt="İlber session report interface"
                  className="w-full object-cover opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/15 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ANALYSIS */}
      <section
        id="analysis-scope"
        className="relative flex min-h-screen items-center overflow-hidden border-t border-fg/10 bg-bg"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-14 md:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.24em] text-blue-400">
                  {t('ilberAnalysisScope')}
                </div>

                <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl">
                  {t('ilberAnalysisScopeTitle')}
                </h2>

                <p className="mt-8 max-w-lg text-base leading-8 text-fg/58">
                  {t('ilberAnalysisScopeText')}
                </p>
              </div>

              <div className="space-y-5">
                {ANALYSIS_SCOPE_GROUPS.map((group) => (
                  <div
                    key={group.title}
                    className="border border-fg/10 bg-panel/10 p-8 transition hover:bg-panel/20"
                  >
                    <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                          {t(group.title)}
                        </h3>

                        <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-fg/35">
                          {t('exampleAnalyses')}
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="border-l border-blue-500/70 pl-4 text-sm leading-7 text-fg/68"
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
      <section className="relative flex min-h-screen items-center overflow-hidden border-t border-fg/10 bg-bg">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="text-[11px] font-semibold tracking-[0.24em] text-blue-400">
              {t('ilberHowItWorks')}
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-4">
              {WORKFLOW_ITEMS.map((item) => (
                <div key={item.number}>
                  <div className="text-2xl font-semibold text-blue-500">{item.number}</div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">
                    {t(item.title)}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-fg/55">{t(item.text)}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Link
            to="/#contact"
            className="mx-auto mt-16 flex w-fit items-center justify-center gap-8 bg-blue-600 px-10 py-4 text-[12px] font-semibold tracking-[0.1em] text-white transition hover:bg-blue-500"
          >
            {t('ilberSendData')}
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
