"use client";

import "../../i18n";
import { createContext, useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import i18next from "i18next";

type Lang = "en" | "fr";

const LanguageContext = createContext<{
  lang: Lang;
  switchLang: (lang: Lang) => void;
}>({
  lang: "en",
  switchLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const lang: Lang = pathname.split("/")[1] === "fr" ? "fr" : "en";

  if (i18next.resolvedLanguage !== lang) {
    void i18next.changeLanguage(lang);
  }

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Redirect and sync i18next when switching.
  const switchLang = (newLang: Lang) => {
    i18next.changeLanguage(newLang);
    router.push(`/${newLang}`);       // always home, no subpath
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
