import React, { useEffect, useRef } from 'react';

const Hero = () => {
    // Local canvas logic removed in favor of global ParticlesBackground

    // Stats Animation Logic
    useEffect(() => {
        const statValues = document.querySelectorAll('.hero-stats .stat-value');
        const observerOptions = { threshold: 0.5 };

        const animateCounter = (element, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const currentValue = Math.floor(progress * (end - start) + start);
                element.textContent = currentValue;
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        const heroStatsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statValues.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-target'));
                        animateCounter(stat, 0, target, 2000);
                    });
                    heroStatsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const heroStatsSection = document.querySelector('.hero-stats');
        if (heroStatsSection) {
            heroStatsObserver.observe(heroStatsSection);
        }

        return () => heroStatsObserver.disconnect();
    }, []);

    // Parallax Logic
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const orbs = document.querySelectorAll('.gradient-orb');
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.1;
                // Using standard DOM manipulation as per original script
                orb.style.transform = `translate(${scrolled * speed * 0.1}px, ${scrolled * speed * 0.1}px)`;
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="accueil" className="hero">

            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-icon">🚀</span>
                        <span className="badge-text">Agence #1 en croissance digitale</span>
                    </div>
                    <h1 className="hero-title">
                        <span className="title-line">L'agence IDSKILLZ qui</span>
                        <span className="title-line highlight-text">construit ton image</span>
                        <span className="title-line">de demain</span>
                    </h1>
                    <p className="hero-subtitle">
                        Une équipe de créatifs, stratèges et experts passionnés qui transforment tes idées en
                        <span className="highlight-subtitle">vrais résultats mesurables</span>.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-box">
                            <div className="stat-value" data-target="500">0</div>
                            <div className="stat-label">Projets réalisés</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-value" data-target="98">0</div>
                            <div className="stat-label">% Satisfaction</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-value" data-target="24">0</div>
                            <div className="stat-label">Heures de réponse</div>
                        </div>
                    </div>

                    <div className="hero-cta-group">
                        <a href="#contact" className="btn-primary btn-glow">
                            <span className="btn-text">Réserver un appel gratuit</span>
                            <span className="btn-icon">→</span>
                        </a>
                        <a href="#services" className="btn-secondary">
                            <span className="btn-text">Découvrir nos services</span>
                        </a>
                    </div>

                    <div className="hero-trust">
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span>Consultation gratuite</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span>Réponse sous 24h</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span>Résultats garantis</span>
                        </div>
                    </div>

                    <div className="hero-scroll-indicator">
                        <div className="scroll-line"></div>
                        <span>Scroll</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
