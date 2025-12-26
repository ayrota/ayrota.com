export type Language = 'en' | 'tr';

type Localized = {
  en: string;
  tr: string;
};

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

} as const;

export type TranslationKey = keyof typeof translations;