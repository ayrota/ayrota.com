import { t } from '../i18n'
import React from 'react';

const AiSection = React.forwardRef<HTMLDivElement>((props,ref) => {
  return (
    <section
      id="aiSection"
      ref={ref}
      className="bg-cover bg-center bg-gray-200 min-h-screen flex flex-col items-center justify-center text-center relative p-8">
      <h2 className="text-4xl mt-4 font-bold text-gray-800">{t("AiHeader")}</h2>
      <p className="mt-4 text-2xl text-gray-600">{t("AiSubHeader")}</p>
      <div className='w-screen flex flex-row justify-evenly items-center'>
        <div className='p-12 md:w-1/2'>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("AiText1Header")}</h3>
          <p className="text-gray-600">
            {t("AiText1")}
          </p>
        </div>
        <div className=' m-8 p-8 md:w-1/2'>
          <img
            src="/facDashboard.png"
            alt="IIoT Image"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className='w-screen flex flex-row justify-evenly items-center'>
        <div className='p-12 md:w-1/2'>
          <img
            src="/droneOnFac.png"
            alt="IIoT Image"
            className="rounded-lg"
          />
        </div>
        <div className='m-8 p-8 md:w-1/2'>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("AiText2Header")}</h3>
          <p className="text-gray-600">
            {t("AiText2")}
          </p>
        </div>
      </div>
    </section>
  );
});

export default AiSection;
