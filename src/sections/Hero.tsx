import { useLanguage } from '../lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg"
    >
      <img
        src="/hero.png"
        alt="Ayrota autonomous navigation field"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

      <div className="relative z-10 min-h-[82vh]">
        <div className="w-full px-6 md:px-10">
          <div className="mx-auto max-w-[1440px] pt-[120px] pb-10">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-300/80" />

                <span className="text-[11px] font-medium tracking-[0.22em] text-fg/70">
                  {t('homeHeroKicker')}
                </span>
              </div>

              <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-fg md:text-[83px]">
                {t('homeHeroTitle')}
              </h1>

              <p className="mt-10 max-w-xl text-[18px] leading-9 text-fg/65">
                {t('homeHeroLead')}
              </p>
            </div>

            <div className="mt-16 border-t border-fg/10 pt-4">
              <div className="grid gap-4 md:grid-cols-4">
                <HeroPillar label={t('heroPillarNavigation')} />
                <HeroPillar label={t('heroPillarEstimation')} />
                <HeroPillar label={t('heroPillarFusion')} />
                <HeroPillar label={t('heroPillarIntegration')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPillar({
  label,
}: {
  label: string;
}) {
  return (
    <div className="border-l border-fg/10 pl-6 py-1">
      <div className="text-[11px] font-medium tracking-[0.18em] text-fg/45">
        {label}
      </div>
    </div>
  );
}