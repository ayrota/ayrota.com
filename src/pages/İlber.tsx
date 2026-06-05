import { Link } from 'react-router-dom';

import { Section } from '../components/Section';
import { Footer } from '../components/footer';
import { IlberCadenceMock } from '../components/IlberMock';
import { CapabilityCard } from '../components/CapabilityCard';
import { useLanguage } from '../lib/LanguageContext';

export default function Ilber() {
  const { t } = useLanguage();

  return (
    <main className="relative z-10 pt-28">
      <Section id="ilber-hero" width="wide" className="py-20">
        <div className="max-w-4xl">
          <div className="text-xs tracking-widest text-muted uppercase">
            {t('ilberHeroKicker')}
          </div>

          <h1 className="mt-5 text-5xl font-medium tracking-tight text-fg md:text-7xl">
            {t('ilberHeroTitle')}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            {t('ilberHeroLead')}
          </p>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            {t('ilberHeroText')}
          </p>
        </div>
      </Section>

      <Section
        id="ilber-problem"
        width="wide"
        className="py-14 border-t border-line/20"
      >
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <div className="text-xs tracking-widest text-muted uppercase">
              {t('ilberTrustKicker')}
            </div>

            <h2 className="mt-4 text-2xl font-medium leading-tight text-fg md:text-3xl">
              {t('ilberTrustTitle')}
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-muted">
            <p>{t('ilberTrustText1')}</p>
            <p>{t('ilberTrustText2')}</p>
          </div>
        </div>
      </Section>

      <Section
  id="ilber-modules"
  width="wide"
  className="py-16 border-t border-line/20"
>
  <div className="text-xs tracking-widest text-muted uppercase">
    {t('ilberModulesKicker')}
  </div>

  <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
    {t('ilberModulesTitle')}
  </h2>

  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
    {t('ilberModulesIntro')}
  </p>

  <div className="mt-10 grid gap-5 lg:grid-cols-2">
    {[
      {
        title: t('ilberDataLayerTitle'),
        text: t('ilberDataLayerText'),
        items: [
          t('ilberQcTitle'),
          t('ilberRepairTitle'),
          t('ilberSensorDomainTitle'),
          t('ilberSensorHealthTitle'),
          t('ilberGnssTitle'),
          t('ilberSpectralTitle'),
        ],
      },
      {
        title: t('ilberMotionLayerTitle'),
        text: t('ilberMotionLayerText'),
        items: [
          t('ilberPhysicalTitle'),
          t('ilberConsistencyTitle'),
          t('ilberCadenceTitle'),
          t('ilberWindowTitle'),
          t('ilberMotionTitle'),
        ],
      },
      {
        title: t('ilberFlightLayerTitle'),
        text: t('ilberFlightLayerText'),
        items: [
          t('ilberFlightPeriodicityTitle'),
          t('ilberFlightStateTitle'),
          t('ilberFlightStabilityTitle'),
          t('ilberTrajectoryTitle'),
        ],
      },
      {
        title: t('ilberReportLayerTitle'),
        text: t('ilberReportLayerText'),
        items: [
          t('ilberSessionReportTitle'),
          t('ilberQualitySummary'),
        ],
      },
    ].map((group) => (
      <div
        key={group.title}
        className="rounded-2xl border border-line/60 bg-panel/40 p-7 backdrop-blur shadow-soft"
      >
    

        <h3 className="mt-3 text-xl font-medium text-fg">
          {group.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {group.text}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line/60 bg-bg/40 px-3 py-1.5 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</Section>

      <Section
        id="sample-report"
        width="wide"
        className="py-16 border-t border-line/20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <p className="text-xs tracking-widest text-muted uppercase">
              {t('ilberSampleKicker')}
            </p>

            <h2 className="mt-3 text-3xl font-medium text-fg">
              {t('ilberSampleTitle')}
            </h2>

            <p className="mt-4 text-sm text-muted leading-relaxed">
              {t('ilberSampleText')}
            </p>
          </div>

          <IlberCadenceMock />
        </div>
      </Section>

      <Section
        id="ilber-cta"
        width="wide"
        className="py-16 border-t border-line/20 bg-panel/10"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-fg">
            {t('ilberCtaTitle')}
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted max-w-2xl mx-auto">
            {t('ilberCtaText')}
          </p>

          <div className="mt-8">
            <Link
              to="/#contact"
              className="inline-flex rounded-md border border-line bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-95"
            >
              {t('ilberCtaButton')}
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}