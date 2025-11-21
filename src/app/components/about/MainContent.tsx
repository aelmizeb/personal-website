'use client'

import { useTranslation } from 'react-i18next';
import { fadeInDown } from '@/utils/animations'
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Clients from "./Clients";

export default function MainContent() {
  const { t, ready } = useTranslation();

  if (!ready) return <p>...</p>;

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        {t('about.title')}
      </h1>

      <Bio />
      <Clients />
      <Skills />
      <Experience />
      <Education />
    </div>
  )
}
