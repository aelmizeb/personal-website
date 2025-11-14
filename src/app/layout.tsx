import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Abdellatif EL MIZEB | Portfolio",
  description: "Software Engineer specializing in Magento, Vue, Nuxt, and Cloud solutions.",
  keywords: [
    "Abdellatif EL MIZEB",
    "Magento",
    "Adobe Commerce",
    "Mage-OS",
    "Nuxt",
    "Vue",
    "Strapi",
    "Developer",
    "Lead Developer",
    "Portfolio",
    "Web Development",
  ],
  openGraph: {
    title: "Abdellatif EL MIZEB | Portfolio",
    description: "Lead & Fullstack developer",
    url: SITE_URL,
    siteName: "Abdellatif Portfolio",
    images: [{ url: `${SITE_URL}/profile.png`, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* GTM */}
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}

        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <ThemeProvider>
          <LanguageProvider>
            {/* Client-side translation loader */}
            <Navbar />

            <main className="min-h-screen pt-24">{children}</main>

            <Footer />
            <CookieBanner />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
