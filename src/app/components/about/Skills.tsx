'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp,
  fadeIn, 
  staggerContainer, 
  cardHover, 
} from '@/utils/animations'
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  return (
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          {t('common.skills')}
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('common.backend')}</h3>
            <ul className="text-secondary space-y-2">
              <li>PHP 7/8 / Python / Java</li>
              <li>Magento / Adobe Commerce / Mage-OS</li>
              <li>Strapi / Drupal / Prestashop / Wordpress / Odoo</li>
              <li>Node.js / Express / H3</li>
              <li>MySQL / Mariadb / Postgres / SQLite</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('common.frontend')}</h3>
            <ul className="text-secondary space-y-2">
              <li>Vue / Nuxt / React / Next</li>
              <li>TypeScript / JavaScript</li>
              <li>Angular</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('common.toolsAndOthers')}</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub / Bitbucket / GitLab</li>
              <li>Docker / Docker Compose</li>
              <li>CI/CD / GitHub Actions</li>
              <li>Android / Flutter</li>
              <li>Jest / Playwright</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
  )
} 