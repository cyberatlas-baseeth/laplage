import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BASE_URL = 'https://maisonlaplage.com.tr';

const SEO_CONFIG = {
  tr: {
    '/': {
      title: 'Maison La Plage Trabzon | Yalıncak Denize Sıfır Restoran, Kafe & Butik Otel',
      description:
        'Trabzon Ortahisar Yalıncak sahilinde denize sıfır restoran, kafe ve butik otel. Serpme kahvaltı, taş fırın Napoliten pizza, el yapımı ravioli & makarna, steak ve deniz ürünleri. Menü ve online rezervasyon.',
      canonicalPath: '/',
    },
    '/menu': {
      title: 'Maison La Plage Trabzon Menü | Kahvaltı, Taş Fırın Pizza, Ravioli, Steak & Tatlılar',
      description:
        'Maison La Plage Trabzon güncel menü: Yalıncak deniz manzaralı serpme kahvaltı, taş fırın Napoliten & Margherita pizza, el yapımı ravioli & tortellini, steak frites, deniz ürünleri ve tatlılar.',
      canonicalPath: '/menu',
    },
    '/about': {
      title: 'Hakkımızda | Maison La Plage Trabzon - İtalyan & Akdeniz Mutfağı ve Otel',
      description:
        'Maison La Plage Trabzon hikayesi: Yalıncak Ortahisar sahilinde taze yerel malzemelerle hazırlanan el yapımı ravioli, taş fırın pizza, kahvaltı, deniz ürünleri ve butik konaklama.',
      canonicalPath: '/about',
    },
    '/contact': {
      title: 'İletişim, Adres & Rezervasyon | Maison La Plage Yalıncak Ortahisar Trabzon',
      description:
        'Maison La Plage Trabzon adres, yol tarifi, çalışma saatleri (09:00 - 00:00), telefon (0540 323 24 44) ve restoran & otel rezervasyon bilgileri. Yalıncak, Deniz 1 Nolu Sk No:5 Ortahisar/Trabzon.',
      canonicalPath: '/contact',
    },
  },
  en: {
    '/': {
      title: 'Maison La Plage Trabzon | Seafront Italian & Mediterranean Restaurant, Cafe & Boutique Hotel',
      description:
        'Seafront Italian & Mediterranean restaurant, cafe, and boutique hotel in Yalıncak, Ortahisar, Trabzon. Breakfast by the beach, stone-baked pizza, handmade ravioli & pasta, steak, and seafood.',
      canonicalPath: '/',
    },
    '/menu': {
      title: 'Maison La Plage Trabzon Menu | Breakfast, Neapolitan Pizza, Ravioli, Steak & Seafood',
      description:
        'Explore the Maison La Plage Trabzon menu: sea-view Turkish & world breakfast, stone-baked Margherita & Neapolitan pizza, handmade ravioli & tortellini, steak frites, fresh seafood, and desserts.',
      canonicalPath: '/menu',
    },
    '/about': {
      title: 'About Us | Maison La Plage Trabzon - Italian & Mediterranean Fine Dining',
      description:
        'Discover Maison La Plage in Yalıncak, Trabzon: handmade pasta, ravioli, stone-baked Neapolitan pizza, sea-view breakfast, fresh seafood, and boutique hotel hospitality.',
      canonicalPath: '/about',
    },
    '/contact': {
      title: 'Contact, Location & Reservations | Maison La Plage Yalıncak Trabzon',
      description:
        'Visit Maison La Plage in Yalıncak, Ortahisar, Trabzon. Opening hours (09:00 - 00:00), map directions, phone (+90 540 323 24 44), restaurant & boutique hotel reservations.',
      canonicalPath: '/contact',
    },
  },
  ar: {
    '/': {
      title: 'Maison La Plage طرابزون | مطعم وكافيه وفندق بوتيك على البحر في يالنجاك',
      description:
        'مطعم إيطالي ومتوسطي وكافيه وفندق بوتيك بإطلالة مباشرة على البحر في يالنجاك، أورتاهيسار، طرابزون. إفطار على البحر، بيتزا على الحجر، معكرونة ورافيولي يدوية، ستيك ومأكولات بحرية.',
      canonicalPath: '/',
    },
    '/menu': {
      title: 'قائمة الطعام Maison La Plage طرابزون | إفطار، بيتزا على الحجر، رافيولي وستيك',
      description:
        'تصفح قائمة طعام Maison La Plage طرابزون: إفطار بإطلالة بحرية في يالنجاك، بيتزا نابولي ومارغريتا على الحجر، معكرونة ورافيولي يدوية، ستيك ومأكولات بحرية وحلويات إيطالية.',
      canonicalPath: '/menu',
    },
    '/about': {
      title: 'معلومات عنا | Maison La Plage طرابزون - مطعم وكافيه وفندق على البحر',
      description:
        'تعرف على قصة Maison La Plage في طرابزون: مأكولات إيطالية ومتوسطية طازجة، بيتزا على الحجر، إفطار بإطلالة بحرية، وإقامة فندقية راقية في يالنجاك.',
      canonicalPath: '/about',
    },
    '/contact': {
      title: 'اتصل بنا والعنوان والحجز | Maison La Plage يالنجاك طرابزون',
      description:
        'عنوان وموقع Maison La Plage في يالنجاك، أورتاهيسار، طرابزون. ساعات العمل (09:00 - 00:00)، الحجز والاتصال (+90 540 323 24 44).',
      canonicalPath: '/contact',
    },
  },
};

const normalizeRouteKey = (pathname) => {
  const decoded = decodeURIComponent(pathname).toLowerCase();
  if (decoded === '/menu' || decoded === '/menü') return '/menu';
  if (decoded === '/about' || decoded === '/hakkinda') return '/about';
  if (decoded === '/contact' || decoded === '/iletisim') return '/contact';
  return '/';
};

const SEOManager = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = ['tr', 'en', 'ar'].includes(i18n.language) ? i18n.language : 'tr';
    const routeKey = normalizeRouteKey(location.pathname);
    const meta = SEO_CONFIG[lang][routeKey] || SEO_CONFIG.tr['/'];
    const canonicalUrl = `${BASE_URL}${meta.canonicalPath}`;

    document.documentElement.lang = lang;
    document.title = meta.title;

    const setMetaContent = (selector, content) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    setMetaContent('meta[name="title"]', meta.title);
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[property="twitter:title"]', meta.title);
    setMetaContent('meta[property="twitter:description"]', meta.description);
    setMetaContent('meta[property="twitter:url"]', canonicalUrl);

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute('href', canonicalUrl);
    }
  }, [location.pathname, i18n.language]);

  return null;
};

export default SEOManager;
