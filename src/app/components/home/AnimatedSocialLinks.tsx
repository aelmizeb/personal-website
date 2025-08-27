'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export default function AnimatedSocialLinks() {
  return (
    <motion.div
      className="flex justify-center space-x-4 mb-8"
      {...fadeInUp}
      transition={{ delay: 0.5 }}
    >
      <motion.a
        href="https://github.com/aelmizeb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/abdellatifelmizeb"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaLinkedin />
      </motion.a>
    </motion.div>
  )
}
