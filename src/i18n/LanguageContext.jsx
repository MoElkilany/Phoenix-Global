import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'phoenix-lang';
const DEFAULT_LANG = 'ar';
const SUPPORTED = ['ar', 'en'];

const LanguageContext = createContext(null);

function readInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
}

function resolvePath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readInitialLanguage);

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLanguageState(next);
  }, []);

  const t = useCallback(
    (path, fallback = '') => {
      const value = resolvePath(translations[language], path);
      if (value === undefined || value === null) {
        const arValue = resolvePath(translations.ar, path);
        return arValue !== undefined ? arValue : fallback;
      }
      return value;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      dir: language === 'ar' ? 'rtl' : 'ltr',
      isRTL: language === 'ar',
    }),
    [language, setLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside a LanguageProvider');
  return ctx;
}
