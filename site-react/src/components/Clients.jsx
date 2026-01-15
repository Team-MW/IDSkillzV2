import React, { useEffect } from 'react';

const Clients = () => {
    useEffect(() => {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-target') || '0');
                        animateValue(stat, 0, target, 2000);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        function animateValue(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const currentValue = Math.floor(progress * (end - start) + start);
                element.textContent = currentValue + '+';
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        return () => statsObserver.disconnect();
    }, []);

    return (
        <section className="clients">
            <div className="container">
                <h2 className="section-title">NOS clients</h2>
                <p className="section-subtitle">Nous collaborons avec des marques qui partagent notre exigence et notre vision du détail. Ensemble, nous construisons des projets durables, performants et créatifs.</p>

                <div className="stats">
                    <div className="stat-item">
                        <div className="stat-number" data-target="50">0+</div>
                        <div className="stat-label">Projets</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number" data-target="30">0+</div>
                        <div className="stat-label">Clients</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
