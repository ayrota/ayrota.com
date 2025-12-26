export type Language = 'en' | 'tr';

export const translations = {

/* --------------------
   SECTION LABELS (GLOBAL)
-------------------- */
sectionHero: {
  en: 'IMU-Only Core',
  tr: 'IMU Tabanlı Çekirdek',
},
sectionApproach: {
  en: 'Approach',
  tr: 'Yaklaşım',
},
sectionCore: {
  en: 'The Core',
  tr: 'Çekirdek',
},
sectionCapabilities: {
  en: 'Capabilities',
  tr: 'Yetkinlikler',
},
sectionProvisioning: {
  en: 'Provisioning',
  tr: 'Sunum ve Dağıtım',
},
sectionContact: {
  en: 'Contact',
  tr: 'İletişim',
},
/* --------------------
    HERO
-------------------- */
heroTitleMain: {
  en: 'AI-assisted motion estimation',
  tr: 'IMU verisinden hareket kestirimi',
},

heroTitleSub: {
  en: 'from IMU data only',
  tr: 'AI destekli, GNSS’siz',
},

heroLead: {
  en: 'Displacement and pose estimation designed for GNSS-denied and degraded operations.',
  tr: 'GNSS olmayan veya bozunmuş ortamlarda çalışmak üzere tasarlanmış yer değiştirme ve duruş kestirimi.',
},

heroParagraph1: {
  en: 'Operational failure is expected.',
  tr: 'Gerçek operasyonlarda belirsizlik kaçınılmazdır.',
},

heroParagraph2: {
  en: 'Drift is inevitable.',
  tr: 'Ölçüm sapmaları zamanla birikir.',
},

heroParagraph3: {
  en: 'Systems must converge under constraint — not assume ideal conditions.',
  tr: 'Sağlam sistemler, ideal koşulları varsaymaz; kısıtlar altında dengeye gelmek zorundadır.',
},

/* --------------------
   APPROACH
-------------------- */

approachTitle: {
  en: 'Failure-first thinking',
  tr: 'Başarısızlığı başlangıç kabul eden yaklaşım',
},

approachParagraph1: {
  en: `We treat failure, drift, and degradation as baseline conditions —
not edge cases.`,
  tr: `Başarısızlık, sapma ve bozunma bizim için istisna değil;
başlangıç koşuludur.`,
},

approachParagraph2: {
  en: `Our work starts by constraining the problem space and observing
how systems behave when ideal assumptions break down.`,
  tr: `Çalışmaya problemi daraltarak ve ideal varsayımlar geçerliliğini
yitirdiğinde sistemlerin nasıl davrandığını gözlemleyerek başlarız.`,
},

approachParagraph3: {
  en: `This approach shapes both the core technology and every operational
extension built on top of it.`,
  tr: `Bu yaklaşım yalnızca çekirdek teknolojiyi değil, onun üzerine inşa edilen
tüm operasyonel katmanları belirler.`,
},

/* --------------------
   CAPABILITIES
-------------------- */
capabilitiesTitle: {
  en: 'What survives degraded conditions',
  tr: 'Bozulmuş koşullarda ayakta kalanlar',
},

capabilitiesIntro: {
  en: 'We focus on what survives drift and failure — not on ideal benchmarks.',
  tr: 'İdeal senaryoları değil, sapma ve arıza altında çalışmaya devam eden davranışları esas alırız.',
},

capabilityDriftTitle: {
  en: 'Drift-aware estimation',
  tr: 'Sapma farkındalığı olan kestirim',
},

capabilityDriftText: {
  en: 'Predictable behavior as inertial drift accumulates, with controlled degradation under noise and bias growth.',
  tr: 'Ataletsel sapmalar biriktikçe öngörülebilir davranış ve gürültü ile bias artışı altında kontrollü bozunma.',
},

capabilityRealtimeTitle: {
  en: 'Real-time embedding posture',
  tr: 'Gerçek zamanlı gömülü çalışma',
},

capabilityRealtimeText: {
  en: 'Designed to run on constrained edge devices (e.g., Jetson / Raspberry-class), within operational latency limits.',
  tr: 'Jetson veya Raspberry sınıfı kısıtlı uç cihazlarda, operasyonel gecikme sınırları içinde çalışacak şekilde tasarlanmıştır.',
},

capabilitiesOutro: {
  en: 'Interfaces are structured for controlled embedding. When integration requires it, the ROS I/O shell can be used without turning the core into a ROS product.',
  tr: 'Arayüzler kontrollü gömülme için yapılandırılmıştır. Gerekli durumlarda ROS I/O kabuğu kullanılabilir; ancak çekirdek bir ROS ürünü hâline getirilmez.',
},

/* --------------------
   PROVISIONING
-------------------- */
provisioningTitle: {
  en: 'How the core is made available',
  tr: 'Çekirdek yazılımın nasıl sunulduğu',
},

provisioningIntro: {
  en: `The navigation core is productized software.
Provisioning options are selected based on operational constraints,
not convenience.`,
  tr: `Navigasyon çekirdeği ürünleştirilmiş bir yazılımdır.
Teslim ve kullanım biçimleri, pratiklikten ziyade
operasyonel kısıtlara göre belirlenir.`,
},

provisioningEmbeddedTitle: {
  en: 'Embedded runtime',
  tr: 'Gömülü çalışma ortamı',
},

provisioningEmbeddedText: {
  en: `The core may be provided as an optimized embedded runtime,
delivered with target devices and intended to run under
real-time and resource constraints.`,
  tr: `Çekirdek yazılım, hedef uç cihazlarla birlikte teslim edilen,
gerçek zamanlı ve kaynak kısıtları altında çalışacak şekilde
optimize edilmiş bir gömülü çalışma ortamı olarak sağlanabilir.`,
},

provisioningSdkTitle: {
  en: 'Licensed SDK (controlled)',
  tr: 'Lisanslı SDK (kontrollü)',
},

provisioningSdkText: {
  en: `A controlled, licensed SDK may be used for development,
evaluation, and system integration — scope-bound and
interface-limited by design.`,
  tr: `Geliştirme, değerlendirme ve sistem entegrasyonu amacıyla
kapsamı ve arayüzleri sınırlandırılmış, lisans kontrollü bir
SDK sağlanabilir.`,
},

provisioningCloudNote: {
  en: `Cloud-backed workflows may be used to support training,
benchmarking, and large-scale evaluation when permitted.
All operational runtimes remain self-contained and
independent of cloud infrastructure.`,
  tr: `Eğitim, kıyaslama ve geniş ölçekli değerlendirme süreçlerinde,
izin verilen durumlarda bulut destekli iş akışları kullanılabilir.
Operasyonel çalışma ortamları ise her zaman kendi içinde kapalı
ve bulut altyapısından bağımsızdır.`,
},

/* --------------------
   CORE
-------------------- */
coreTitleMain: {
  en: 'One core.',
  tr: 'Tek bir çekirdek.',
},

coreTitleSub: {
  en: 'Operational extensions — by necessity.',
  tr: 'Operasyonel uzantılar — gereklilikten doğar.',
},

coreCard1Title: {
  en: 'IMU-only AI-assisted estimation core',
  tr: 'IMU-only, AI destekli kestirim çekirdeği',
},

coreCard1Text: {
  en: `Displacement and pose estimation from IMU signals only —
structured to remain bounded as drift accumulates.`,
  tr: `Yalnızca IMU sinyallerinden yer değiştirme ve duruş kestirimi.
Drift biriktikçe davranışı sınırlı kalacak şekilde yapılandırılmıştır.`,
},

coreCard2Title: {
  en: 'Delivered as productized software',
  tr: 'Ürünleştirilmiş yazılım olarak sunulur',
},

coreCard2Text: {
  en: `Available as licensed software. May be provided as a controlled,
licensed SDK for development/evaluation, or as an optimized embedded
runtime for target devices.`,
  tr: `Lisanslı bir yazılım olarak sunulur. Geliştirme ve değerlendirme
amaçlı, kapsamı sınırlandırılmış lisanslı bir SDK şeklinde ya da
hedef uç cihazlar için optimize edilmiş bir gömülü çalışma ortamı
olarak sağlanabilir.`,
},

coreShellsText: {
  en: `On top of the core, operational shells can be used to reconstruct a dead-reckoned path,
compute navigation commands for a predefined route, and interface with ROS
(IMU input and command output) when required by the mission system.`,
  tr: `Çekirdeğin üzerinde, dead-reckoning ile yol yeniden inşa etmek,
önceden tanımlı bir rota için navigasyon komutları hesaplamak ve
görev sisteminin gerektirdiği durumlarda ROS ile arayüzlemek
(IMU girişi ve komut çıktısı) için operasyonel kabuklar kullanılabilir.`,
},
/* --------------------
   CONTACT
-------------------- */
contactTitle: {
  en: 'Submit an evaluation request',
  tr: 'Değerlendirme talebi gönder',
},

contactIntroLine1: {
  en: 'This channel is intended for serious evaluation inquiries only.',
  tr: 'Bu kanal yalnızca ciddi değerlendirme talepleri içindir.',
},

contactIntroLine2: {
  en: 'High-level context is sufficient at this stage.',
  tr: 'Bu aşamada yüksek seviyeli bağlam yeterlidir.',
},

contactLabelOrg: {
  en: 'Organization / Project',
  tr: 'Kurum / Proje',
},

contactLabelEmail: {
  en: 'Contact email',
  tr: 'İletişim e-postası',
},

contactLabelMessage: {
  en: 'Your inquiry',
  tr: 'Talebiniz',
},

contactPlaceholderMessage: {
  en: 'Environment, constraints, timeline…',
  tr: 'Ortam, kısıtlar, zaman çizelgesi…',
},

contactSubmit: {
  en: 'Submit inquiry',
  tr: 'Talebi gönder',
},

contactFootnote: {
  en: 'NDA-first · scope-bound · response is not guaranteed',
  tr: 'NDA öncelikli · kapsam sınırlı · geri dönüş garanti edilmez',
},

/* --------------------
   FOOTER
-------------------- */
footerCopyright: {
  en: '© {{year}} Ayrota',
  tr: '© {{year}} Ayrota',
},

footerTaglineLine1: {
  en: 'Productized inertial navigation software.',
  tr: 'Ürünleştirilmiş ataletsel navigasyon yazılımı.',
},

footerTaglineLine2: {
  en: 'Cloud-backed evaluation supported where permitted.',
  tr: 'İzin verilen durumlarda bulut destekli değerlendirme süreçleri kullanılır.',
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
} as const;

export type TranslationKey = keyof typeof translations;