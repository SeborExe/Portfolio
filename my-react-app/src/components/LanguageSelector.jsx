// components/LanguageSelector.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'pl', flag: '🇵🇱', name: 'Polski' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'zh', flag: '🇨🇳', name: '中文' }
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300
            ${currentLanguage === lang.code 
              ? 'bg-[#915EFF] text-white shadow-lg transform scale-105' 
              : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }
          `}
          title={lang.name}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="text-sm font-medium hidden sm:block">{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;