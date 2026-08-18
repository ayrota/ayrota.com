import {
  Cpu,
  Footprints,
  Navigation,
  Route,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "../components/RevealSection";
import type { TranslationKey } from "../i18n/translations";
import { useLanguage } from "../lib/LanguageContext";

const APPLICATIONS: {
  title: TranslationKey;
  text: TranslationKey;
  icon: LucideIcon;
}[] = [
  {
    title: "platformsAutonomyTitle",
    text: "platformsAutonomyText",
    icon: Navigation,
  },
  {
    title: "platformsIndoorTitle",
    text: "platformsIndoorText",
    icon: Footprints,
  },
  {
    title: "platformsRoadTitle",
    text: "platformsRoadText",
    icon: Route,
  },
  {
    title: "platformsEngineeringTitle",
    text: "platformsEngineeringText",
    icon: Cpu,
  },
];

export function Platforms() {
  const { t } = useLanguage();

  return (
    <section
      id="applications"
      className="relative overflow-hidden border-t border-fg/10 bg-bg"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="border-b border-fg/10 pb-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-cyan-300/85" />

              <span className="text-[11px] font-medium tracking-[0.24em] text-fg/70">
                {t("platformsKicker")}
              </span>
            </div>

            <p className="mt-7 max-w-[680px] text-[20px] font-medium leading-8 tracking-[-0.02em] text-fg/72 md:text-[22px]">
              {t("platformsLead")}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {APPLICATIONS.map((application, index) => {
            const Icon = application.icon;

            return (
              <Reveal key={application.title} delay={index * 0.04}>
                <article
                  className={[
                    "group flex h-full min-h-[220px] flex-col py-8",
                    "border-b border-fg/10 md:min-h-[240px] md:px-7",
                    index === 0 ? "md:pl-0" : "",
                    index === APPLICATIONS.length - 1 ? "md:pr-0" : "",
                    index % 2 === 0 ? "md:border-r" : "",
                    index < 2 ? "lg:border-b-0" : "",
                    index < APPLICATIONS.length - 1
                      ? "lg:border-r lg:border-fg/10"
                      : "lg:border-r-0",
                    "lg:border-b-0",
                  ].join(" ")}
                >
                  <div className="pt-20 lg:pt-28">
                    <div className="flex min-h-[52px] items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-fg/10 text-fg/35 transition duration-300 group-hover:border-cyan-300/40 group-hover:text-cyan-300">
                        <Icon size={18} strokeWidth={1.5} aria-hidden />
                      </div>

                      <h3 className="max-w-[260px] text-[22px] font-semibold leading-[1.15] tracking-[-0.035em] text-fg">
                        {t(application.title)}
                      </h3>
                    </div>

                    <p className="mt-5 max-w-[300px] text-[14px] leading-7 text-fg/52">
                      {t(application.text)}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
