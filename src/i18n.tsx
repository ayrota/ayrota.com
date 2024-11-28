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
    header: "Yeni Nesil Konumlama ve Navigasyon Teknolojileri",
    subHeader:
      "GPS erişiminin olmadığı ortamlarda düşük maliyetli, derin öğrenme tabanlı çözümler sunuyoruz.",
    contact: "İletişim",
    aboutUs: "Hakkımızda",
    aboutText1:
      "Ayrota, GPS erişiminin mümkün olmadığı ortamlarda düşük maliyetli" +
      " ataletsel mikro elektro mekanik sensörler kullanarak derin öğrenme tabanlı" +
      " konumlama ve navigasyon algoritmaları geliştirmektedir." +
      " Ayrıca geliştirdiği bu benzersiz algoritmaları yine kendi geliştirdiği" +
      " web, mobil ve masaüstü uygulamarıyla desteklemektedir.",
    aboutText2:
      "10 yılı aşkın yazılım geliştirme tecrübesine ve akademik birikime sahip ekibiyle" +
      " kendi geliştirdiği teknolojiler üstüne komuta kontrol, görev kontrol ve izleme takip" +
      " yazılımları tasarlamakta ve bu alandaki birikimini Endüstri 4.0 uygulamalarında" +
      " değer yaratacak dijitalleşme çözümleri ve izleme-takip ürünleri olarak sunmaktadır.",
    services: "Hizmetlerimiz",
    info: "Bilgi Ekranı",
    header1: "Konumlama ve Navigasyon Çözümleri",
    info1:
      "GPS kısıtlı ortamlarda, düşük maliyetli sensörler ile navigasyon yapıyoruz.",
    header2: "Web, Mobil ve Masaüstü Uygulamalar",
    info2:
      "Konumlanma çözümlerimizi kullanıcı dostu arayüzlerle birleştiriyoruz.",
    header3: "Komuta ve Görev Kontrol Yazılımları",
    info3:
      "Geliştirdiğimiz teknolojilerle görev kontrol ve izleme takip sistemleri tasarlıyoruz.",
    header4: "Endüstri 4.0 Çözümleri",
    info4:
      "Dijitalleşme ve izleme takip ürünlerimizle işletmeleri geleceğe hazırlıyoruz.",
    reserved: "© 2024 Ayrota. Tüm Hakları Saklıdır.",
    question1: "Navigasyon nedir?",
    answer1:
      "Navigasyon, bir konumdan başka bir konuma ulaşmak için bir yol belirleme ve bu yolu izleme sürecidir. Teknolojik navigasyon sistemleri, genellikle GPS, haritalar ve sensör verilerini kullanarak bu süreci kolaylaştırır.",
    question2: "Odometri nedir?",
    answer2:
      "Odometri, bir nesnenin (genellikle bir araç ya da robotun) mesafe ve hareket bilgisini ölçmek için tekerlek dönüşlerini ve ivmeyi kullanan bir tekniktir. Özellikle robotik ve otonom sistemlerde önemlidir.",
    question3: "Ataletsel navigasyon nedir?",
    answer3:
      "Ataletsel navigasyon, bir nesnenin konumunu, hızını ve yönünü hesaplamak için jiroskop ve ivmeölçer gibi ataletsel sensörleri kullanan bir tekniktir. GPS gibi harici sistemlere ihtiyaç duymaz.",
    question4: "Neden ataletsel navigasyona ihtiyaç var?",
    answer4:
      "Ataletsel navigasyon, GPS'in yetersiz kaldığı ya da hiç çalışmadığı yerlerde (örneğin tüneller, su altı ya da uzay gibi) kullanılabilir. Ayrıca, yüksek hassasiyet ve bağımsız çalışma gereksinimi duyulan durumlarda da önemli bir çözümdür.",
    question5: "Neden ataletsel navigasyon yaygın değil?",
    answer5:
      "Ataletsel navigasyon, uzun süreli kullanımlarda hata birikimi (drift) sorunları nedeniyle yaygın olarak tercih edilmez. Ayrıca, hassas sensörlerin maliyeti de bir başka sınırlayıcı faktördür.",
    question6: "Teknolojinin son durumu nedir?",
    answer6:
      "Ataletsel sensörlerin hassasiyeti ve derin öğrenme gibi algoritmalar sayesinde hata düzeltme kabiliyeti büyük ölçüde gelişmiştir. Bu da ataletsel navigasyonun daha güvenilir hale gelmesine katkıda bulunuyor.",
    question7: "Derin öğrenme ile nasıl çözülür?",
    answer7:
      "Derin öğrenme, ataletsel sensörlerden gelen verilerin hata düzeltmesini ve kestirimini yapmada kullanılır. Özellikle sekans verilerinde RNN ve LSTM gibi modellerle daha doğru tahminler yapılabilir.",
    question8: "Endüstri 4.0 nedir?",
    answer8:
      "Endüstri 4.0, üretim ve endüstriyel süreçlerin dijitalleşme, otomasyon ve veri analitiğiyle geliştirilmesini ifade eder. Akıllı fabrikalar ve IoT gibi teknolojiler bu konseptin temelini oluşturur.",
    question9: "INS ve Endüstri 4.0 arasındaki ilişki nedir?",
    answer9:
      "INS, Endüstri 4.0 kapsamında otonom araçların ve robotların konum takibi ve hareket kontrolü için kullanılan bir teknolojidir. Veri analitiği ve otomasyon ile uyum içinde çalışır.",
    question10: "INS ve Endüstri 4.0'ın ortak çıktıları nelerdir?",
    answer10:
      "Her iki teknoloji de yüksek hassasiyetli veri üretimi, otomasyon ve izleme sistemlerinin geliştirilmesi gibi ortak çıktılar sunar. Bu da daha verimli üretim süreçlerine olanak tanır.",
  },
  EN: {
    changeLanguage: "TR",
    companyName: "Ayrota Software Technologies",
    header: "New Generation Odometry and Navigation Technologies",
    subHeader:
      "We provide low-cost deep learning powered solutions for GPS denied environments",
    contact: "Contact",
    aboutUs: "About Us",
    aboutText1:
      "Ayrota develops deep learning-based positioning and navigation algorithms using low-cost" +
      " inertial micro electromechanical sensors in environments where GPS access is not possible." +
      " It also supports these unique algorithms with its own web, mobile and desktop applications.",
    aboutText2:
      "With over 10 years of software development experience and academic knowledge," +
      " it designs command control, mission control and monitoring tracking software on" +
      " its own developed technologies and offers its knowledge in this field as digitalization solutions" +
      " and monitoring-tracking products that will create value in Industry 4.0 applications.",
    services: "Services",
    info: "Info Screen",
    header1: "Positioning and Navigation Solutions",
    info1: "We navigate in GPS-limited environments with low-cost sensors.",
    header2: "Web, Mobile and Desktop Applications",
    info2:
      "We combine our positioning solutions with user-friendly interfaces.",
    header3: "Command and Mission Control Software",
    info3:
      "We design mission control and monitoring tracking systems with the technologies we develop.",
    header4: "Industry 4.0 Solutions",
    info4:
      "We prepare businesses for the future with our digitalization and monitoring tracking products.",
    reserved: "© 2024 Ayrota. All rights are reserved.",
    question1: "What is navigation?",
    answer1:
      "Navigation is the process of determining a path and following it to move from one location to another. Technological navigation systems often use GPS, maps, and sensor data to facilitate this process.",
    question2: "What is odometry?",
    answer2:
      "Odometry is a technique that measures distance and movement of an object (usually a vehicle or robot) by utilizing wheel rotations and acceleration data. It is crucial in robotics and autonomous systems.",
    question3: "What is inertial navigation?",
    answer3:
      "Inertial navigation is a technique that uses inertial sensors like gyroscopes and accelerometers to calculate an object's position, velocity, and orientation without relying on external systems like GPS.",
    question4: "Why is inertial navigation needed?",
    answer4:
      "Inertial navigation is essential in environments where GPS is unavailable or unreliable, such as tunnels, underwater, or space. It is also critical for high-precision and independent operation requirements.",
    question5: "Why is inertial navigation not widespread?",
    answer5:
      "Inertial navigation is not widely adopted due to drift errors over time and the high cost of precision sensors. These factors limit its broader application.",
    question6: "What is the current state of the technology?",
    answer6:
      "The accuracy of inertial sensors has improved significantly, and error correction capabilities have advanced thanks to algorithms like deep learning, making inertial navigation more reliable.",
    question7: "How is it solved with deep learning?",
    answer7:
      "Deep learning can correct and predict errors from inertial sensors. Especially in sequence data, models like RNNs and LSTMs can make more accurate estimations.",
    question8: "What is Industry 4.0?",
    answer8:
      "Industry 4.0 refers to the digitalization, automation, and enhancement of industrial processes through data analytics. Smart factories and IoT are key pillars of this concept.",
    question9: "What is the relationship between INS and Industry 4.0?",
    answer9:
      "INS is used in Industry 4.0 for position tracking and motion control of autonomous vehicles and robots. It works in harmony with data analytics and automation systems.",
    question10: "What are the common outcomes of INS and Industry 4.0?",
    answer10:
      "Both technologies produce highly precise data, enable automation, and improve monitoring systems, leading to more efficient manufacturing processes.",
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
