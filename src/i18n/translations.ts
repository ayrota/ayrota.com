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
ilberHeroStatement: {
  en: 'Learn whether your IMU data is reliable.',
  tr: 'IMU verinizin güvenilir olup olmadığını öğrenin',
},

ilberHeroText: {
  en: 'İlber analyzes your data end-to-end, detects critical problems, and delivers engineering-ready quality reports.',
  tr: 'İlber, verinizi tüm yönleriyle analiz eder, kritik problemleri tespit eder ve mühendislik raporuyla size sunar.',
},

ilberSendData: {
  en: 'CONTACT US',
  tr: 'İLETİŞİME GEÇ',
},

ilberMiniDetect: {
  en: 'Quality Control',
  tr: 'Kalite kontrol',
},

ilberMiniAnalyze: {
  en: 'Analyze',
  tr: 'Analiz',
},

ilberMiniRepair: {
  en: 'Repair',
  tr: 'Onarım',
},

ilberMiniValidate: {
  en: 'Report',
  tr: 'Rapor',
},

ilberAnalysisScope: {
  en: 'ANALYSIS SCOPE',
  tr: 'ANALİZ KAPSAMIMIZ',
},

ilberAnalysisScopeTitle: {
  en: 'Your IMU session is analyzed across measurable quality layers.',
  tr: 'IMU oturumunuz ölçülebilir kalite katmanlarıyla analiz edilir.',
},

ilberAnalysisScopeText: {
  en: 'İlber evaluates data integrity, sensor reliability and navigation quality together to determine whether your dataset is suitable for engineering use.',
  tr: 'İlber; veri bütünlüğünü, sensör güvenilirliğini ve navigasyon kalitesini birlikte değerlendirerek veri setinizin mühendislik kullanımı için uygun olup olmadığını gösterir.',
},

ilberIntegrityGroupTitle: {
  en: 'Data Integrity',
  tr: 'Veri Bütünlüğü',
},

ilberIntegrityGroupText: {
  en: 'Missing samples, timing problems and internal inconsistencies are detected before they affect algorithm development.',
  tr: 'Eksik örnekler, zamanlama problemleri ve iç tutarsızlıklar algoritma geliştirmeyi etkilemeden önce tespit edilir.',
},

ilberSensorGroupTitle: {
  en: 'Sensor Reliability',
  tr: 'Sensör Güvenilirliği',
},

ilberSensorGroupText: {
  en: 'IMU signals are checked for physical validity, stability and sensor-level degradation.',
  tr: 'IMU sinyalleri fiziksel geçerlilik, kararlılık ve sensör seviyesindeki bozulmalar açısından incelenir.',
},

ilberNavigationGroupTitle: {
  en: 'Advanced Analysis',
  tr: 'İleri Analizler',
},

ilberNavigationGroupText: {
  en: 'GNSS quality, motion behaviour and frequency-domain characteristics are analyzed to reveal session-level risks.',
  tr: 'GNSS kalitesi, hareket davranışı ve frekans alanı karakteristikleri analiz edilerek oturum seviyesindeki riskler ortaya çıkarılır.',
},

ilberRepairTitle: {
  en: 'Repair',
  tr: 'Onarım',
},

ilberSensorDomainTitle: {
  en: 'Sensor Domain Analysis',
  tr: 'Sensör Domain Analizi',
},

ilberSensorHealthTitle: {
  en: 'Sensor Health Analysis',
  tr: 'Sensör Sağlık Analizi',
},

ilberGnssTitle: {
  en: 'GNSS Quality Analysis',
  tr: 'GNSS Kalite Analizi',
},

ilberSpectralTitle: {
  en: 'Spectral Analysis',
  tr: 'Spektral Analiz',
},

ilberPhysicalTitle: {
  en: 'Physical Consistency Checks',
  tr: 'Fiziksel Tutarlılık Kontrolleri',
},

ilberConsistencyTitle: {
  en: 'Consistency Analysis',
  tr: 'Tutarlılık Analizi',
},

ilberCadenceTitle: {
  en: 'Cadence Analysis',
  tr: 'Ritim Analizi',
},

ilberMotionTitle: {
  en: 'Motion Analysis',
  tr: 'Hareket Analizi',
},

ilberSessionReportTitle: {
  en: 'Session Report',
  tr: 'Oturum Raporu',
},

ilberHowItWorks: {
  en: 'HOW IT WORKS',
  tr: 'NASIL ÇALIŞIR?',
},

ilberWorkflowSendTitle: {
  en: 'Send your data.',
  tr: 'Verinizi gönderin.',
},

ilberWorkflowSendText: {
  en: 'Share your IMU dataset securely for technical review.',
  tr: 'IMU veri setinizi güvenli şekilde teknik inceleme için iletin.',
},

ilberWorkflowAnalyzeTitle: {
  en: 'We analyze it.',
  tr: 'Analiz edelim.',
},

ilberWorkflowAnalyzeText: {
  en: 'Your data is evaluated through İlber analysis modules.',
  tr: 'Veriniz İlber analiz modülleriyle değerlendirilir.',
},

ilberWorkflowReportTitle: {
  en: 'Receive your report.',
  tr: 'Raporunuzu alın.',
},

ilberWorkflowReportText: {
  en: 'Get a structured engineering report with quality findings.',
  tr: 'Kalite bulgularını içeren yapılandırılmış mühendislik raporunuzu alın.',
},

ilberWorkflowPreventTitle: {
  en: 'See problems early.',
  tr: 'Problemleri erken görün.',
},
exampleAnalyses: {
  en: 'Example Analyses',
  tr: 'Örnek Analizler',

},

ilberWorkflowPreventText: {
  en: 'Reduce debugging time before algorithm development begins.',
  tr: 'Algoritma geliştirme başlamadan önce hata ayıklama süresini azaltın.',
},

ilberFinalCtaTitle: {
  en: 'Send your data.',
  tr: 'Verinizi gönderin.',
},

ilberFinalCtaAccent: {
  en: 'Let us analyze it.',
  tr: 'Analizi yapalım.',
},
/* --------------------
   YORUK PAGE
-------------------- */

yorukHeroStatement: {
  en: 'Route intelligence from vehicle motion.',
  tr: 'Araç hareketinden rota zekâsı.',
},

yorukHeroText: {
  en: 'YÖRÜK analyzes IMU-supported vehicle motion data to reveal road health, route quality, vibration events and operational patterns across fleet routes.',
  tr: 'YÖRÜK, IMU destekli araç hareket verilerini analiz ederek filo rotalarında yol sağlığını, rota kalitesini, titreşim olaylarını ve operasyonel örüntüleri görünür hale getirir.',
},

yorukMiniFleet: {
  en: 'Fleet analytics',
  tr: 'Filo analitiği',
},

yorukMiniRoute: {
  en: 'Route quality',
  tr: 'Rota kalitesi',
},

yorukMiniRoadHealth: {
  en: 'Road health',
  tr: 'Yol sağlığı',
},

yorukMiniImu: {
  en: 'IMU-supported',
  tr: 'IMU destekli',
},

yorukScopeTitle: {
  en: 'SYSTEM CAPABILITIES',
  tr: 'SİSTEM KABİLİYETLERİ',
},

yorukScopeMainTitle: {
  en: 'Built for fleet-scale road intelligence.',
  tr: 'Filo ölçeğinde yol zekâsı için tasarlandı.',
},

yorukScopeText: {
  en: 'YÖRÜK turns vehicle motion and inertial signals into route-level insights for road health monitoring, operational reporting and fleet decision support.',
  tr: 'YÖRÜK; araç hareketi ve ataletsel sinyalleri yol sağlığı izleme, operasyonel raporlama ve filo karar desteği için rota seviyesinde içgörülere dönüştürür.',
},

yorukRoadGroupTitle: {
  en: 'Road Intelligence',
  tr: 'Yol Zekâsı',
},

yorukSignalGroupTitle: {
  en: 'Signal Analysis',
  tr: 'Sinyal Analizi',
},

yorukFleetGroupTitle: {
  en: 'Fleet Operations',
  tr: 'Yolcu Güvenliği',
},

yorukCapabilityRoadHealth: {
  en: 'Road health monitoring',
  tr: 'Yol sağlığı izleme',
},

yorukCapabilityRouteQuality: {
  en: 'Route quality analysis',
  tr: 'Rota kalite analizi',
},

yorukCapabilitySurfaceCondition: {
  en: 'Surface condition signals',
  tr: 'Yüzey durumu sinyalleri',
},

yorukCapabilityImuSensing: {
  en: 'IMU-supported sensing',
  tr: 'IMU destekli algılama',
},

yorukCapabilityVibration: {
  en: 'Vibration event analysis',
  tr: 'Titreşim olayı analizi',
},

yorukCapabilityAnomaly: {
  en: 'Road anomaly detection',
  tr: 'Yol anomalisi tespiti',
},

yorukCapabilityFleetAnalytics: {
  en: 'Driver tracking',
  tr: 'Sürücü Takip',
},

yorukCapabilityMapVisualization: {
  en: 'Route map visualization',
  tr: 'Rota haritası görselleştirme',
},

yorukCapabilityDashboard: {
  en: 'Operational dashboard',
  tr: 'Admin paneli',
},

yorukHowItWorks: {
  en: 'HOW IT WORKS',
  tr: 'NASIL ÇALIŞIR?',
},

yorukWorkflowCollectTitle: {
  en: 'Collect vehicle data.',
  tr: 'Araç verisini toplar.',
},

yorukWorkflowCollectText: {
  en: 'Receives route, motion and IMU-supported signals from fleet vehicles.',
  tr: 'Filo araçlarından rota, hareket ve IMU destekli sinyalleri alır.',
},

yorukWorkflowAnalyzeTitle: {
  en: 'Analyze road signals.',
  tr: 'Yol sinyallerini analiz eder.',
},

yorukWorkflowAnalyzeText: {
  en: 'Detects vibration, anomaly and motion patterns along the route.',
  tr: 'Rota boyunca titreşim, anomali ve hareket örüntülerini tespit eder.',
},

yorukWorkflowMapTitle: {
  en: 'Map route quality.',
  tr: 'Rota kalitesini haritalar.',
},

yorukWorkflowMapText: {
  en: 'Turns vehicle motion signals into route-level road quality insights.',
  tr: 'Araç hareket sinyallerini rota seviyesinde yol kalite içgörülerine dönüştürür.',
},

yorukWorkflowReportTitle: {
  en: 'Report fleet insights.',
  tr: 'Filo içgörülerini raporlar.',
},

yorukWorkflowReportText: {
  en: 'Produces operational outputs for maintenance, planning and route evaluation.',
  tr: 'Bakım, planlama ve rota değerlendirmesi için operasyonel çıktılar üretir.',
},

yorukFinalCtaTitle: {
  en: 'Evaluate your fleet routes.',
  tr: 'Filo rotalarınızı değerlendirin.',
},

yorukFinalCtaAccent: {
  en: 'See road health from motion data.',
  tr: 'Yol sağlığını hareket verisinden görün.',
},

yorukCtaButton: {
  en: 'CONTACT US',
  tr: 'İLETİŞİME GEÇ',
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