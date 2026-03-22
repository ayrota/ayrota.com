import { Container } from '../components/Container';
import { usePhase } from '../lib/phaseContext';
import { useLanguage } from '../lib/LanguageContext';

export function Hero() {
  const phase = usePhase();
  const unsettled = phase === 'orientation' || phase === 'drift';
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          unsettled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(80% 60% at 60% 40%, rgba(75,107,136,0.12), transparent 70%)',
        }}
      />

      <Container className="pt-28 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs tracking-widest text-muted">
            {t('sectionHero')}
          </div>

          <div className="mt-8 text-[11px] tracking-[0.24em] uppercase text-fg/45">
            {t('heroMetaLine')}
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-medium leading-[1.08]">
            {t('heroTitleMain')}
            <br />
            <span className="text-fg/80">
              {t('heroTitleSub')}
            </span>
          </h1>

          <p className="mt-6 text-sm md:text-base text-fg/85 max-w-2xl leading-relaxed">
            {t('heroLead')}
          </p>

          <p className="mt-6 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
            {t('heroParagraph')}
          </p>

          <div className="mt-10 h-px bg-line/60 max-w-md" />
        </div>
      </Container>
    </section>
  );
}