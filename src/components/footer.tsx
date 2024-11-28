import { t } from "../i18n";

const Footer = () => {
  return (
    <header className="flex flex-row flex-wrap justify-between">
      <img
        src="../../ayrota_transparent.png"
        className="p-4 ml-4 mt-1 h-20"
      ></img>
      <div className="space-x-2 mr-4 flex flex-row p-4 items-center">
        {t("reserved")}
      </div>
    </header>
  );
};

export default Footer;
