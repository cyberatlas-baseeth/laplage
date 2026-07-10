import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-title">{t('footer.addressTitle')}</h3>
          <p>{t('footer.address')}</p>
        </div>
        <div className="footer-col">
          <h3 className="footer-title">{t('footer.hoursTitle')}</h3>
          <p>{t('footer.hours')}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Maison La Plage. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
