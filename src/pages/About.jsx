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
            <p className="about-welcome-text">{t('aboutPage.welcome')}</p>
          </div>
        </div>
        <div className="about-right-side">
          <img src="/laplage-images/sip.jpg" alt="Maison La Plage Interior" loading="lazy" />
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <h2 className="philosophy-title">{t('aboutPage.philosophyTitle')}</h2>
        
        <div className="philosophy-grid">
          
          <div className="philosophy-item">
            <div className="icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10h18" />
                <path d="M5 10v4" />
                <path d="M19 10v4" />
                <path d="M7 14h10" />
                <path d="M8 14v4" />
                <path d="M16 14v4" />
                <path d="M12 10v10" />
              </svg>
            </div>
            <h3>{t('aboutPage.phil1Title')}</h3>
            <p>{t('aboutPage.phil1Text')}</p>
          </div>

          <div className="philosophy-item">
            <div className="icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2C4 5 3 9 5 12" />
                <path d="M16 2c4 3 5 7 3 10" />
                <path d="M12 2v10" />
                <path d="M2 16h20" />
                <path d="M4 19h16" />
              </svg>
            </div>
            <h3>{t('aboutPage.phil2Title')}</h3>
            <p>{t('aboutPage.phil2Text')}</p>
          </div>

          <div className="philosophy-item">
            <div className="icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2v7c0 2 1.5 3.5 3 4v9" />
                <path d="M8 2v7" />
                <path d="M10 2v7" />
                <path d="M16 2s-3 3-3 7 1.5 3 3 4v9" />
                <path d="M4 22h16" />
              </svg>
            </div>
            <h3>{t('aboutPage.phil3Title')}</h3>
            <p>{t('aboutPage.phil3Text')}</p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default AboutPage;
