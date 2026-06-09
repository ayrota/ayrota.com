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

ilberHowItWorks: {
  en: 'HOW IT WORKS',
  tr: 'NASIL ÇALIŞIR?',
},

ilberWorkflowSendTitle: {
  en: 'Send your data.',
  tr: 'Veri Analizi .',
},

ilberWorkflowSendText: {
  en: 'Share your IMU dataset securely for technical review.',
  tr: 'IMU veri setinizi güvenli şekilde bize iletin.',
},

ilberWorkflowAnalyzeTitle: {
  en: 'We analyze it.',
  tr: 'Analizi  yapalım.',
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
  tr: 'Kalite bulgularını içeren mühendislik raporunuzu alın.',
},

ilberWorkflowPreventTitle: {
  en: 'See problems early.',
  tr: 'Problemleri erken görün.',
},

ilberWorkflowPreventText: {
  en: 'Reduce debugging time before algorithm development begins.',
  tr: 'Algoritma geliştirme başlamadan hata ayıklama süresini azaltın.',
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