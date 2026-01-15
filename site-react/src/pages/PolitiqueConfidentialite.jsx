import React, { useEffect } from 'react';

const PolitiqueConfidentialite = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div className="container" style={{ maxWidth: '800px', color: 'rgba(255, 255, 255, 0.9)' }}>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>Politique de Confidentialité</h1>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Introduction</h2>
                    <p>
                        Chez GROW360, nous accordons une grande importance à la confidentialité de vos données. Cette politique vise à vous informer de la manière dont nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Collecte des données</h2>
                    <p>
                        Nous pouvons collecter les données suivantes lorsque vous utilisez notre formulaire de contact :
                    </p>
                    <ul style={{ paddingLeft: '20px', marginTop: '0.5rem' }}>
                        <li>Nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone (optionnel)</li>
                        <li>Informations relatives à votre projet</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Utilisation des données</h2>
                    <p>
                        Vos données sont utilisées uniquement dans le but de :
                    </p>
                    <ul style={{ paddingLeft: '20px', marginTop: '0.5rem' }}>
                        <li>Répondre à vos demandes de contact ou de devis</li>
                        <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                        <li>Améliorer votre expérience utilisateur sur notre site</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Partage des données</h2>
                    <p>
                        Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers. Cela n'inclut pas les tierces parties de confiance qui nous aident à exploiter notre site web, tant que ces parties conviennent de garder ces informations confidentielles.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Cookies</h2>
                    <p>
                        Notre site utilise des cookies pour améliorer l'accès à notre site et identifier les visiteurs réguliers. Cependant, cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>6. Vos droits</h2>
                    <p>
                        Vous avez le droit de demander l'accès, la rectification ou la suppression de vos données personnelles. Pour exercer ce droit, veuillez nous contacter à l'adresse : contact@grow360.com.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PolitiqueConfidentialite;
