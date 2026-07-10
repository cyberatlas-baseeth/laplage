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

      {/* Visit Us Map Section */}
      <section className="visit-section">
        <div className="visit-content">
          <div className="visit-text">
            <h2>{t('contact.visitTitle')}</h2>
            <p>{t('contact.visitText')}</p>
          </div>
          <div className="visit-map">
            <iframe 
              src="https://maps.google.com/maps?q=Maison%20La%20Plage%20Yal%C4%B1ncak%20Trabzon&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Maison La Plage Map"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
