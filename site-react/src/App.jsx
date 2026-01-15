import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WebDev from './pages/WebDev';
import Design from './pages/Design';
import ThreeD from './pages/ThreeD';
import Contact from './pages/Contact';

import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

function App() {

  // Keep smooth scroll for basic anchor links within pages (like #contact in CTAs)
  // This might duplicate Router action if not careful, but useful for in-page anchors
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute('href');
        // If it's #contact, and we are not on contact page, maybe we should navigate or open modal?
        // Current Layout has ContactModal. Navbar has /contact link.
        // Let's assume on-page anchors (non-nav) open the modal or scroll
        if (href === '#contact' || href === '#postuler') {
          // Let the modal listener in ContactModal handle this event if it listens to click
          // Actually ContactModal listens to document click for a[href="#contact"]
          // So we just return and let it bubble/be handled
          return;
        }

        const element = document.querySelector(href);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };
    // We used to add listener here but React Router Link component prevents full reload.
    // However, for standard <a href="#"> inside content, we might want smooth scroll.
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/site-web" element={<WebDev />} />
          <Route path="/design" element={<Design />} />
          <Route path="/3d" element={<ThreeD />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
