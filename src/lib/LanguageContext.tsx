import { createContext, useContext, useState } from 'react';
import { translations } from '../i18n/translations';
import type { TranslationKey, Language } from '../i18n/translations';

type LanguageContextType = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: TranslationKey | string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

/* --------------------------------
   INITIAL LANGUAGE DETECTION
-------------------------------- */
function detectInitialLang(): Language {
  // Browser guard (SSR / build safety)
  if (typeof window === 'undefined') return 'en';

  // 1) Daha önce seçildiyse
  const saved = localStorage.getItem('lang');
  if (saved === 'tr' || saved === 'en') return saved;

  // 2) Tarayıcı dili
  const nav = (navigator.language || '').toLowerCase();
  if (nav.startsWith('tr')) return 'tr';

  // 3) Varsayılan
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectInitialLang);

  /* --------------------------------
     LANGUAGE SETTER (PERSISTENT)
  -------------------------------- */
  const setLang = (l: Language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', l);
    }
    setLangState(l);
  };

  /* --------------------------------
     TRANSLATION FUNCTION
  -------------------------------- */
  const t = (key: TranslationKey | string): string => {
    const entry = (translations as Record<string, any>)[key];

    // 🔒 Fallback: key aynen döner (uppercase YOK)
    if (!entry) {
      if (import.meta.env.DEV) {
        console.warn(`[i18n] Missing key: ${key}`);
      }
      return key.toLocaleUpperCase();
    }

    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}