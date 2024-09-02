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
    insGpsDeniedText:
      "İHA'lar için GPS Kısıtlı Oramlarda Ataletsel Navigasyon Sistemi Yazılımı",
    industrialSoftwareText:
      "Endüstriyel Cihazlar ve Sistemler için Kullanıcı Arayüzü Yazılımları",
    softwareConsultancy: "Yazılım Danışmanlığı",
    underConstruction: "Yapım Aşamasında",
  },
  EN: {
    changeLanguage: "TR",
    companyName: "Ayrota Software Technologies",
    insGpsDeniedText: "INS Software for UAVs in GPS-Denied Environments",
    industrialSoftwareText:
      "Custom Graphical User Interface Softwares for Industrial Devices and Systems",
    softwareConsultancy: "Software Consultancy",
    underConstruction: "Under Construction",
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
