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



productsAlkonLead: {
  en: 'Engineered for mission-critical performance in GNSS-denied environments.',
  tr: 'GNSS’in kullanılamadığı ortamlarda görev kritik navigasyon ihtiyaçlarına odaklanan platform.',
},

productsAlkonFeatureImu: {
  en: 'IMU-only navigation',
  tr: 'IMU odaklı navigasyon',
},

productsAlkonFeatureGnss: {
  en: 'Operation in GNSS-denied environments',
  tr: 'GNSS olmayan ortamlarda çalışma',
},

productsAlkonFeatureDynamic: {
  en: 'Robust estimation in dynamic conditions',
  tr: 'Dinamik koşullarda dayanıklı kestirim',
},

productsAlkonFeatureRealtime: {
  en: 'Real-time, low-latency output',
  tr: 'Gerçek zamanlı, düşük gecikmeli çıktı',
},

productsExploreAlkon: {
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
   HOME / PLATFORMS
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
   NEW / PROBLEM
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
  en: 'Traditional approaches attempt to solve this loss with additional cameras or LiDARs that introduce heavy processing load, but can be blocked by environmental obstacles.',
  tr: 'Geleneksel yöntemler bu kaybı ek kameralar veya yoğun işlem yükü getiren LiDARlarla çözmeye çalışsa da çevresel engellere takılabilir.',
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
  en: 'Contact us to send your data for evaluation.',
  tr: 'Analiz için iletişim',
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
  en: 'Route analytics for vehicle fleets.',
  tr: 'Araç filolarına özel rota analitiği.',
},

yorukHeroText: {
  en: 'YÖRÜK analyzes IMU-supported vehicle data to reveal road health, route quality, vibration events, and operational patterns across fleet routes.',
  tr: 'YÖRÜK, IMU destekli araç verilerini analiz ederek filo rotalarında yol sağlık durumu, rota kalitesi, titreşim olayları ve operasyonel örüntüleri görünür hale getirir.',
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
  en: 'TECHNICAL SCOPE',
  tr: 'TEKNİK KAPSAM',
},

yorukScopeFleet: {
  en: 'Fleet data analytics',
  tr: 'Filo veri analitiği',
},

yorukScopeRoute: {
  en: 'Route quality analysis',
  tr: 'Rota kalite analizi',
},

yorukScopeRoadHealth: {
  en: 'Road health monitoring',
  tr: 'Yol sağlık durumu izleme',
},

yorukScopeImu: {
  en: 'IMU-supported sensing',
  tr: 'IMU destekli algılama',
},

yorukScopeAnomaly: {
  en: 'Road anomaly detection',
  tr: 'Yol anomalisi tespiti',
},

yorukScopeVibration: {
  en: 'Vibration event analysis',
  tr: 'Titreşim olayı analizi',
},

yorukScopeSurface: {
  en: 'Surface condition signals',
  tr: 'Yüzey durumu sinyalleri',
},

yorukScopeMap: {
  en: 'Route map visualization',
  tr: 'Rota haritası görselleştirme',
},

yorukScopeReport: {
  en: 'Operational reporting',
  tr: 'Operasyonel raporlama',
},

yorukScopeDashboard: {
  en: 'Fleet dashboard',
  tr: 'Filo paneli',
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
  en: 'Receives route, motion, and IMU-supported signals from fleet vehicles.',
  tr: 'Filo araçlarından rota, hareket ve IMU destekli sinyalleri alır.',
},

yorukWorkflowAnalyzeTitle: {
  en: 'Analyze road signals.',
  tr: 'Yol sinyallerini analiz eder.',
},

yorukWorkflowAnalyzeText: {
  en: 'Detects vibration, anomaly, and motion patterns along the route.',
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
  en: 'Produces operational outputs for maintenance, planning, and route evaluation.',
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
  en: 'REQUEST PILOT',
  tr: 'PİLOT TALEP ET',
},

/* --------------------
   ALKON PAGE
-------------------- */

alkonHeroStatement: {
  en: 'Navigation without assuming GNSS.',
  tr: 'GNSS varsaymadan navigasyon.',
},

alkonHeroText: {
  en: 'KOMAN is an IMU-focused navigation core designed to support autonomous systems when external positioning references become unreliable or unavailable.',
  tr: 'KOMAN, harici konumlama referansları güvenilir olmadığında veya tamamen kaybolduğunda otonom sistemleri desteklemek için geliştirilen IMU odaklı navigasyon çekirdeğidir.',
},

alkonMiniImu: {
  en: 'IMU-only.',
  tr: 'IMU odaklı',
},

alkonMiniGnss: {
  en: 'GNSS-denied.',
  tr: 'GNSS olmayan ortamlar',
},

alkonMiniDrift: {
  en: 'Bounded drift.',
  tr: 'Kontrollü sapma',
},

alkonMiniRealtime: {
  en: 'Real-time.',
  tr: 'Gerçek zamanlı',
},

alkonScopeTitle: {
  en: 'TECHNICAL SCOPE',
  tr: 'TEKNİK KAPSAM',
},

alkonScopeImuOnly: {
  en: 'IMU-only navigation',
  tr: 'IMU odaklı navigasyon',
},

alkonScopeGnssDenied: {
  en: 'GNSS-denied operation',
  tr: 'GNSS olmayan ortamda çalışma',
},

alkonScopeBoundedDrift: {
  en: 'Bounded drift behaviour',
  tr: 'Kontrollü sapma davranışı',
},

alkonScopeRealtime: {
  en: 'Real-time output',
  tr: 'Gerçek zamanlı çıktı',
},

alkonScopeResidualLearning: {
  en: 'Residual learning correction',
  tr: 'Artık hata öğrenimi',
},

alkonScopePhysics: {
  en: 'Physics-consistent modelling',
  tr: 'Fizik tutarlı modelleme',
},

alkonScopeIntegration: {
  en: 'MAVLink / ROS integration',
  tr: 'MAVLink / ROS entegrasyonu',
},

alkonScopeMission: {
  en: 'Mission-level interface',
  tr: 'Görev seviyesi arayüz',
},

alkonScopeEmbedded: {
  en: 'Embedded deployment',
  tr: 'Gömülü dağıtım',
},

alkonScopeValidation: {
  en: 'Validation workflow',
  tr: 'Doğrulama iş akışı',
},

alkonHowItWorks: {
  en: 'HOW IT WORKS',
  tr: 'NASIL ÇALIŞIR?',
},

alkonWorkflowInputTitle: {
  en: 'Read inertial data.',
  tr: 'Ataletsel veriyi alır.',
},

alkonWorkflowInputText: {
  en: 'Receives raw IMU measurements from the target platform.',
  tr: 'Hedef platformdan ham IMU ölçümlerini alır.',
},

alkonWorkflowEstimateTitle: {
  en: 'Estimate motion.',
  tr: 'Hareketi kestirir.',
},

alkonWorkflowEstimateText: {
  en: 'Combines inertial propagation with learned residual correction.',
  tr: 'Ataletsel yayılımı öğrenilmiş artık hata düzeltmesiyle birleştirir.',
},

alkonWorkflowBoundTitle: {
  en: 'Control drift.',
  tr: 'Sapmayı kontrol eder.',
},

alkonWorkflowBoundText: {
  en: 'Keeps error growth predictable within characterised operating limits.',
  tr: 'Hata büyümesini tanımlı çalışma sınırları içinde öngörülebilir tutar.',
},

alkonWorkflowIntegrateTitle: {
  en: 'Integrate with systems.',
  tr: 'Sistemlere entegre olur.',
},

alkonWorkflowIntegrateText: {
  en: 'Provides navigation outputs to higher-level mission and control layers.',
  tr: 'Üst seviye görev ve kontrol katmanlarına navigasyon çıktısı sağlar.',
},

alkonFinalCtaTitle: {
  en: 'Evaluate GNSS-denied navigation.',
  tr: 'GNSS olmayan navigasyonu değerlendirin.',
},

alkonFinalCtaAccent: {
  en: 'Start with a technical pilot.',
  tr: 'Teknik pilotla başlayın.',
},

alkonCtaButton: {
  en: 'REQUEST PILOT',
  tr: 'PİLOT TALEP ET',
},


/* --------------------
   YAYA PAGE
-------------------- */

yayaHeroStatement: {
  en: 'Pedestrian positioning when GNSS is unavailable.',
  tr: 'GNSS olmadığında yaya konum kestirimi.',
},

yayaHeroText: {
  en: 'YAYA is a pedestrian dead reckoning software layer that estimates pedestrian motion and position from inertial signals in indoor or GNSS-limited environments.',
  tr: 'YAYA, kapalı veya GNSS’in sınırlı olduğu ortamlarda ataletsel sinyallerden yaya hareketini ve konumunu kestiren PDR yazılım katmanıdır.',
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
  en: 'TECHNICAL SCOPE',
  tr: 'TEKNİK KAPSAM',
},

yayaScopePdr: {
  en: 'Pedestrian dead reckoning',
  tr: 'Yaya kestirimli konumlama',
},

yayaScopeStep: {
  en: 'Step detection',
  tr: 'Adım tespiti',
},

yayaScopeHeading: {
  en: 'Heading estimation',
  tr: 'Yönelim kestirimi',
},

yayaScopeImu: {
  en: 'IMU-based motion input',
  tr: 'IMU tabanlı hareket girdisi',
},

yayaScopeIndoor: {
  en: 'Indoor positioning',
  tr: 'Kapalı alan konumlama',
},

yayaScopeMotion: {
  en: 'Motion classification',
  tr: 'Hareket sınıflandırma',
},

yayaScopeCorrection: {
  en: 'Drift correction logic',
  tr: 'Sapma düzeltme mantığı',
},

yayaScopeRealtime: {
  en: 'Real-time output',
  tr: 'Gerçek zamanlı çıktı',
},

yayaScopeMobile: {
  en: 'Mobile integration',
  tr: 'Mobil entegrasyon',
},

yayaScopeValidation: {
  en: 'Validation workflow',
  tr: 'Doğrulama iş akışı',
},

yayaHowItWorks: {
  en: 'HOW IT WORKS',
  tr: 'NASIL ÇALIŞIR?',
},

yayaWorkflowInputTitle: {
  en: 'Read motion signals.',
  tr: 'Hareket sinyallerini alır.',
},

yayaWorkflowInputText: {
  en: 'Receives inertial measurements from mobile or wearable sensors.',
  tr: 'Mobil veya giyilebilir sensörlerden ataletsel ölçümleri alır.',
},

yayaWorkflowDetectTitle: {
  en: 'Detect pedestrian motion.',
  tr: 'Yaya hareketini algılar.',
},

yayaWorkflowDetectText: {
  en: 'Identifies walking patterns, step events, and motion phases.',
  tr: 'Yürüme örüntülerini, adım olaylarını ve hareket fazlarını belirler.',
},

yayaWorkflowEstimateTitle: {
  en: 'Estimate position.',
  tr: 'Konumu kestirir.',
},

yayaWorkflowEstimateText: {
  en: 'Uses PDR logic to estimate pedestrian displacement and direction.',
  tr: 'PDR mantığıyla yaya yer değiştirmesini ve yönünü kestirir.',
},

yayaWorkflowOutputTitle: {
  en: 'Deliver navigation output.',
  tr: 'Navigasyon çıktısı üretir.',
},

yayaWorkflowOutputText: {
  en: 'Provides position and movement outputs for higher-level applications.',
  tr: 'Üst seviye uygulamalar için konum ve hareket çıktıları sağlar.',
},

yayaFinalCtaTitle: {
  en: 'Evaluate indoor pedestrian positioning.',
  tr: 'Kapalı alan yaya konumlamasını değerlendirin.',
},

yayaFinalCtaAccent: {
  en: 'Start with a technical pilot.',
  tr: 'Teknik pilotla başlayın.',
},

yayaCtaButton: {
  en: 'REQUEST PILOT',
  tr: 'PİLOT TALEP ET',
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