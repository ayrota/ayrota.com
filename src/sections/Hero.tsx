import { Container } from '../components/Container';
import { useLanguage } from '../lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <Container className="pt-28 relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="mt-6 text-5xl md:text-6xl font-medium leading-[1.08] tracking-[-0.02em] text-fg/95">
            {t('heroTitleMain')}
            <br />
            <span className="text-fg/70">
              {t('heroTitleSub')}
            </span>
          </h1>

          <p className="mt-6 text-base text-fg/90 max-w-2xl leading-relaxed">
            {t('heroLead')}
          </p>

          <p className="mt-8 text-[15px] text-muted/90 leading-[1.7] max-w-xl">
            {t('heroParagraph1')}
          </p>

          <p className="mt-3 text-[15px] text-muted/90 leading-[1.7] max-w-xl">
            {t('heroParagraph2')}
          </p>

          <p className="mt-3 text-[15px] text-muted/90 leading-[1.7] max-w-xl">
            {t('heroParagraph3')}
          </p>

          <p className="mt-10 text-xs tracking-wide text-muted/70">
            {t('heroMeta')}
          </p>
        </div>
      </Container>
    </section>
  );
}