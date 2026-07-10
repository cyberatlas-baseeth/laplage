import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="main-content">
      {/* Top Banner Area with Logo */}
      <section className="top-banner">
        <h1 className="massive-logo">
          <span className="italic-text">Maison</span>
          <br />
          <span>La Plage</span>
        </h1>
      </section>

      {/* Image / Content Section */}
      <section className="image-section">
        {/* Placeholder for the table/food image from screenshot */}
        <div className="image-wrapper">
          {/* We will add a decorative wave SVG here later if needed */}
          <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" alt="Maison La Plage" className="main-image" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <span className="tagline">{t('about.tagline')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-text">
              Experience the perfect blend of seaside relaxation and culinary excellence.
              Our chefs use only the freshest seasonal ingredients to craft dishes that delight the senses.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
