"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";

export default function CookieBanner() {
  const { t, ready } = useTranslation();
  const { lang } = useLanguage();

  if (!ready) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="mySiteCookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{
        background: "#007aff",
        color: "#fff",
        fontSize: "13px",
        borderRadius: "4px",
        padding: "8px 16px",
      }}
      expires={150}
    >
      {t('common.cookiesMessage')}{" "}
      <Link
        href={lang === "fr" ? "/fr/politique-de-confidentialite" : "/en/privacy-policy"}
        className="underline"
      >
        {t('common.learnMore')}
      </Link>
    </CookieConsent>
  );
}
