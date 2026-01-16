import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/logo-idskillz-ligne-transparent-blanc-e1734050813553.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={
      isScrolled ? {} : { background: 'rgba(10, 10, 10, 0.3)', backdropFilter: 'blur(10px)' }
    }>
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <img src={logo} alt="IDSKILLZ Logo" style={{ height: '32px', width: 'auto' }} />
          </Link>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {/* Updated Navigation Items */}
            <li><Link to="/" className={isActive('/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/site-web" className={isActive('/site-web')} onClick={() => setIsMobileMenuOpen(false)}>Site Web</Link></li>
            <li><Link to="/design" className={isActive('/design')} onClick={() => setIsMobileMenuOpen(false)}>Design</Link></li>
            <li><Link to="/3d" className={isActive('/3d')} onClick={() => setIsMobileMenuOpen(false)}>3D</Link></li>
            <li><Link to="/contact" className={isActive('/contact')} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
