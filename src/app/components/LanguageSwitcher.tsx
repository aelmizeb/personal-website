import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, switchLang } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-2 py-1 rounded transition-colors ${
          lang === 'en'
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
            : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        onClick={() => switchLang('en')}
      >
        EN
      </button>

      <button
        className={`px-2 py-1 rounded transition-colors ${
          lang === 'fr'
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
            : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        onClick={() => switchLang('fr')}
      >
        FR
      </button>
    </div>
  );
}
