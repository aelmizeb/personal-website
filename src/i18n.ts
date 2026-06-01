import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../public/locales/en.json';
import fr from '../public/locales/fr.json';

i18n
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    interpolation: {
      escapeValue: false, // react already escapes
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
