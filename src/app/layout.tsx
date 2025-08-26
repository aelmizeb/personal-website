import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    images: [
      {
        url: `${SITE_URL}/profile.png`, 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  /*twitter: {
    card: "summary_large_image",
    site: "@yourtwitter",
    title: "Abdellatif EL MIZEB | Portfolio",
    description: "Lead & Fullstack developer",
    images: [`${SITE_URL}/profile.png`],
  },*/
  //themeColor: "#00000000",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/android-icon-192x192.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  other: {
    "msapplication-TileColor": "#00000000",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <head>
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
      </head>
      <body
        className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}
      >
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}

        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
