import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-left">
          <h3 className="footer-address-title">{t('footer.addressTitle')}</h3>
          <p className="footer-text">
            Yalıncak, Deniz 1 Nolu Sk No:5, 61080<br />
            Ortahisar/Trabzon
          </p>
        </div>

        <div className="footer-center">
          <h2 className="footer-hours-title">{t('footer.hoursTitle')}</h2>
          <p className="footer-text">{t('footer.hours')}</p>
        </div>
        
        <div className="footer-right">
          <h3 className="footer-address-title">{t('footer.contactTitle', { defaultValue: 'CONTACT' })}</h3>
          <p className="footer-text">
            <a href="tel:+905403232444" className="footer-link"><span dir="ltr">0540 323 24 44</span></a><br />
            <a href="mailto:info@maisonplage.com.tr" className="footer-link">info@maisonplage.com.tr</a>
          </p>
        </div>

      </div>

      <div className="footer-social">
        <a href="https://www.instagram.com/maisonlaplagetrabzon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
