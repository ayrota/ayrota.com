import React from "react";
import { t } from "../i18n";

interface ActionProps {
  scrollAbout: () => void;
  scrollContact: () => void;
}

const Action = React.forwardRef<HTMLDivElement, ActionProps>((props, ref) => {
  return (
    <section
      id="action"
      ref={ref}
      className="bg-cover bg-center min-h-screen flex items-center justify-center text-center relative p-8"
      style={{ backgroundImage: `url('./action.webp')` }}
    >
      <div className="absolute inset-0 bg-gray-950 bg-opacity-90"></div>
      <div className="relative z-10 text-white">
        <p className="mb-4 text-lg">{t("companyName")}</p>
        <h1 className="text-4xl font-bold mb-4">{t("action_header")}</h1>
        <p className="mb-8">{t("action_sub_header")}</p>
        <div>
          <button
            onClick={props.scrollAbout}
            className="mt-12 w-48 inline-block bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition"
          >
            {t("aboutUs")}
          </button>
        </div>
        <div>
          <button
            onClick={props.scrollContact}
            className="mt-12 w-48 inline-block bg-gray-300 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-50 transition"
          >
            {t("contact")}
          </button>
        </div>
      </div>
    </section>
  );
});

export default Action;
