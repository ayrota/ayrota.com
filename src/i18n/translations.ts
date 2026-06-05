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
  tr: 'Otonom sistemler için navigasyon zekası geliştiriyoruz.',
},

homeHeroLead: {
  en: 'Ayrota develops AI-assisted solutions that provide position, orientation, and motion estimation for autonomous systems in challenging environments where GNSS is insufficient or unavailable.',
  tr: 'Ayrota, GNSS’in yetersiz veya kullanılamadığı zorlu ortamlarda otonom sistemlere konum, yönelim ve hareket kestirimi sağlayan yapay zeka destekli çözümler geliştirir.',
},

homeCapabilityNavigation: {
  en: 'Inertial Navigation',
  tr: 'Ataletsel Navigasyon',
},

homeCapabilityFusion: {
  en: 'Sensor Fusion',
  tr: 'Sensör Füzyonu',
},

homeCapabilityAi: {
  en: 'AI-assisted Estimation',
  tr: 'Yapay Zeka Destekli Kestirim',
},

homeCapabilityEmbedded: {
  en: 'Embedded Systems',
  tr: 'Gömülü Sistemler',
},

homeCapabilityAutonomy: {
  en: 'Autonomous Platforms',
  tr: 'Otonom Platformlar',
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
   SECTION LABELS (GLOBAL)
-------------------- */
sectionHero: {
  en: 'Inertial Navigation',
  tr: 'Ataletsel Navigasyon',
},
sectionApproach: {
  en: 'Approach',
  tr: 'Yaklaşım',
},
sectionCore: {
  en: 'The Core',
  tr: 'Çekirdek Yapı',
},
sectionCapabilities: {
  en: 'Capabilities',
  tr: 'Yetkinlikler',
},
sectionProduct: {
  en: 'Products',
  tr: 'Ürünler',
},
sectionProvisioning: {
  en: 'Provisioning',
  tr: 'Erişim ve Kullanım',
},
sectionContact: {
  en: 'Contact',
  tr: 'İletişim',
},
sectionEarlyAccess: {
  en: 'Early Access',
  tr: 'Erken Erişim',
},

/* --------------------
   HERO
-------------------- */
heroTitleMain: {
  en: 'IMU-only motion estimation',
  tr: 'IMU verisinden hareket kestirimi',
},

heroTitleSub: {
  en: 'GNSS-independent, AI-assisted',
  tr: 'GNSS’den bağımsız, öğrenme destekli',
},

heroLead: {
  en: 'Ayrota develops inertial navigation systems for environments where GPS cannot be relied on.',
  tr: 'Ayrota, GPS’e güvenilemeyen ortamlarda çalışmak üzere ataletsel navigasyon sistemleri geliştirir.',
},

heroParagraph: {
  en: `Real-world systems do not operate under ideal assumptions. Drift accumulates, noise grows, and failure becomes part of the process. Our focus is on how estimation behaves under those constraints, and how it can remain structured as uncertainty increases.`,
  tr: `Gerçek dünyada sistemler ideal varsayımlarla çalışmaz. Sapma zamanla birikir, gürültü büyür ve belirsizlik sürecin doğal bir parçası haline gelir. Bizim odağımız, kestirimin tam da bu koşullar altında nasıl davrandığını anlamak ve belirsizlik arttıkça yapısını koruyabilen sistemler geliştirmektir.`,
},

heroMetaLine: {
  en: 'Signal evolves. Estimation follows.',
  tr: 'Sinyal değişir. Kestirim onu takip eder.',
},

/* --------------------
   APPROACH
-------------------- */
approachTitle: {
  en: 'Failure-first thinking',
  tr: 'Kısıtları başlangıç kabul eden yaklaşım',
},

approachParagraph: {
  en: `In inertial systems, drift, bias, and degradation are not edge cases — they define the problem space. Instead of designing around ideal conditions, we begin by accepting these constraints and observing how estimation behaves as they accumulate. This perspective shapes how the system is structured, how extensions are added, and how it evolves over time.`,
  tr: `Ataletsel sistemlerde sapma, bias ve bozunma istisna değil, problemin kendisini tanımlar. Bu nedenle yaklaşımımız ideal koşulları varsaymak yerine, bu kısıtları baştan kabul etmek ve kestirimin zaman içinde bu etkiler altında nasıl davrandığını gözlemlemekle başlar. Bu bakış açısı hem sistemin mimarisini hem de üzerine kurulan tüm katmanları belirler.`,
},

/* --------------------
   CORE
-------------------- */
coreTitleMain: {
  en: 'One core.',
  tr: 'Tek bir çekirdek.',
},

coreTitleSub: {
  en: 'Operational extensions — where needed.',
  tr: 'Gerektiği yerde operasyonel uzantılar.',
},

coreCard1Title: {
  en: 'IMU-only estimation core',
  tr: 'IMU odaklı kestirim çekirdeği',
},

coreCard1Text: {
  en: `The system is being developed around an IMU-only estimation core, designed to operate without GNSS and to remain analyzable as drift accumulates.`,
  tr: `Sistem, GNSS’e ihtiyaç duymadan çalışabilen ve sapma biriktikçe davranışı analiz edilebilir kalacak şekilde tasarlanan bir IMU odaklı kestirim çekirdeği etrafında geliştirilmektedir.`,
},

coreCard2Title: {
  en: 'Modular software structure',
  tr: 'Modüler yazılım yapısı',
},

coreCard2Text: {
  en: `The core is being shaped as a modular software system that can support evaluation workflows, system integration, and future deployment paths without locking the architecture too early.`,
  tr: `Çekirdek yapı, değerlendirme süreçlerini, sistem entegrasyonunu ve ileride oluşacak dağıtım ihtiyaçlarını destekleyebilecek modüler bir yazılım sistemi olarak şekillendirilmektedir; mimari erkenden katılaştırılmamaktadır.`,
},

coreRealityLine: {
  en: `Under the hood, the system is built around real-time inertial pipelines that combine attitude estimation, inertial propagation, and control-loop integration.`,
  tr: `Arka planda sistem; attitude kestirimi, ataletsel yayılım ve kontrol döngüsü entegrasyonunu bir araya getiren gerçek zamanlı ataletsel işleme hatları üzerine kuruludur.`,
},

coreShellsText: {
  en: `Around that core, operational shells can be added for route reconstruction from recorded signals, mission-specific command generation, and ROS-based input/output integration when the surrounding system requires it.`,
  tr: `Bu çekirdeğin etrafına; kaydedilmiş sinyallerden rota yeniden oluşturma, göreve özgü komut üretimi ve ihtiyaç halinde ROS tabanlı giriş/çıkış entegrasyonu gibi operasyonel katmanlar eklenebilir.`,
},

/* --------------------
   CAPABILITIES
-------------------- */
capabilitiesTitle: {
  en: 'What survives degraded conditions',
  tr: 'Bozulmuş koşullarda ayakta kalanlar',
},

capabilitiesIntro: {
  en: `We focus on behaviors that remain interpretable and stable as conditions degrade, rather than optimizing for ideal scenarios.`,
  tr: `Odak noktamız ideal koşullar değil; sistemin bozulan şartlar altında dahi anlaşılabilir ve tutarlı kalabilen davranışlarıdır.`,
},

capabilityDriftTitle: {
  en: 'Drift-aware estimation',
  tr: 'Sapma farkındalığı olan kestirim',
},

capabilityDriftText: {
  en: `Estimation remains analyzable as drift accumulates, with predictable degradation instead of uncontrolled divergence.`,
  tr: `Sapma biriktikçe kestirim davranışı analiz edilebilir kalır ve kontrolsüz sapma yerine öngörülebilir bozunma gözlemlenir.`,
},

capabilityRealtimeTitle: {
  en: 'Real-time execution',
  tr: 'Gerçek zamanlı çalışma',
},

capabilityRealtimeText: {
  en: `The system is designed to operate within real-time constraints on embedded hardware, respecting latency and resource limits.`,
  tr: `Sistem, gecikme ve kaynak kısıtlarını dikkate alarak gömülü donanımlar üzerinde gerçek zamanlı çalışacak şekilde tasarlanır.`,
},

capabilitiesOutro: {
  en: `Interfaces are structured to allow controlled integration. Additional layers can be introduced when required, without forcing the core into a fixed ecosystem.`,
  tr: `Arayüzler kontrollü entegrasyonu mümkün kılacak şekilde yapılandırılmıştır. Gerektiğinde ek katmanlar eklenebilir, ancak çekirdek yapı belirli bir ekosisteme zorlanmaz.`,
},

/* --------------------
   PROVISIONING
-------------------- */
provisioningTitle: {
  en: 'How access is structured',
  tr: 'Erişimin nasıl yapılandırıldığı',
},

provisioningIntro: {
  en: `The system is not presented as a finished commercial product. Access is structured around evaluation, experimentation, and integration under real constraints.`,
  tr: `Sistem tamamlanmış bir ticari ürün olarak sunulmaz. Erişim; değerlendirme, deneysel çalışma ve gerçek kısıtlar altında entegrasyon süreçleri etrafında yapılandırılır.`,
},

provisioningEmbeddedTitle: {
  en: 'Embedded direction',
  tr: 'Gömülü çalışma yönü',
},

provisioningEmbeddedText: {
  en: `Where required, the system can be adapted toward embedded execution for target hardware and constrained environments.`,
  tr: `Gerektiğinde sistem, hedef donanımlar ve kısıtlı çalışma ortamları için gömülü çalışmaya uyarlanabilir.`,
},

provisioningSdkTitle: {
  en: 'Evaluation access',
  tr: 'Değerlendirme erişimi',
},

provisioningSdkText: {
  en: `Controlled access can be provided for evaluation, experimentation, and integration studies within a clearly defined scope.`,
  tr: `Kapsamı açık biçimde tanımlanmış bir şekilde; değerlendirme, deneysel çalışma ve entegrasyon amaçlı erişim sağlanabilir.`,
},

provisioningCloudNote: {
  en: `Where useful, cloud-supported workflows can assist with benchmarking or large-scale evaluation, while operational runtimes remain self-contained.`,
  tr: `Gerekli durumlarda bulut destekli iş akışları kıyaslama ve geniş ölçekli değerlendirme için kullanılabilir; operasyonel çalışma ortamları ise kendi içinde kapalı tutulur.`,
},
/* --------------------
   EARLY ACCESS
-------------------- */
earlyAccessTitle: {
  en: 'Early access',
  tr: 'Erken erişim',
},

earlyAccessIntro: {
  en: `We are working with a limited number of partners to evaluate IMU-only navigation in real conditions and improve the system through direct technical feedback.`,
  tr: `IMU-only navigasyonu gerçek koşullarda değerlendirmek ve sistemi doğrudan teknik geri bildirimle geliştirmek için sınırlı sayıda paydaşla birlikte çalışıyoruz.`,
},

earlyAccessCard1Title: {
  en: 'Prototype evaluation',
  tr: 'Prototip değerlendirme',
},

earlyAccessCard1Text: {
  en: `Access to prototype software, evaluation flows, and experimental system behavior under constrained scenarios.`,
  tr: `Prototip yazılıma, değerlendirme akışlarına ve sistemin kısıtlı senaryolar altındaki deneysel davranışına erişim.`,
},

earlyAccessCard2Title: {
  en: 'Technical collaboration',
  tr: 'Teknik iş birliği',
},

earlyAccessCard2Text: {
  en: `Direct interaction around IMU pipelines, estimation behavior, integration constraints, and feasibility studies.`,
  tr: `IMU işleme hatları, kestirim davranışı, entegrasyon kısıtları ve uygulanabilirlik çalışmaları etrafında doğrudan teknik etkileşim.`,
},

earlyAccessOutro: {
  en: `If you are exploring navigation in GNSS-denied environments, we can discuss evaluation access, pilot studies, or integration-oriented collaboration.`,
  tr: `GNSS’in güvenilir olmadığı ortamlarda navigasyon üzerine çalışıyorsanız; değerlendirme erişimi, pilot çalışma ya da entegrasyon odaklı iş birliği seçeneklerini birlikte ele alabiliriz.`,
},

earlyAccessCta: {
  en: 'Request access through the contact form below.',
  tr: 'Aşağıdaki iletişim formu üzerinden erişim talep edebilirsiniz.',
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
   PRODUCT / ILBER
-------------------- */
productTitle: {
  en: 'İlber',
  tr: 'İlber',
},

productIntro: {
  en: 'Advanced analysis and validation platform for IMU datasets.',
  tr: 'IMU verileri için gelişmiş analiz ve doğrulama platformu.',
},

productBody: {
  en: 'Inertial datasets are evaluated through spectral, motion, sensor-domain, and physical consistency analysis workflows.',
  tr: 'Ataletsel veriler; spektral karakter, hareket yapısı, sensör davranışı ve fiziksel tutarlılık açısından analiz edilerek üretim seviyesinde değerlendirme altyapısı sağlar.',
},



/* --------------------
   PRODUCT / YÖRÜK
-------------------- */

yorukLabel: {
  en: 'YÖRÜK',
  tr: 'YÖRÜK',
},

yorukTitle: {
  en: 'Yörük',
  tr: 'Yörük',
},

yorukIntro: {
  en: 'Test content.',
  tr: 'Yol Kalitesi Takip Platformu.',
},
yorukBody: {
  en: 'Test content.',
  tr: 'Deneme.',
},

/* --------------------
   ILBER PAGE
-------------------- */
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

ilberHeroText: {
  en: 'İlber evaluates timing consistency, sensor health, signal quality, and motion behavior together to make data-related problems visible at an early stage.',
  tr: 'İlber; zaman tutarlılığı, sensör sağlığı, sinyal kalitesi ve hareket davranışını birlikte değerlendirerek veri kaynaklı problemleri erken aşamada görünür hale getirir.',
},

ilberTrustKicker: {
  en: 'Data-centric assurance layer',
  tr: 'Veri Odaklı Güvence Katmanı',
},

ilberTrustTitle: {
  en: 'Make sensor data reliable.',
  tr: 'Sensör verisini güvenilir hale getirir.',
},

ilberTrustText1: {
  en: 'Dropouts, timestamp issues, saturation, and noise increases in field data are often interpreted as algorithmic failures.',
  tr: 'Saha verilerindeki kopmalar, zaman damgası problemleri, doygunluklar ve gürültü artışları çoğu zaman algoritma hatası gibi yorumlanır.',
},

ilberTrustText2: {
  en: 'İlber clarifies this distinction, helping teams identify data-originated problems earlier and manage development more controllably.',
  tr: 'İlber, bu ayrımı netleştirerek ekiplerin ham veriden kaynaklanan problemleri daha erken görmesini ve geliştirme sürecini daha kontrollü yürütmesini sağlar.',
},

ilberModulesKicker: {
  en: 'Analysis infrastructure',
  tr: 'Analiz Altyapısı',
},

ilberModulesTitle: {
  en: 'Platform Modules',
  tr: 'Platform Modülleri',
},

ilberSampleKicker: {
  en: 'Platform Interface Demonstration',
  tr: 'Platform Arayüz Gösterimi',
},

ilberSampleTitle: {
  en: 'Sample İlber Analysis Module Report',
  tr: 'İlber Analiz Modülü Çıktı Raporu Örneği',
},

ilberSampleText: {
  en: 'Below is a representative reporting screen for İlber’s cadence stability analysis module.',
  tr: 'Aşağıda, İlber’in ritim kararlılığı analiz modülünü temsil eden örnek bir raporlama ekranı yer almaktadır.',
},

ilberCtaTitle: {
  en: 'Validate IMU data before the algorithm.',
  tr: 'IMU verisini algoritmadan önce doğrulayın.',
},

ilberCtaText: {
  en: 'İlber provides a standardized data quality assurance layer for teams developing navigation, PDR, UAV, robotics, and sensor fusion systems.',
  tr: 'İlber; navigasyon, PDR, UAV, robotik ve sensör füzyonu geliştiren ekipler için standartlaştırılmış veri kalite güvence katmanı sunar.',
},

ilberCtaButton: {
  en: 'Get in touch',
  tr: 'İletişime Geçin',
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