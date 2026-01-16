import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import FAQ from '../components/FAQ';

const TechCore = () => {
    const outerRef = useRef();
    const innerRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Complex rotation for dynamic feel
        outerRef.current.rotation.x = t * 0.1;
        outerRef.current.rotation.y = t * 0.15;

        innerRef.current.rotation.x = -t * 0.2;
        innerRef.current.rotation.z = t * 0.1;

        // Pulsing scale
        const scale = 1 + Math.sin(t * 2) * 0.05;
        innerRef.current.scale.set(scale, scale, scale);
    });

    return (
        <group position={[0, -1.5, 0]}>
            {/* Core Crystal */}
            <mesh ref={innerRef}>
                <octahedronGeometry args={[1.8, 0]} />
                <meshPhysicalMaterial
                    color="#00aaff"
                    emissive="#0044aa"
                    emissiveIntensity={1.5}
                    transmission={0.2}
                    thickness={2}
                    roughness={0}
                    metalness={1}
                    clearcoat={1}
                />
            </mesh>

            {/* Geometric Lattice Cage */}
            <mesh ref={outerRef}>
                <icosahedronGeometry args={[3, 1]} />
                <meshStandardMaterial
                    color="#ffffff"
                    wireframe
                    transparent
                    opacity={0.15}
                    roughness={0}
                    metalness={1}
                />
            </mesh>

            {/* Floating Particles/Data Points */}
            <points>
                <sphereGeometry args={[4, 32, 32]} />
                <pointsMaterial color="#667eea" size={0.02} transparent opacity={0.5} sizeAttenuation={true} />
            </points>
        </group>
    );
};

const ThreeD = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Modélisation 3D",
            desc: "Transformez vos idées en modèles 3D réalistes et détaillés.",
            items: [
                "Architecture et immobilier : Plans 3D d’intérieur et d’extérieur.",
                "Produits et prototypes : Modélisation pour tests et présentations.",
                "Objets et sculptures : Création artistique ou fonctionnelle."
            ]
        },
        {
            title: "Rendus 3D photoréalistes",
            desc: "Obtenez des visuels hyperréalistes pour impressionner vos clients.",
            items: [
                "Intérieurs et extérieurs : Rendu immobilier et architectural.",
                "Produits et concepts : Visualisation marketing.",
                "Présentations : Images saisissantes pour vos projets."
            ]
        },
        {
            title: "Animation 3D",
            desc: "Ajoutez du mouvement et de la dynamique à vos projets.",
            items: [
                "Présentations interactives : Montrez vos idées en action.",
                "Publicités et vidéos explicatives : Storytelling captivant.",
                "Projets artistiques : Créations animées uniques."
            ]
        }
    ];

    const processSteps = [
        {
            number: "01",
            title: "Analyse des besoins",
            desc: "Nous commençons par comprendre vos attentes et vos objectifs.",
            details: [
                "But du projet (présentation, marketing, prototypage)",
                "Besoins spécifiques (modélisation, rendu, animation)",
                "Partage de vos références ou idées"
            ]
        },
        {
            number: "02",
            title: "Recherche et planification",
            desc: "Élaboration d'une stratégie et méthodologie claire.",
            details: [
                "Étude des tendances et exemples similaires",
                "Définition des délais et livrables",
                "Validation du cahier des charges"
            ]
        },
        {
            number: "03",
            title: "Modélisation 3D",
            desc: "Création des modèles 3D en fonction de vos besoins.",
            details: [
                "Réalisation de modèles précis et détaillés",
                "Validation des proportions et du design",
                "Première présentation pour retours"
            ]
        },
        {
            number: "04",
            title: "Rendus photoréalistes",
            desc: "Application des textures, couleurs et lumières.",
            details: [
                "Création d’images statiques ou séquences vidéo",
                "Ajustements selon vos remarques",
                "Validation des visuels finaux"
            ]
        },
        {
            number: "05",
            title: "Animation 3D (si nécessaire)",
            desc: "Ajout de mouvements et d’interactions.",
            details: [
                "Vidéos explicatives ou publicitaires",
                "Simulation de fonctionnement",
                "Tests et ajustements"
            ]
        },
        {
            number: "06",
            title: "Livraison et suivi",
            desc: "Remise des fichiers finaux et accompagnement.",
            details: [
                "Fichiers formats adaptés",
                "Accompagnement pour l’intégration",
                "Support technique si besoin"
            ]
        }
    ];

    const faqData = [
        {
            question: "Quels logiciels utilisez-vous pour la 3D ?",
            answer: "Nous utilisons principalement Blender, Cinema 4D et Unreal Engine pour garantir des rendus de haute qualité et une grande flexibilité dans la création."
        },
        {
            question: "Combien de temps faut-il pour une modélisation 3D ?",
            answer: "Les délais varient selon la complexité du projet. Un objet simple peut prendre 2-3 jours, tandis qu'une animation architecturale complète peut nécessiter 2 à 4 semaines."
        },
        {
            question: "Fournissez-vous les fichiers sources ?",
            answer: "Oui, sur demande et selon le contrat établi, nous pouvons fournir les fichiers sources (.blend, .c4d, .fbx, .obj) pour vous permettre une utilisation future."
        },
        {
            question: "Pouvez-vous travailler à partir de plans 2D ?",
            answer: "Absolument. Nous travaillons régulièrement à partir de plans CAD, de croquis ou même de simples photos de référence pour créer nos modèles 3D."
        }
    ];

    return (
        <div className="page-wrapper" style={{ paddingTop: '80px' }}>
            {/* Hero Section */}
            <section className="service-hero" style={{
                position: 'relative',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                paddingTop: '80px'
            }}>
                {/* Full Width 3D Background */}
                <div className="canvas-container" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}>
                    <Canvas camera={{ position: [0, 0, 8] }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />
                        <pointLight position={[-10, -10, -10]} intensity={2} color="#ff00ff" />
                        <TechCore />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
                        <Stars radius={100} depth={50} count={3000} factor={6} saturation={0} fade speed={2} />
                        <Environment preset="city" />
                    </Canvas>
                </div>

                {/* Content Overlay */}
                <div className="container" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
                    <div className="service-hero-content" style={{
                        pointerEvents: 'auto',
                        textShadow: '0 4px 30px rgba(0,0,0,0.8)',
                        transform: 'translateY(-30vh)' // Adjusted to sweet spot
                    }}>
                        <h1 className="hero-title">
                            <span className="title-line">L'agence IDSKILLZ qui</span>
                            <span className="title-line highlight-text">Conception 3D</span>
                        </h1>
                        <p className="hero-subtitle" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                            Donnez vie à vos idées avec des solutions 3D sur-mesure pour des projets qui captivent et inspirent.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="service-details">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card-detail">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <ul className="service-list">
                                    {service.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Showcase Section */}
            <section style={{
                height: '70vh',
                width: '100%',
                backgroundImage: 'url("/Ed-visual.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '4rem 0',
                borderRadius: '0', // Full width clean look
                boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)' // Inner vignette
            }}>
                {/* Overlay with slight tint */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '2rem 4rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '2px',
                        transform: 'skewX(-10deg)', // Dynamic angle
                    }}>
                        <h3 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '900',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            letterSpacing: '10px',
                            margin: 0,
                            transform: 'skewX(10deg)',
                            textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            position: 'relative',
                            lineHeight: '1'
                        }}>
                            3D
                        </h3>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <h2 className="section-title">Notre Processus en 6 Étapes</h2>
                    <div className="process-grid">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-card">
                                <div className="process-number">{step.number}.</div>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-description">{step.desc}</p>
                                <ul className="process-details">
                                    {step.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ data={faqData} />
        </div>
    );
};

export default ThreeD;
