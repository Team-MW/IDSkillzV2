import React, { useEffect } from 'react';

const WebDev = () => {
    useEffect(() => {
        // Animation logic reusing standard classes
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        document.querySelectorAll('.animate-fade').forEach(el => observer.observe(el));
    }, []);

    return (
        <div className="page-wrapper">
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 60px' }}>
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-3"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon">💻</span>
                            <span className="badge-text"> Développement Web</span>
                        </div>
                        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>
                            Votre vitrine digitale <span className="highlight-text">sur mesure</span>
                        </h1>
                        <p className="hero-subtitle">
                            Des sites web performants, esthétiques et optimisés pour la conversion. Nous créons des expériences digitales qui marquent les esprits.
                        </p>
                    </div>
                </div>
            </section>

            <section className="services" style={{ paddingTop: '50px' }}>
                <div className="container">
                    <div className="services-grid">
                        {/* Detailed Web Services */}
                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>🌐</span>
                                <h3>Site Vitrine</h3>
                            </div>
                            <p className="service-description">Présentez votre activité avec élégance. Un design unique qui reflète votre identité de marque et rassure vos prospects.</p>
                            <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.7)', marginTop: '1rem', lineHeight: '1.8' }}>
                                <li>✓ Design responsive & mobile-first</li>
                                <li>✓ Optimisation SEO technique</li>
                                <li>✓ Interface d'administration simple</li>
                            </ul>
                        </div>

                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s', transitionDelay: '0.1s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>🛒</span>
                                <h3>E-Commerce</h3>
                            </div>
                            <p className="service-description">Vendez 24/7 avec une boutique en ligne performante. Experience client fluide et tunnel d'achat optimisé.</p>
                            <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.7)', marginTop: '1rem', lineHeight: '1.8' }}>
                                <li>✓ Catalogue produits illimité</li>
                                <li>✓ Paiements sécurisés (Stripe, PayPal)</li>
                                <li>✓ Gestion des stocks & commandes</li>
                            </ul>
                        </div>

                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s', transitionDelay: '0.2s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>📱</span>
                                <h3>Applications Web</h3>
                            </div>
                            <p className="service-description">Des solutions métiers complexes simplifiées. Dashboards, plateformes SaaS, et outils internes.</p>
                            <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.7)', marginTop: '1rem', lineHeight: '1.8' }}>
                                <li>✓ React / Next.js Technology</li>
                                <li>✓ Intégration API & Base de données</li>
                                <li>✓ Scalabilité & Sécurité</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <h2 className="cta-title">Un projet web en tête ?</h2>
                    <a href="#contact" className="btn-primary">Discutons-en</a>
                </div>
            </section>
        </div>
    );
};

export default WebDev;
