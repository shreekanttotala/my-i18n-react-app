import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/types';

const LanguageDropdown: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <div className="language-dropdown-wrapper">
      <svg
        className="globe-icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <select
        aria-label={t('language_label')}
        className="language-select"
        value={language}
        onChange={handleChange}
      >
        <option value="en">{t('lang_en')}</option>
        <option value="de">{t('lang_de')}</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;