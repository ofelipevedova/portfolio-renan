"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import { translations, type Language } from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "pt",
  setLanguage: () => {},
  t: translations.pt,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "pt" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("portfolio-lang", lang);
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
