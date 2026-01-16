import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';

const MoodboardGallery = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nos Créations</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>Un aperçu de notre savoir-faire visuel.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Placeholder Cards for Portfolio - using CSS Gradients to simulate rich visuals */}
                    {[
                        { title: "Neo Bank App", gradient: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)", tag: "UI/UX Design" },
                        { title: "Luxury Brand Identity", gradient: "linear-gradient(135deg, #1CD8D2 0%, #93EDC7 100%)", tag: "Branding" },
                        { title: "Tech Startup", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", tag: "Web Design" },
                        { title: "Fashion Editorial", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", tag: "Art Direction" }
                    ].map((item, i) => (
                        <div key={i} style={{ group: 'hover-group', position: 'relative', height: '300px', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' }}
                            onMouseEnter={(e) => e.currentTarget.querySelector('.portfolio-bg').style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.querySelector('.portfolio-bg').style.transform = 'scale(1)'}
                        >
                            <div style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                background: item.gradient,
                                transition: 'transform 0.5s ease'
                            }} className="portfolio-bg"></div>
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                            }}>
                                <span style={{
                                    background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)',
                                    padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem',
                                    marginBottom: '0.5rem', display: 'inline-block'
                                }}>{item.tag}</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Design = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Parallax Logic for Orbs 
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const orbs = document.querySelectorAll('.service-hero .gradient-orb');
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.1;
                orb.style.transform = `translate(${scrolled * speed * 0.1}px, ${scrolled * speed * 0.1}px)`;
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const benefits = [
        { icon: "🎨", title: "Créativité Unique", desc: "Pas de templates. Nous créons des designs 100% originaux qui reflètent votre ADN." },
        { icon: "🧠", title: "Stratégie de Marque", desc: "Le beau ne suffit pas. Nous concevons pour impacter et convertir votre audience." },
        { icon: "📐", title: "Pixel Perfect", desc: "Une attention obsessionnelle aux détails, aux espacements et à la typographie." }
    ];

    const faqData = [
        {
            question: "Combien de propositions de logo faites-vous ?",
            answer: "Nous proposons généralement 3 pistes créatives distinctes. Une fois une piste choisie, nous l'affinons jusqu'à satisfaction complète."
        },
        {
            question: "Que comprend la charte graphique ?",
            answer: "La charte graphique inclut le logo, les déclinaisons, les palettes de couleurs, les typographies, et les règles d'utilisation sur vos différents supports."
        },
        {
            question: "Pouvez-vous refondre une identité existante ?",
            answer: "Oui, nous pouvons moderniser votre logo et votre univers graphique tout en conservant l'ADN de votre marque pour assurer une transition fluide."
        }
    ];

    const processSteps = [
        { title: "Immersion", desc: "Analyse de votre marque, cibles et valeurs." },
        { title: "Exploration", desc: "Moodboards, croquis et recherches stylistiques." },
        { title: "Conception", desc: "Création des maquettes et vectorisation." },
        { title: "Livraison", desc: "Export des fichiers sources et guide d'usage." }
    ];

    return (
        <div className="page-wrapper">
            <section className="hero">
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                </div>

                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="title-line">Design &</span>
                            <span className="title-line highlight-text">Branding</span>
                        </h1>
                        <p className="hero-subtitle" style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                            fontWeight: '300',
                            lineHeight: '1.4',
                            color: 'rgba(255,255,255,0.9)',
                            maxWidth: '900px',
                            marginTop: '1.5rem'
                        }}>
                            Une identité visuelle forte pour marquer les esprits.
                            Logo, charte graphique et UX/UI Design.
                        </p>

                        <div className="hero-cta-group">
                            <a href="#contact" className="btn-primary btn-glow">
                                <span className="btn-text">Démarrer le Projet</span>
                                <span className="btn-icon">🚀</span>
                            </a>
                        </div>

                        <div className="hero-scroll-indicator">
                            <div className="scroll-line"></div>
                            <span>Scroll</span>
                        </div>
                    </div>
                </div>
            </section>

            <MoodboardGallery />

            {/* Why Us Section */}
            <section style={{ padding: '5rem 0', background: '#0a0a0a' }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>L'Excellence Visuelle</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {benefits.map((benefit, index) => (
                            <div key={index} style={{
                                padding: '2rem',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{benefit.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="service-details" style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)', padding: '6rem 0' }}>
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card-detail">
                            <h3>Identité Visuelle</h3>
                            <p>Création de logos et de chartes graphiques complètes. Définissez l'ADN de votre marque avec un style unique.</p>
                        </div>
                        <div className="service-card-detail">
                            <h3>UX/UI Design</h3>
                            <p>Conception d'interfaces web et mobile intuitives. Nous allions esthétique et ergonomie pour une expérience utilisateur parfaite.</p>
                        </div>
                        <div className="service-card-detail">
                            <h3>Supports Marketing</h3>
                            <p>Design de tous vos supports de communication, imprimés ou digitaux. Cohérence garantie sur tous les canaux.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section" style={{ background: '#0a0a0a', padding: '6rem 0' }}>
                <div className="container">
                    <h2 className="section-title">Notre Processus Créatif</h2>
                    <div className="process-grid">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-card">
                                <div className="process-number">0{index + 1}.</div>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-description">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
                <FAQ data={faqData} />
            </div>

            {/* CTA Section */}

        </div>
    );
};

export default Design;
