import { useLanguage } from '../lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-bg"
    >
      <img
        src="/hero.png"
        alt="Ayrota autonomous navigation field"
        className="absolute inset-0 h-full w-full object-cover object-[60%_50%] opacity-72"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/65 to-bg/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/35" />
      <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-bg via-bg/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 md:px-10">
          <div className="mx-auto max-w-[1440px] -translate-y-8">
            <div className="max-w-[900px]">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-300/80" />

                <span className="text-[11px] font-medium tracking-[0.22em] text-fg/60">
                  {t('homeHeroKicker')}
                </span>
              </div>

              <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-fg md:text-[80px]">
                {t('homeHeroTitle')}
              </h1>

              <p className="mt-8 max-w-2xl text-[17px] leading-9 text-fg/64">
                {t('homeHeroLead')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-0 z-10 w-full px-6 md:px-10">
        <div className="mx-auto max-w-[1440px] pt-6">
          <div className="grid gap-0 md:grid-cols-4">
              <HeroPillar
                first
                label={t('heroPillarNavigation')}
              />
              <HeroPillar label={t('heroPillarEstimation')} />
              <HeroPillar label={t('heroPillarFusion')} />
              <HeroPillar label={t('heroPillarIntegration')} />
            </div>
        </div>
      </div>
    </section>
  );
}

function HeroPillar({
  label,
  first = false,
}: {
  label: string;
  first?: boolean;
}) {
  return (
    <div
      className={[
        'px-10 py-5',
        !first && 'border-l border-fg/15',
      ].join(' ')}
    >
      <div className="text-center text-[12px] font-medium tracking-[0.22em] text-fg/90">
        {label}
      </div>
    </div>
  );
}