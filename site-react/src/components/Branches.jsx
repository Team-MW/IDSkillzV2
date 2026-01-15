import React, { useEffect } from 'react';

const Branches = () => {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.branch-card');
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            fadeObserver.observe(element);
        });

        return () => fadeObserver.disconnect();
    }, []);

    return (
        <section className="branches">
            <div className="container">
                <h2 className="section-title">Une structure complète, avec des pôles dédiés à chaque enjeu de marque</h2>
                <p className="section-subtitle">Nos branches expertes sont pensées pour offrir à chaque secteur des solutions sur-mesure, créatives, performantes et parfaitement alignées avec tes objectifs business.</p>

                <div className="branches-grid">
                    <div className="branch-card">
                        <div className="branch-number">01</div>
                        <h3>Foodisme</h3>
                        <p>Foodisme accompagne les marques food à chaque étape de leur développement. De la stratégie à la création de contenu, nous concevons des campagnes qui renforcent votre identité, stimulent l'engagement et génèrent des résultats concrets.</p>
                        <a href="#" className="service-link">Découvrir →</a>
                    </div>

                    <div className="branch-card">
                        <div className="branch-number">02</div>
                        <h3>LinkGrow</h3>
                        <p>Transformez votre bio en moteur de conversion. Avec Linkgrow, chaque clic devient une opportunité de faire grandir votre communauté ou votre business.</p>
                        <a href="#" className="service-link">Découvrir →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branches;
