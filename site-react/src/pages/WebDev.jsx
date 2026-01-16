import React, { useEffect, useState } from 'react';
import FAQ from '../components/FAQ';

const TechStack = () => {
    return (
        <section style={{ padding: '6rem 0', overflow: 'hidden', background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        color: '#00ffff',
                        border: '1px solid rgba(0,255,255,0.2)'
                    }}>POWERED BY</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1rem', fontWeight: '900' }}>Next-Gen Tech Stack</h2>
                </div>

                <div className="tech-scroller" style={{
                    display: 'flex',
                    gap: '4rem',
                    maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
                }}>
                    <div className="tech-track" style={{ display: 'flex', gap: '4rem', animation: 'scroll 30s linear infinite' }}>
                        {/* Duplicate lists for infinite scroll hack */}
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                {["NEXT.JS", "TYPESCRIPT", "NODE.JS", "VERCEL", "TAILWINDCSS", "THREE.JS", "STRIPE", "REACT", "SUPABASE", "AWS", "GRAPHQL"].map((tech, idx) => (
                                    <div key={idx} style={{
                                        fontSize: 'clamp(2rem, 6vw, 5rem)',
                                        fontWeight: '900',
                                        color: 'transparent',
                                        WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#fff';
                                            e.target.style.textShadow = '0 0 30px rgba(102, 126, 234, 0.8)';
                                            e.target.style.WebkitTextStroke = '1px transparent';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = 'transparent';
                                            e.target.style.textShadow = 'none';
                                            e.target.style.WebkitTextStroke = '1px rgba(255,255,255,0.2)';
                                        }}
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <style>{`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>
            </div>
        </section>
    );
};

const BentoBox = ({ title, subtitle, icon, colSpan = 1, bgImage }) => (
    <div style={{
        gridColumn: `span ${colSpan}`,
        background: bgImage ? `url(${bgImage})` : 'rgba(255,255,255,0.03)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.5rem',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '300px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
            e.currentTarget.style.border = '1px solid rgba(255,255,255,0.2)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)';
        }}
    >
        {bgImage && <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', zIndex: 1 }}></div>}

        <div style={{ zIndex: 2, fontSize: '3rem' }}>{icon}</div>
        <div style={{ zIndex: 2 }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: '1.2' }}>{title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>{subtitle}</p>
        </div>
    </div>
);

const InteractiveIDE = () => {
    const defaultCode = `// Welcome to your project
const Website = () => {
  return (
    <Performance>
      <Design quality="premium" />
      <SEO rank="top-1" />
      <Security level="max" />
    </Performance>
  );
};`;
    const [code, setCode] = useState(defaultCode);

    // Basic syntax highlighting logic
    const highlightCode = (input) => {
        return input
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/(const|return|import|from|export|default|function|class|var|let)/g, '<span style="color: #c678dd;">$1</span>')
            .replace(/(\/\/.+)/g, '<span style="color: #5c6370; font-style: italic;">$1</span>')
            .replace(/(=>)/g, '<span style="color: #c678dd;">$1</span>')
            .replace(/([A-Z][a-zA-Z0-9_]*)(?=\s|\)|<|\/|=\{)/g, '<span style="color: #e5c07b;">$1</span>')
            .replace(/(".*?")/g, '<span style="color: #98c379;">$1</span>')
            .replace(/([a-z][a-zA-Z0-9_]*)(?==)/g, '<span style="color: #d19a66;">$1</span>');
    };

    return (
        <div style={{
            flex: '1 1 300px',
            background: '#1e1e1e', // VS Code dark
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
            transform: 'rotateY(-10deg) rotateX(5deg)',
            transition: 'transform 0.5s ease',
            cursor: 'text',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '400px',
            fontFamily: "'Fira Code', 'Roboto Mono', monospace"
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateY(-10deg) rotateX(5deg)'}
        >
            {/* Header / Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '0.8rem 1rem', background: '#252526', borderBottom: '1px solid #333' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginRight: '1rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{
                    background: '#1e1e1e', padding: '0.3rem 1rem', borderRadius: '4px 4px 0 0',
                    color: '#fff', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}>
                    <span style={{ color: '#61dafb' }}>⚛️</span> PremiumSite.jsx
                </div>
            </div>

            {/* Editor Area */}
            <div style={{ position: 'relative', height: '100%', minHeight: '350px' }}>
                {/* Syntax Highlighted Display (Behind) */}
                <pre
                    aria-hidden="true"
                    style={{
                        margin: 0,
                        padding: '1.5rem',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        pointerEvents: 'none',
                        whiteSpace: 'pre-wrap',
                        wordWrap: 'break-word',
                        color: '#abb2bf',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        fontFamily: "inherit",
                        zIndex: 1
                    }}
                    dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
                />

                {/* Transparent Input (Front) */}
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    spellCheck="false"
                    style={{
                        margin: 0,
                        padding: '1.5rem',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                        color: 'transparent',
                        caretColor: '#528bff', // VS Code cursor
                        border: 'none',
                        outline: 'none',
                        resize: 'none',
                        whiteSpace: 'pre-wrap',
                        wordWrap: 'break-word',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        fontFamily: "inherit",
                        zIndex: 2,
                        cursor: 'text'
                    }}
                />
            </div>
        </div>
    );
};

const WebDev = () => {
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

    const processSteps = [
        { title: "Discovery", desc: "Audit approfondi & Stratégie" },
        { title: "UI/UX Magic", desc: "Design System & Prototypage" },
        { title: "Dev Hardcore", desc: "Next.js, TypeScript, Optimisation" },
        { title: "Launch", desc: "Déploiement Vercel & Suivi" }
    ];

    const faqData = [
        {
            question: "Utilisez-vous des templates ?",
            answer: "Jamais. Chaque ligne de code est écrite pour servir vos performances et votre unicité. Nous faisons du sur-mesure intégral."
        },
        {
            question: "Le site sera-t-il vraiment rapide ?",
            answer: "Nos sites chargent instantanément. Nous visons un score Lighthouse de 95-100/100. La vitesse, c'est du SEO et de la conversion."
        },
        {
            question: "J'ai besoin de modifier le contenu, c'est possible ?",
            answer: "Oui, nous intégrons des CMS 'Headless' (comme Sanity ou Strapi) qui vous donnent une interface ultra-simple pour gérer vos textes et images."
        }
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
                            <span className="title-line">Développement</span>
                            <span className="title-line highlight-text">Next-Gen</span>
                        </h1>
                        <p className="hero-subtitle">
                            Des expériences web ultra-rapides, animées et conçues pour dominer votre marché.
                            L'excellence technique au service du design.
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

            <TechStack />

            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem' }}>Pourquoi nous ?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>L'approche Bento : claire, efficace, Premium.</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                        gridAutoRows: 'minmax(300px, auto)'
                    }}>
                        {/* Bento Grid Layout */}
                        <div style={{ gridColumn: 'span 2' }}>
                            <BentoBox
                                title="Perfomance Absolue"
                                subtitle="Nous optimisons chaque octet. Votre site chargera avant que vous ayez fini de cliquer."
                                icon="🚀"
                                bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // abstract tech bg
                            />
                        </div>
                        <BentoBox
                            title="SEO Technique"
                            subtitle="Architecture sémantique parfaite pour Google."
                            icon="🔍"
                        />
                        <BentoBox
                            title="Sécurité Bancaire"
                            subtitle="Protection DDOS, SSL, et cryptage de pointe."
                            icon="🔒"
                        />
                        <div style={{ gridColumn: 'span 2' }}>
                            <BentoBox
                                title="Mobile First. Toujours."
                                subtitle="Une expérience fluide et native sur tous les écrans, du smartphone 5 pouces à l'écran 4K."
                                icon="📱"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '6rem 0', perspective: '1000px', background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <span style={{ color: '#00ffff', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Le Code est un Art</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '1rem 0', lineHeight: '1.1' }}>
                            Architecture <br />Propre & Évolutive.
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Pas de "spaghetti code". Nous construisons des fondations solides. Votre site est modulaire,
                            facile à maintenir et prêt à grandir avec votre business. Nous utilisons les standards
                            les plus stricts de l'industrie (Clean Architecture, SOLID).
                        </p>

                        <div className="process-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                            {processSteps.map((step, index) => (
                                <div key={index} style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ color: '#00ffff', fontWeight: 'bold', marginBottom: '0.5rem' }}>0{index + 1}. {step.title}</div>
                                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>{step.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <InteractiveIDE />
                </div>
            </section>

            <FAQ data={faqData} />


        </div>
    );
};

export default WebDev;
