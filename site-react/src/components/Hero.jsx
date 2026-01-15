import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 80;
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(102, 126, 234, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

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
            <canvas id="particles-canvas" ref={canvasRef}></canvas>
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
                        <span className="title-line">L'agence 360 qui</span>
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
