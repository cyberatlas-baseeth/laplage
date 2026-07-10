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
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Navigation Links */}
        <nav className="main-nav">
          <a href="https://rzrvm.net/bQ2fOfesL6" target="_blank" rel="noopener noreferrer">
            {t('nav.restaurant')} {t('nav.reservations')}
          </a>
          <Link to="/#hotel">{t('nav.hotel')}</Link>
          <a href="https://menu.maisonlaplage.com.tr/menu.pdf" target="_blank" rel="noopener noreferrer">{t('nav.menu')}</a>
          <Link to="/#contact">{t('nav.contact')}</Link>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          <Link to="/" className="btn-home">{t('nav.home')}</Link>
          <div className="lang-switcher">
            <button 
              onClick={() => changeLanguage('tr')} 
              className={i18n.language === 'tr' ? 'active' : ''}
            >
              TR
            </button>
            <button 
              onClick={() => changeLanguage('en')} 
              className={i18n.language === 'en' ? 'active' : ''}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
