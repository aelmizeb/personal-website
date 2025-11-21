import { useTranslation } from 'react-i18next';

export default function Bio() {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  return (
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          {t('about.description')}
        </p>
      </section>
  )
} 