import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { useLanguage } from '../lib/LanguageContext';

export function Core() {
  const { t } = useLanguage();

  return (
    <Section id="core" width="wide">
      <div className="text-xs tracking-widest text-muted">
        {t('sectionCore')}
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        {t('coreTitleMain')}
        <br />
        <span className="text-fg/80">
          {t('coreTitleSub')}
        </span>
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-sm font-medium text-fg">
            {t('coreCard1Title')}
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {t('coreCard1Text')}
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-fg">
            {t('coreCard2Title')}
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {t('coreCard2Text')}
          </p>
        </Card>
      </div>

      <p className="mt-10 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
        {t('coreShellsText')}
      </p>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}