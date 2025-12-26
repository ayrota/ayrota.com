import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { useLanguage } from '../lib/LanguageContext';

export function Provisioning() {
  const { t } = useLanguage();

  return (
    <Section id="provisioning" width="wide">
      <div className="text-xs tracking-widest text-muted">
        {t('sectionProvisioning')}
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        {t('provisioningTitle')}
      </h2>

      <p className="mt-4 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
        {t('provisioningIntro')}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-sm font-medium text-fg">
            {t('provisioningEmbeddedTitle')}
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {t('provisioningEmbeddedText')}
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-fg">
            {t('provisioningSdkTitle')}
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {t('provisioningSdkText')}
          </p>
        </Card>
      </div>

      <p className="mt-10 text-sm text-muted max-w-3xl">
        {t('provisioningCloudNote')}
      </p>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}