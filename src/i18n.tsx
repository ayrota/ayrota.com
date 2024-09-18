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
    contact:"İletişim",
    ScrollToDt:"Dijital İkizlere Daha Yakında Bakın",
    IntroHeader:"Endüstri 4.0 ’a Doğru Dijital İkizler",
    IntroSubHeader1:"Üretim ve Karar Alma Süreçlerinizin Potansiyelini Artırın",
    IntroSubHeader2:"Yapay Zeka ve Gerçek Zamanlı Veri İşlemeyle Güçlendirilmiş Dijital İkiz Çözümlerimizi Kullanın",
    IntroCallToAction:"Gerçek gücününüzü ortaya çıkarın...",
    DtAiHeader:"Hem Fabrikada Hem Gökyüzünde",
    DtAiSubHeader:"Yapay Zeka Destekli Dijital İkiz Çözümlerimizi Keşfedin",
    DtAiText1Header:"Dijital İkizler ile Üretim Optimizasyonu",
    DtAiText1:"Üretim optimizasyonunda bir fabrikanın her bir parçasının sanal ortama kopyalanmasıyla oluşturulan Dijital İkiz çözümlerimiz ile, gerçek zamanlı olarak fabrikadan toplanan veriler yapay zeka ile analiz ediyor, üretim sürecindeki başabaş noktalarını, makine arızalarını veya bakım ihtiyaçlarını önceden tahmin ederek ve iş süreçleri kesintiye uğramadan optimize ediyoruz.",
    DtAiText2Header:"Dijital İkizler ile Ataletsel Navigasyon",
    DtAiText2:"Dijital İkizi hazırlanmış İnsansız Hava Araçları’na ait daha önceden toplanan verileri, veri görselleştirmenin gücüyle iyileştiriyor ve yapay zeka destekli analiz algoritmalarını eğitiyoruz. Eğitilen algoritmalarımızla daha sonra İHA’nın GPS bulunmayan ortamlarda bile gerçek zamanlı toplanan verileri kullanarak uçuş yapabilmesini sağlıyoruz.",
    DigitalTwinHeader:"Dijital İkiziler",
    DigitalTwinSubHeader:"Endüstri 4.0’ın Dijital İkiz basamağının temelini oluşturan cihaz ve sisteme özgü veriler ile, hem üretim süreçlerini optimize ediyor hem de akıllı otonom araçların navigasyon faaliyetlerini yapay zeka destekli algoritmalarla gerçekleştiriyoruz.",
    DigitalTwinText1Header:"Sanal Bir Gerçek Dünya",
    DigitalTwinText1:"Üretim süreçlerinin ve lojistik sistemlerin daha akıllı ve verimli hale gelmesinin amaçlandığı Endüstri 4.0 dönüşümünün kalbinde yer alan Dijital İkizler ile gerçek dünyadaki fiziksel varlıkların sanal bir kopyası oluşturulur.",
    DigitalTwinText2Header:"Tüm Gerçek Dünya Nesneleri İçin",
    DigitalTwinText2:"Dijital ikizlerin sağlamlığı, toplanan verilerin ne kadar doğru toplandığına ve ne kadar doğru işlenip analiz edildiğine bağlıdır.  Dijital ikizler ile bir fabrikada bulunan ısı sensöründen bir otonom araçta bulunan ivme sensörüne kadar farklı tipte bilgiler içerebilen sensör verileri, yapay zeka tabanlı algoritmalarda kullanılarak, anlamlı iç görüler oluşturularak karar alma süreçlerine rehberlik edilmiş olur.",
    ScrollToAi:"Yapay Zekanın Gücünü Keşfedin",
    AiHeader:"Yapay Zeka Dijital İkizlerle Buluşuyor",
    AiSubHeader:"Daha Güçlü Dijital İkizler",
    AiText1Header:"Yapay Zeka ve Veri Analizi",
    AiText1:"Daha önceden toplanan verilerle yapay zeka algoritmaları eğitilir ve sürekli toplanan veriler, eğitilmiş yapay zeka algoritmaları ile analiz edilerek zamanla daha akıllı ve öngörücü sistemler oluşturulur. Bu sistemlerle güçlendirilen Dijital İkizler gerçek zamanlı üretim optimizasyonu ve otonom araçlarda yön bulma gibi süreçlerde kullanılır.",
    AiText2Header:"Veri Görselleştirmenin Önemi",
    AiText2:"Toplanan verilerin bir uzman tarafından incelenmesi, iç görülerin oluşturulması ve anlamlandırılması, daha sonradan otonomlaşacak karar alma süreçlerinin geliştirilmesi adına en anlaşılır şekilde görselleştirilmesi gerekir. Sistem dinamiklerinin anlaşılması adına geçmiş verilerin gösterimi ve özellikle üretim süreçlerinde iyi ve kötü çalışan bileşenlerin belirlenmesi ve potansiyel sorunların nerde oluşabileceğine dair gerçek zamanlı veri görselleştirmesi oldukça kritiktir.",
    },
  EN: {
    changeLanguage: "TR",
    companyName: "Ayrota Software Technologies",
    contact:"Contact",
    ScrollToAi:"Discover Power of AI",
    ScrollToDt:"Explore Digital Twins",
    IntroHeader:"Digital Twins Towards Industry 4.0",
    IntroSubHeader1:"Increase the potential of your production and decision-making processes with ",
    IntroSubHeader2:"Digital Twins powered by Artificial Intelligence and Real-Time Data Processing.",
    IntroText:"With our digital twin solutions in Industry 4.0 transformation processes, we offer AI-driven data analysis, real-time data visualization and smart decision-making solutions in many areas, from production process optimization to the development of precise inertial navigation algorithms.",
    IntroCallToAction:"Unleash your true power...",
    DigitalTwinHeader:"Digital Twins",
    DigitalTwinSubHeader:"With device and system-specific data that form the basis of the Digital Twin stage of Industry 4.0, we both optimize production processes and perform navigation activities of smart autonomous vehicles with AI-supported algorithms.",
    DigitalTwinText1Header:"A Virtual Real World",
    DigitalTwinText1:"At ​​the heart of the Industry 4.0 transformation, where production processes and logistics systems are aimed to become smarter and more efficient, Digital Twins create a virtual copy of physical assets in the real world.",
    DigitalTwinText2Header:"For All Real World Objects",
    DigitalTwinText2:"The robustness of digital twins depends on how accurately the collected data is collected and how accurately it is processed and analyzed. With digital twins, sensor data, which can contain different types of information from a heat sensor in a factory to an acceleration sensor in an autonomous vehicle, is used in artificial intelligence-based algorithms to create meaningful insights and guide decision-making processes.",
    AiHeader:"Artificial Intelligence Meets Digital Twins",
    AiSubHeader:"Stronger Digital Twins",
    AiText1Header:"Artificial Intelligence and Data Analysis",
    AiText1:"Artificial intelligence algorithms are trained with previously collected data, and continuously collected data is analyzed with trained artificial intelligence algorithms to create smarter and more predictive systems over time. Digital Twins powered by these systems are used in processes such as real-time production optimization and navigation in autonomous vehicles.",
    AiText2Header:"Importance of Data Visualization",
    AiText2:"Collected data must be examined by an expert, insights must be created and interpreted, and visualized in the most understandable way in order to develop decision-making processes that will later become autonomous. In order to understand system dynamics, the display of past data and especially the determination of components that work well and poorly in production processes and real-time data visualization of where potential problems may occur are very critical.",
    DtAiSubHeader:"Discover Our AI-Powered Digital Twin Solutions",
    DtAiText1Header:"Production Optimization with Digital Twins",
    DtAiText1:"With our Digital Twin solutions created by copying each part of a factory to a virtual environment in production optimization, we analyze the data collected from the factory in real time with artificial intelligence, predict bottlenecks, machine failures or maintenance needs in the production process and optimize business processes without interruption.",
    DtAiText2Header:"Inertial Navigation with Digital Twins",
    DtAiText2:"We improve the previously collected data of Unmanned Aerial Vehicles with the power of data visualization and train AI-powered analysis algorithms. With our trained algorithms, we then enable the UAV to fly using the data collected in real time even in environments without GPS.",  },
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
