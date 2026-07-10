import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <a href="#menu" className="btn btn-light hero-btn">{t('hero.cta')}</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" alt="Delicious Food" />
          </div>
          <div className="about-content">
            <span className="tagline">{t('about.tagline')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <div className="divider"></div>
            <p className="section-text">
              Experience the perfect blend of seaside relaxation and culinary excellence.
              Our chefs use only the freshest seasonal ingredients to craft dishes that delight the senses.
            </p>
            <a href="#about" className="btn btn-dark">{t('about.btn')}</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
