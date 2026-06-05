import { useLanguage } from '../lib/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-bg"
    >
      <img
        src="/hero-navigation.jpeg"
        alt="Ayrota autonomous navigation field"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

      <div className="relative z-10 min-h-screen">
        <div className="w-full px-6 md:px-10">
          <div className="mx-auto max-w-[1440px] pt-[120px]">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-300/80" />

                <span className="text-[11px] font-medium tracking-[0.22em] text-fg/70">
                  {t('homeHeroKicker')}
                </span>
              </div>

              <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.04em] text-fg md:text-[88px]">
                {t('homeHeroTitle')}
              </h1>

              <p className="mt-10 max-w-xl text-[18px] leading-9 text-fg/65">
                {t('homeHeroLead')}
              </p>
            </div>

            <div className="mt-28">
              <div className="grid grid-cols-2 gap-6 border-t border-fg/10 pt-8 md:grid-cols-5">
                <Capability
                  number="01"
                  label={t('homeCapabilityNavigation')}
                />

                <Capability
                  number="02"
                  label={t('homeCapabilityFusion')}
                />

                <Capability
                  number="03"
                  label={t('homeCapabilityAi')}
                />

                <Capability
                  number="04"
                  label={t('homeCapabilityEmbedded')}
                />

                <Capability
                  number="05"
                  label={t('homeCapabilityAutonomy')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capability({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="border-l border-fg/10 pl-6">
      <div className="text-[11px] tracking-[0.22em] text-fg/35">
        {number}
      </div>

      <div className="mt-4 text-[18px] font-medium leading-tight text-fg/85">
        {label}
      </div>
    </div>
  );
}