export type Language = 'en' | 'tr';

export const translations = {
  sectionHero: {
    en: 'Signal',
    tr: 'Sinyal',
  },
  sectionApproach: {
    en: 'Approach',
    tr: 'Yaklaşım',
  },
  sectionCore: {
    en: 'Core',
    tr: 'Çekirdek',
  },
  sectionCapabilities: {
    en: 'Capabilities',
    tr: 'Yetenek',
  },
  sectionProvisioning: {
    en: 'Access',
    tr: 'Erişim',
  },
  sectionContact: {
    en: 'Contact',
    tr: 'İletişim',
  },

  heroTitleMain: {
    en: 'Navigation without GPS',
    tr: 'GPS’in güvenilir olmadığı ortamlarda navigasyon',
  },

  heroTitleSub: {
    en: 'Inertial estimation shaped by physics and learning',
    tr: 'Fizik ve öğrenmeyle biçimlenen ataletsel kestirim',
  },

  heroLead: {
    en: 'Ayrota develops navigation systems that operate using only inertial signals, for environments where GPS cannot be trusted.',
    tr: 'Ayrota, yalnızca ataletsel sinyallerle çalışan ve GPS’in güvenilemediği ortamlara yönelik navigasyon sistemleri geliştirir.',
  },

  heroParagraph1: {
    en: 'Real-world systems do not operate under ideal conditions. Noise, bias, and drift are part of the signal, not exceptions to it.',
    tr: 'Gerçek dünyada sistemler ideal koşullarda çalışmaz. Gürültü, bias ve sapma bu sürecin istisnası değil, doğal parçalarıdır.',
  },

  heroParagraph2: {
    en: 'Instead of assuming perfect measurements, we focus on how estimation behaves as uncertainty accumulates and constraints begin to dominate.',
    tr: 'Bizim yaklaşımımız, kusursuz ölçümler varsaymak yerine belirsizlik biriktikçe kestirimin nasıl davrandığını anlamaya odaklanır.',
  },

  heroParagraph3: {
    en: 'The goal is not to erase drift, but to understand it, shape it, and build systems that continue to function as it evolves.',
    tr: 'Amaç sapmayı yok etmek değil; onu anlamak, yönlendirmek ve bu süreç içinde çalışmayı sürdüren sistemler kurmaktır.',
  },

  heroMeta: {
    en: 'Signal evolves. Estimation follows.',
    tr: 'Sinyal değişir. Kestirim onu takip eder.',
  },

  approachTitle: {
    en: 'Working with the signal as it is',
    tr: 'Sinyali olduğu haliyle ele almak',
  },

  approachParagraph1: {
    en: 'In inertial systems, drift, degradation, and failure are not edge cases. They define the operating conditions.',
    tr: 'Ataletsel sistemlerde sapma, bozunma ve hata istisna değildir. Çalışma koşullarının kendisini oluştururlar.',
  },

  approachParagraph2: {
    en: 'Our work begins by accepting these conditions as given. Instead of forcing ideal behavior, we observe how systems respond as uncertainty accumulates.',
    tr: 'Bizim işimiz bu koşulları veri kabul ederek başlar. İdeal davranışı zorlamak yerine, belirsizlik biriktikçe sistemin nasıl tepki verdiğini gözlemleriz.',
  },

  approachParagraph3: {
    en: 'That perspective shapes the entire structure — from signal processing to learning-based correction and controlled integration.',
    tr: 'Bu bakış açısı, sinyal işleme katmanından öğrenme tabanlı düzeltmeye ve kontrollü entegrasyona kadar tüm yapıyı belirler.',
  },

  coreTitleMain: {
    en: 'A single evolving core.',
    tr: 'Tek ve evrilen bir çekirdek.',
  },

  coreTitleSub: {
    en: 'Built under constraint, extended by necessity.',
    tr: 'Kısıtlar altında kurulur, ihtiyaçla genişler.',
  },

  coreCard1Title: {
    en: 'IMU-based estimation core',
    tr: 'IMU tabanlı kestirim çekirdeği',
  },

  coreCard1Text: {
    en: 'At the center is an estimation structure built directly on inertial signals, designed to remain interpretable as drift accumulates.',
    tr: 'Merkezde, doğrudan ataletsel sinyaller üzerine kurulu ve sapma biriktikçe davranışı anlaşılabilir kalacak şekilde tasarlanmış bir kestirim yapısı bulunur.',
  },

  coreCard2Title: {
    en: 'Modular system structure',
    tr: 'Modüler sistem yapısı',
  },

  coreCard2Text: {
    en: 'The system is organized as a modular software core, allowing controlled evaluation, iteration, and integration into different operational contexts.',
    tr: 'Sistem, kontrollü değerlendirme, yineleme ve farklı kullanım bağlamlarına entegrasyon sağlayacak şekilde modüler bir yazılım çekirdeği olarak düzenlenmiştir.',
  },

  coreShellsText: {
    en: 'Around this core, additional layers are used to reconstruct motion, analyze behavior over recorded data, and interface with external systems when required. These layers are shaped by operational need, not by arbitrary abstraction.',
    tr: 'Bu çekirdeğin etrafında, hareketin yeniden kurulması, kaydedilmiş veriler üzerinde davranış analizi yapılması ve gerektiğinde dış sistemlerle arayüz kurulması için ek katmanlar yer alır. Bu katmanlar keyfi soyutlamalarla değil, operasyonel ihtiyaçlarla şekillenir.',
  },

  capabilitiesTitle: {
    en: 'Behavior under real conditions',
    tr: 'Gerçek koşullarda davranış',
  },

  capabilitiesIntro: {
    en: 'Rather than focusing on ideal performance, we focus on how the system behaves as drift, noise, and bias evolve over time.',
    tr: 'İdeal performanstan çok, sapma, gürültü ve bias zaman içinde değişirken sistemin nasıl davrandığına odaklanıyoruz.',
  },

  capabilityDriftTitle: {
    en: 'Drift-aware estimation',
    tr: 'Sapma farkındalığı olan kestirim',
  },

  capabilityDriftText: {
    en: 'Estimation is structured to stay bounded and interpretable as inertial drift accumulates, rather than diverging unpredictably.',
    tr: 'Kestirim yapısı, ataletsel sapma biriktikçe öngörülemez biçimde ayrışmak yerine, sınırları bilinen ve anlaşılabilir bir davranış sergileyecek şekilde tasarlanır.',
  },

  capabilityRealtimeTitle: {
    en: 'Real-time execution',
    tr: 'Gerçek zamanlı çalışma',
  },

  capabilityRealtimeText: {
    en: 'The system is designed to operate under embedded hardware constraints, with consistent behavior under limited compute and strict timing conditions.',
    tr: 'Sistem, gömülü donanım kısıtları altında; sınırlı hesaplama gücü ve sıkı zaman koşullarında tutarlı davranış gösterecek şekilde tasarlanır.',
  },

  capabilitiesOutro: {
    en: 'Interfaces are kept minimal and controlled so the system can be evaluated, adapted, and integrated without becoming framework-dependent.',
    tr: 'Arayüzler sade ve kontrollü tutulur; böylece sistem belirli bir çerçeveye bağımlı hale gelmeden değerlendirilebilir, uyarlanabilir ve entegre edilebilir.',
  },

  provisioningTitle: {
    en: 'Access and deployment',
    tr: 'Erişim ve kullanım',
  },

  provisioningIntro: {
    en: 'The system is not distributed as a generic product. Access is provided in controlled forms depending on evaluation context, integration scope, and operational constraints.',
    tr: 'Sistem genel kullanıma açık bir ürün olarak sunulmaz. Erişim; değerlendirme bağlamına, entegrasyon kapsamına ve operasyonel kısıtlara göre kontrollü biçimde sağlanır.',
  },

  provisioningEmbeddedTitle: {
    en: 'Embedded evaluation environments',
    tr: 'Gömülü değerlendirme ortamları',
  },

  provisioningEmbeddedText: {
    en: 'In some cases, the system is evaluated on constrained target hardware so its behavior can be observed under realistic timing and resource limits.',
    tr: 'Bazı durumlarda sistem, hedef donanım üzerinde ve sınırlı kaynak koşullarında değerlendirilir; böylece davranışı gerçek zaman ve kaynak sınırları altında gözlemlenebilir.',
  },

  provisioningSdkTitle: {
    en: 'Controlled development access',
    tr: 'Kontrollü geliştirme erişimi',
  },

  provisioningSdkText: {
    en: 'For experimentation and integration work, selected parts of the system may be exposed through controlled interfaces. These are intended for evaluation and iteration, not unrestricted distribution.',
    tr: 'Deneysel çalışma ve entegrasyon süreçleri için sistemin belirli bölümleri kontrollü arayüzlerle erişime açılabilir. Bu yapı serbest dağıtım için değil, değerlendirme ve geliştirme için tasarlanır.',
  },

  provisioningCloudNote: {
    en: 'When required, offline evaluation workflows and data-driven processes support analysis and improvement. Operational behavior remains independent from external infrastructure.',
    tr: 'Gerekli olduğunda analiz ve geliştirme süreçleri çevrimdışı değerlendirme akışları ve veri odaklı yöntemlerle desteklenir. Operasyonel davranış dış altyapılardan bağımsız kalır.',
  },

  contactTitle: {
    en: 'Contact',
    tr: 'İletişim',
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
    tr: 'Mesaj gönder',
  },

  footerCopyright: {
    en: '© {{year}} Ayrota',
    tr: '© {{year}} Ayrota',
  },

  footerTaglineLine1: {
    en: 'Inertial navigation systems under active development.',
    tr: 'Geliştirilmekte olan ataletsel navigasyon sistemleri.',
  },

  footerTaglineLine2: {
    en: 'Controlled evaluation and collaboration supported where appropriate.',
    tr: 'Uygun durumlarda kontrollü değerlendirme ve iş birliği süreçleri yürütülür.',
  },

  footerPrivacy: {
    en: 'Privacy & Data Notice',
    tr: 'Gizlilik ve Veri Bildirimi',
  },

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
    tr: 'Kişisel veriler, olası bir işbirliğini değerlendirmek için gerekli süre boyunca saklanır ve düzenli olarak silinir.',
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
    en: 'Student applications are accepted exclusively through the Google Form.',
    tr: 'Öğrenci başvuruları yalnızca Google Form üzerinden kabul edilmektedir.',
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
    en: 'For partnerships, project inquiries, and technical contact, please use the form below.',
    tr: 'İş birlikleri, proje talepleri ve teknik iletişim için lütfen aşağıdaki formu kullanın.',
  },

  contactMapTitle: {
    en: 'Ayrota Location',
    tr: 'Ayrota Konumu',
  },
} as const;

export type TranslationKey = keyof typeof translations;