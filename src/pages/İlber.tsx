import { Link } from 'react-router-dom';

import { Footer } from '../components/footer';
import { IlberCadenceMock } from '../components/IlberMock';
import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const ILBER_FEATURE_KEYS = [
  'ilberFeatureDataDropout',
  'ilberFeatureTimestamp',
  'ilberFeatureSensorHealth',
  'ilberFeatureSessionReport',
];

const VALUE_CARDS = [
  {
    number: '01',
    title: 'ilberCheckTitle',
    text: 'ilberCheckText',
  },
  {
    number: '02',
    title: 'ilberAnalyzeTitle',
    text: 'ilberAnalyzeText',
  },
  {
    number: '03',
    title: 'ilberReportTitle',
    text: 'ilberReportText',
  },
];

const MODULE_GROUPS = [
  {
    title: 'ilberDataLayerTitle',
    items: [
      'ilberQcTitle',
      'ilberRepairTitle',
      'ilberSensorDomainTitle',
      'ilberSensorHealthTitle',
      'ilberGnssTitle',
      'ilberSpectralTitle',
    ],
  },
  {
    title: 'ilberMotionLayerTitle',
    items: [
      'ilberPhysicalTitle',
      'ilberConsistencyTitle',
      'ilberCadenceTitle',
      'ilberWindowTitle',
      'ilberMotionTitle',
    ],
  },
  {
    title: 'ilberFlightLayerTitle',
    items: [
      'ilberFlightPeriodicityTitle',
      'ilberFlightStateTitle',
      'ilberFlightStabilityTitle',
      'ilberTrajectoryTitle',
    ],
  },
  {
    title: 'ilberReportLayerTitle',
    items: ['ilberSessionReportTitle', 'ilberQualitySummary'],
  },
];

export default function Ilber() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 bg-bg text-fg">
      <section
        id="ilber-hero"
        className="relative overflow-hidden border-b border-fg/10 bg-bg pt-24 pb-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(80,145,190,0.14),transparent_42%)]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="grid min-h-[460px] border-b border-fg/10 md:grid-cols-[0.85fr_1.65fr]">
              <div className="border-r border-fg/10 py-8 pr-8">
                <Link
                  to="/#products"
                  className="text-[11px] font-semibold tracking-[0.18em] text-fg/45 transition hover:text-fg"
                >
                  ← AYROTA
                </Link>

                <div className="mt-10 text-[10px] font-semibold tracking-[0.22em] text-fg/45">
                  {t('ilberHeroKicker')}
                </div>

                <h1 className="mt-4 text-6xl font-semibold leading-none tracking-[-0.06em] text-fg md:text-[104px]">
                  {t('ilberHeroTitle')}
                </h1>

                <p className="mt-6 max-w-sm text-sm leading-7 text-fg/60">
                  {t('ilberHeroLead')}
                </p>

                <ul className="mt-7 space-y-3">
                  {ILBER_FEATURE_KEYS.map((key) => (
                    <li
                      key={key}
                      className="flex items-center gap-3 text-[13px] text-fg/70"
                    >
                      <span className="text-cyan-300/80">✓</span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <div className="relative min-h-[420px] bg-bg/20">
                <img
                  src="/products/ilber.png"
                  alt="İlber platform visualization"
                  className="absolute inset-0 h-full w-full object-cover opacity-85"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-bg/45 via-transparent to-bg/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/35 via-transparent to-bg/15" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-fg/10 bg-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="border-b border-fg/10 pb-10">
              <div className="max-w-4xl">
                <div className="text-[10px] font-semibold tracking-[0.22em] text-fg/45">
                  {t('ilberTrustKicker')}
                </div>

                <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-fg md:text-6xl">
                  {t('ilberMainStatement')}
                </h2>

                <p className="mt-8 max-w-3xl text-base leading-8 text-fg/60">
                  {t('ilberMainStatementText')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 grid gap-5 border-b border-fg/10 pb-8 md:grid-cols-3">
              {VALUE_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="min-h-[180px] border border-fg/10 bg-panel/20 p-6 transition hover:border-fg/25 hover:bg-panel/30"
                >
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-fg/35">
                    {card.number}
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-fg">
                    {t(card.title)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-fg/55">
                    {t(card.text)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="ilber-modules"
        className="relative overflow-hidden border-b border-fg/10 bg-bg py-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(80,145,190,0.10),transparent_42%)]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="text-[10px] font-semibold tracking-[0.22em] text-fg/45">
                {t('ilberModulesKicker')}
              </div>

              <h2 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-fg md:text-6xl">
                {t('ilberModulesTitle')}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-fg/60">
                {t('ilberModulesIntro')}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {MODULE_GROUPS.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08}>
                <div className="min-h-[210px] border border-fg/10 bg-panel/20 p-7 backdrop-blur transition hover:border-fg/25 hover:bg-panel/30">
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-fg/35">
                    0{index + 1}
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-fg">
                    {t(group.title)}
                  </h3>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="border border-fg/10 bg-bg/40 px-3 py-1.5 text-xs text-fg/55"
                      >
                        {t(item)}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sample-report"
        className="relative overflow-hidden border-b border-fg/10 bg-bg py-12"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="text-[10px] font-semibold tracking-[0.22em] text-fg/45">
                {t('ilberSampleKicker')}
              </div>

              <h2 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-fg md:text-6xl">
                {t('ilberSampleTitle')}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-fg/60">
                {t('ilberSampleText')}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border border-fg/10 bg-panel/20 p-4 backdrop-blur md:p-6">
              <IlberCadenceMock />
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="ilber-cta"
        className="relative overflow-hidden border-b border-fg/10 bg-bg py-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(80,145,190,0.12),transparent_44%)]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-fg md:text-6xl">
                  {t('ilberCtaTitle')}
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-fg/60">
                  {t('ilberCtaText')}
                </p>
              </div>

              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-6 border border-fg/25 px-6 py-3 text-[12px] font-semibold tracking-[0.1em] text-fg/85 transition hover:border-fg/60 hover:bg-fg/5"
              >
                {t('ilberCtaButton')}
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