import { createContext, useContext, useState } from 'react';
import { translations} from '../i18n/translations';
import type { TranslationKey, Language } from '../i18n/translations';

type LanguageContextType = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: TranslationKey | string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: TranslationKey | string): string => {
    const entry = (translations as Record<string, any>)[key];

    // 🔒 FALLBACK STRATEJİSİ
    if (!entry) {
      // key yok → olduğu gibi dön
      return key.toUpperCase();
    }

    // dil yoksa → en'e düş
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