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

      {/* Middle Section */}
      <section className="middle-section">
        
        <div className="middle-title-row">
          <div className="title-side left">SIMPLY</div>
          <div className="title-center">
            <h2>Made With Love.</h2>
            <h2>Quality you can taste.</h2>
          </div>
          <div className="title-side right">DELICIOUS</div>
        </div>

        <div className="middle-images">
          <div className="img-wrapper">
            <img src="/laplage-images/Chef Preparing Mushrooms.avif" alt="Chef Preparing Mushrooms" />
          </div>
          <div className="img-wrapper">
            <img src="/laplage-images/Plated Dumplings.avif" alt="Plated Dumplings" />
          </div>
          <div className="img-wrapper">
            <img src="/laplage-images/Waiter Serving Food.avif" alt="Waiter Serving Food" />
          </div>
        </div>

        <div className="middle-action">
          <a href="#menu" className="btn-menu">View Menu</a>
        </div>

      </section>

      {/* About Section with Background Image */}
      <section id="about" className="about-bg-section">
        <div className="about-box">
          <h2>
            A Fresh and<br />
            Seasonal Cuisine
          </h2>
          <a href="#about" className="btn-menu">About</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
