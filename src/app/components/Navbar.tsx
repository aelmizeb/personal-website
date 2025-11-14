'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from '@/utils/routes';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const { t } = useTranslation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Prefix current lang to every route
  const localizedHref = (item: Route) => {
    const path = item.href[lang]; // get the path for current language
    if (path.startsWith(`/${lang}`)) return path; // if already prefixed we keep it
    return path === '/' ? `/${lang}` : `/${lang}${path}`;
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href={`/${lang}`} className="text-xl font-bold text-primary">
            <Image
              src={`${basePath}/logo.webp`}
              alt={t('navbar.logoAlt', 'Abdellatif EL MIZEB portfolio website')}
              width={80}
              height={50}
              priority
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {Routes.map((item) => (
              <Link
                key={item.label}
                href={localizedHref(item)}
                className="hover:text-primary transition-colors"
              >
                {t(`navbar.${item.label}`, item.label)}
              </Link>
            ))}

            <span className="text-gray-300 dark:text-gray-600">|</span>
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={
                theme === 'dark'
                  ? t('navbar.switchToLight', 'Switch to light mode')
                  : t('navbar.switchToDark', 'Switch to dark mode')
              }
            >
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={
              isMobileMenuOpen
                ? t('navbar.closeMenu', 'Close menu')
                : t('navbar.openMenu', 'Open menu')
            }
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {Routes.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={localizedHref(item)}
                      className="block py-2 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(`navbar.${item.label}`, item.label)}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Language Switcher */}
                <LanguageSwitcher />

                {/* Mobile Theme Switch */}
                <div>
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center py-2 hover:text-primary transition-colors"
                  >
                    {theme === 'dark' ? (
                      <>
                        <SunIcon className="h-5 w-5 mr-2" />
                        {t('navbar.lightMode', 'Light Mode')}
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5 mr-2" />
                        {t('navbar.darkMode', 'Dark Mode')}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
