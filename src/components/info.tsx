import React from "react";
import { t } from "../i18n";
import InfoItem from "./infoItem";

interface InfoProps {
  scroll: () => void;
}

const Info = React.forwardRef<HTMLDivElement, InfoProps>((props, ref) => {
  const indices: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section
      ref={ref}
      id="info"
      className="flex flex-col text-blue-900 items-center justify-center text-center p-8"
    >
      <div className="w-1/2 min-w-72">
        <h1 className="text-4xl font-bold mb-8">{t("info")}</h1>
        {indices.map((index) => {
          return (
            <InfoItem
              question={t("question" + index)}
              answer={t("answer" + index)}
            />
          );
        })}
      </div>
      <button
        onClick={props.scroll}
        className="mt-12 inline-block bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition"
      >
        {t("contact")}
      </button>
    </section>
  );
});

export default Info;
