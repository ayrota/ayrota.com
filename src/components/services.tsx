import { GlobeAltIcon, ServerStackIcon } from '@heroicons/react/16/solid'
import { t } from '../i18n'

const Services = () => {
  return (
    <section id="services"
      className="bg-cover bg-center bg-gray-100 min-h-screen flex items-center justify-center text-center relative p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">{t("services")}</h2>
        <p className="mt-4 text-gray-600">{t("textServices")}</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-blue-900 mb-4">
              <GlobeAltIcon className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("headerIns")}</h3>
            <p className="text-gray-600">
              {t("textIns")}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="text-blue-900 mb-4">
              <ServerStackIcon className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("headerIot")}</h3>
            <p className="text-gray-600">
              {t("textIot")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
