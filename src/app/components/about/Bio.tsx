'use client'

import { motion } from 'framer-motion'
import { 
  fadeInUp,
} from '@/utils/animations'

export default function Bio() {
  return (
      
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          Despite working in the backend, I am very much enthusiastic about frontend technologies. My expertise includes PHP, Magento, 
          Drupal, JavaScript, Nuxt, Vue, MySQL, Android, Flutter, Strapi. Additionally, I like to contribute to the open source community.
        </p>
      </motion.section>
  )
} 