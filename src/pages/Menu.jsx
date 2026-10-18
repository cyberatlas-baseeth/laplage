import React from 'react';
import { useTranslation } from 'react-i18next';
import './Menu.css';

const MenuPage = () => {
  const { t } = useTranslation();

  const categories = [
    {
      key: 'breakfast',
      title: t('menuPage.cat1Title'),
      subtitle: t('menuPage.cat1Sub'),
      items: t('menuPage.cat1Items', { returnObjects: true }),
    },
    {
      key: 'pizza',
      title: t('menuPage.cat2Title'),
      subtitle: t('menuPage.cat2Sub'),
      items: t('menuPage.cat2Items', { returnObjects: true }),
    },
    {
      key: 'pasta',
      title: t('menuPage.cat3Title'),
      subtitle: t('menuPage.cat3Sub'),
      items: t('menuPage.cat3Items', { returnObjects: true }),
    },
    {
      key: 'mains',
      title: t('menuPage.cat4Title'),
      subtitle: t('menuPage.cat4Sub'),
      items: t('menuPage.cat4Items', { returnObjects: true }),
    },
    {
      key: 'salads',
      title: t('menuPage.cat5Title'),
      subtitle: t('menuPage.cat5Sub'),
      items: t('menuPage.cat5Items', { returnObjects: true }),
    },
    {
      key: 'desserts',
      title: t('menuPage.cat6Title'),
      subtitle: t('menuPage.cat6Sub'),
      items: t('menuPage.cat6Items', { returnObjects: true }),
    },
  ];

  return (
    <main className="menu-page-main">
      <section className="menu-hero">
        <div className="menu-hero-inner">
          <span className="menu-kicker">{t('menuPage.kicker')}</span>
          <h1 className="menu-main-title">{t('menuPage.title')}</h1>
          <p className="menu-intro">{t('menuPage.description')}</p>
          <div className="menu-hero-actions">
            <a
              href="https://menu.maisonlaplage.com.tr/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-menu"
            >
              {t('menuPage.pdfBtn')}
            </a>
            <a
              href="https://rzrvm.net/bQ2fOfesL6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-menu btn-menu-outline"
            >
              {t('menuPage.reserveBtn')}
            </a>
          </div>
        </div>
      </section>

      <section className="menu-categories-section">
        <div className="menu-categories-grid">
          {categories.map((cat) => (
            <article key={cat.key} className="menu-category-card">
              <div className="menu-cat-header">
                <h2>{cat.title}</h2>
                <p className="menu-cat-sub">{cat.subtitle}</p>
              </div>
              <ul className="menu-items-list">
                {Array.isArray(cat.items) &&
                  cat.items.map((item, idx) => (
                    <li key={idx} className="menu-item-row">
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-item-desc">{item.desc}</span>
                    </li>
                  ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="menu-bottom-cta">
          <p>{t('menuPage.bottomNote')}</p>
          <a
            href="https://menu.maisonlaplage.com.tr/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-menu"
          >
            {t('menuPage.pdfBtn')}
          </a>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
