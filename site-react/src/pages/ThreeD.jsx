import React, { useEffect, useRef } from 'react';

const ThreeD = () => {

    // Simple canvas animation for "3D" vibe without heavy library
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationId;

        const resize = () => {
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        let rotation = 0;

        const drawCube = (cx, cy, size, rot) => {
            ctx.strokeStyle = 'rgba(102, 126, 234, 0.5)';
            ctx.lineWidth = 2;

            const vertices = [
                [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
                [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
            ];

            const projected = vertices.map(v => {
                let x = v[0], y = v[1], z = v[2];
                // Rotate Y
                let tx = x * Math.cos(rot) - z * Math.sin(rot);
                let tz = x * Math.sin(rot) + z * Math.cos(rot);
                x = tx; z = tz;
                // Rotate X
                let ty = y * Math.cos(rot * 0.5) - z * Math.sin(rot * 0.5);
                tz = y * Math.sin(rot * 0.5) + z * Math.cos(rot * 0.5);
                y = ty; z = tz;

                const scale = 200 / (200 + z * size * 0.5);
                return [cx + x * size * scale, cy + y * size * scale];
            });

            ctx.beginPath();
            // Front face
            ctx.moveTo(projected[0][0], projected[0][1]);
            ctx.lineTo(projected[1][0], projected[1][1]);
            ctx.lineTo(projected[2][0], projected[2][1]);
            ctx.lineTo(projected[3][0], projected[3][1]);
            ctx.closePath();

            // Back face
            ctx.moveTo(projected[4][0], projected[4][1]);
            ctx.lineTo(projected[5][0], projected[5][1]);
            ctx.lineTo(projected[6][0], projected[6][1]);
            ctx.lineTo(projected[7][0], projected[7][1]);
            ctx.closePath();

            // Connecting lines
            for (let i = 0; i < 4; i++) {
                ctx.moveTo(projected[i][0], projected[i][1]);
                ctx.lineTo(projected[i + 4][0], projected[i + 4][1]);
            }
            ctx.stroke();
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            rotation += 0.01;
            drawCube(width / 2, height / 2, 100, rotation);
            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

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
            <section className="hero" style={{ minHeight: '60vh', padding: '120px 0 60px', position: 'relative' }}>
                <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3, pointerEvents: 'none' }} />
                <div className="hero-background">
                    <div className="gradient-orb orb-3"></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-icon">🧊</span>
                            <span className="badge-text"> Modélisation & Animation 3D</span>
                        </div>
                        <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>
                            Donnez du <span className="highlight-text">volume</span> à vos idées
                        </h1>
                        <p className="hero-subtitle">
                            Rendu photoréaliste, animation produit, expériences immersives. La 3D offre des possibilités infinies pour présenter vos produits.
                        </p>
                    </div>
                </div>
            </section>

            <section className="services" style={{ paddingTop: '50px' }}>
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>🧊</span>
                                <h3>Modélisation Produit</h3>
                            </div>
                            <p className="service-description">Créez des visuels parfaits de vos produits avant même leur fabrication. Rendu studio photoréaliste.</p>
                        </div>

                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s', transitionDelay: '0.1s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>🎥</span>
                                <h3>Motion Design 3D</h3>
                            </div>
                            <p className="service-description">Animations publicitaires dynamiques, explainers, et boucles visuelles hypnotisantes pour les réseaux sociaux.</p>
                        </div>

                        <div className="service-card animate-fade" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s', transitionDelay: '0.2s' }}>
                            <div className="service-card-header">
                                <span className="service-icon" style={{ fontSize: '3rem' }}>✨</span>
                                <h3>Effets Visuels (VFX)</h3>
                            </div>
                            <p className="service-description">Intégration d'éléments 3D dans des vidéos réelles pour un rendu spectaculaire et magique.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta" style={{ background: '#000' }}>
                <div className="container">
                    <h2 className="cta-title">Prêt à entrer dans la 3ème dimension ?</h2>
                    <a href="#contact" className="btn-primary">Lancer le projet</a>
                </div>
            </section>
        </div>
    );
};

export default ThreeD;
