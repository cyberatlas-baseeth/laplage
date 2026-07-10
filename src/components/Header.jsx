import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';

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
          <Link to="/about">{t('nav.about')}</Link>
          <a href="https://menu.maisonlaplage.com.tr/menu.pdf" target="_blank" rel="noopener noreferrer">{t('nav.menu')}</a>
          <Link to="/contact">{t('nav.contact')}</Link>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          {!isHome && (
            <Link to="/" className="btn-home-simple">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {t('nav.home')}
            </Link>
          )}
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
            <button 
              onClick={() => changeLanguage('ar')} 
              className={i18n.language === 'ar' ? 'active' : ''}
            >
              AR
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
