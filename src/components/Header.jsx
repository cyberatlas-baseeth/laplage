import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const headerClass = `header ${isScrolled ? 'scrolled' : ''}`;

  return (
    <header className={headerClass}>
      <div className="header-container">
        <Link to="/" className="logo">
          {i18n.language === 'tr' ? 'Maison La Plage TR' : 'Maison La Plage'}
        </Link>
        
        <nav className="main-nav">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/#restaurant">{t('nav.restaurant')}</Link>
          <Link to="/#hotel">{t('nav.hotel')}</Link>
          <Link to="/#menu">{t('nav.menu')}</Link>
          <Link to="/#contact">{t('nav.contact')}</Link>
        </nav>

        <div className="header-actions">
          <Link to="/#reservations" className="btn btn-nav">{t('nav.reservations')}</Link>
          <div className="lang-switcher">
            <button onClick={() => changeLanguage('tr')} className={i18n.language === 'tr' ? 'active' : ''}>TR</button>
            <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
            <button onClick={() => changeLanguage('ar')} className={i18n.language === 'ar' ? 'active' : ''}>AR</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
