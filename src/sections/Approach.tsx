import { Section } from '../components/Section';
import { useLanguage } from '../lib/LanguageContext';

export function Approach() {
  const { t } = useLanguage();

  return (
    <Section id="approach" className="pt-20 md:pt-28">
      <h1 className="mt-6 text-5xl md:text-6xl font-medium leading-[1.08] tracking-[-0.02em] text-fg/95">
        {t('approachTitle')}
      </h1>

      <p className="mt-8 text-[15px] leading-[1.7] text-fg/92 max-w-2xl">
        {t('approachParagraph1')}
      </p>

      <p className="mt-5 text-[15px] leading-[1.7] text-muted/90 max-w-2xl">
        {t('approachParagraph2')}
      </p>

      <p className="mt-5 text-[15px] leading-[1.7] text-muted/90 max-w-2xl">
        {t('approachParagraph3')}
      </p>
    </Section>
  );
}