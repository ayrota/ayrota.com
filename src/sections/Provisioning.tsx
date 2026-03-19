import { Section } from '../components/Section';
import { useLanguage } from '../lib/LanguageContext';

export function Provisioning() {
  const { t } = useLanguage();

  return (
    <Section id="provisioning">
      <h2 className="text-3xl md:text-5xl text-fg/95 font-medium leading-[1.08]">
        {t('provisioningTitle')}
      </h2>


      <p className="mt-8 text-[15px] text-muted/90 leading-[1.7] max-w-2xl">
        {t('provisioningIntro')}
      </p>

      <div className="mt-16 grid gap-16 md:grid-cols-[1.2fr_0.8fr]">

        <div>
          <h3 className="text-lg text-fg/95">
            {t('provisioningEmbeddedTitle')}
          </h3>
          <p className="mt-4 text-[15px] text-muted/90 leading-[1.7]">
            {t('provisioningEmbeddedText')}
          </p>
        </div>

        <div>
          <h3 className="text-lg text-fg/95">
            {t('provisioningSdkTitle')}
          </h3>
          <p className="mt-4 text-[15px] text-muted/90 leading-[1.7]">
            {t('provisioningSdkText')}
          </p>
        </div>

      </div>

      <p className="mt-14 text-base text-muted leading-relaxed max-w-3xl">
        {t('provisioningCloudNote')}
      </p>
    </Section>
  );
}