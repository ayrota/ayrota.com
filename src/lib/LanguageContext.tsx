import { createContext, useContext, useEffect, useState } from 'react';
import { translations, } from '../i18n/translations';
import type { Language, TranslationKey } from '../i18n/translations';

type Ctx = {
  lang: Language;
  t: (k: TranslationKey) => string;
  setLang: (l: Language) => void;
};

const LanguageContext = createContext<Ctx | null>(null);

function detectLang(): Language {
  const saved = localStorage.getItem('lang') as Language | null;
  if (saved) return saved;
  if (navigator.language.toLowerCase().startsWith('tr')) return 'tr';
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  const setLang = (l: Language) => {
    localStorage.setItem('lang', l);
    setLangState(l);
  };

  const t = (k: TranslationKey) => translations[k][lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage outside provider');
  return ctx;
}