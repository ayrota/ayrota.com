export type Language = 'en' | 'tr';

export const translations = {
  /* --------------------
     NAVIGATION / HEADER
  -------------------- */
  approach: {
    en: 'Approach',
    tr: 'Yaklaşım',
  },
  core: {
    en: 'The Core',
    tr: 'Teknoloji',
  },
  capabilities: {
    en: 'Capabilities',
    tr: 'Yetenekler',
  },
  provisioning: {
    en: 'Provisioning',
    tr: 'Teslimat',
  },
  contact: {
    en: 'Contact',
    tr: 'İletişim',
  },

  /* --------------------
     HERO
  -------------------- */

heroBadge: {
  en: 'IMU-ONLY CORE',
  tr: 'SADECE IMU KULLANAN ÇEKİRDEK TEKNOLOJİ',
},

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
approachBadge: {
  en: 'Approach',
  tr: 'Yaklaşım',
},

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
} as const;

export type TranslationKey = keyof typeof translations;