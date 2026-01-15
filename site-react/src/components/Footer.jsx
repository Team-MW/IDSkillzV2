import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-idskillz-ligne-transparent-blanc-e1734050813553.png';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Background Elements */}
            <div className="footer-bg-glow"></div>

            <div className="container">
                {/* Top CTA Section */}
                <div className="footer-cta-section">
                    <h2 className="footer-cta-title">
                        Prêt à faire <span className="highlight-text">décoller</span> votre projet ?
                    </h2>
                    <p className="footer-cta-desc">Discutons de vos ambitions et construisons ensemble votre succès digital.</p>
                    <Link to="/contact" className="btn-primary btn-glow">
                        <span className="btn-text">Démarrer une collaboration</span>
                        <span className="btn-icon">→</span>
                    </Link>
                </div>

                <div className="footer-divider"></div>

                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Column 1: Brand */}
                    <div className="footer-brand-col">
                        <Link to="/" className="footer-logo-link">
                            <img src={logo} alt="IDSKILLZ Logo" className="footer-logo" />
                        </Link>
                        <p className="footer-tagline">
                            L'agence 360° qui transforme vos idées en résultats mesurables. Créativité, Stratégie, Performance.
                        </p>
                        <div className="footer-socials">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-pill">
                                <span>LinkedIn</span>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-pill">
                                <span>Instagram</span>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="social-pill">
                                <span>TikTok</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="footer-links-col">
                        <h4>Expertise</h4>
                        <ul>
                            <li><Link to="/site-web">Développement Web</Link></li>
                            <li><Link to="/design">Design & Branding</Link></li>
                            <li><Link to="/3d">Modélisation 3D</Link></li>
                            <li><Link to="/services">Tous nos services</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="footer-links-col">
                        <h4>Agence</h4>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/contact">À propos</Link></li>
                            <li><a href="#postuler">Carrières <span className="hiring-badge">Hiring</span></a></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="footer-contact-col">
                        <h4>Nous trouver</h4>
                        <address>
                            <p>6 Rue Aubert</p>
                            <p>93200 Saint-Denis, France</p>
                            <a href="mailto:contact@idskillz.com" className="contact-email">contact@idskillz.com</a>
                        </address>
                        <div className="footer-talent-box">
                            <p>Un talent ?</p>
                            <a href="#postuler" className="link-underline">Rejoignez l'équipe →</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="copyright">&copy; 2025 IDSKILLZ. Fait avec passion.</p>
                    <div className="footer-legal-links">
                        <Link to="/mentions-legales">Mentions légales</Link>
                        <Link to="/politique-confidentialite">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
