import { Section } from '../components/Section';
import { useLanguage } from '../lib/LanguageContext';

export function Core() {
  const { t } = useLanguage();

  return (
    <Section id="core">
      <h2 className="text-3xl md:text-5xl leading-[1.08] text-fg/95 font-medium ">
        {t('coreTitleMain')}
        <br />
        <span className="text-fg/72">
          {t('coreTitleSub')}
        </span>
      </h2>
      <div className="mt-16 grid gap-16 md:grid-cols-[1.2fr_0.8fr]">

        <div>
          <h3 className="text-lg text-fg/95">
            {t('coreCard1Title')}
          </h3>
          <p className="mt-4 text-[15px] text-muted/90 leading-[1.7]">
            {t('coreCard1Text')}
          </p>
        </div>

        <div>
          <h3 className="text-lg text-fg/95">
            {t('coreCard2Title')}
          </h3>
          <p className="mt-4 text-[15px] text-muted/90 leading-[1.7]">
            {t('coreCard2Text')}
          </p>
        </div>

      </div>

      <p className="mt-10 text-[15px] text-muted/90 leading-[1.7] max-w-xl">
        {t('coreShellsText')}
      </p>
    </Section>
  );
}