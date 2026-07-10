import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <main className="about-page-main">
      <div className="about-split-container">
        <div className="about-left-side">
          <div className="about-text-content">
            <span className="about-subtitle">{t('aboutPage.subtitle')}</span>
            <h1 className="about-title">{t('aboutPage.title')}</h1>
            <p className="about-paragraph">{t('aboutPage.text')}</p>
          </div>
        </div>
        <div className="about-right-side">
          <img src="/laplage-images/sip.jpg" alt="Maison La Plage Interior" />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
