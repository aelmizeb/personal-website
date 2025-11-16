import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // load translations via HTTP (optional)
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // react already escapes
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // files exist in public/locales
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
