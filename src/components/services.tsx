import React from "react";
import { t } from "../i18n";
import {
  MapIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

interface ServicesProps {
  scroll: () => void;
}

interface Service {
  header: string;
  info: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Services = React.forwardRef<HTMLDivElement, ServicesProps>(
  (props, ref) => {
    const services: Service[] = [
      { header: "header1", info: "info1", icon: MapIcon },
      { header: "header2", info: "info2", icon: DevicePhoneMobileIcon },
      { header: "header3", info: "info3", icon: CogIcon },
      { header: "header4", info: "info4", icon: CpuChipIcon },
    ];
    return (
      <section
        ref={ref}
        id="services"
        className="bg-cover bg-center min-h-screen flex items-center justify-center text-center relative p-8"
        style={{ backgroundImage: `url('./monitor.webp')` }}
      >
        <div className="absolute inset-0 bg-gray-950 bg-opacity-90"></div>
        <div className="relative z-10 text-white flex flex-col justify-around">
          <h1 className="text-4xl font-bold mb-4">{t("services")}</h1>
          <div className="flex flex-wrap justify-center">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 mb-16"
                >
                  <item.icon className="h-12 w-12 text-blue-700 mb-4" />
                  <h3 className="text-lg font-semibold">{t(item.header)}</h3>
                  <p className="text-sm text-gray-300">{t(item.info)}</p>
                </div>
              );
            })}
          </div>
          <div>
            <button
              onClick={props.scroll}
              className="mt-12 inline-block bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition"
            >
              {t("info")}
            </button>
          </div>
        </div>
      </section>
    );
  }
);

export default Services;
