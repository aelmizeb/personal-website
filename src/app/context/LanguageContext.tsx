"use client";

import "../../i18n";
import { createContext, useContext, useEffect, useState } from "react";
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

  const detectFromUrl = (): Lang => {
    const segment = pathname.split("/")[1];
    return segment === "fr" ? "fr" : "en";
  };

  const [lang, setLangState] = useState<Lang>("en");

  // ✔ Sync to URL + sync to i18next
  useEffect(() => {
    const detected = detectFromUrl();
    setLangState(detected);
    i18next.changeLanguage(detected);  // 🔥 FIX
  }, [pathname]);

  // ✔ Redirect and sync i18next when switching
  const switchLang = (newLang: Lang) => {
    setLangState(newLang);
    i18next.changeLanguage(newLang);  // 🔥 FIX
    router.push(`/${newLang}`);       // always home, no subpath
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
