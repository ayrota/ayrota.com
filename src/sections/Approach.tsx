import { Section } from '../components/Section';
import { useLanguage } from '../lib/LanguageContext';

export function Approach() {
  const { t } = useLanguage();

  return (
    <Section id="approach" width="narrow">
      <div className="text-xs tracking-widest text-muted">
        {t('sectionApproach')}
      </div>

      <h2 className="mt-4 text-2xl md:text-3xl font-medium leading-tight">
        {t('approachTitle')}
      </h2>

      <p className="mt-6 text-sm md:text-base text-muted leading-relaxed">
        {t('approachParagraph1')}
        <br />
        {t('approachParagraph2')}
      </p>

      <p className="mt-6 text-sm md:text-base text-muted leading-relaxed">
        {t('approachParagraph3')}
      </p>

      <div className="mt-16 h-px bg-line/50 max-w-md" />
    </Section>
  );
}