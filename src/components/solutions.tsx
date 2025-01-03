import React from "react";
import { t } from "../i18n";
interface SolutionsProps {
  scroll: () => void;
}

const Solutions = React.forwardRef<HTMLDivElement, SolutionsProps>(
  (props, ref) => {
    return (
      <section
        ref={ref}
        id="solutions"
        className="min-h-screen flex flex-col text-blue-900 items-center justify-around text-justify m-16"
      >
        <h1 className="text-4xl font-bold">{t("solutions")}</h1>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col justify-around items-center w-1/2 min-w-72 p-8">
            <div className="text-lg">{t("solution_1_header")}</div>
            <div className="">{t("solution_1_text")}</div>

            <div className="text-lg">{t("solution_2_header")}</div>
            <div className="">{t("solution_2_text")}</div>

            <div className="text-lg">{t("solution_3_header")}</div>
            <div className="">{t("solution_3_text")}</div>
          </div>
          <img className="w-1/2 min-w-72 p-8" src="./solutions.webp"></img>
        </div>
        <button
          onClick={props.scroll}
          className="mt-12 inline-block bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition"
        >
          {t("contact")}
        </button>
      </section>
    );
  }
);

export default Solutions;
