import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-idskillz-ligne-transparent-blanc-e1734050813553.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/">
                        <img src={logo} alt="GROW360 Logo" style={{ height: '40px', width: 'auto' }} />
                    </Link>
                </div>
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">Tous les services</Link></li>
                            <li><Link to="/site-web">Sites Web</Link></li>
                            <li><Link to="/design">Graphisme</Link></li>
                            <li><Link to="/3d">3D</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Liens</h4>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><a href="#postuler">Postuler</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Réseaux</h4>
                        <ul className="social-links">
                            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer">Tiktok</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <Link to="/contact" className="btn-footer">Contactez-nous</Link>
                        <div className="footer-info">
                            <p>6 Rue Aubert, 93200 Saint-Denis, France</p>
                            <div className="footer-social">
                                <a href="#" target="_blank" rel="noopener noreferrer">linkedin</a>
                                <a href="#" target="_blank" rel="noopener noreferrer">instagram</a>
                                <a href="#" target="_blank" rel="noopener noreferrer">Tiktok</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-talent">
                        <p><strong>Si vous avez un talent, nous sommes peut-être votre nouvelle maison.</strong></p>
                        <a href="#postuler" className="btn-postuler">POSTULER</a>
                    </div>
                    <div className="footer-legal">
                        <p>&copy; 2025 GROW360. Tous droits réservés</p>
                        <div className="footer-links">
                            <Link to="/mentions-legales">Mentions légales</Link>
                            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
