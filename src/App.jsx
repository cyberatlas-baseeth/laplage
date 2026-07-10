import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<main style={{ padding: '2rem' }}>About Us Page (To be implemented)</main>} />
          <Route path="/contact" element={<main style={{ padding: '2rem' }}>Contact Page (To be implemented)</main>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
