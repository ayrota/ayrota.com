import { useLanguage, t } from "../i18n";

const buttonClass =
  "font-semibold text-gray-800 hover:text-cyan-700 active:text-cyan-600";

const Header = () => {
  const { setLanguage } = useLanguage();
  return (
    <header className="flex flex-row flex-wrap justify-between">
      <img src="../../ayrota_only.png" className="p-4 m-4 h-20"></img>
      <div className="space-x-2 mr-4 flex flex-row p-4 items-center">

        <nav className="container mx-auto flex justify-between items-center p-4">
          <ul className="flex space-x-8 mr-8">
            <li><a href="#services" className={buttonClass}>{t("services")}</a></li>
            <li><a href="#contact" className={buttonClass}>{t("contact")}</a></li>
          </ul>
        </nav>

        <button className={buttonClass} onClick={() => setLanguage("TR")}>
          TR
        </button>
        <div className="font-mono font-semibold">|</div>
        <button className={buttonClass} onClick={() => setLanguage("EN")}>
          ENG
        </button>
      </div>
    </header>
  );
};

export default Header;
