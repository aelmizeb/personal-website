'use client'

import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeIn, 
  staggerContainer,
  cardHoverSmall 
} from '@/utils/animations'
import { useTranslation } from 'react-i18next';

export default function Bio() {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  return (
    <motion.section
      {...fadeIn}
      transition={{ delay: 0.6 }}
    >
      <motion.h2
        className="section-title"
        {...fadeInUp}
      >
        {t('common.education')}
      </motion.h2>
      <motion.div
        className="max-w-3xl mx-auto"
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
          <h3 className="text-xl font-semibold mb-2">Master&apos;s degree in computer engineering</h3>
          <p className="text-primary mb-2">Mohammed Premier University • 2008 - 2010</p>
          <p className="text-secondary">
            Graduated with honors. Focused on software engineering.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
} 