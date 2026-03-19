import { Section } from '../components/Section';
import { useLanguage } from '../lib/LanguageContext';

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <Section id="capabilities" className="pt-36 md:pt-44">
      <h2 className="text-3xl md:text-5xl leading-[1.08] text-fg/95 font-medium">
        {t('capabilitiesTitle')}
      </h2>

      <div className="mt-16 grid gap-16 md:grid-cols-[1.2fr_0.8fr]">

        <div>
          <h3 className="text-lg text-fg/95">
            {t('capabilityDriftTitle')}
          </h3>
          <p className="mt-4 text-[15px] text-muted/90 leading-[1.7]">
            {t('capabilityDriftText')}
          </p>
        </div>

        <div>
          <h3 className="text-lg text-fg/95">
            {t('capabilityRealtimeTitle')}
          </h3>
          <p className="mt-4 text-[15px] text-muted/90 leading-[1.7]">
            {t('capabilityRealtimeText')}
          </p>
        </div>

      </div>

      <p className="mt-8 text-[15px] text-muted/90 leading-[1.7] max-w-2xl">
        {t('capabilitiesIntro')}
      </p>
    </Section>
  );
}