import { useLanguage } from '../lib/LanguageContext';

const HERO_PILLARS = [
  {
    label: 'heroPillarImu',
    icon: '⌁',
  },
  {
    label: 'heroPillarSwapc',
    icon: '▣',
  },
  {
    label: 'heroPillarEndToEnd',
    icon: '⌘',
  },
  {
    label: 'heroPillarIndependent',
    icon: '◎',
  },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen md:h-screen bg-bg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full md:w-[60%] h-full">
          <img
            src="/hero.png"
            alt="Ayrota autonomous navigation field"
            className="h-full w-full object-cover"
            style={{ objectPosition: '62% 50%' }}
          />

          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-bg via-bg/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-bg/90 via-bg/20 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full md:w-1/2 px-6 md:px-10 lg:pl-20 py-24">
          <div className="max-w-[720px]">
            {/* Kicker */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-300/80" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-fg/70 uppercase">
                {t('homeHeroKicker')}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[56px] font-semibold leading-[1.08] tracking-[-0.04em] text-fg">
              {t('homeHeroTitle')}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[560px] text-[16px] sm:text-[17px] leading-8 text-fg/65">
              {t('homeHeroLead')}
            </p>

            {/* Pillars */}
            <div className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-fg/10 pt-7">
                {HERO_PILLARS.map((pillar, index) => (
                  <HeroPillar
                    key={pillar.label}
                    icon={pillar.icon}
                    label={t(pillar.label)}
                    first={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right spacer */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
}

function HeroPillar({
  icon,
  label,
  first = false,
}: {
  icon: string;
  label: string;
  first?: boolean;
}) {
  return (
    <div
      className={[
        'flex flex-col items-center justify-start',
        'gap-2 px-2 py-3 min-w-0',
        'md:border-l md:border-fg/10',
        first && 'md:border-l-0',
      ].join(' ')}
    >
      <div className="text-lg leading-none text-cyan-300/85">{icon}</div>

      <div className="max-w-[120px] text-center text-[10px] leading-5 tracking-[0.22em] uppercase text-fg/85 break-words">
        {label}
      </div>
    </div>
  );
}
