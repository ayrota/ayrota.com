import { useLanguage} from "../i18n";

const buttonClass =
  "font-semibold text-gray-800 hover:text-cyan-700 active:text-cyan-600";

const Header = () => {
  const { setLanguage } = useLanguage();
  return (
    <header className="flex flex-row flex-wrap justify-between">
      <img src="../../ayrota_only.png" className="p-4 ml-4 mt-1 h-20"></img>
      <div className="space-x-2 mr-4 flex flex-row p-4 items-center">
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
