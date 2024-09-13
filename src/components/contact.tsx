import { t } from '../i18n';
import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact"
      className="bg-cover bg-center min-h-screen flex items-center justify-center text-center relative"
        style={{backgroundImage: `url('/con.png')`}}>
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 text-center text-white p-8 container mx-auto">
        <h2 className="text-3xl font-bold text-gray-200 text-center">{t("contact")}</h2>
        <div className="flex justify-center items-center">
          <a href="https://www.linkedin.com/company/ayrota" target="_blank" rel="noopener noreferrer"
            className="flex flex-row text-blue-600 hover:text-blue-200 space-x-2 m-8 mb-12 text-center">
            <FaLinkedin className="h-7 w-7" />
            <span className="text-gray-100 text-xl">/</span>
            <span className="text-gray-100 text-xl">ayrota</span>
          </a>
        </div>
        <div className="w-full h-64 md:h-96">
          <iframe
            title="company-location"
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.651759327646!2d32.8108644454344!3d39.88203772935549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345384af32c01%3A0x49942fbe68a82b2!2sAyrota%20Software%20Technologies!5e0!3m2!1str!2str!4v1726134025675!5m2!1str!2str"
            width="600" height="450" loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;