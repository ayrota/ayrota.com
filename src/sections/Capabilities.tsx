import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { useLanguage } from '../lib/LanguageContext';

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <Section id="capabilities" width="wide">
      <div className="text-xs tracking-widest text-muted">
        {t('sectionCapabilities')}
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        {t('capabilitiesTitle')}
      </h2>

      <p className="mt-4 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
        {t('capabilitiesIntro')}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-sm font-medium text-fg">
            {t('capabilityDriftTitle')}
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {t('capabilityDriftText')}
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-fg">
            {t('capabilityRealtimeTitle')}
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {t('capabilityRealtimeText')}
          </p>
        </Card>
      </div>

      <p className="mt-10 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
        {t('capabilitiesOutro')}
      </p>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}