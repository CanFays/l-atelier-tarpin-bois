import React from 'react';
import './index.css';
import '../src/assets/fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Banner from './components/Banner.js';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <MyNavbar />
      {location.pathname === '/' && <Banner />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Disclaimer />} />
      </Routes>
      <MyFooter/>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
