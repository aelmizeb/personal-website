import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdellatif EL MIZEB | Portfolio",
  description: "Software Engineer specializing in Magento, Vue, Nuxt, and Cloud solutions.",
  keywords: ["Abdellatif EL MIZEB", "Magento", "Nuxt", "Vue", "Strapi", "Developer","Lead Developer", "Portfolio", "Web Development"],
  openGraph: {
    title: "Abdellatif EL MIZEB | Portfolio",
    description: "Lead & Fullstack developer",
    url: "https://abdellatifelmizeb.com",
    siteName: "Abdellatif Portfolio",
    images: [
      {
        url: "https://abdellatifelmizeb.com/profile.png",
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
    images: ["https://abdellatifelmizeb.com/profile.png"],
  },*/
  themeColor: "#00000000",
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
  return (
    <html lang="en">
    <body className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
