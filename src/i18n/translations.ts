export type Language = 'en' | 'tr';

export const translations = {

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