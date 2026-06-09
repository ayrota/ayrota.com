import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const PLATFORM_ITEMS = [
  {
    number: '01',
    title: 'platformsGroundTitle',
    text: 'platformsGroundText',
    image: '/platforms/ground.png',
  },
  {
    number: '02',
    title: 'platformsAirTitle',
    text: 'platformsAirText',
    image: '/platforms/air.png',
  },
  {
    number: '03',
    title: 'platformsSmartTitle',
    text: 'platformsSmartText',
    image: '/platforms/robotics.png',
  },
  {
    number: '04',
    title: 'platformsEndToEndTitle',
    text: 'platformsEndToEndText',
    image: '/platforms/embedded.png',
  },
];

export function Platforms() {
  const { t } = useLanguage();

  return (
    <section
      id="platforms"
      className="relative overflow-hidden border-t border-fg/10 bg-bg pt-5 pb-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(80,145,190,0.10),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <div className="border-b border-fg/10 pb-10">
            <div className="max-w-3xl">
              <div className="text-[10px] font-semibold tracking-[0.22em] text-fg/45">
                {t('platformsKicker')}
              </div>

              <p className="mt-6 max-w-xl text-sm leading-7 text-fg/60">
                {t('platformsLead')}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 grid gap-5 border-fg/10 pb-8 md:grid-cols-2 xl:grid-cols-4">
            {PLATFORM_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group relative min-h-[380px] overflow-hidden border border-fg/10 bg-panel/20"
              >
                <img
                  src={item.image}
                  alt={t(item.title)}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/20" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-fg/40">
                    {item.number}
                  </div>

                  <h3 className="mt-4 min-h-[64px] text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] text-fg">
  {t(item.title)}
</h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-fg/65">
                    {t(item.text)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}