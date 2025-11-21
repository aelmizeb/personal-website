'use client'

import { motion } from 'framer-motion'
import { 
  fadeInUp,
  fadeIn, 
  staggerContainer,
  cardHoverSmall 
} from '@/utils/animations'
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  return (
    <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          {t('common.experience')}
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
            <p className="text-primary mb-2">Caudalie • 2019 - 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Updating Magento Enterprise/Community versions and third-party modules</li>
              <li>Frontend migration to Nuxt 2/3</li>
              <li>Development of various features, code reviews, and execution of end-to-end (E2E) tests</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Software Engineer / Technical Lead</h3>
            <p className="text-primary mb-2">Capgemini • 2019</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Technical Lead for the creation of the Boucheron website on Magento Enterprise Edition</li>
              <li>Salesforce Commerce Cloud training</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">C2S Bouygues • 2018 - 2019</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Support for the agency’s clients and participation in pre-sales activities</li>
              <li>Application maintenance of a quality management project for Bouygues Construction</li>
              <li>Application maintenance of a project for Bouygues Energies & Services</li>
              <li>Application maintenance of a product management project for the publishing house Lito</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Technical Expert E-commerce</h3>
            <p className="text-primary mb-2">SQLI • 2010 - 2018</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Support for the agency’s clients and participation in pre-sales activities</li>
              <li>Expert and Lead developer on multiple projects</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
  )
} 