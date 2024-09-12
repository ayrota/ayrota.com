import { createContext, useState, useContext, ReactNode } from "react";

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

type LanguageProviderProps = {
  children: ReactNode;
};

const translations: Translations = {
  TR: {
    changeLanguage: "EN",
    companyName: "Ayrota Yazılım Teknolojileri",
    services:"Hizmetler",
    contact:"İletişim",
    callActionHeader:"Güvenilir Endüstriyel Yazılım Çözümleri",
    callActionSubHeader:"Endüstri 4.0'a giden yolda, Dijital İkiz öncesi Endüstriyel Nesnelerin İnterneti (IIoT) Yazılım Çözümleri ve GPS Bulunmayan Ortamlarda Ataletsel Seyrüsefer Yazılım Çalışmlarımızla Hizmetinizdeyiz.",
    textServices:"Güvenilir Yazılım Geliştirme Hizmetleri Sunuyoruz", 
    headerIns:"Gps Kısıtlı Ortamlar için Ataletsel Navigasyon Yazılımı",
    textIns:"Bu büyük Ar-Ge projemiz ile, GPS kısıtlı ortamlarda mini insansız hava araçlarının hiç bir dış kaynağa ihtiyaç duymadan görevlerini icra edebilmeleri için, sadece taşıdıkları mikro elektro mekanik ataletsel sensörleri kullanarak navigasyon yapabilmelerini hedefliyoruz.",
    headerIot:"Endsütriyel Nesnelerin İnterneti", 
    textIot:"Endüstri 4.0'a giden yolda; endüstriyel cihaz, sistem ve fabrikaların dijital ikizlerinin oluşturulması basamağı için nesnelerin interneti teknolojilerinden faydalanarak izleme ve kontrol amaçlı yazılım sistemleri ve kullanıcı arayüzleri geliştiriyoruz."
  },
  EN: {
    changeLanguage: "TR",
    companyName: "Ayrota Software Technologies",
    services:"Services",
    contact:"Contact",
    callActionHeader:"Robust Industrial Software Solutions",
    callActionSubHeader:"On the path to Industry 4.0, we are at your service with our Industrial Internet of Things (IIoT) Software Solutions leading up to Digital Twin technology and Inertial Navigation Software for GPS-denied environments.",
    textServices:"We Provide Reliable Software Development Services",
    headerIns:"Inertial Navigation for GPS-Denied Environments",
    textIns:"With this major R&D project, we aim to enable mini unmanned aerial vehicles to navigate in GPS-restricted environments using only the micro electromechanical inertial sensors they carry, so that they can perform their tasks without needing any external resources.",
    headerIot:"Industrial Internet of Things",
    textIot:"On the way to Industry 4.0; we are developing monitoring and control software systems and user interfaces for the creation of digital twins of industrial devices, systems and factories by utilizing Internet of Things technologies."
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("language provider error");
  }
  return context;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("EN");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const t = (key: string): string => {
  const { language } = useLanguage();
  return translations[language][key];
};
