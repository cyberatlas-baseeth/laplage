import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="main-content" style={{ marginTop: '80px' }}>
      <section className="contact-bg-section">
        <div className="contact-box">
          <h2>{t('contact.title')}</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="firstName">{t('contact.firstName')}</label>
                <input type="text" id="firstName" required />
              </div>
              <div className="form-group half-width">
                <label htmlFor="lastName">{t('contact.lastName')}</label>
                <input type="text" id="lastName" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input type="email" id="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <input type="text" id="subject" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea id="message" rows="4"></textarea>
            </div>
            
            <button type="submit" className="btn-submit">{t('contact.submit')}</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
