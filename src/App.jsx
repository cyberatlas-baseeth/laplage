import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEOManager from './components/SEOManager';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutPage from './pages/About';
import MenuPage from './pages/Menu';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SEOManager />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-ivory)' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menü" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hakkinda" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
