export type Language = 'en' | 'tr';

export const translations = {
  /* --------------------
     HERO
  -------------------- */

  homeHeroKicker: {
    en: 'INERTIAL INTELLIGENCE',
    tr: 'NAVİGASYON VE HAREKET ANALİZİ',
  },

  homeHeroTitle: {
    en: 'Inertial Intelligence for Systems in Motion',
    tr: 'IMU Verisinden Konum ve Hareket Bilgisine',
  },

  homeHeroLead: {
    en: 'Ayrota turns IMU-based navigation and motion analytics technologies into solutions for autonomous systems, vehicles and indoor operations.',
    tr: 'Ayrota, IMU verisini işleyerek konum, yönelim ve hareket bilgisi üreten yazılımlar geliştirir. Bu yazılımlar otonom platformlarda, araç operasyonlarında ve kapalı alan uygulamalarında kullanılır.',
  },

  heroPillarImu: {
    en: 'NAVIGATION',
    tr: 'NAVİGASYON',
  },

  heroPillarSwapc: {
    en: 'SENSOR ENGINEERING',
    tr: 'SENSÖR MÜHENDİSLİĞİ',
  },

  heroPillarEndToEnd: {
    en: 'MOTION ANALYTICS',
    tr: 'HAREKET ANALİZİ',
  },

  heroPillarIndependent: {
    en: 'EMBEDDED INTEGRATION',
    tr: 'GÖMÜLÜ SİSTEM ENTEGRASYONU',
  },

  /* --------------------
     PRODUCTS
  -------------------- */

  productsKicker: {
    en: 'PRODUCTS',
    tr: 'ÜRÜNLER',
  },

  productsTitle: {
    en: 'Inertial Technology Built for Real Operations',
    tr: 'Aynı Teknik Altyapı, Üç Farklı Ürün',
  },

  productsLead: {
    en: 'Ayrota brings its inertial navigation and motion intelligence capabilities into autonomous systems, vehicle operations and indoor environments.',
    tr: 'Ortak navigasyon, sensör işleme ve hareket kestirimi altyapısı; farklı saha ihtiyaçlarına göre farklı ürünlere dönüşmüştür.',
  },

  productsAlkonEyebrow: {
    en: 'AUTONOMOUS NAVIGATION & MISSION SYSTEM',
    tr: 'OTONOM NAVİGASYON VE GÖREV SİSTEMİ',
  },

  productsAlkonDescription: {
    en: 'Alkon supports autonomous platforms operating where GNSS is unavailable or unreliable. It combines inertial navigation with mission planning and mission execution in a single software system.',
    tr: 'Alkon, GNSS’in kullanılamadığı veya güvenilirliğinin azaldığı koşullarda otonom platformların navigasyon ve görev süreçlerini destekler. IMU tabanlı navigasyon, görev planlama ve görev yürütme aynı yazılım sistemi içinde çalışır.',
  },

  productsYorukEyebrow: {
    en: 'VEHICLE & ROAD INTELLIGENCE',
    tr: 'YOL, SÜRÜŞ VE FİLO ANALİZİ',
  },

  productsYorukDescription: {
    en: 'Yoruk turns sensor data collected from moving vehicles into road condition, driving behaviour and operational insights for fleets, municipalities and transportation operations.',
    tr: 'Yörük, araçlardan toplanan hareket verilerini yol durumu, sürüş davranışı ve rota performansı açısından analiz eder. Belediyeler, filolar ve ulaşım ekipleri için düzenli ve karşılaştırılabilir bilgiler üretir.',
  },

  productsYayaEyebrow: {
    en: 'INDOOR MOVEMENT & NAVIGATION',
    tr: 'KAPALI ALAN HAREKETİ VE NAVİGASYON',
  },

  productsYayaDescription: {
    en: 'Yaya uses mobile inertial sensing to understand pedestrian movement where GNSS cannot be used. It supports indoor navigation and movement analytics for hospitals, warehouses and large facilities.',
    tr: 'Yaya, mobil cihazlardaki IMU verisini kullanarak GNSS erişiminin olmadığı ortamlarda yaya hareketini kestirir. Elde edilen bilgiler kapalı alan navigasyonu ve hareket analizi uygulamalarında kullanılır.',
  },

  productsExplore: {
    en: 'EXPLORE',
    tr: 'İNCELE',
  },

  /* --------------------
     APPLICATIONS
  -------------------- */

  platformsKicker: {
    en: 'APPLICATIONS',
    tr: 'KULLANIM ALANLARI',
  },

  platformsLead: {
    en: 'Ayrota technologies adapt to different motion, navigation and operational intelligence requirements.',
    tr: 'Navigasyon ve hareket kestirimi kabiliyetleri, farklı çalışma ortamlarının ihtiyaçlarına göre uyarlanabilir.',
  },

  platformsAutonomyTitle: {
    en: 'Autonomous Systems',
    tr: 'Otonom Sistemler',
  },

  platformsAutonomyText: {
    en: 'Navigation and mission capabilities for GNSS-constrained operations.',
    tr: 'GNSS’in güvenilir olmadığı görevlerde otonom platformların navigasyon ve görev süreçlerinin sürdürülmesi.',
  },

  platformsRoadTitle: {
    en: 'Road & Fleet',
    tr: 'Yol ve Filo',
  },

  platformsRoadText: {
    en: 'Road condition, driving and vehicle motion analytics.',
    tr: 'Araç hareketlerinden yol durumu, sürüş davranışı ve rota performansının değerlendirilmesi.',
  },

  platformsIndoorTitle: {
    en: 'Indoor Environments',
    tr: 'Kapalı Alanlar',
  },

  platformsIndoorText: {
    en: 'Pedestrian navigation and movement analysis where GNSS is unavailable.',
    tr: 'GNSS erişiminin olmadığı tesislerde yaya hareketinin kestirilmesi ve bina içi navigasyon.',
  },

  platformsEngineeringTitle: {
    en: 'Engineering',
    tr: 'Mühendislik',
  },

  platformsEngineeringText: {
    en: 'IMU analysis, navigation development and system integration.',
    tr: 'IMU verilerinin değerlendirilmesi, navigasyon algoritmalarının geliştirilmesi ve sistem entegrasyonu.',
  },

  /* --------------------
     CORE TECHNOLOGY
  -------------------- */

  problemKicker: {
    en: 'CORE TECHNOLOGY',
    tr: 'ÇEKİRDEK TEKNOLOJİ',
  },

  problemTitle: {
    en: 'The foundation of inertial intelligence',
    tr: 'IMU Verisi Konum ve Hareket Bilgisine Nasıl Dönüşür?',
  },

  problemLead: {
    en: 'Ayrota’s technology core is a shared engineering foundation that turns IMU data into navigation, motion estimation and operational insight.',
    tr: 'İvmeölçer ve jiroskop ölçümleri önce veri kalitesi, zamanlama ve sensör davranışı açısından değerlendirilir. Ardından bu ölçümler işlenerek konum, yönelim ve hareket kestirimi üretilir.',
  },

  problemSecondLead: {
    en: 'The same core is adapted across autonomous systems, vehicles and indoor applications.',
    tr: 'Aynı yazılım ve algoritma altyapısı; kullanılan sensöre, platforma ve çalışma koşullarına göre uyarlanarak farklı ürünlerde kullanılır.',
  },

  problemFlowGnssTitle: {
    en: 'IMU DATA',
    tr: 'IMU VERİSİ',
  },

  problemFlowGnssSubtitle: {
    en: 'Inertial measurements capture system motion and provide the base input for estimation and analysis.',
    tr: 'İvmeölçer ve jiroskop verileri, sistemin hareketini tanımlayan temel ölçümleri sağlar.',
  },

  problemFlowSensorTitle: {
    en: 'SENSOR ENGINEERING',
    tr: 'SENSÖR MÜHENDİSLİĞİ',
  },

  problemFlowSensorSubtitle: {
    en: 'Sensor behaviour, data quality, timing and motion characteristics are evaluated at engineering level.',
    tr: 'Ölçümlerin güvenilirliği; veri kalitesi, zamanlama ve sensör davranışı dikkate alınarak değerlendirilir.',
  },

  problemFlowCoreTitle: {
    en: 'INERTIAL CORE',
    tr: 'NAVİGASYON VE KESTİRİM',
  },

  problemFlowCoreSubtitle: {
    en: 'A shared software and algorithm foundation supports navigation, motion estimation and movement analytics.',
    tr: 'Sensör ölçümleri işlenerek konum, yönelim ve hareket bilgileri hesaplanır.',
  },

  problemFlowNavTitle: {
    en: 'APPLICATION LAYER',
    tr: 'UYGULAMA KATMANI',
  },

  problemFlowNavSubtitle: {
    en: 'Core capabilities are integrated into autonomous platforms, vehicle operations and indoor applications.',
    tr: 'Üretilen bilgiler, ilgili platformun veya uygulamanın ihtiyaç duyduğu biçimde sisteme aktarılır.',
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
    tr: 'Bizimle iletişime geçin',
  },

  corporateContactTitle: {
    en: 'Corporate contact',
    tr: 'Kurumsal İletişim',
  },

  corporateContactDescription: {
    en: 'Use the form for partnerships, pilot studies, evaluation access, and corporate inquiries.',
    tr: 'Navigasyon, sensör analizi, araç verisi veya kapalı alan hareketiyle ilgili projeniz için bizimle iletişime geçebilirsiniz. Teknik değerlendirme, entegrasyon ve iş birliği taleplerinizi form üzerinden iletebilirsiniz.',
  },

  contactLabelOrg: {
    en: 'PERSON / ORGANIZATION',
    tr: 'AD / KURUM',
  },

  contactLabelEmail: {
    en: 'CONTACT EMAIL',
    tr: 'E-POSTA',
  },

  contactLabelMessage: {
    en: 'MESSAGE',
    tr: 'MESAJ',
  },

  contactPlaceholderOrg: {
    en: 'Enter your name or organization',
    tr: 'Adınızı veya kurumunuzu yazın',
  },

  contactPlaceholderEmail: {
    en: 'Enter your email address',
    tr: 'E-posta adresinizi yazın',
  },

  contactPlaceholderMessage: {
    en: 'Write your message here...',
    tr: 'Projenizi veya çözmek istediğiniz problemi kısaca anlatın...',
  },

  contactSubmit: {
    en: 'SEND MESSAGE',
    tr: 'MESAJI GÖNDER',
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

  footerDescription: {
    en: 'Inertial navigation and motion intelligence for autonomous systems, vehicles and indoor operations.',
    tr: 'Otonom sistemler, araçlar ve kapalı alan uygulamaları için navigasyon, sensör işleme ve hareket analizi yazılımları.',
  },

  footerPrivacy: {
    en: 'Privacy & Data Notice',
    tr: 'Gizlilik ve Veri Bildirimi',
  },

  /* --------------------
     ILBER PAGE
  -------------------- */

  ilberHeroStatement: {
    en: 'Turn your IMU logs into engineering reports.',
    tr: 'IMU Veriniz Hedef Uygulama İçin Uygun mu?',
  },

  ilberHeroText: {
    en: 'İlber is Ayrota’s technical analysis and reporting service for IMU datasets. We analyze your data, identify quality and sensor-related issues, and deliver customer-specific engineering reports.',
    tr: 'İlber, IMU veri setlerini veri kalitesi, sensör davranışı ve hedef kullanım açısından değerlendirir. Analiz sonucunda verinin güçlü ve sorunlu yönlerini ortaya koyan mühendislik bulguları sunulur.',
  },

  ilberSendData: {
    en: 'REQUEST A TECHNICAL REVIEW',
    tr: 'TEKNİK İNCELEME TALEP ET',
  },

  ilberMiniDetect: {
    en: 'Data Quality',
    tr: 'Veri Kalitesi',
  },

  ilberMiniRepair: {
    en: 'Sensor Health',
    tr: 'Sensör Davranışı',
  },

  ilberMiniAnalyze: {
    en: 'Engineering Analysis',
    tr: 'Mühendislik Analizi',
  },

  ilberMiniValidate: {
    en: 'Custom Report',
    tr: 'İhtiyaca Özel Rapor',
  },

  ilberAnalysisScope: {
    en: 'SCOPE',
    tr: 'ANALİZ KAPSAMI',
  },

  ilberAnalysisScopeTitle: {
    en: 'We analyze your IMU data.',
    tr: 'IMU Verisini Teknik Açıdan Değerlendirin',
  },

  ilberAnalysisScopeText: {
    en: 'İlber evaluates IMU datasets across data integrity, sensor reliability and motion-related quality layers. The analysis scope is customized according to each customer’s data structure, test scenario and engineering needs.',
    tr: 'İnceleme; veri bütünlüğü, sensör davranışı, sinyal kalitesi ve hareket kaynaklı etkileri kapsar. Analiz kapsamı veri yapısına, test senaryosuna ve çözülmek istenen mühendislik problemine göre belirlenir.',
  },

  ilberIntegrityGroupTitle: {
    en: 'Data Quality & Integrity',
    tr: 'Veri Kalitesi ve Bütünlüğü',
  },

  ilberSensorGroupTitle: {
    en: 'Sensor Health & Signal Behavior',
    tr: 'Sensör ve Sinyal Davranışı',
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
    tr: 'Veri Setinin Kullanıma Uygunluğu',
  },

  ilberSensorDomainTitle: {
    en: 'IMU Signal Quality',
    tr: 'IMU Sinyal Kalitesi',
  },

  ilberSensorHealthTitle: {
    en: 'Sensor Anomaly Detection',
    tr: 'Sensör Anomalilerinin Tespiti',
  },

  ilberPhysicalTitle: {
    en: 'Physical Plausibility Checks',
    tr: 'Fiziksel Tutarlılık Kontrolleri',
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
    tr: 'Hareket ve Uçuş Davranışı Analizi',
  },

  ilberHowItWorks: {
    en: 'HOW IT WORKS',
    tr: 'SÜREÇ NASIL İŞLER?',
  },

  ilberWorkflowSendTitle: {
    en: 'Share your dataset.',
    tr: 'Veriyi Paylaşın',
  },

  ilberWorkflowSendText: {
    en: 'Send your IMU, INS or UAV flight logs for technical review.',
    tr: 'IMU, INS veya insansız hava aracı uçuş kayıtlarınızı teknik inceleme için paylaşın.',
  },

  ilberWorkflowAnalyzeTitle: {
    en: 'We analyze it.',
    tr: 'Veri İncelenir',
  },

  ilberWorkflowAnalyzeText: {
    en: 'Ayrota evaluates your data through İlber’s engineering analysis workflow.',
    tr: 'Veri; bütünlük, zamanlama, sinyal kalitesi, sensör davranışı ve hareket özellikleri açısından değerlendirilir.',
  },

  ilberWorkflowReportTitle: {
    en: 'Receive your report.',
    tr: 'Sonuçlar Raporlanır',
  },

  ilberWorkflowReportText: {
    en: 'You receive a customer-specific PDF report with findings, plots and engineering comments.',
    tr: 'Bulgular, grafikler ve mühendislik değerlendirmeleri ihtiyaca göre hazırlanan bir raporda sunulur.',
  },

  ilberWorkflowPreventTitle: {
    en: 'Decide faster.',
    tr: 'Sorunun Kaynağını Netleştirin',
  },

  ilberWorkflowPreventText: {
    en: 'Identify data-related issues before they are misinterpreted as algorithm or software problems.',
    tr: 'Veri ve sensör kaynaklı sorunları algoritma veya yazılım problemlerinden ayırarak geliştirme sürecindeki belirsizliği azaltın.',
  },

  exampleAnalyses: {
    en: 'Example Analyses',
    tr: 'Örnek Analizler',
  },

  ilberFinalCtaTitle: {
    en: 'Have IMU or flight logs?',
    tr: 'İncelenmesi Gereken Bir IMU Veri Setiniz mi Var?',
  },

  ilberFinalCtaAccent: {
    en: 'Let us turn them into an engineering report.',
    tr: 'Verinin hedef kullanım için uygunluğunu teknik olarak değerlendirelim.',
  },

  /* --------------------
     ALKON PAGE
  -------------------- */

  alkonProductCategory: {
    en: 'AUTONOMOUS NAVIGATION & MISSION SYSTEM',
    tr: 'OTONOM NAVİGASYON VE GÖREV SİSTEMİ',
  },

  alkonHeroStatement: {
    en: 'Navigation and Mission Capability Where GNSS Cannot Be Relied Upon',
    tr: 'GNSS Kısıtlı Ortamlarda Navigasyon ve Görev Sürekliliği',
  },

  alkonHeroText: {
    en: 'Alkon brings inertial navigation, mission planning and mission execution together in a single software system for autonomous platforms.',
    tr: 'Alkon, GNSS’in güvenilir olmadığı koşullarda otonom platformların navigasyon ve görev süreçlerini destekler. IMU tabanlı navigasyon, görev planlama ve görev yürütme aynı yazılım sistemi içinde bir araya gelir.',
  },

  alkonMiniNavigation: {
    en: 'INERTIAL NAVIGATION',
    tr: 'IMU TABANLI NAVİGASYON',
  },

  alkonMiniMission: {
    en: 'MISSION PLANNING',
    tr: 'GÖREV PLANLAMA',
  },

  alkonMiniAutonomy: {
    en: 'AUTONOMOUS OPERATION',
    tr: 'OTONOM GÖREV',
  },

  alkonMiniIntegration: {
    en: 'PLATFORM INTEGRATION',
    tr: 'PLATFORM ENTEGRASYONU',
  },

  alkonScopeTitle: {
    en: 'SYSTEM CAPABILITIES',
    tr: 'SİSTEM KABİLİYETLERİ',
  },

  alkonScopeMainTitle: {
    en: 'Navigation and Mission System for Autonomous Platforms',
    tr: 'Navigasyon ve Görev Yönetimi ',
  },

  alkonScopeText: {
    en: 'Alkon combines inertial navigation outputs with mission planning, mission execution and platform integration for operations where GNSS is constrained.',
    tr: 'Sensörlerden elde edilen navigasyon bilgisi, görev planlama ve platform kontrolüyle birlikte kullanılır. Böylece navigasyon ve görev süreçleri aynı yazılım katmanı üzerinden yönetilebilir.',
  },

  alkonNavigationGroupTitle: {
    en: 'Navigation',
    tr: 'Navigasyon',
  },

  alkonMissionGroupTitle: {
    en: 'Mission System',
    tr: 'Görev Yönetimi',
  },

  alkonIntegrationGroupTitle: {
    en: 'Integration',
    tr: 'Entegrasyon',
  },

  alkonCapabilityInertialNavigation: {
    en: 'IMU-based inertial navigation',
    tr: 'IMU tabanlı navigasyon',
  },

  alkonCapabilityPositioning: {
    en: 'Position and motion estimation',
    tr: 'Konum ve hareket kestirimi',
  },

  alkonCapabilityHeading: {
    en: 'Heading estimation',
    tr: 'Yönelim kestirimi',
  },

  alkonCapabilityMissionPlanning: {
    en: 'Mission planning',
    tr: 'Görev planlama',
  },

  alkonCapabilityMissionExecution: {
    en: 'Autonomous mission execution',
    tr: 'Otonom görev yürütme',
  },

  alkonCapabilityWaypoint: {
    en: 'Waypoint-based navigation',
    tr: 'Rota noktaları üzerinden navigasyon',
  },

  alkonCapabilityAutonomousPlatforms: {
    en: 'Autonomous platform integration',
    tr: 'Otonom platform entegrasyonu',
  },

  alkonCapabilityGroundControl: {
    en: 'Ground control integration',
    tr: 'Yer kontrol sistemi entegrasyonu',
  },

  alkonCapabilityMavlink: {
    en: 'MAVLink-based navigation interface',
    tr: 'MAVLink tabanlı navigasyon arayüzü',
  },

  alkonHowItWorks: {
    en: 'HOW IT WORKS',
    tr: 'NASIL ÇALIŞIR?',
  },

  alkonHowItWorksTitle: {
    en: 'From Motion to Autonomous Mission Execution',
    tr: 'Sensör Verisi Otonom Göreve Nasıl Dönüşür?',
  },

  alkonWorkflowSenseTitle: {
    en: 'Sense Motion',
    tr: 'Hareket Ölçülür',
  },

  alkonWorkflowSenseText: {
    en: 'Onboard inertial sensors provide continuous motion measurements to the navigation software.',
    tr: 'Platform üzerindeki ataletsel sensörler hareketi sürekli ölçerek navigasyon yazılımına veri sağlar.',
  },

  alkonWorkflowNavigateTitle: {
    en: 'Estimate Navigation',
    tr: 'Navigasyon Bilgisi Üretilir',
  },

  alkonWorkflowNavigateText: {
    en: 'Inertial measurements are processed to generate navigation states for the autonomous platform.',
    tr: 'Sensör ölçümleri işlenerek platformun konum, hareket ve yönelim bilgileri kestirilir.',
  },

  alkonWorkflowPlanTitle: {
    en: 'Plan the Mission',
    tr: 'Görev Planlanır',
  },

  alkonWorkflowPlanText: {
    en: 'Mission objectives and waypoint sequences are defined through the mission software layer.',
    tr: 'Görev hedefleri, rota noktaları ve izlenecek görev akışı yazılım üzerinden tanımlanır.',
  },

  alkonWorkflowExecuteTitle: {
    en: 'Execute the Mission',
    tr: 'Görev Yürütülür',
  },

  alkonWorkflowExecuteText: {
    en: 'Navigation states and mission commands are delivered to the platform to support autonomous mission execution.',
    tr: 'Navigasyon bilgileri ve görev komutları platforma aktarılır ve tanımlanan görev akışı yürütülür.',
  },

  alkonFinalCtaTitle: {
    en: 'Evaluate Alkon for Your Platform',
    tr: 'Alkon Platformunuza Nasıl Entegre Edilebilir?',
  },

  alkonFinalCtaText: {
    en: 'Tell us about your platform, mission environment and navigation requirements. We can evaluate the appropriate integration approach together.',
    tr: 'Platformunuzu, görev ortamınızı ve navigasyon gereksinimlerinizi paylaşın. Uygun entegrasyon yaklaşımını birlikte değerlendirelim.',
  },

  alkonCtaButton: {
    en: 'CONTACT US',
    tr: 'İLETİŞİME GEÇ',
  },

  /* --------------------
     YORUK PAGE
  -------------------- */

  yorukProductCategory: {
    en: 'VEHICLE & ROAD INTELLIGENCE',
    tr: 'YOL, SÜRÜŞ VE FİLO ANALİZİ',
  },

  yorukHeroStatement: {
    en: 'Turn Vehicle Motion Into Road and Driving Intelligence',
    tr: 'Araç Verisinden Yol, Sürüş ve Rota Analizi',
  },

  yorukHeroText: {
    en: 'Yoruk transforms GPS and IMU data collected from moving vehicles into insights on road condition, driving behaviour and operational performance.',
    tr: 'Yörük, günlük araç operasyonlarından toplanan GPS ve IMU verilerini analiz eder. Yol durumu, sürüş davranışı ve rota performansı hakkında düzenli ve karşılaştırılabilir bilgiler üretir.',
  },

  yorukMiniRoad: {
    en: 'ROAD INTELLIGENCE',
    tr: 'YOL DURUMU',
  },

  yorukMiniDriving: {
    en: 'DRIVING ANALYTICS',
    tr: 'SÜRÜŞ ANALİZİ',
  },

  yorukMiniFleet: {
    en: 'FLEET OPERATIONS',
    tr: 'FİLO OPERASYONLARI',
  },

  yorukMiniSensors: {
    en: 'GPS + IMU',
    tr: 'GPS + IMU',
  },

  yorukScopeTitle: {
    en: 'PLATFORM CAPABILITIES',
    tr: 'PLATFORM KABİLİYETLERİ',
  },

  yorukScopeMainTitle: {
    en: 'Road and Vehicle Intelligence From Existing Motion Data',
    tr: 'Mevcut Araçlardan Sürekli Saha Verisi',
  },

  yorukScopeText: {
    en: 'Yoruk turns vehicle motion into a continuous source of information for road operations, driving analysis and fleet-level decision support.',
    tr: 'Araçların günlük hareketi sürekli bir veri kaynağı olarak kullanılır. Aynı veriler yol durumunu izlemek, sürüş olaylarını değerlendirmek, rotaları karşılaştırmak ve bakım gerektiren bölgeleri belirlemek için analiz edilir.',
  },

  yorukRoadGroupTitle: {
    en: 'Road Intelligence',
    tr: 'Yol Durumu',
  },

  yorukDrivingGroupTitle: {
    en: 'Driving Intelligence',
    tr: 'Sürüş Davranışı',
  },

  yorukOperationsGroupTitle: {
    en: 'Operational Analytics',
    tr: 'Filo ve Rota Analizi',
  },

  yorukCapabilityRoadCondition: {
    en: 'Road condition analysis',
    tr: 'Yol durumunun değerlendirilmesi',
  },

  yorukCapabilityRouteSegments: {
    en: 'Route and segment comparison',
    tr: 'Rota ve yol kesimlerinin karşılaştırılması',
  },

  yorukCapabilityMaintenance: {
    en: 'Maintenance prioritization insights',
    tr: 'Bakım gerektiren bölgelerin önceliklendirilmesi',
  },

  yorukCapabilityDrivingEvents: {
    en: 'Driving risk event analysis',
    tr: 'Riskli sürüş olaylarının belirlenmesi',
  },

  yorukCapabilityDrivingPatterns: {
    en: 'Driving behaviour patterns',
    tr: 'Sürüş davranışlarının değerlendirilmesi',
  },

  yorukCapabilityMotionProfiles: {
    en: 'Vehicle motion profiles',
    tr: 'Araç hareket profillerinin çıkarılması',
  },

  yorukCapabilityFleetComparison: {
    en: 'Fleet and route comparison',
    tr: 'Filo ve rotaların karşılaştırılması',
  },

  yorukCapabilityMapReporting: {
    en: 'Map-based analysis and reporting',
    tr: 'Harita tabanlı analiz ve raporlama',
  },

  yorukCapabilityLongitudinal: {
    en: 'Longitudinal road intelligence',
    tr: 'Yol durumundaki değişimin zaman içinde izlenmesi',
  },

  yorukHowItWorks: {
    en: 'HOW IT WORKS',
    tr: 'NASIL ÇALIŞIR?',
  },

  yorukHowItWorksTitle: {
    en: 'From Vehicle Motion to Operational Insight',
    tr: 'Araç Verisi Nasıl Yol ve Sürüş Bilgisine Dönüşür?',
  },

  yorukWorkflowCollectTitle: {
    en: 'Collect Motion Data',
    tr: 'Veri Toplanır',
  },

  yorukWorkflowCollectText: {
    en: 'GPS and IMU signals are collected during normal vehicle operations using mobile sensing devices.',
    tr: 'GPS ve IMU verileri, araçların normal operasyonları sırasında mobil sensör cihazları üzerinden toplanır.',
  },

  yorukWorkflowAnalyzeTitle: {
    en: 'Analyze Movement',
    tr: 'Hareket Analiz Edilir',
  },

  yorukWorkflowAnalyzeText: {
    en: 'Vehicle motion signals are processed to identify road characteristics, driving events and movement patterns.',
    tr: 'Araç hareket sinyalleri işlenerek yol özellikleri, sürüş olayları ve tekrar eden hareket davranışları belirlenir.',
  },

  yorukWorkflowContextTitle: {
    en: 'Add Operational Context',
    tr: 'Konum ve Rotayla Eşleştirilir',
  },

  yorukWorkflowContextText: {
    en: 'Motion findings are combined with route and location context to produce road- and vehicle-level intelligence.',
    tr: 'Analiz sonuçları rota ve konum bilgileriyle eşleştirilerek olayların nerede ve hangi güzergah üzerinde gerçekleştiği belirlenir.',
  },

  yorukWorkflowDecisionTitle: {
    en: 'Support Decisions',
    tr: 'Sonuçlar Karar Sürecine Aktarılır',
  },

  yorukWorkflowDecisionText: {
    en: 'Analysis and reporting help teams prioritize road actions, compare routes and understand driving behaviour.',
    tr: 'Elde edilen sonuçlar bakım çalışmalarının önceliklendirilmesi, rotaların karşılaştırılması ve sürüş davranışlarının değerlendirilmesi için kullanılır.',
  },

  yorukApplicationsKicker: {
    en: 'APPLICATIONS',
    tr: 'KULLANIM ALANLARI',
  },

  yorukApplicationsTitle: {
    en: 'Built for Road and Vehicle Operations',
    tr: 'Yol ve Araç Operasyonlarında Kullanım',
  },

  yorukApplicationMunicipalities: {
    en: 'Municipalities',
    tr: 'Belediyeler',
  },

  yorukApplicationMunicipalitiesText: {
    en: 'Use vehicle-generated movement data to support road inspection and maintenance prioritization.',
    tr: 'Hizmet araçlarından toplanan verilerle yol durumu izlenebilir ve bakım gerektiren bölgeler önceliklendirilebilir.',
  },

  yorukApplicationFleets: {
    en: 'Fleets',
    tr: 'Araç Filoları',
  },

  yorukApplicationFleetsText: {
    en: 'Compare routes, movement patterns and driving events across daily fleet operations.',
    tr: 'Günlük operasyonlarda rotalar, araç hareketleri ve sürüş olayları karşılaştırılarak filo performansı değerlendirilebilir.',
  },

  yorukApplicationLogistics: {
    en: 'Logistics & Transport',
    tr: 'Lojistik ve Ulaşım',
  },

  yorukApplicationLogisticsText: {
    en: 'Build operational insight from repeated vehicle movement across road networks.',
    tr: 'Düzenli kullanılan güzergahlardan toplanan verilerle yol ve rota koşullarındaki değişim zaman içinde takip edilebilir.',
  },

  yorukFinalCtaTitle: {
    en: 'Evaluate Yoruk for Your Vehicle Operations',
    tr: 'Yörük Araç Operasyonlarınıza Nasıl Uyarlanabilir?',
  },

  yorukFinalCtaText: {
    en: 'Tell us about your vehicles, operating routes and the road or driving questions you want to understand.',
    tr: 'Araç yapınızı, kullandığınız rotaları ve değerlendirmek istediğiniz yol veya sürüş problemlerini paylaşın. Uygun kullanım yaklaşımını birlikte belirleyelim.',
  },

  yorukCtaButton: {
    en: 'CONTACT US',
    tr: 'İLETİŞİME GEÇ',
  },

  /* --------------------
     YAYA PAGE
  -------------------- */

  yayaProductCategory: {
    en: 'INDOOR MOVEMENT & NAVIGATION',
    tr: 'KAPALI ALAN HAREKETİ VE NAVİGASYON',
  },

  yayaHeroStatement: {
    en: 'Turn Indoor Movement Into Navigation and Operational Insight',
    tr: 'Kapalı Alanlarda Yaya Hareketi ve Navigasyon',
  },

  yayaHeroText: {
    en: 'Yaya uses mobile IMU data to estimate pedestrian movement and turn it into indoor navigation and movement intelligence for complex facilities.',
    tr: 'Yaya, mobil cihazlardaki IMU verisini kullanarak yaya hareketini ve göreli yer değiştirmeyi kestirir. Elde edilen bilgiler bina içi navigasyon, rota analizi ve tesis içi hareket uygulamalarında kullanılır.',
  },

  yayaMiniPdr: {
    en: 'PDR',
    tr: 'PDR',
  },

  yayaMiniIndoor: {
    en: 'INDOOR NAVIGATION',
    tr: 'KAPALI ALAN NAVİGASYONU',
  },

  yayaMiniMovement: {
    en: 'MOVEMENT ANALYTICS',
    tr: 'HAREKET ANALİZİ',
  },

  yayaMiniMobile: {
    en: 'MOBILE IMU',
    tr: 'MOBİL IMU',
  },

  yayaScopeTitle: {
    en: 'PLATFORM CAPABILITIES',
    tr: 'SİSTEM KABİLİYETLERİ',
  },

  yayaScopeMainTitle: {
    en: 'Indoor Movement Intelligence From Mobile Sensors',
    tr: 'Mobil Sensörlerden Yaya Hareketi ve Konum Bilgisi',
  },

  yayaScopeText: {
    en: 'Yaya combines pedestrian dead reckoning, movement analysis and indoor context to support navigation and operational movement use cases.',
    tr: 'Mobil sensörlerden elde edilen hareket kestirimi, tesisin harita ve mekansal bilgileriyle birlikte kullanılır. Böylece navigasyon, rota analizi ve personel hareketinin değerlendirilmesi için kullanılabilir çıktılar elde edilir.',
  },

  yayaNavigationGroupTitle: {
    en: 'Indoor Navigation',
    tr: 'Kapalı Alan Navigasyonu',
  },

  yayaMotionGroupTitle: {
    en: 'Movement Intelligence',
    tr: 'Hareket Analizi',
  },

  yayaIntegrationGroupTitle: {
    en: 'Application Integration',
    tr: 'Uygulama Entegrasyonu',
  },

  yayaCapabilityPdr: {
    en: 'Pedestrian dead reckoning',
    tr: 'Yaya kestirimli konumlama',
  },

  yayaCapabilityRelativeMovement: {
    en: 'Relative pedestrian movement estimation',
    tr: 'Göreli yaya hareketinin kestirilmesi',
  },

  yayaCapabilityIndoorNavigation: {
    en: 'Indoor navigation support',
    tr: 'Kapalı alan navigasyon desteği',
  },

  yayaCapabilityStepDetection: {
    en: 'Step and movement event detection',
    tr: 'Adım ve hareket olaylarının tespiti',
  },

  yayaCapabilityMovementPatterns: {
    en: 'Pedestrian movement patterns',
    tr: 'Yaya hareketlerinin değerlendirilmesi',
  },

  yayaCapabilityMovementAnalytics: {
    en: 'Movement analytics',
    tr: 'Hareket verilerinin analizi',
  },

  yayaCapabilityMobile: {
    en: 'Mobile device integration',
    tr: 'Mobil cihaz entegrasyonu',
  },

  yayaCapabilityMapContext: {
    en: 'Indoor map and spatial context',
    tr: 'Kapalı alan haritası ve mekansal bilgiler',
  },

  yayaCapabilityApplicationOutput: {
    en: 'Application-level movement output',
    tr: 'Uygulamalar için hareket ve konum çıktısı',
  },

  yayaHowItWorks: {
    en: 'HOW IT WORKS',
    tr: 'NASIL ÇALIŞIR?',
  },

  yayaHowItWorksTitle: {
    en: 'From Mobile Motion to Indoor Intelligence',
    tr: 'Mobil IMU Verisinden Yaya Hareketi Nasıl Kestirilir?',
  },

  yayaWorkflowSenseTitle: {
    en: 'Sense Movement',
    tr: 'Hareket Ölçülür',
  },

  yayaWorkflowSenseText: {
    en: 'Mobile inertial sensors capture pedestrian motion during movement through indoor environments.',
    tr: 'Mobil cihazdaki ataletsel sensörler, kişinin hareketi sırasında oluşan ivme ve dönme hareketlerini ölçer.',
  },

  yayaWorkflowEstimateTitle: {
    en: 'Estimate Movement',
    tr: 'Yaya Hareketi Kestirilir',
  },

  yayaWorkflowEstimateText: {
    en: 'PDR processing estimates relative displacement and pedestrian movement from inertial signals.',
    tr: 'PDR algoritmaları, ataletsel ölçümlerden adımları ve göreli yer değiştirmeyi hesaplayarak yayanın hareketini kestirir.',
  },

  yayaWorkflowContextTitle: {
    en: 'Add Spatial Context',
    tr: 'Mekansal Bilgilerle Eşleştirilir',
  },

  yayaWorkflowContextText: {
    en: 'Movement estimates are combined with indoor spatial context to support navigation and facility-specific applications.',
    tr: 'Hareket kestirimleri tesisin harita ve mekansal bilgileriyle birleştirilerek bina içindeki hareketin konumla ilişkilendirilmesi sağlanır.',
  },

  yayaWorkflowInsightTitle: {
    en: 'Create Movement Intelligence',
    tr: 'Uygulamalara Aktarılır',
  },

  yayaWorkflowInsightText: {
    en: 'Movement data becomes navigation output and operational insight for people and facilities.',
    tr: 'Üretilen hareket ve konum bilgileri navigasyon uygulamalarına veya tesis içi hareketi analiz eden sistemlere aktarılır.',
  },

  yayaApplicationsKicker: {
    en: 'APPLICATIONS',
    tr: 'KULLANIM ALANLARI',
  },

  yayaApplicationsTitle: {
    en: 'Built for Complex Indoor Environments',
    tr: 'Karmaşık Kapalı Alanlarda Kullanım',
  },

  yayaApplicationHospital: {
    en: 'Hospitals',
    tr: 'Hastaneler',
  },

  yayaApplicationHospitalText: {
    en: 'Support indoor navigation and location intelligence across complex hospital environments.',
    tr: 'Büyük hastane yapılarında bina içi yönlendirme ve konuma dayalı uygulamalar için yaya hareket bilgisi kullanılabilir.',
  },

  yayaApplicationDepot: {
    en: 'Warehouses & Depots',
    tr: 'Depolar ve Lojistik Tesisler',
  },

  yayaApplicationDepotText: {
    en: 'Turn personnel movement into operational movement analytics across warehouse and depot workflows.',
    tr: 'Depo ve lojistik tesislerinde personelin kullandığı rotalar ve tesis içindeki hareket akışı analiz edilebilir.',
  },

  yayaFinalCtaTitle: {
    en: 'Evaluate Yaya for Your Indoor Environment',
    tr: 'Yaya Tesisinizde Nasıl Kullanılabilir?',
  },

  yayaFinalCtaText: {
    en: 'Tell us about your facility, target devices and the indoor movement or navigation problem you want to solve.',
    tr: 'Tesis yapınızı, kullanılacak cihazları ve çözmek istediğiniz hareket veya navigasyon problemini paylaşın. Uygun kullanım senaryosunu birlikte değerlendirelim.',
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
    tr: 'Ayrota, yalnızca iletişim ve değerlendirme süreçleri için gerekli olan sınırlı kişisel verileri toplar.',
  },

  privacyParagraph1: {
    en: 'Data collected via the contact form may include organization or project name, contact email address, and high-level inquiry context.',
    tr: 'İletişim formu üzerinden ad veya kurum bilgisi, e-posta adresi ve ilettiğiniz talebe ilişkin genel bilgiler toplanabilir.',
  },

  privacyParagraph2: {
    en: 'This website does not perform tracking, profiling, or marketing analytics.',
    tr: 'Bu web sitesinde kullanıcı takibi, profilleme veya pazarlama amaçlı analiz yapılmaz.',
  },

  privacyParagraph3: {
    en: 'Form submissions are processed through a third-party form handling service (Basin) and stored securely for review.',
    tr: 'İletişim formu üzerinden gönderilen bilgiler, üçüncü taraf form hizmeti Basin aracılığıyla işlenir ve talebinizin değerlendirilmesi amacıyla güvenli şekilde saklanır.',
  },

  privacyParagraph4: {
    en: 'Personal data is retained only as long as necessary to assess potential engagement and is deleted periodically.',
    tr: 'Kişisel veriler yalnızca talebin veya olası iş birliğinin değerlendirilmesi için gereken süre boyunca saklanır ve belirli aralıklarla silinir.',
  },

  privacyParagraph5: {
    en: 'Where applicable, data handling complies with KVKK and GDPR.',
    tr: 'Kişisel verilerin işlenmesinde, uygulanabildiği ölçüde KVKK ve GDPR hükümleri gözetilir.',
  },

  privacyConsent: {
    en: 'By submitting the contact form, you acknowledge and consent to this data processing for evaluation purposes.',
    tr: 'İletişim formunu göndererek paylaştığınız bilgilerin, talebinizin değerlendirilmesi amacıyla bu kapsamda işlenmesini kabul etmiş olursunuz.',
  },

  privacyCookieTitle: {
    en: 'Cookie Notice',
    tr: 'Çerez Bildirimi',
  },

  privacyCookieText: {
    en: 'This website does not use tracking or marketing cookies. Any technical cookies used are strictly required for basic functionality and security.',
    tr: 'Bu web sitesinde takip veya pazarlama amacıyla çerez kullanılmaz. Kullanılması halinde teknik çerezler yalnızca sitenin temel işlevleri ve güvenliği için kullanılır.',
  },

  internshipTitle: {
    en: 'Internship Applications',
    tr: 'Staj Başvuruları',
  },

  internshipDescription: {
    en: 'Student applications are accepted exclusively through the Google Form. Please use the link below.',
    tr: 'Staj başvuruları yalnızca Google Form üzerinden kabul edilir. Başvurunuzu aşağıdaki bağlantı üzerinden iletebilirsiniz.',
  },

  contactInternshipCta: {
    en: 'Apply via Google Form',
    tr: 'STAJ BAŞVURUSU YAP',
  },
} as const;

export type TranslationKey = keyof typeof translations;