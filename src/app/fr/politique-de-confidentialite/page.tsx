'use client'

import { motion } from 'framer-motion'
import { fadeInDown } from '@/utils/animations'

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        Privacy Policy
      </motion.h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Welcome! This is my personal portfolio website. Your privacy is important to me. This page explains how I use Google Analytics via Google Tag Manager (GTM) to understand how visitors interact with the site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Google Analytics</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I use Google Analytics through GTM to track anonymous visitor behavior. This helps me improve the website and understand general traffic patterns. No personally identifiable information is collected.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The website may store cookies to enable Google Analytics tracking. These cookies are only used for analytics purposes and do not identify individual users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
        <p className="text-gray-700 dark:text-gray-300">
          You can choose to disable cookies in your browser settings if you do not want to be tracked by Google Analytics. The site will still be functional without analytics.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you have any questions about this privacy policy, feel free to contact me at: <a href="mailto:contact@abdellatifelmizeb.com" className="underline">contact@abdellatifelmizeb.com</a>.
        </p>
      </section>
    </div>
  )
}
