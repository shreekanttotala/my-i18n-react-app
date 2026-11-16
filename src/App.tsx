import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import ContentCard from './components/ContentCard';
import './App.css'; // This file remains unchanged from the previous setup

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="app-container">
        <nav className="navbar">
          <LanguageToggle />
        </nav>
        <main>
          <ContentCard />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;