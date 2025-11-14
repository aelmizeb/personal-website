import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, switchLang } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-primary text-white' : ''}`}
        onClick={() => switchLang('en')}
        >
        EN
      </button>

      <button
        className={`px-2 py-1 rounded ${lang === 'fr' ? 'bg-primary text-white' : ''}`}
        onClick={() => switchLang('fr')}
        >
        FR
      </button>
    </div>
  )
} 