import { GlobeAltIcon, ServerStackIcon } from '@heroicons/react/16/solid'
import { t } from '../i18n'
import React from 'react';

interface DtSectionProps {
  scrollToAi: () => void; // Scroll fonksiyonunu prop olarak alıyoruz
}


const DtSection = React.forwardRef<HTMLDivElement, DtSectionProps>((props, ref) => {
  const { scrollToAi } = props; // Props'tan scroll fonksiyonunu alıyoruz

  return (
    <section id="services" ref={ref}
      className="bg-cover bg-center bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center relative p-8">
      <div className=''>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mt-4 font-bold text-gray-800">{t("DigitalTwinHeader")}</h2>
          <p className="mt-4 text-lg text-gray-600">{t("DigitalTwinSubHeader")}</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="text-blue-900 mb-4">
                <GlobeAltIcon className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("DigitalTwinText1Header")}</h3>
              <p className="text-gray-600">
                {t("DigitalTwinText1")}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="text-blue-900 mb-4">
                <ServerStackIcon className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("DigitalTwinText2Header")}</h3>
              <p className="text-gray-600">
                {t("DigitalTwinText2")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={scrollToAi}
        className="mt-16 mb-8 inline-block bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition">
        {t("ScrollToAi")}
      </button>
    </section>
  );
});

export default DtSection;
