import {t} from "../i18n"

interface ActionProps {
    scrollToDtAi: () => void; // Scroll fonksiyonunu prop olarak alıyoruz
}
  
const Action: React.FC<ActionProps> = ({ scrollToDtAi }) => {

    return (      
    <section
        id="home"
        className="bg-cover bg-center min-h-screen flex items-center justify-center text-center relative"
        style={{backgroundImage: `url('/ind.png')`}}>
        
        <div className="absolute inset-0 bg-black opacity-80"></div>
        
        <div className="relative z-10 text-center text-white p-8">
            <h1 className="text-5xl font-bold shadow-lg mb-8">{t("IntroHeader")}</h1>
            <h2 className="text-lg shadow-lg mt-2">{t("IntroSubHeader1")}</h2>
            <h2 className="text-2xl shadow-lg mt-2">{t("IntroSubHeader2")}</h2>
            <button onClick={scrollToDtAi} 
                className="mt-12 inline-block bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition">
                {t("IntroCallToAction")}
            </button>
            </div>
        </section>
      );
};

export default Action;