"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
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
      This website uses cookies to enhance the user experience.{" "}
      <a href="/privacy-policy" className="underline">
        Learn more
      </a>
    </CookieConsent>
  );
}