import {t} from "../i18n"

const Action = () => {
    return (  
    <section
        id="home"
        className="bg-cover bg-center min-h-screen flex items-center justify-center text-center relative"
        style={{backgroundImage: `url('/ind.png')`}}>
        
        <div className="absolute inset-0 bg-black opacity-80"></div>
        
        <div className="relative z-10 text-center text-white p-8">
            <h1 className="text-5xl font-bold shadow-lg">{t("callActionHeader")}</h1>
            <p className="mt-4 text-lg shadow-lg">{t("callActionSubHeader")}</p>
                <a href="#services" className="mt-6 inline-block bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition">
                    {t("services")}
                </a>
            </div>
        </section>
      );
};

export default Action;