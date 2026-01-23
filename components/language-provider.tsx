"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "bn";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("bn");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(
      "his-language"
    ) as Language | null;
    const initialLanguage = storedLanguage ?? "bn";
    setLanguageState(initialLanguage);
    document.documentElement.lang = initialLanguage;
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem("his-language", nextLanguage);
  };

  const toggleLanguage = () =>
    setLanguage(language === "bn" ? "en" : "bn");

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
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
