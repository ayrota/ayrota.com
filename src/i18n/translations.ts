export type Language = 'en' | 'tr';

export const translations = {

 /* --------------------
   NEW HOME / HERO
-------------------- */
homeHeroKicker: {
  en: 'INERTIAL NAVIGATION SYSTEMS',
  tr: 'ATALETSEL NAVİGASYON SİSTEMLERİ',
},

homeHeroTitle: {
  en: 'We develop navigation intelligence for autonomous systems.',
  tr: 'Otonom sistemler için navigasyon zekası',
},

homeHeroLead: {
  en: 'Ayrota develops AI-assisted solutions that provide position, orientation, and motion estimation for autonomous systems in challenging environments where GNSS is insufficient or unavailable.',
  tr: 'Ayrota, GNSS’in yetersiz veya kullanılamadığı zorlu ortamlarda otonom sistemlere konum, yönelim ve hareket kestirimi sağlayan yapay zeka destekli çözümler geliştirir.',
},

heroPillarNavigation: {
  en: 'NAVIGATION',
  tr: 'NAVİGASYON',
},

heroPillarEstimation: {
  en: 'ESTIMATION',
  tr: 'KESTİRİM',
},

heroPillarFusion: {
  en: 'SENSOR FUSION',
  tr: 'SENSÖR FÜZYONU',
},

heroPillarIntegration: {
  en: 'SOFTWARE INTEGRATION',
  tr: 'YAZILIM ENTEGRASYONU',
},

/* --------------------
   NEW / PRODUCTS
-------------------- */
productsFlagshipKicker: {
  en: 'Flagship Product',
  tr: 'Lider Ürünümüz',
},

productsAlkonLead: {
  en: 'Advanced navigation for autonomous systems. Engineered for mission-critical performance in GNSS-denied environments.',
  tr: 'Otonom sistemler için geliştirilen, GNSS’in kullanılamadığı ortamlarda görev kritik navigasyon ihtiyaçlarına odaklanan platform.',
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
  en: 'EXPLORE ALKON',
  tr: 'ALKON’U KEŞFET',
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

productsOtherTitle: {
  en: 'OTHER PRODUCTS',
  tr: 'DİĞER ÜRÜNLER',
},



productsYorukDescription: {
  en: 'Road quality monitoring platform.',
  tr: 'Araç Filolarına Özel Rota Analitik Platformu.',
},

productsIlberDescription: {
  en: 'IMU data quality assurance platform.',
  tr: 'IMU Veri Kalite Güvence Platformu.',
},

productsYayaDescription: {
  en: 'Pedestrian Dead Reckoning software.',
  tr: 'Yaya Kestirimli Konumlama Yazılımı.',
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
  en: 'THE PROBLEM',
  tr: 'PROBLEM ALANI',
},

problemLead: {
  en: 'Autonomous systems often depend on external positioning sources. When those references become unreliable, maintaining continuous and trustworthy state estimation becomes a critical engineering challenge.',
  tr: 'Otonom sistemler çoğu zaman harici konumlama kaynaklarına bağımlıdır. Bu referanslar güvenilirliğini kaybettiğinde, sürekli ve güvenilir durum kestirimi sağlamak kritik bir mühendislik problemine dönüşür.',
},

problemDeniedTitle: {
  en: 'GNSS-Denied Environments',
  tr: 'GNSS Olmayan Ortamlar',
},

problemDeniedText: {
  en: 'Positioning signals may be degraded, blocked, or completely unavailable.',
  tr: 'Konumlama sinyalleri zayıflayabilir, engellenebilir veya tamamen kaybolabilir.',
},

problemDynamicTitle: {
  en: 'Dynamic Motion',
  tr: 'Dinamik Hareket',
},

problemDynamicText: {
  en: 'Rapidly changing motion profiles increase estimation complexity.',
  tr: 'Hızla değişen hareket profilleri kestirim karmaşıklığını artırır.',
},

problemReliableTitle: {
  en: 'Continuous Estimation',
  tr: 'Sürekli Kestirim',
},

problemReliableText: {
  en: 'Systems require reliable navigation outputs even when conditions deteriorate.',
  tr: 'Koşullar kötüleştiğinde bile sistemler güvenilir navigasyon çıktısına ihtiyaç duyar.',
},










sectionApproach: {
  en: 'Approach',
  tr: 'Yaklaşım',
},

sectionCore: {
  en: 'Core',
  tr: 'Çekirdek Yapı',
},

sectionProvisioning: {
  en: 'Provisioning',
  tr: 'Erişim ve Kullanım',
},

sectionEarlyAccess: {
  en: 'Early Access',
  tr: 'Erken Erişim',
},

sectionContact: {
  en: 'Contact',
  tr: 'İletişim',
},

/* --------------------
   CONTACT
-------------------- */
contactTitle: {
  en: 'Get in touch',
  tr: 'İletişime geçin',
},

contactLabelOrg: {
  en: 'Person / Organization',
  tr: 'Kişi / Kurum',
},

contactLabelEmail: {
  en: 'Contact email',
  tr: 'İletişim e-postası',
},

contactLabelMessage: {
  en: 'Your message',
  tr: 'Mesajınız',
},

contactSubmit: {
  en: 'Send message',
  tr: 'Mesajı gönder',
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
ilberFeatureDataDropout: {
  en: 'Makes data dropouts visible',
  tr: 'Veri kopmalarını görünür yapar',
},

ilberFeatureTimestamp: {
  en: 'Detects timestamp and sampling issues',
  tr: 'Zaman damgası ve örnekleme problemlerini yakalar',
},

ilberFeatureSensorHealth: {
  en: 'Analyzes sensor health and signal quality',
  tr: 'Sensör sağlığı ve sinyal kalitesini analiz eder',
},

ilberFeatureSessionReport: {
  en: 'Produces session-level quality reports',
  tr: 'Oturum bazlı kalite raporu üretir',
},

ilberMainStatement: {
  en: 'What looks like an algorithm failure may actually be a data problem.',
  tr: 'Algoritma hatası sandığınız şey, veri hatası olabilir.',
},

ilberMainStatementText: {
  en: 'İlber helps teams separate data-originated problems from algorithmic behavior before development time is spent debugging the wrong layer.',
  tr: 'İlber, ekiplerin geliştirme süresini yanlış katmanda hata arayarak harcamadan önce veri kaynaklı problemleri algoritmik davranıştan ayırmasına yardımcı olur.',
},

ilberCheckTitle: {
  en: 'Check',
  tr: 'Kontrol Et',
},

ilberCheckText: {
  en: 'Validates raw IMU records for timing, continuity, format, and basic integrity.',
  tr: 'Ham IMU kayıtlarını zaman, süreklilik, format ve temel bütünlük açısından doğrular.',
},

ilberAnalyzeTitle: {
  en: 'Analyze',
  tr: 'Analiz Et',
},

ilberAnalyzeText: {
  en: 'Inspects noise, saturation, spectral behavior, motion structure, and consistency.',
  tr: 'Gürültü, doygunluk, spektral davranış, hareket yapısı ve tutarlılığı inceler.',
},

ilberReportTitle: {
  en: 'Report',
  tr: 'Raporla',
},

ilberReportText: {
  en: 'Generates session-level summaries that make data quality traceable and reviewable.',
  tr: 'Veri kalitesini izlenebilir ve incelenebilir hale getiren oturum bazlı özetler üretir.',
},
ilberHeroKicker: {
  en: 'IMU Data Quality Assurance Platform',
  tr: 'IMU Veri Kalite Güvence Platformu',
},

ilberHeroTitle: {
  en: 'İlber',
  tr: 'İlber',
},

ilberHeroLead: {
  en: 'A quality assurance platform that validates, analyzes, and reports IMU data before it enters the algorithm development process.',
  tr: 'IMU verilerini algoritma geliştirme sürecine girmeden önce doğrulayan, analiz eden ve raporlayan kalite güvence platformu.',
},

ilberCtaTitle: {
  en: 'Validate IMU data before the algorithm.',
  tr: 'IMU verisini algoritmadan önce doğrulayın.',
},

ilberCtaText: {
  en: 'İlber provides a standardized data quality assurance layer for teams developing navigation, UAV, robotics, and sensor fusion systems.',
  tr: 'İlber; navigasyon, UAV, robotik ve sensör füzyonu geliştiren ekipler için standartlaştırılmış veri kalite güvence katmanı sunar.',
},

ilberCtaButton: {
  en: 'Get in touch',
  tr: 'İletişime Geçin',
},
ilberTrustKicker: {
  en: 'THE CHALLENGE',
  tr: 'PROBLEM',
},

ilberModulesKicker: {
  en: 'Analysis Infrastructure',
  tr: 'Analiz Altyapısı',
},

ilberModulesTitle: {
  en: 'Platform Modules',
  tr: 'Platform Modülleri',
},

ilberSampleKicker: {
  en: 'Platform Interface',
  tr: 'Platform Arayüzü',
},

ilberSampleTitle: {
  en: 'Sample Analysis Report',
  tr: 'Örnek Analiz Raporu',
},

ilberSampleText: {
  en: 'A representative output from İlber’s IMU data analysis workflow.',
  tr: 'İlber’in IMU veri analizini temsil eden örnek bir sayfa.',
},

/* --------------------
   İLBER MODULES
-------------------- */
ilberModulesIntro: {
  en: 'İlber combines the quality assurance workflow from raw data to reporting under layered analysis capabilities.',
  tr: 'İlber, ham veriden rapora uzanan kalite güvence sürecini farklı analiz katmanları altında birleştirir.',
},

ilberDataLayerTitle: {
  en: 'Data Assurance Layer',
  tr: 'Veri Güvence Katmanı',
},
ilberDataLayerText: {
  en: 'Evaluates the reliability of IMU and supporting sensor records before analysis.',
  tr: 'IMU ve destekleyici sensör kayıtlarının analiz öncesi güvenilirliğini değerlendirir.',
},

ilberMotionLayerTitle: {
  en: 'Motion and Consistency Layer',
  tr: 'Hareket ve Tutarlılık Katmanı',
},
ilberMotionLayerText: {
  en: 'Analyzes motion structure, rhythm behavior, segmentation, and consistency across recordings.',
  tr: 'Hareket yapısını, ritim davranışını, segmentasyonu ve kayıtlar arası tutarlılığı analiz eder.',
},

ilberFlightLayerTitle: {
  en: 'Flight Analysis Layer',
  tr: 'Uçuş Analiz Katmanı',
},
ilberFlightLayerText: {
  en: 'Evaluates periodicity, flight states, stability, and trajectory behavior for UAV and dynamic platforms.',
  tr: 'UAV ve dinamik platformlar için periyodiklik, uçuş durumları, kararlılık ve rota davranışlarını değerlendirir.',
},

ilberReportLayerTitle: {
  en: 'Reporting and Traceability',
  tr: 'Raporlama ve İzlenebilirlik',
},
ilberReportLayerText: {
  en: 'Consolidates analysis outputs into session-level quality assurance reports.',
  tr: 'Tüm analiz çıktılarını oturum bazlı kalite güvence raporları altında birleştirir.',
},


ilberQualitySummary: {
  en: 'Quality Summary',
  tr: 'Kalite Özeti',
},
ilberQcTitle: {
  en: 'Quality Control',
  tr: 'Kalite Kontrol',
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

ilberWindowTitle: {
  en: 'Window Analysis',
  tr: 'Pencere Analizi',
},

ilberMotionTitle: {
  en: 'Motion Analysis',
  tr: 'Hareket Analizi',
},

ilberFlightPeriodicityTitle: {
  en: 'Flight Periodicity Analysis',
  tr: 'Uçuş Periyodiklik Analizi',
},

ilberFlightStateTitle: {
  en: 'Flight State Classification',
  tr: 'Uçuş Durumu Sınıflandırması',
},

ilberFlightStabilityTitle: {
  en: 'Flight Stability Analysis',
  tr: 'Uçuş Kararlılık Analizi',
},

ilberTrajectoryTitle: {
  en: 'Trajectory Analysis',
  tr: 'Rota Analizi',
},

ilberSessionReportTitle: {
  en: 'Session Report',
  tr: 'Oturum Raporu',
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

corporateContactTitle: {
  en: 'Corporate Contact',
  tr: 'Kurumsal İletişim',
},

corporateContactDescription: {
  en: 'For partnerships, pilot studies, evaluation access, and corporate matters, please use the form below.',
  tr: 'İş birlikleri, pilot çalışmalar, değerlendirme erişimi ve kurumsal konular için lütfen aşağıdaki formu kullanın.',
},

contactMapTitle: {
  en: 'Ayrota Location',
  tr: 'Ayrota Konumu',
},

} as const;





export type TranslationKey = keyof typeof translations;