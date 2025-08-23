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
