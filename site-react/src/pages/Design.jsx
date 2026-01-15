import React, { useEffect } from 'react';

const Design = () => {
    useEffect(() => {
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
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-1"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon">🎨</span>
                            <span className="badge-text"> Design & Branding</span>
                        </div>
                        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>
                            Sublimez votre <span className="highlight-text">identité visuelle</span>
                        </h1>
                        <p className="hero-subtitle">
                            Du logo au support print, nous créons des univers graphiques cohérents et impactants qui racontent votre histoire.
                        </p>
                    </div>
                </div>
            </section>

            <section className="services" style={{ paddingTop: '50px' }}>
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>🎯</span>
                                <h3>Identité Visuelle</h3>
                            </div>
                            <p className="service-description">Création de logos et chartes graphiques complètes. Posez les fondations solides de votre marque.</p>
                        </div>

                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s', transitionDelay: '0.1s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>📄</span>
                                <h3>Print & Supports</h3>
                            </div>
                            <p className="service-description">Flyers, cartes de visite, brochures, kakémonos. Tout ce dont vous avez besoin pour communiquer sur le terrain.</p>
                        </div>

                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s', transitionDelay: '0.2s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>📱</span>
                                <h3>Design Digital</h3>
                            </div>
                            <p className="service-description">Maquettes UI/UX pour sites et applications, visuels pour réseaux sociaux, bannières publicitaires.</p>
                        </div>

                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s', transitionDelay: '0.3s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>📦</span>
                                <h3>Packaging</h3>
                            </div>
                            <p className="service-description">Design d'emballage produit qui se démarque en rayon. Étiquettes, boîtes et expériences unboxing.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
                <div className="container">
                    <h2 className="cta-title">Besoin d'un coup de pinceau ?</h2>
                    <a href="#contact" className="btn-primary">Créons ensemble</a>
                </div>
            </section>
        </div>
    );
};

export default Design;
