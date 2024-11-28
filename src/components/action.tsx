import React from "react";
import { t } from "../i18n";

interface ActionProps {
  scroll: () => void; // Scroll fonksiyonunu prop olarak alıyoruz
}

const Action = React.forwardRef<HTMLDivElement, ActionProps>((props, ref) => {
  return (
    <section
      id="action"
      ref={ref}
      className="bg-cover bg-center min-h-screen flex items-center justify-center text-center relative"
      style={{ backgroundImage: `url('./ins.webp')` }}
    >
      <div className="absolute inset-0 bg-gray-950 bg-opacity-90"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">{t("header")}</h1>
        <p className="mb-8">{t("subHeader")}</p>
        <button
          onClick={props.scroll}
          className="mt-12 inline-block bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition"
        >
          {t("aboutUs")}
        </button>
      </div>
    </section>
  );
});

export default Action;
