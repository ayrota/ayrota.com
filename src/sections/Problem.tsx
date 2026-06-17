import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const FLOW_ITEMS = [
  {
    step: '01',
    title: 'problemFlowGnssTitle',
    subtitle: 'problemFlowGnssSubtitle',
    image: '/problem/gnss-lost.png',
  },
  {
    step: '02',
    title: 'problemFlowSensorTitle',
    subtitle: 'problemFlowSensorSubtitle',
    image: '/problem/sensor-cost.png',
  },
  {
    step: '03',
    title: 'problemFlowCoreTitle',
    subtitle: 'problemFlowCoreSubtitle',
    image: '/problem/ayrota-core.png',
    active: true,
  },
  {
    step: '04',
    title: 'problemFlowNavTitle',
    subtitle: 'problemFlowNavSubtitle',
    image: '/problem/continuous-nav.png',
  },
];

export function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="relative min-h-screen overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(56,189,248,0.03),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,10,18,0.0),rgba(5,10,18,0.55))]" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1500px] px-6 py-16 md:px-10">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-300/80" />
                  <span className="text-[11px] font-medium tracking-[0.22em] text-fg/60">
                    {t('problemKicker')}
                  </span>
                </div>

                <h2 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-fg md:text-[68px]">
                  {t('problemTitle')}
                </h2>

                <p className="mt-8 max-w-2xl text-[17px] leading-9 text-fg/64">
                  {t('problemLead')}
                </p>

                <p className="mt-6 max-w-2xl text-[16px] leading-9 text-fg/52">
                  {t('problemSecondLead')}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-4">
                {FLOW_ITEMS.map((item, index) => (
                  <div key={item.title} className="relative">
                    {index !== 0 && (
                      <div className="absolute -left-5 top-1/2 z-20 hidden -translate-y-1/2 text-3xl text-cyan-300/70 md:block">
                        ›
                      </div>
                    )}

                    <div
                      className={[
                        'relative flex h-[560px] flex-col overflow-hidden rounded-2xl border bg-panel/20 backdrop-blur transition',
                        item.active
                          ? 'border-cyan-300/70 shadow-[0_0_38px_rgba(34,211,238,0.18)]'
                          : 'border-fg/10 hover:border-fg/25',
                      ].join(' ')}
                    >
                      <div className="absolute left-7 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/80 text-[15px] font-semibold text-cyan-200">
                        {item.step}
                      </div>

                      <div className="h-64 flex-shrink-0 border-b border-fg/10 bg-bg/30">
                        <img
                          src={item.image}
                          alt={t(item.title)}
                          className="h-full w-full object-cover object-center opacity-95"
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-6 text-center">
                        <h3
                          className={[
                            'flex min-h-[60 px] items-center justify-center text-[15px] font-semibold leading-6 tracking-[0.08em]',
                            item.active ? 'text-cyan-300' : 'text-fg/84',
                          ].join(' ')}
                        >
                          {t(item.title)}
                        </h3>

                        <p className="mt-4 flex-1 text-[15px] leading-7 text-fg/56">
                          {t(item.subtitle)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}