import { t } from '../i18n'
import React from 'react';

interface DtAiSectionProps {
  scrollToDt: () => void; // Scroll fonksiyonunu prop olarak alıyoruz
}

const DtAiSection = React.forwardRef<HTMLDivElement, DtAiSectionProps>((props, ref) => {
  const { scrollToDt } = props; // Props'tan scroll fonksiyonunu alıyoruz

  return (
    <section
      id="dtAiSection"
      ref = {ref}
      className="bg-cover bg-center bg-gray-200 min-h-screen flex flex-col items-center justify-center text-center relative p-8">
      <h2 className="text-4xl mt-4 font-bold text-gray-800">{t("DtAiHeader")}</h2>
      <p className="mt-4 text-2xl text-gray-600">{t("DtAiSubHeader")}</p>
      <div className='w-screen flex flex-col md:flex-row justify-evenly items-center'>
        <div className='p-12 md:w-1/2'>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("DtAiText1Header")}</h3>
          <p className="text-gray-600">
            {t("DtAiText1")}
          </p>
        </div>
        <div className='m-8 p-8 md:w-1/2'>
          <img
            src="/humanFacDash.png"
            alt="IIoT Image"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className='w-screen flex flex-col-reverse md:flex-row  justify-evenly items-center'>
        <div className='p-12 md:w-1/2'>
          <img
            src="/insDrone.png"
            alt="IIoT Image"
            className="rounded-lg"
          />
        </div>
        <div className='m-8 p-8 md:w-1/2'>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("DtAiText2Header")}</h3>
          <p className="text-gray-600">
            {t("DtAiText2")}
          </p>
        </div>
      </div>
      <button onClick={scrollToDt} 
                className="m-8 inline-block bg-blue-900 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition">
                {t("ScrollToDt")}
      </button>
    </section>
  );
});

export default DtAiSection;
