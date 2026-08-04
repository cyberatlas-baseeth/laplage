import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationTR from './locales/tr/translation.json';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

const resources = {
  tr: {
    translation: translationTR
  },
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
