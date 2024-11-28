import React from "react";
import { t } from "../i18n";

interface AboutProps {
  scroll: () => void;
}

const About = React.forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col text-blue-900 items-center justify-around text-justify m-16"
    >
      <h1 className="text-4xl font-bold">{t("aboutUs")}</h1>
      <div className="flex justify-around">
        <div className="flex flex-col justify-between items-center w-2/5">
          <p className="">{t("aboutText1")}</p>
          <p className="">{t("aboutText2")}</p>
        </div>
        <img className="flex w-2/5" src="./uav.webp"></img>
      </div>
      <button
        onClick={props.scroll}
        className="mt-12 inline-block bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition"
      >
        {t("services")}
      </button>
    </section>
  );
});

export default About;
