import { t } from "../i18n";

const About = () => {
  return (
    <>
      {" "}
      <div className="mt-32 text-5xl flex justify-center">
        {t("companyName")}
      </div>
      <div className="m-4 text-2xl font-extralight flex justify-center">
        {t("underConstruction")}
      </div>
    </>
  );
};

export default About;
