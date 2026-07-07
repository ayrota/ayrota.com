export type Language = 'en' | 'tr';

export const translations = {

/* --------------------
   HERO
-------------------- */

homeHeroKicker: {
  en: 'IMU-BASED NAVIGATION SYSTEMS',
  tr: 'IMU TABANLI NAVİGASYON SİSTEMLERİ',
},

homeHeroTitle: {
  en: 'Inertial Navigation Independent from External Sources',
  tr: 'Harici Kaynaklardan Bağımsız Ataletsel Navigasyon',
},

homeHeroLead: {
  en: 'Ayrota develops navigation solutions based solely on inertial measurements for environments where GNSS is unavailable or unreliable.',
  tr: 'Ayrota, GNSS’in erişilemediği veya güvenilir olmadığı ortamlarda, yalnızca ataletsel ölçümlere dayalı navigasyon çözümleri geliştirir.',
},


heroPillarImu: {
  en: 'IMU BASED',
  tr: 'IMU TABANLI',
},

heroPillarSwapc: {
  en: 'LOW SWaP-C',
  tr: 'DÜŞÜK SWaP-C',
},

heroPillarEndToEnd: {
  en: 'END-TO-END SOLUTION',
  tr: 'UÇTAN UCA ÇÖZÜM',
},

heroPillarIndependent: {
  en: 'GNSS-INDEPENDENT',
  tr: 'GNSS İHTİYACI OLMADAN',
},

/* --------------------
   PRODUCTS
-------------------- */

productsKicker: {
  en: 'PRODUCTS & SOLUTIONS',
  tr: 'ÜRÜNLER VE ÇÖZÜMLER',
},

productsTitle: {
  en: 'Navigation products for autonomous systems.',
  tr: 'Otonom sistemler için navigasyon çözümleri.',
},

productsLead: {
  en: 'Software-defined navigation products built around inertial estimation, GNSS-independent operation and practical system integration.',
  tr: 'Ataletsel kestirim, GNSS bağımsız çalışma ve pratik sistem entegrasyonu etrafında şekillenen navigasyon ürünleri.',
},



productsKomanLead: {
  en: 'Engineered for mission-critical performance in GNSS-denied environments.',
  tr: 'GNSS’in kullanılamadığı ortamlarda görev kritik navigasyon ihtiyaçlarına odaklanan platform.',
},

productsKomanFeatureImu: {
  en: 'IMU-only navigation',
  tr: 'IMU odaklı navigasyon',
},

productsKomanFeatureGnss: {
  en: 'Operation in GNSS-denied environments',
  tr: 'GNSS olmayan ortamlarda çalışma',
},

productsKomanFeatureDynamic: {
  en: 'Robust estimation in dynamic conditions',
  tr: 'Dinamik koşullarda dayanıklı kestirim',
},

productsKomanFeatureRealtime: {
  en: 'Real-time, low-latency output',
  tr: 'Gerçek zamanlı, düşük gecikmeli çıktı',
},

productsExploreKoman: {
  en: 'EXPLORE KOMAN',
  tr: 'KOMAN’I KEŞFET',
},

productsTechnicalImu: {
  en: 'Inertial Navigation',
  tr: 'Ataletsel Navigasyon',
},

productsTechnicalAi: {
  en: 'Assisted Estimation',
  tr: 'Destekli Kestirim',
},

productsTechnicalRealtime: {
  en: 'Real-time Output',
  tr: 'Gerçek Zamanlı Çıktı',
},

productsTechnicalEmbedded: {
  en: 'Embedded Integration',
  tr: 'Gömülü Entegrasyon',
},


productsYorukDescription: {
  en: 'Route analytics platform for vehicle fleets.',
  tr: 'Araç filolarına özel rota analitik platformu.',
},

productsIlberDescription: {
  en: 'IMU data quality assurance platform.',
  tr: 'IMU veri kalite güvence platformu.',
},

productsYayaDescription: {
  en: 'Pedestrian dead reckoning software.',
  tr: 'Yaya kestirimli konumlama yazılımı.',
},

/* --------------------
   PLATFORMS
-------------------- */
platformsKicker: {
  en: 'SOLUTION AREAS',
  tr: 'ÇÖZÜM ALANLARI',
},

platformsLead: {
  en: 'Ayrota technologies are designed around navigation, estimation, data reliability, and software integration needs across autonomous and intelligent systems.',
  tr: 'Ayrota teknolojileri; otonom ve akıllı sistemlerde navigasyon, kestirim, veri güvenilirliği ve yazılım entegrasyonu ihtiyaçları etrafında yapılandırılır.',
},

platformsGroundTitle: {
  en: 'Ground Systems',
  tr: 'Kara Sistemleri',
},

platformsGroundText: {
  en: 'Software layers for ground vehicles, mobile platforms, and field robotics.',
  tr: 'Kara araçları, mobil platformlar ve saha robotikleri için yazılım katmanları.',
},

platformsAirTitle: {
  en: 'Air Systems',
  tr: 'Hava Sistemleri',
},

platformsAirText: {
  en: 'Navigation and estimation workflows for UAVs and aerial platforms.',
  tr: 'UAV ve hava platformları için navigasyon ve kestirim iş akışları.',
},

platformsSmartTitle: {
  en: 'Smart Platforms',
  tr: 'Akıllı Platformlar',
},

platformsSmartText: {
  en: 'Sensor-driven systems that require motion awareness and autonomy logic.',
  tr: 'Hareket farkındalığı ve otonomi mantığı gerektiren sensör tabanlı sistemler.',
},

platformsEndToEndTitle: {
  en: 'End-to-End Solutions',
  tr: 'Uçtan Uca Çözümler',
},

platformsEndToEndText: {
  en: 'End-to-end software solutions from sensor data to navigation output.',
  tr: 'Sensör verisinden operasyonel yazılıma uçtan uca çözüm.',
},


/* --------------------
   PROBLEM
-------------------- */

problemKicker: {
  en: 'INERTIAL NAVIGATION',
  tr: 'ATALETSEL NAVİGASYON',
},

problemTitle: {
  en: 'The foundation of independent navigation',
  tr: 'Bağımsız Navigasyonun Temeli',
},

problemLead: {
  en: 'Inertial navigation enables the maintenance of position, orientation, and motion awareness without reliance on external references. It forms the fundamental layer that preserves a system’s situational awareness when GNSS access is interrupted or environmental conditions challenge sensing systems.',
  tr: 'Ataletsel navigasyon, harici referanslara ihtiyaç duymadan konum, yönelim ve hareket bilgisinin sürdürülmesini sağlar. GNSS erişiminin kesintiye uğradığı veya çevresel koşulların algılama sistemlerini zorladığı durumlarda, sistemin hareket farkındalığını koruyan temel katmanı oluşturur.',
},

problemSecondLead: {
  en: 'Ayrota delivers navigation continuity with an IMU centered inertial core, without relying on complex and costly sensor stacks.',
  tr: 'Ayrota, IMU odaklı ataletsel navigasyon çekirdeğiyle karmaşık ve maliyetli sensör yığınlarına ihtiyaç duymadan navigasyon sürekliliği sağlar.',
},

problemFlowGnssTitle: {
  en: 'GNSS IS LOST',
  tr: 'GNSS KAYBOLUR',
},

problemFlowGnssSubtitle: {
  en: 'When a vehicle enters a challenging environment, GNSS can be lost or spoofed.',
  tr: 'Araç zorlu bir sahaya girdiğinde, GNSS kesilebilir veya yanıltılabilir.',
},

problemFlowSensorTitle: {
  en: 'MORE SENSORS REQUIRED',
  tr: 'DAHA FAZLA SENSÖR GEREKİR ',
},

problemFlowSensorSubtitle: {
  en: 'Solutions with additional sensors like cameras or LiDARs can address this but add significant cost.',
  tr: 'Kayıp ek kameralar veya yoğun işlem yükü getiren LiDARlarla çözülebilir ancak ek maliyet artar.',
},

problemFlowCoreTitle: {
  en: 'INERTIAL CORE',
  tr: 'ATALETSEL ÇEKİRDEK',
},

problemFlowCoreSubtitle: {
  en: 'Ayrota’s inertial core is designed to provide continuous navigation in GNSS-denied environments, using only IMU data and advanced estimation algorithms.',
  tr: 'Ayrota optimize edilmiş düşük SWaP-C mimarisiyle IMU tabanlı navigasyon sunar.',
},

problemFlowNavTitle: {
  en: 'NAVIGATION CONTINUES',
  tr: 'NAVİGASYON DEVAM EDER',
},

problemFlowNavSubtitle: {
  en: 'This allows for seamless position, orientation, and motion estimation without reliance on external references.',
  tr: 'Bu sayede harici dış referanslara ihtiyaç duyulmadan konum, yönelim ve hareket kestirimi kusursuzca tahmin edilir.',
},

/* --------------------
   CONTACT
-------------------- */

contactKicker: {
  en: 'CONTACT',
  tr: 'İLETİŞİM',
},

contactTitle: {
  en: 'Get in touch',
  tr: 'İletişime geçin',
},

corporateContactTitle: {
  en: 'Corporate contact',
  tr: 'Kurumsal iletişim',
},

corporateContactDescription: {
  en: 'Use the form for partnerships, pilot studies, evaluation access, and corporate inquiries.',
  tr: 'İş birlikleri, pilot çalışmalar, değerlendirme erişimi ve kurumsal konular için formu kullanın.',
},

contactLabelOrg: {
  en: 'PERSON / ORGANIZATION',
  tr: 'KİŞİ / KURUM',
},

contactLabelEmail: {
  en: 'CONTACT EMAIL',
  tr: 'İLETİŞİM E-POSTASI',
},

contactLabelMessage: {
  en: 'MESSAGE',
  tr: 'MESAJINIZ',
},

contactPlaceholderOrg: {
  en: 'Enter your name or organization',
  tr: 'Kurum / kişi adınızı girin',
},

contactPlaceholderEmail: {
  en: 'Enter your email address',
  tr: 'E-posta adresinizi girin',
},

contactPlaceholderMessage: {
  en: 'Write your message here...',
  tr: 'Mesajınızı buraya yazın...',
},

contactSubmit: {
  en: 'SEND MESSAGE',
  tr: 'MESAJ GÖNDER',
},

contactMapTitle: {
  en: 'Ayrota office location',
  tr: 'Ayrota ofis konumu',
},

/* --------------------
   FOOTER
-------------------- */
footerCopyright: {
  en: '© {{year}} Ayrota',
  tr: '© {{year}} Ayrota',
},

footerTaglineLine1: {
  en: 'Inertial navigation systems under active development.',
  tr: 'Aktif olarak geliştirilen ataletsel navigasyon sistemleri.',
},

footerTaglineLine2: {
  en: 'Evaluation and collaboration paths available where appropriate.',
  tr: 'Uygun durumlarda değerlendirme ve iş birliği yolları açıktır.',
},

footerPrivacy: {
  en: 'Privacy & Data Notice',
  tr: 'Gizlilik ve Veri Bildirimi',
},

/* --------------------
   ILBER PAGE
-------------------- */
/* --------------------
   ILBER PAGE - UPDATED
-------------------- */

ilberHeroStatement: {
  en: 'Turn your IMU logs into engineering reports.',
  tr: 'IMU verilerinizi mühendislik raporlarına dönüştürün.',
},

ilberHeroText: {
  en: 'İlber is Ayrota’s technical analysis and reporting service for IMU datasets. We analyze your data, identify quality and sensor-related issues, and deliver customer-specific engineering reports.',
  tr: 'İlber; IMU veri setleri için geliştirilen teknik analiz ve raporlama hizmetidir.',
},

ilberSendData: {
  en: 'REQUEST A TECHNICAL REVIEW',
  tr: 'TEKNİK GÖRÜŞME TALEP ET',
},

ilberMiniDetect: {
  en: 'Data Quality',
  tr: 'Veri Kalitesi',
},

ilberMiniRepair: {
  en: 'Sensor Health',
  tr: 'Sensör Sağlığı',
},

ilberMiniAnalyze: {
  en: 'Engineering Analysis',
  tr: 'Mühendislik Analizi',
},

ilberMiniValidate: {
  en: 'Custom Report',
  tr: 'Müşteriye Özel Rapor',
},

ilberAnalysisScope: {
  en: 'SCOPE',
  tr: 'İlber KAPSAMI',
},

ilberAnalysisScopeTitle: {
  en: 'We analyze your IMU data.',
  tr: 'IMU verilerinizi analiz ediyoruz.',
},

ilberAnalysisScopeText: {
  en: 'İlber evaluates IMU datasets across data integrity, sensor reliability and motion-related quality layers. The analysis scope is customized according to each customer’s data structure, test scenario and engineering needs.',
  tr: 'İlber; IMU veri setlerini veri bütünlüğü, sensör güvenilirliği ve hareket kaynaklı kalite katmanları üzerinden değerlendirir. Analiz kapsamı her müşterinin veri yapısına, test senaryosuna ve mühendislik ihtiyacına göre özelleştirilir.',
},

ilberIntegrityGroupTitle: {
  en: 'Data Quality & Integrity',
  tr: 'Veri Kalitesi ve Bütünlüğü',
},

ilberSensorGroupTitle: {
  en: 'Sensor Health & Signal Behavior',
  tr: 'Sensör Sağlığı ve Sinyal Davranışı',
},

ilberNavigationGroupTitle: {
  en: 'Motion, Flight & Consistency Analysis',
  tr: 'Hareket, Uçuş ve Tutarlılık Analizi',
},

ilberRepairTitle: {
  en: 'Missing Data & Timing Checks',
  tr: 'Eksik Veri ve Zamanlama Kontrolleri',
},

ilberConsistencyTitle: {
  en: 'Run-to-Run Consistency',
  tr: 'Testler Arası Tutarlılık',
},

ilberCadenceTitle: {
  en: 'Dataset Suitability Review',
  tr: 'Veri Seti Uygunluk Değerlendirmesi',
},

ilberSensorDomainTitle: {
  en: 'IMU Signal Quality',
  tr: 'IMU Sinyal Kalitesi',
},

ilberSensorHealthTitle: {
  en: 'Sensor Anomaly Detection',
  tr: 'Sensör Anomali Tespiti',
},

ilberPhysicalTitle: {
  en: 'Physical Plausibility Checks',
  tr: 'Fiziksel Uygunluk Kontrolleri',
},

ilberGnssTitle: {
  en: 'GNSS / INS Data Review',
  tr: 'GNSS / INS Veri İncelemesi',
},

ilberSpectralTitle: {
  en: 'Noise & Spectral Analysis',
  tr: 'Gürültü ve Spektral Analiz',
},

ilberMotionTitle: {
  en: 'Motion / Flight Behavior Analysis',
  tr: 'Hareket / Uçuş Davranışı Analizi',
},



ilberHowItWorks: {
  en: 'HOW IT WORKS',
  tr: 'İlber NASIL ÇALIŞIR?',
},

ilberWorkflowSendTitle: {
  en: 'Share your dataset.',
  tr: 'Veri setinizi paylaşın.',
},

ilberWorkflowSendText: {
  en: 'Send your IMU, INS or UAV flight logs for technical review.',
  tr: 'IMU, INS veya UAV uçuş loglarınızı teknik inceleme için paylaşın.',
},

ilberWorkflowAnalyzeTitle: {
  en: 'We analyze it.',
  tr: 'Analizi gerçekleştirelim.',
},

ilberWorkflowAnalyzeText: {
  en: 'Ayrota evaluates your data through İlber’s engineering analysis workflow.',
  tr: 'Ayrota, verinizi İlber’in mühendislik analiz süreciyle değerlendirir.',
},

ilberWorkflowReportTitle: {
  en: 'Receive your report.',
  tr: 'Raporunuzu teslim alın.',
},

ilberWorkflowReportText: {
  en: 'You receive a customer-specific PDF report with findings, plots and engineering comments.',
  tr: 'Bulgular, grafikler ve mühendislik yorumları içeren müşteriye özel PDF rapor teslim edilir.',
},

ilberWorkflowPreventTitle: {
  en: 'Decide faster.',
  tr: 'Daha hızlı karar alın.',
},

ilberWorkflowPreventText: {
  en: 'Identify data-related issues before they are misinterpreted as algorithm or software problems.',
  tr: 'Veri kaynaklı problemleri algoritma veya yazılım hatası olarak değerlendirmeden önce görün.',
},

exampleAnalyses: {
  en: 'Example Analyses',
  tr: 'Örnek Analizler',
},

ilberFinalCtaTitle: {
  en: 'Have IMU or flight logs?',
  tr: 'IMU veya uçuş loglarınız mı var?',
},

ilberFinalCtaAccent: {
  en: 'Let us turn them into an engineering report.',
  tr: 'Bunları mühendislik raporuna dönüştürelim.',
},
/* --------------------
   YORUK PAGE
-------------------- */

yorukHeroStatement: {
  en: 'Turn your vehicle fleet into a mobile sensor network.',
  tr: 'Araç filonuzu mobil sensör ağına dönüştürün.',
},

yorukHeroText: {
  en: 'YÖRÜK is a road and driving analytics platform that leverages mobile device GPS and IMU signals to generate insights on road quality, route comfort, driving safety, and driver attention/fatigue risk through mobile camera data.',
  tr: 'YÖRÜK, Mobil cihaz GPS ve IMU sinyalleriyle yol kalitesi, rota konforu, mobil kamera ile sürücü dikkat/uyku riski analizi üretmeyi hedefleyen yol ve sürüş analitiği platformu.',
},

yorukMiniFleet: {
  en: 'Fleet Operations',
  tr: 'Filo Operasyonları',
},

yorukMiniRoute: {
  en: 'Road Quality',
  tr: 'Yol Kalitesi',
},

yorukMiniRoadHealth: {
  en: 'Driving Safety',
  tr: 'Sürüş Güvenliği',
},

yorukMiniImu: {
  en: 'GPS + IMU Analytics',
  tr: 'GPS + IMU Analitiği',
},

yorukScopeTitle: {
  en: 'PLATFORM CAPABILITIES',
  tr: 'PLATFORM YETENEKLERİ',
},

yorukScopeMainTitle: {
  en: 'Road and driving analytics from existing vehicles.',
  tr: 'Mevcut araçlardan yol ve sürüş analitiği.',
},

yorukScopeText: {
  en: 'YÖRÜK turns existing vehicles into mobile data sources and helps organizations analyze road quality, route performance, driving behavior and operational risk from one platform.',
  tr: 'YÖRÜK, mevcut araçları mobil veri kaynaklarına dönüştürerek yol kalitesi, rota performansı, sürüş davranışı ve operasyonel riskleri tek platformda analiz eder.',
},

yorukRoadGroupTitle: {
  en: 'Road Intelligence',
  tr: 'Yol Zekâsı',
},

yorukSignalGroupTitle: {
  en: 'Vehicle Motion Analytics',
  tr: 'Araç Hareket Analitiği',
},

yorukFleetGroupTitle: {
  en: 'Operational Decision Support',
  tr: 'Operasyonel Karar Desteği',
},

yorukCapabilityRoadHealth: {
  en: 'Road condition analysis',
  tr: 'Yol durumu analizi',
},

yorukCapabilityRouteQuality: {
  en: 'Route and segment evaluation',
  tr: 'Rota ve segment değerlendirmesi',
},

yorukCapabilitySurfaceCondition: {
  en: 'Road quality and comfort scoring',
  tr: 'Yol kalitesi ve konfor skorlama',
},

yorukCapabilityImuSensing: {
  en: 'GPS and IMU data collection',
  tr: 'GPS ve IMU veri toplama',
},

yorukCapabilityVibration: {
  en: 'Motion and vibration analysis',
  tr: 'Hareket ve titreşim analizi',
},

yorukCapabilityAnomaly: {
  en: 'Driving behavior insights',
  tr: 'Sürüş davranışı içgörüleri',
},

yorukCapabilityFleetAnalytics: {
  en: 'Fleet and route performance analytics',
  tr: 'Filo ve rota performans analitiği',
},

yorukCapabilityMapVisualization: {
  en: 'Live map visualization',
  tr: 'Canlı harita görselleştirme',
},

yorukCapabilityDashboard: {
  en: 'Analytics dashboard and reports',
  tr: 'Analiz paneli ve raporlar',
},

yorukHowItWorks: {
  en: 'HOW IT WORKS',
  tr: 'NASIL ÇALIŞIR',
},

yorukWorkflowCollectTitle: {
  en: 'Collect data.',
  tr: 'Veri Topla.',
},

yorukWorkflowCollectText: {
  en: 'Vehicles collect GPS and IMU data during their daily operations through tablet-based trip recording.',
  tr: 'Araçlar günlük operasyonları sırasında tablet tabanlı sefer kaydı ile GPS ve IMU verisi toplar.',
},

yorukWorkflowAnalyzeTitle: {
  en: 'Analyze motion.',
  tr: 'Hareketi Analiz Et.',
},

yorukWorkflowAnalyzeText: {
  en: 'YÖRÜK processes vehicle motion signals to evaluate road condition, ride comfort, driving safety and route performance.',
  tr: 'YÖRÜK, araç hareket sinyallerini işleyerek yol durumu, sürüş konforu, sürüş güvenliği ve rota performansını değerlendirir.',
},

yorukWorkflowMapTitle: {
  en: 'Visualize insights.',
  tr: 'İçgörüleri Görselleştir.',
},

yorukWorkflowMapText: {
  en: 'Road quality, risky segments, route performance and operational indicators are displayed through maps and dashboards.',
  tr: 'Yol kalitesi, riskli segmentler, rota performansı ve operasyonel göstergeler haritalar ve paneller üzerinden görüntülenir.',
},

yorukWorkflowReportTitle: {
  en: 'Support decisions.',
  tr: 'Kararları Destekle.',
},

yorukWorkflowReportText: {
  en: 'Reports help teams prioritize maintenance, improve driving safety, compare routes and manage operational risks.',
  tr: 'Raporlar; bakım önceliklendirme, sürüş güvenliğini iyileştirme, rota karşılaştırma ve operasyonel risk yönetimi süreçlerini destekler.',
},

yorukFinalCtaTitle: {
  en: 'Create road and driving analytics from your existing fleet.',
  tr: 'Mevcut filonuzdan yol ve sürüş analitiği üretin.',
},

yorukFinalCtaAccent: {
  en: 'Use daily vehicle operations to understand road quality, comfort, safety and performance.',
  tr: 'Günlük araç operasyonlarınızı yol kalitesi, konfor, güvenlik ve performans içgörülerine dönüştürün.',
},

yorukCtaButton: {
  en: 'REQUEST A PILOT',
  tr: 'PİLOT TALEP ET',
},
/* --------------------
   Koman PAGE
-------------------- */

komanHeroStatement: {
  en: 'Navigation without assuming GNSS.',
  tr: 'GNSS varsaymadan navigasyon.',
},

komanHeroText: {
  en: 'KOMAN is an autonomous aerial system designed to maintain navigation and mission awareness when GNSS signals become unavailable, unreliable or intentionally disrupted.',
  tr: 'KOMAN, GNSS sinyallerinin kaybolduğu, güvenilmez hale geldiği veya kasıtlı olarak engellendiği ortamlarda navigasyon ve görev farkındalığını sürdürebilmek için geliştirilen otonom hava sistemidir.',
},

komanMiniImu: {
  en: 'IMU-based.',
  tr: 'IMU tabanlı',
},

komanMiniGnss: {
  en: 'GNSS-denied.',
  tr: 'GNSS olmayan ortamlar',
},

komanMiniAutonomy: {
  en: 'Autonomous.',
  tr: 'Otonom',
},

komanMiniRealtime: {
  en: 'Real-time.',
  tr: 'Gerçek zamanlı',
},

komanScopeTitle: {
  en: 'SYSTEM CAPABILITIES',
  tr: 'SİSTEM KABİLİYETLERİ',
},

komanScopeMainTitle: {
  en: 'Built for GNSS-denied autonomous operation.',
  tr: 'GNSS olmayan ortamlarda otonom görevler için tasarlandı.',
},

komanScopeText: {
  en: 'KOMAN combines autonomous flight, IMU-based navigation and ground control capabilities into a single operational system for environments where external positioning references cannot be trusted.',
  tr: 'KOMAN; harici konumlama referanslarının güvenilemediği ortamlarda görev yapmak üzere geliştirilen otonom uçuş, IMU tabanlı navigasyon ve yer kontrol yeteneklerini tek bir sistemde bir araya getirir.',
},

komanNavigationGroupTitle: {
  en: 'Navigation',
  tr: 'Navigasyon',
},

komanAutonomyGroupTitle: {
  en: 'Autonomy',
  tr: 'Otonomi',
},

komanGroundControlGroupTitle: {
  en: 'Ground Control',
  tr: 'Yer Kontrol',
},

komanCapabilityPositioning: {
  en: 'IMU-based position estimation',
  tr: 'IMU tabanlı konum kestirimi',
},

komanCapabilityHeading: {
  en: 'Heading estimation',
  tr: 'Yön kestirimi',
},

komanCapabilityGnssDenied: {
  en: 'GNSS-denied navigation',
  tr: 'GNSS olmayan ortamda navigasyon',
},

komanCapabilityAutonomy: {
  en: 'Autonomous mission execution',
  tr: 'Otonom görev icrası',
},

komanCapabilityWaypoint: {
  en: 'Waypoint navigation',
  tr: 'Waypoint navigasyonu',
},

komanCapabilityRealtime: {
  en: 'Real-time operation',
  tr: 'Gerçek zamanlı operasyon',
},

komanCapabilityGroundControl: {
  en: 'Ground control integration',
  tr: 'Yer kontrol entegrasyonu',
},

komanCapabilityMission: {
  en: 'Mission planning',
  tr: 'Görev planlama',
},


komanHowItWorks: {
  en: 'HOW IT WORKS',
  tr: 'NASIL ÇALIŞIR?',
},

komanWorkflowSenseTitle: {
  en: 'Sense motion.',
  tr: 'Hareketi algılar.',
},

komanWorkflowSenseText: {
  en: 'Collects inertial measurements from onboard sensors throughout the mission.',
  tr: 'Görev boyunca dahili sensörlerden ataletsel ölçümler toplar.',
},

komanWorkflowEstimateTitle: {
  en: 'Estimate position.',
  tr: 'Konumu kestirir.',
},

komanWorkflowEstimateText: {
  en: 'Processes inertial data to estimate position, heading and displacement when GNSS is unavailable.',
  tr: 'GNSS bulunmadığında konum, yön ve yer değiştirme kestirimi yapar.',
},

komanWorkflowNavigateTitle: {
  en: 'Navigate autonomously.',
  tr: 'Otonom ilerler.',
},

komanWorkflowNavigateText: {
  en: 'Uses estimated navigation states to execute waypoint and mission objectives.',
  tr: 'Waypoint ve görev hedeflerini gerçekleştirmek için navigasyon çıktıları kullanılır.',
},

komanWorkflowMonitorTitle: {
  en: 'Monitor the mission.',
  tr: 'Görevi izler.',
},

komanWorkflowMonitorText: {
  en: 'Streams telemetry and mission status to the ground control interface in real time.',
  tr: 'Telemetri ve görev durumunu gerçek zamanlı olarak yer kontrol arayüzüne aktarır.',
},

komanFinalCtaTitle: {
  en: 'Evaluate GNSS-denied operations.',
  tr: 'GNSS olmayan operasyonları değerlendirin.',
},

komanFinalCtaAccent: {
  en: 'Start with a technical demonstration.',
  tr: 'Teknik demonstrasyonla başlayın.',
},

komanCtaButton: {
  en: 'CONTACT US',
  tr: 'İLETİŞİME GEÇ',
},
/* --------------------
   YAYA PAGE
-------------------- */

yayaHeroStatement: {
  en: 'Pedestrian positioning when GNSS is unavailable.',
  tr: 'GNSS olmadığında yaya konum kestirimi.',
},

yayaHeroText: {
  en: 'YAYA is a pedestrian navigation layer that estimates motion, heading and position from inertial signals in indoor or GNSS-limited environments.',
  tr: 'YAYA, kapalı alanlarda veya GNSS’in sınırlı olduğu ortamlarda ataletsel sinyallerden hareket, yön ve konum kestirimi yapan yaya navigasyon katmanıdır.',
},

yayaMiniPdr: {
  en: 'PDR.',
  tr: 'PDR',
},

yayaMiniIndoor: {
  en: 'Indoor.',
  tr: 'Kapalı alan',
},

yayaMiniImu: {
  en: 'IMU-based.',
  tr: 'IMU tabanlı',
},

yayaMiniRealtime: {
  en: 'Real-time.',
  tr: 'Gerçek zamanlı',
},

yayaScopeTitle: {
  en: 'SYSTEM CAPABILITIES',
  tr: 'SİSTEM KABİLİYETLERİ',
},

yayaScopeMainTitle: {
  en: 'Built for GNSS-limited pedestrian navigation.',
  tr: 'GNSS sınırlı ortamlarda yaya navigasyonu için tasarlandı.',
},

yayaScopeText: {
  en: 'YAYA combines pedestrian dead reckoning, inertial motion analysis and real-time positioning output into a software layer for indoor and GNSS-limited navigation use cases.',
  tr: 'YAYA; kapalı alan ve GNSS sınırlı navigasyon senaryoları için yaya kestirimli konumlama, ataletsel hareket analizi ve gerçek zamanlı konum çıktısını tek bir yazılım katmanında birleştirir.',
},

yayaNavigationGroupTitle: {
  en: 'Navigation',
  tr: 'Navigasyon',
},

yayaMotionGroupTitle: {
  en: 'Motion Analysis',
  tr: 'Hareket Analizi',
},

yayaIntegrationGroupTitle: {
  en: 'Integration',
  tr: 'Entegrasyon',
},

yayaCapabilityPdr: {
  en: 'Pedestrian dead reckoning',
  tr: 'Yaya kestirimli konumlama',
},

yayaCapabilityPositioning: {
  en: 'IMU-based position estimation',
  tr: 'IMU tabanlı konum kestirimi',
},

yayaCapabilityHeading: {
  en: 'Heading estimation',
  tr: 'Yön kestirimi',
},

yayaCapabilityStepDetection: {
  en: 'Step detection',
  tr: 'Adım tespiti',
},

yayaCapabilityMotionClassification: {
  en: 'Motion classification',
  tr: 'Hareket sınıflandırma',
},

yayaCapabilityDriftControl: {
  en: 'Drift control logic',
  tr: 'Sapma kontrol mantığı',
},

yayaCapabilityMobile: {
  en: 'Mobile integration',
  tr: 'Mobil entegrasyon',
},

yayaCapabilityRealtime: {
  en: 'Real-time positioning output',
  tr: 'Gerçek zamanlı konum çıktısı',
},

yayaCapabilityApplicationOutput: {
  en: 'Application-level navigation output',
  tr: 'Uygulama seviyesi navigasyon çıktısı',
},

yayaHowItWorks: {
  en: 'HOW IT WORKS',
  tr: 'NASIL ÇALIŞIR?',
},

yayaWorkflowSenseTitle: {
  en: 'Sense motion.',
  tr: 'Hareketi algılar.',
},

yayaWorkflowSenseText: {
  en: 'Collects inertial measurements from mobile or wearable sensors during pedestrian movement.',
  tr: 'Yaya hareketi sırasında mobil veya giyilebilir sensörlerden ataletsel ölçümler toplar.',
},

yayaWorkflowDetectTitle: {
  en: 'Detect steps.',
  tr: 'Adımları tespit eder.',
},

yayaWorkflowDetectText: {
  en: 'Identifies step events, walking patterns and motion phases from inertial signals.',
  tr: 'Ataletsel sinyallerden adım olaylarını, yürüme örüntülerini ve hareket fazlarını belirler.',
},

yayaWorkflowEstimateTitle: {
  en: 'Estimate position.',
  tr: 'Konumu kestirir.',
},

yayaWorkflowEstimateText: {
  en: 'Uses PDR logic to estimate pedestrian displacement, heading and position over time.',
  tr: 'PDR mantığıyla yaya yer değiştirmesini, yönünü ve zamana bağlı konumunu kestirir.',
},

yayaWorkflowOutputTitle: {
  en: 'Deliver navigation output.',
  tr: 'Navigasyon çıktısı üretir.',
},

yayaWorkflowOutputText: {
  en: 'Provides real-time positioning and movement outputs for higher-level applications.',
  tr: 'Üst seviye uygulamalar için gerçek zamanlı konum ve hareket çıktıları sağlar.',
},

yayaFinalCtaTitle: {
  en: 'Evaluate indoor pedestrian navigation.',
  tr: 'Kapalı alan yaya navigasyonunu değerlendirin.',
},

yayaFinalCtaAccent: {
  en: 'Start with a technical demonstration.',
  tr: 'Teknik demonstrasyonla başlayın.',
},

yayaCtaButton: {
  en: 'CONTACT US',
  tr: 'İLETİŞİME GEÇ',
},

/* --------------------
   PRIVACY / DATA NOTICE
-------------------- */
privacyTitle: {
  en: 'Privacy & Data Notice',
  tr: 'Gizlilik ve Veri Bildirimi',
},

privacyIntro: {
  en: 'Ayrota collects limited personal data solely for evaluation purposes.',
  tr: 'Ayrota, yalnızca değerlendirme amacıyla sınırlı kişisel veri toplar.',
},

privacyParagraph1: {
  en: 'Data collected via the contact form may include organization or project name, contact email address, and high-level inquiry context.',
  tr: 'İletişim formu aracılığıyla; kurum veya proje adı, iletişim e-posta adresi ve talebe ilişkin yüksek seviyeli bağlam bilgileri toplanabilir.',
},

privacyParagraph2: {
  en: 'This website does not perform tracking, profiling, or marketing analytics.',
  tr: 'Bu web sitesinde izleme, profilleme veya pazarlama amaçlı analiz yapılmamaktadır.',
},

privacyParagraph3: {
  en: 'Form submissions are processed through a third-party form handling service (Basin) and stored securely for review.',
  tr: 'Form iletileri, üçüncü taraf bir form hizmeti (Basin) üzerinden işlenir ve değerlendirme amacıyla güvenli şekilde saklanır.',
},

privacyParagraph4: {
  en: 'Personal data is retained only as long as necessary to assess potential engagement and is deleted periodically.',
  tr: 'Kişisel veriler, olası bir iş birliğini değerlendirmek için gerekli süre boyunca saklanır ve düzenli olarak silinir.',
},

privacyParagraph5: {
  en: 'Where applicable, data handling complies with KVKK and GDPR.',
  tr: 'Veri işleme süreçleri, uygulanabilir olduğu ölçüde KVKK ve GDPR ile uyumludur.',
},

privacyConsent: {
  en: 'By submitting the contact form, you acknowledge and consent to this data processing for evaluation purposes.',
  tr: 'İletişim formunu göndererek, bu veri işleme sürecini değerlendirme amacıyla kabul etmiş sayılırsınız.',
},

privacyCookieTitle: {
  en: 'Cookie Notice',
  tr: 'Çerez Bildirimi',
},

privacyCookieText: {
  en: 'This website does not use tracking or marketing cookies. Any technical cookies used are strictly required for basic functionality and security.',
  tr: 'Bu web sitesinde izleme veya pazarlama amaçlı çerez kullanılmaz. Kullanılması muhtemel teknik çerezler yalnızca temel işlevsellik ve güvenlik için gereklidir.',
},

internshipTitle: {
  en: 'Internship Applications',
  tr: 'Staj Başvuruları',
},

internshipDescription: {
  en: 'Student applications are accepted exclusively through the Google Form. Please use the link below.',
  tr: 'Öğrenci başvuruları yalnızca Google Form üzerinden kabul edilmektedir. Lütfen aşağıdaki bağlantıyı kullanın.',
},

contactInternshipCta: {
  en: 'Apply via Google Form',
  tr: 'Google Form Üzerinden Başvur',
},


} as const;





export type TranslationKey = keyof typeof translations;