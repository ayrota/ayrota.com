import {
  Braces,
  CheckCircle2,
  FlaskConical,
  ScanSearch,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

import { Reveal } from '../components/RevealSection';
import { useLanguage } from '../lib/LanguageContext';

type Step = {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    number: '01',
    title: 'engagementAssessmentTitle',
    text: 'engagementAssessmentText',
    icon: ScanSearch,
  },
  {
    number: '02',
    title: 'engagementPocTitle',
    text: 'engagementPocText',
    icon: FlaskConical,
  },
  {
    number: '03',
    title: 'engagementPilotTitle',
    text: 'engagementPilotText',
    icon: CheckCircle2,
  },
  {
    number: '04',
    title: 'engagementIntegrationTitle',
    text: 'engagementIntegrationText',
    icon: Braces,
  },
  {
    number: '05',
    title: 'engagementScaleTitle',
    text: 'engagementScaleText',
    icon: Workflow,
  },
];

export function Engagement() {
  const { t } = useLanguage();

  return (
    <section
      id="engagement"
      className="relative overflow-hidden bg-[#0e1924] py-20 text-white md:py-24"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-320px] h-[820px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(96,165,250,0.03)_0%,rgba(96,165,250,0.012)_38%,transparent_70%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.05]" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-200/35" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/60">
                  {t('engagementKicker')}
                </span>
              </div>

              <h2 className="mt-5 max-w-[560px] text-[34px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#eef3f7] md:text-[44px]">
                {t('engagementTitle')}
              </h2>
            </div>

            <p className="max-w-[640px] text-[15px] leading-7 text-white/50 lg:justify-self-end">
              {t('engagementLead')}
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[29px] hidden h-px bg-white/[0.08] lg:block"
          />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.title}
                  delay={0.06 + index * 0.05}
                  className="h-full"
                >
                  <article className="group relative h-full lg:px-6 first:lg:pl-0 last:lg:pr-0">
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-[58px] w-[58px] items-center justify-center border border-white/[0.10] bg-[#0e1924] text-cyan-100/55 transition duration-300 group-hover:border-cyan-100/28 group-hover:text-cyan-100/85">
                        <Icon
                          size={20}
                          strokeWidth={1.35}
                        />
                      </div>

                      <span className="text-[9px] font-medium tracking-[0.22em] text-white/25 lg:hidden">
                        {step.number}
                      </span>
                    </div>

                    <div className="mt-9 border-t border-white/[0.07] pt-6 lg:border-t-0 lg:pt-0">
                      <span className="hidden text-[9px] font-medium tracking-[0.22em] text-white/25 lg:block">
                        {step.number}
                      </span>

                      <div className="mt-4 min-h-[50px]">
                        <h3 className="text-[18px] font-semibold leading-6 tracking-[-0.03em] text-white/90">
                          {t(step.title)}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-[240px] text-[13px] leading-6 text-white/44">
                        {t(step.text)}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-12 border-t border-white/[0.07] pt-6">
            <p className="max-w-[780px] text-[12px] leading-6 text-white/32">
              {t('engagementBottomText')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}