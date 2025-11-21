"use client";

import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-secondary mt-2">
               {t('footer.text', 'Abdellatif EL MIZEB Portfolio Website')} {new Date().getFullYear()}.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/aelmizeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdellatifelmizeb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 