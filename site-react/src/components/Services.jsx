import React, { useState, useEffect } from 'react';

const servicesData = [
    {
        id: 'audiovisuel',
        icon: '🎬',
        title: 'Audiovisuel',
        description: "Une production sur-mesure qui sublime votre identité. De la scénarisation à la post-production, chaque projet est un concentré d'émotions et d'efficacité.",
        subServices: [
            { icon: '🎥', title: 'Production vidéo', desc: 'Spot publicitaire, film corporate, motion design' },
            { icon: '📸', title: 'Photographie', desc: 'Shooting produit, événementiel, portrait' },
            { icon: '✂️', title: 'Post-production', desc: 'Montage, étalonnage, effets visuels' },
            { icon: '🎙️', title: 'Son & Audio', desc: 'Enregistrement, mixage, sound design' }
        ]
    },
    {
        id: 'web',
        icon: '💻',
        title: 'Sites Web',
        description: "Création de sites web modernes, performants et optimisés pour convertir vos visiteurs en clients.",
        subServices: [
            { icon: '🌐', title: 'Site vitrine', desc: 'Design sur-mesure, responsive, SEO optimisé' },
            { icon: '🛒', title: 'E-commerce', desc: 'Boutique en ligne, paiement sécurisé, gestion stock' },
            { icon: '📱', title: 'Application web', desc: 'PWA, interface sur-mesure, API intégration' },
            { icon: '⚡', title: 'Optimisation', desc: 'Performance, SEO, conversion rate' }
        ]
    },
    {
        id: 'graphisme',
        icon: '🎨',
        title: 'Graphisme',
        description: "Identité visuelle, menus, supports print ou écrans chaque design est pensé pour refléter l'univers de votre marque avec précision, style et cohérence.",
        subServices: [
            { icon: '🎯', title: 'Identité visuelle', desc: 'Logo, charte graphique, branding' },
            { icon: '📄', title: 'Print', desc: 'Flyers, cartes de visite, affiches, menus' },
            { icon: '📱', title: 'Digital', desc: 'Bannières, réseaux sociaux, emailing' },
            { icon: '📦', title: 'Packaging', desc: 'Design emballage, étiquetage, branding' }
        ]
    },
    {
        id: 'impression',
        icon: '🖨️',
        title: 'Impression',
        description: "Flyers, cartes de visite, menus, t-shirts nous imprimons tous vos supports avec une qualité professionnelle pour un rendu fidèle, durable et percutant.",
        subServices: [
            { icon: '📋', title: 'Papeterie', desc: 'Cartes de visite, flyers, brochures' },
            { icon: '👕', title: 'Textile', desc: 'T-shirts, sweats, casquettes personnalisées' },
            { icon: '🏷️', title: 'Signalétique', desc: 'Panneaux, adhésifs, bâches' },
            { icon: '📦', title: 'Grand format', desc: 'Bannières, roll-up, kakémonos' }
        ]
    },
    {
        id: 'social',
        icon: '📱',
        title: 'Réseaux sociaux',
        description: "Contenu visuel, planification, interactions nous animons vos réseaux au quotidien pour créer une vraie connexion avec votre audience et renforcer votre présence.",
        subServices: [
            { icon: '📸', title: 'Création de contenu', desc: 'Photos, vidéos, stories, reels' },
            { icon: '📅', title: 'Planification', desc: 'Calendrier éditorial, publication automatique' },
            { icon: '💬', title: 'Community Management', desc: 'Modération, réponse, engagement' },
            { icon: '📊', title: 'Analytics', desc: 'Reporting, analyse performance, ROI' }
        ]
    },
    {
        id: 'ads',
        icon: '📢',
        title: 'Ads',
        description: "Campagnes de publicité payante sur Facebook, Instagram, Tiktok, Snapchat et X. Via du ciblage stratégique et des formats adaptés, nous atteignons avec performance vos objectifs de visibilité, d'engagement, de trafic et de conversion.",
        subServices: [
            { icon: '📘', title: 'Facebook & Instagram', desc: 'Campagnes ciblées, retargeting, conversion' },
            { icon: '🎵', title: 'TikTok & Snapchat', desc: 'Publicité native, influenceurs, génération Z' },
            { icon: '🔍', title: 'Google Ads', desc: 'Recherche, display, shopping, YouTube' },
            { icon: '📈', title: 'Optimisation', desc: 'A/B testing, ROI, conversion tracking' }
        ]
    },
    {
        id: 'local',
        icon: '📍',
        title: 'Marketing Local',
        description: "Stratégies de marketing local pour développer votre présence géographique et attirer des clients près de chez vous.",
        subServices: [
            { icon: '🗺️', title: 'Google My Business', desc: 'Optimisation fiche, avis clients, SEO local' },
            { icon: '📍', title: 'Géolocalisation', desc: 'Stratégie multi-points, rayon d\'action' },
            { icon: '📱', title: 'Campagnes locales', desc: 'Publicité géolocalisée, événements' },
            { icon: '⭐', title: 'Gestion avis', desc: 'Collecte, réponse, réputation en ligne' }
        ]
    },
    {
        id: 'influence',
        icon: '⭐',
        title: 'Influence',
        description: "Sélection de profils, stratégie de diffusion, placements efficaces nous activons les bons influenceurs pour faire rayonner votre marque auprès d'un public ciblé.",
        subServices: [
            { icon: '🔍', title: "Recherche d'influenceurs", desc: 'Audit, sélection, négociation' },
            { icon: '📝', title: 'Stratégie de contenu', desc: 'Brief créatif, storytelling, briefings' },
            { icon: '📊', title: 'Suivi & Reporting', desc: 'KPIs, engagement, ROI, analytics' },
            { icon: '🤝', title: 'Partenariats long terme', desc: 'Ambassadeurs, contrats exclusifs' }
        ]
    }

];

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    const toggleService = (id) => {
        setActiveService(activeService === id ? null : id);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="services">
            <div className="services-background">
                <div className="service-orb service-orb-1"></div>
                <div className="service-orb service-orb-2"></div>
            </div>
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">NOS Services</h2>
                    <p className="section-subtitle">Nous transformons vos idées en actions concrètes pour booster votre visibilité et votre croissance.</p>
                    <a href="#contact" className="section-link">Contactez-nous</a>
                </div>

                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className={`service-card ${activeService === service.id ? 'active' : ''}`}
                            data-service={service.id}
                        >
                            <div className="service-card-header">
                                <div className="service-icon-wrapper">
                                    <div className="service-icon">{service.icon}</div>
                                    <div className="service-icon-glow"></div>
                                </div>
                                <h3>{service.title}</h3>
                                <button
                                    className="service-toggle"
                                    aria-label="Toggle sub-services"
                                    onClick={() => toggleService(service.id)}
                                >
                                    <span className="toggle-icon">+</span>
                                </button>
                            </div>
                            <p className="service-description">{service.description}</p>
                            <div className="sub-services">
                                {service.subServices.map((sub, idx) => (
                                    <div className="sub-service-item" key={idx}>
                                        <span className="sub-service-icon">{sub.icon}</span>
                                        <div className="sub-service-content">
                                            <h4>{sub.title}</h4>
                                            <p>{sub.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <a href="#contact" className="service-link">Demander un devis →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
