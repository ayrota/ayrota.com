import React from "react";
import { t } from "../i18n";
import {
  ChartBarIcon,
  CogIcon,
  CpuChipIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

interface ProfessionProps {
  scroll: () => void;
}

const Professions = React.forwardRef<HTMLDivElement, ProfessionProps>(
  (props, ref) => {
    const icons: React.FC<React.SVGProps<SVGSVGElement>>[] = [
      CpuChipIcon,
      CogIcon,
      ChartBarIcon,
      CubeTransparentIcon,
    ];
    return (
      <section
        ref={ref}
        id="professions"
        className="bg-cover bg-center min-h-screen flex items-center justify-center text-center relative p-8"
        style={{ backgroundImage: `url('./professions.webp')` }}
      >
        <div className="absolute inset-0 bg-gray-950 bg-opacity-90"></div>
        <div className="relative z-10 text-white flex flex-col justify-around">
          <h1 className="text-4xl font-bold mb-8">{t("professions")}</h1>
          <div className="grid grid-cols-2 gap-4">
            {icons.map((Icon, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 mb-16"
                >
                  <Icon className="h-12 w-12 text-blue-700 mb-4" />
                  <h3 className="text-lg font-semibold">
                    {t("profession_" + (index + 1) + "_header")}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {t("profession_" + (index + 1) + "_text")}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <button
              onClick={props.scroll}
              className="mt-12 inline-block bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition"
            >
              {t("solutions")}
            </button>
          </div>
        </div>
      </section>
    );
  }
);

export default Professions;
