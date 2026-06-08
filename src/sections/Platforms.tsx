import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const PLATFORM_ITEMS = [
  {
    title: 'platformsGroundTitle',
    text: 'platformsGroundText',
    image: '/platforms/ground.png',
  },
  {
    title: 'platformsAirTitle',
    text: 'platformsAirText',
    image: '/platforms/air.png',
  },
  {
    title: 'platformsRoboticsTitle',
    text: 'platformsRoboticsText',
    image: '/platforms/robotics.png',
  },
  {
    title: 'platformsEmbeddedTitle',
    text: 'platformsEmbeddedText',
    image: '/platforms/embedded.png',
  },
];

export function Platforms() {
  const { t } = useLanguage();

  return (
    <section
      id="platforms"
      className="relative overflow-hidden border-t border-fg/10 bg-bg py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(80,145,190,0.10),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <div className="text-[11px] font-semibold tracking-[0.24em] text-fg/45">
              {t('platformsKicker')}
            </div>

            <h2 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-fg md:text-6xl">
              {t('platformsTitle')}
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-fg/60">
              {t('platformsLead')}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-4">
          {PLATFORM_ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="group relative min-h-[360px] overflow-hidden border border-fg/10 bg-panel/20">
                <img
                  src={item.image}
                  alt={t(item.title)}
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-fg/40">
                    0{index + 1}
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-fg">
                    {t(item.title)}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-fg/60">
                    {t(item.text)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}