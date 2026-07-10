import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    // Apply RTL for Arabic
    if (i18n.language === 'ar') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
  }, [i18n.language]);

  // Different headers for different languages example
  if (i18n.language === 'tr') {
    return (
      <header className="header tr-header">
        <div className="logo">Maison La Plage (TR Header)</div>
        <nav>
          <Link to="/">{t('header.home')}</Link>
          <Link to="/about">{t('header.about')}</Link>
          <Link to="/contact">{t('header.contact')}</Link>
        </nav>
        <div className="lang-switcher">
          <button onClick={() => changeLanguage('tr')}>TR</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('ar')}>AR</button>
        </div>
      </header>
    );
  }

  // Default header for EN and AR
  return (
    <header className="header global-header">
      <div className="logo">Maison La Plage</div>
      <nav>
        <Link to="/">{t('header.home')}</Link>
        <Link to="/about">{t('header.about')}</Link>
        <Link to="/contact">{t('header.contact')}</Link>
      </nav>
      <div className="lang-switcher">
        <button onClick={() => changeLanguage('tr')}>TR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ar')}>AR</button>
      </div>
    </header>
  );
};

export default Header;
