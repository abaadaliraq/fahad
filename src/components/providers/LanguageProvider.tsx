"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type Language } from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  direction: "rtl" | "ltr";
};

const LANGUAGE_STORAGE_KEY = "fahad-language";
const LANGUAGE_COOKIE = "fahad-language";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const LanguageContext = createContext<LanguageContextValue | null>(null);

function persistLanguage(language: Language) {
  document.cookie = `${LANGUAGE_COOKIE}=${language}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}

export function LanguageProvider({ children, initialLanguage = "ar" }: { children: ReactNode; initialLanguage?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const direction: "rtl" | "ltr" = language === "ar" ? "rtl" : "ltr";
  useEffect(() => {
    persistLanguage(initialLanguage);
  }, [initialLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [direction, language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    persistLanguage(nextLanguage);
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, direction }),
    [direction, language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div className={language === "ar" ? "font-arabic" : "font-english"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}

