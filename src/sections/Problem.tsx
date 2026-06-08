import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

const PROBLEM_ITEMS = [
  {
    title: 'problemDeniedTitle',
    text: 'problemDeniedText',
  },
  {
    title: 'problemDynamicTitle',
    text: 'problemDynamicText',
  },
  {
    title: 'problemReliableTitle',
    text: 'problemReliableText',
  },
];

export function Problem() {
  const { t } = useLanguage();

  return (
    <section
      id="problem"
      className="relative overflow-hidden border-t border-fg/10 bg-bg py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(80,145,190,0.08),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <div className="border-b border-fg/10 pb-12">
            <div className="max-w-4xl">
              <div className="text-[10px] font-semibold tracking-[0.22em] text-fg/45">
                {t('problemKicker')}
              </div>

              <p className="mt-8 max-w-3xl text-base leading-8 text-fg/60">
                {t('problemLead')}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 border-b border-fg/10 pb-8">
            <div className="grid gap-5 md:grid-cols-3">
              {PROBLEM_ITEMS.map((item, index) => (
                <div
                  key={item.title}
                  className="min-h-[180px] border border-fg/10 bg-panel/20 p-6 transition hover:border-fg/25 hover:bg-panel/30"
                >
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-fg/35">
                    0{index + 1}
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-fg">
                    {t(item.title)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-fg/55">
                    {t(item.text)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}