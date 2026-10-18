import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="main-content">
      {/* Top Banner Area with Logo */}
      <section className="top-banner">
        <h1 className="sr-only">
          Maison La Plage Trabzon | Yalıncak Ortahisar Denize Sıfır Restoran, Kafe, Kahvaltı, Taş Fırın Pizza & Butik Otel
        </h1>
        <img
          src="/laplage-images/logo2.png"
          alt="Maison La Plage Trabzon - Yalıncak Denize Sıfır Restoran, Kafe ve Butik Otel"
          className="massive-logo-img"
        />
      </section>

      {/* Image / Content Section */}
      <section className="image-section">
        {/* Placeholder for the table/food image from screenshot */}
        <div className="image-wrapper">
          {/* We will add a decorative wave SVG here later if needed */}
          <img
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
            alt="Maison La Plage Ortahisar Trabzon Sahil Restoranı, Akdeniz ve İtalyan Mutfağı"
            className="main-image"
          />
        </div>
      </section>

      {/* Middle Section */}
      <section className="middle-section">
        
        <div className="middle-title-row">
          <div className="title-side left">{t('about.tagline')}</div>
          <div className="title-center">
            <h2>{t('hero.title')}</h2>
            <h2>{t('hero.subtitle')}</h2>
          </div>
          <div className="title-side right">{t('about.taglineRight', { defaultValue: 'DELICIOUS' })}</div>
        </div>

        <div className="middle-images">
          <div className="img-wrapper">
            <img
              src="/laplage-images/Chef Preparing Mushrooms.avif"
              alt="Maison La Plage Trabzon İtalyan Mutfağı - Taze Malzemeler ve El Yapımı Lezzetler"
              loading="lazy"
            />
          </div>
          <div className="img-wrapper">
            <img
              src="/laplage-images/Plated Dumplings.avif"
              alt="Maison La Plage El Yapımı Ravioli, Tortellini, Makarna ve Taş Fırın Napoliten Pizza"
              loading="lazy"
            />
          </div>
          <div className="img-wrapper">
            <img
              src="/laplage-images/Waiter Serving Food.avif"
              alt="Maison La Plage Yalıncak Deniz Manzaralı Serpme Kahvaltı, Steak ve Şık Restoran"
              loading="lazy"
            />
          </div>
        </div>

        <div className="middle-action">
          <a href="https://menu.maisonlaplage.com.tr/menu.pdf" target="_blank" rel="noopener noreferrer" className="btn-menu">{t('hero.cta')}</a>
          <Link to="/menu" className="btn-menu btn-menu-secondary">{t('hero.menuPageBtn')}</Link>
        </div>

      </section>

      {/* About Section with Background Image */}
      <section id="about" className="about-bg-section">
        <div className="about-box">
          <h2>{t('about.title')}</h2>
          <Link to="/about" className="btn-menu">{t('about.btn')}</Link>
        </div>
      </section>

      {/* Featured Experiences: Breakfast, Pizza/Pasta, Fine Dining, Boutique Hotel */}
      <section id="experiences" className="seo-experiences-section">
        <div className="seo-section-container">
          <span className="seo-section-kicker">{t('experiences.kicker')}</span>
          <h2 className="seo-section-title">{t('experiences.title')}</h2>
          <p className="seo-section-subtitle">{t('experiences.subtitle')}</p>

          <div className="experiences-grid">
            <article className="experience-card">
              <h3>{t('experiences.card1Title')}</h3>
              <p>{t('experiences.card1Text')}</p>
              <Link to="/menu" className="card-inline-link">{t('experiences.menuLink')} &rarr;</Link>
            </article>

            <article className="experience-card">
              <h3>{t('experiences.card2Title')}</h3>
              <p>{t('experiences.card2Text')}</p>
              <Link to="/menu" className="card-inline-link">{t('experiences.menuLink')} &rarr;</Link>
            </article>

            <article className="experience-card">
              <h3>{t('experiences.card3Title')}</h3>
              <p>{t('experiences.card3Text')}</p>
              <a href="https://rzrvm.net/bQ2fOfesL6" target="_blank" rel="noopener noreferrer" className="card-inline-link">
                {t('experiences.reserveRestaurantLink')} &rarr;
              </a>
            </article>

            <article className="experience-card">
              <h3>{t('experiences.card4Title')}</h3>
              <p>{t('experiences.card4Text')}</p>
              <a
                href="https://maison-lapilage.rezervasyonal.com/?Checkin=2026-08-11&Checkout=2026-08-12&Adult=2&child=0&language=tr&currency=TRY&tenantId=36551&ChildAges="
                target="_blank"
                rel="noopener noreferrer"
                className="card-inline-link"
              >
                {t('experiences.reserveHotelLink')} &rarr;
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Guest Reviews Section */}
      <section id="reviews" className="seo-reviews-section">
        <div className="seo-section-container">
          <span className="seo-section-kicker">{t('reviews.kicker')}</span>
          <h2 className="seo-section-title">{t('reviews.title')}</h2>

          <div className="reviews-grid">
            <blockquote className="review-card">
              <div className="review-stars" aria-label="5 / 5">★★★★★</div>
              <p className="review-text">“{t('reviews.rev1Text')}”</p>
              <footer className="review-author">— {t('reviews.rev1Author')}</footer>
            </blockquote>

            <blockquote className="review-card">
              <div className="review-stars" aria-label="5 / 5">★★★★★</div>
              <p className="review-text">“{t('reviews.rev2Text')}”</p>
              <footer className="review-author">— {t('reviews.rev2Author')}</footer>
            </blockquote>

            <blockquote className="review-card">
              <div className="review-stars" aria-label="5 / 5">★★★★★</div>
              <p className="review-text">“{t('reviews.rev3Text')}”</p>
              <footer className="review-author">— {t('reviews.rev3Author')}</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="seo-faq-section">
        <div className="seo-section-container seo-faq-container">
          <span className="seo-section-kicker">{t('faq.kicker')}</span>
          <h2 className="seo-section-title">{t('faq.title')}</h2>

          <div className="faq-list">
            <details className="faq-item" open>
              <summary>{t('faq.q1')}</summary>
              <p>{t('faq.a1')}</p>
            </details>
            <details className="faq-item">
              <summary>{t('faq.q2')}</summary>
              <p>{t('faq.a2')}</p>
            </details>
            <details className="faq-item">
              <summary>{t('faq.q3')}</summary>
              <p>{t('faq.a3')}</p>
            </details>
            <details className="faq-item">
              <summary>{t('faq.q4')}</summary>
              <p>{t('faq.a4')}</p>
            </details>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
