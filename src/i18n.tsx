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
    contact: "İletişim",
    aboutUs: "Hakkımızda",
    action_header: "Geleceği Şekillendiren Mühendislik Çözümleri",
    action_sub_header:
      "Sensör verilerini yapay zeka ile anlamlandırarak ileri teknoloji yazılım çözümleri sunuyoruz.",
    about_vision: "Vizyon",
    about_vision_text:
      "Ayrota Yazılım Teknolojileri olarak vizyonumuz, sensör verilerini anlamlandıran ileri yazılım çözümleriyle, akıllı sistemlerin dünya genelindeki dönüşümüne öncülük etmektir. Yenilikçi yaklaşımımız ve teknolojik uzmanlığımızla, müşterilerimizin en karmaşık veri işleme ve yapay zeka ihtiyaçlarına bile çözüm sunmayı hedefliyoruz.",
    about_mission: "Misyon",
    about_mission_text:
      "Misyonumuz, sensör tabanlı veri işleme, yapay zeka ve derin öğrenme teknolojileriyle, müşterilerimizin operasyonel süreçlerini iyileştiren ve değer yaratan çözümler geliştirmektir. Yüksek performanslı yazılımlar, sezgisel görselleştirme araçları ve güçlü test süreçleriyle, hem endüstriyel hem de akademik alanlarda yenilikçi bir etki yaratmayı amaçlıyoruz.",
    professions: "Uzmanlık Alanlarımız",
    profession_1_header: "Gerçek Zamanlı Veri İşleme Yazılımları",
    profession_1_text:
      "IMU gibi kaynaklardan gelen ham verilerin gerçek zamanlı işlenmesi. Radar gibi ileri seviyede karmaşık verilerin yönetimi.",
    profession_2_header: "Yapay Zeka Tabanlı Çözümler",
    profession_2_text:
      "Veri akışlarından iç görülerin elde edilmesi ve ileri sistemlere entegrasyonu.",
    profession_3_header: "Sezgisel Veri Görselleştirme",
    profession_3_text:
      "Kullanıcı dostu arayüzlerle 2D/3D göstergeler, grafikler ve harita tabanlı çözümler.",
    profession_4_header: "Simülasyon ve Test Süreçleri",
    profession_4_text:
      "MATLAB, Python, Gazebo, AirSim ve Unreal Engine kullanılarak sanal doğrulama.",
    solutions: "Çözümlerimiz",
    solution_1_header: "Sensör Tabanlı Veri İşleme ve Görselleştirme Çözümleri",
    solution_1_text:
      "IMU’dan Radar’a kadar her türlü sensör verisinin gerçek zamanlı işlenmesi. Dinamik haritalar ve özelleştirilmiş 2D/3D grafiklerle görselleştirme. Toplanan verilerden iç görüler sunulması.",
    solution_2_header: "Yapay Zeka Destekli Ataletsel Navigasyon Yazılımları",
    solution_2_text:
      "GPS olmayan ortamlarda hassas tahmin ve çıkarımlar yapan navigasyon çözümleri. Performans ölçümü ve optimizasyon için görev kontrol yazılımları.",
    solution_3_header: "Simülasyon ve Sanal Doğrulama Çalışmaları",
    solution_3_text:
      "Gazebo, AirSim ve Unreal Engine platformlarında geliştirilen sistemlerin test süreçleri. Gerçek dünya koşullarına yakın ortam simülasyonları.",
  },
  EN: {
    changeLanguage: "TR",
    companyName: "Ayrota Software Technologies",
    contact: "Contact",
    aboutUs: "About Us",
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
  const [language, setLanguage] = useState<string>("TR");

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
