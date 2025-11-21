'use client';

import AnimatedProfileImage from './AnimatedProfileImage';
import AnimatedSocialLinks from './AnimatedSocialLinks';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, ready } = useTranslation();

  if (!ready) return <p>...</p>;

  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedProfileImage />

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')} <span className="text-primary">Abdellatif EL MIZEB</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {t('hero.subtitle')}
          </p>

          {/* Social links animation is client-side */}
          <AnimatedSocialLinks />
        </div>
      </div>
    </section>
  );
}
