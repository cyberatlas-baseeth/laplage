import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsSubmitting(false);
          setStatusMessage('Mesajınız başarıyla gönderildi! / Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setStatusMessage('Gönderim hatası! / Failed to send.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <main className="main-content" style={{ marginTop: '80px' }}>
      <section className="contact-bg-section">
        <div className="contact-box">
          <h2>{t('contact.title')}</h2>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="firstName">{t('contact.firstName')}</label>
                <input type="text" id="firstName" name="first_name" required />
              </div>
              <div className="form-group half-width">
                <label htmlFor="lastName">{t('contact.lastName')}</label>
                <input type="text" id="lastName" name="last_name" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input type="email" id="email" name="user_email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <input type="text" id="subject" name="subject" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Gönderiliyor...' : t('contact.submit')}
            </button>
            {statusMessage && (
              <p style={{ marginTop: '15px', color: '#fff', textAlign: 'center', fontSize: '1.1rem' }}>
                {statusMessage}
              </p>
            )}
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
              src="https://maps.google.com/maps?q=Maison%20La%20Plage%20Yal%C4%B1ncak%20Trabzon&t=&z=16&ie=UTF8&iwloc=&output=embed" 
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
