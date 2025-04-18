import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white transition-colors"
        onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      >
        <Globe className="w-5 h-5" />
        <span className="uppercase">{language}</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <button
          className={`w-full px-4 py-2 text-left text-sm ${language === 'en' ? 'text-white bg-violet-600/50' : 'text-gray-300 hover:text-white'}`}
          onClick={() => setLanguage('en')}
        >
          English
        </button>
        <button
          className={`w-full px-4 py-2 text-left text-sm ${language === 'fr' ? 'text-white bg-violet-600/50' : 'text-gray-300 hover:text-white'}`}
          onClick={() => setLanguage('fr')}
        >
          Français
        </button>
      </div>
    </div>
  );
} 