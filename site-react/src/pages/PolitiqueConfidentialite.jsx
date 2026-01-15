import React, { useEffect } from 'react';

const PolitiqueConfidentialite = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', background: '#0a0a0a', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '900px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem', fontSize: '2.5rem' }}>Politique de Confidentialité</h1>

                <section style={{ marginBottom: '3rem' }}>
                    <p>
                        La présente politique de confidentialité a pour but d'exposer aux utilisateurs du site <strong>IDSKILLZ</strong> :
                        <ul>
                            <li>La manière dont sont collectées et traitées leurs données à caractère personnel.</li>
                            <li>Quels sont les droits des utilisateurs concernant ces données ;</li>
                            <li>Qui est responsable du traitement des données à caractère personnel collectées et traités ;</li>
                            <li>À qui ces données sont transmises ;</li>
                        </ul>
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>1. Collecte de données personnelles</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        Nous collectons les données suivantes via le formulaire de contact présent sur le site :
                    </p>
                    <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                        <li>Nom et Prénom</li>
                        <li>Adresse email</li>
                        <li>Contenu du message (pouvant contenir des informations professionnelles ou personnelles)</li>
                    </ul>
                    <p>
                        Ces données sont collectées lorsque l'utilisateur effectue l'une des opérations suivantes sur le site :
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                        <li>Remplissage et envoi du formulaire de contact (« Contactez-nous » ou « Postuler »).</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>2. Finalités du traitement</h2>
                    <p>
                        Le traitement des données personnelles a pour finalité :
                    </p>
                    <ul style={{ paddingLeft: '20px', marginTop: '1rem' }}>
                        <li><strong>Réponse aux demandes :</strong> Pour recontacter l'utilisateur suite à sa demande de devis, d'information ou de candidature.</li>
                        <li><strong>Gestion de la relation prospect/client :</strong> Suivi des échanges commerciaux.</li>
                        <li><strong>Statistiques :</strong> Analyse anonyme de la fréquentation du site (via des cookies non nominatifs).</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>3. Responsable du traitement des données</h2>
                    <p>
                        Le responsable du traitement des données est la société <strong>IDSKILLZ</strong>.
                    </p>
                    <p style={{ marginTop: '0.5rem' }}>
                        Il peut être contacté de la manière suivante :<br />
                        Par email : <strong>contact@idskillz.com</strong>
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>4. Transmission des données</h2>
                    <p>
                        Les données personnelles collectées par le site ne sont transmises à aucun tiers, et ne sont traitées que par l’éditeur du site (l'équipe interne de IDSKILLZ) dans le cadre de la gestion de la relation client.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>5. Durée de conservation</h2>
                    <p>
                        Les données personnelles collectées via le formulaire de contact sont conservées pour une durée maximale de <strong>3 ans</strong> à compter du dernier contact émanant de l'utilisateur, sauf si une relation commerciale s'établit (auquel cas les données sont conservées pour la durée de la relation contractuelle et les obligations légales afférentes).
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>6. Vos droits (Loi Informatique et Libertés & RGPD)</h2>
                    <p>
                        Conformément à la réglementation applicable, l'utilisateur possède les droits suivants :
                    </p>
                    <ul style={{ paddingLeft: '20px', marginTop: '1rem' }}>
                        <li><strong>Droit d’accès</strong> et d'interrogation sur ses données personnelles;</li>
                        <li><strong>Droit de rectification</strong> si les données sont inexactes;</li>
                        <li><strong>Droit à l’effacement</strong> (droit à l’oubli);</li>
                        <li><strong>Droit à la limitation</strong> du traitement;</li>
                        <li><strong>Droit à la portabilité</strong> de ses données.</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>contact@idskillz.com</strong>. Nous nous engageons à répondre à votre demande dans un délai d'un mois.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>7. Cookies</h2>
                    <p>
                        Le site peut avoir recours à la technique des « cookies ». Ces fichiers stockés sur votre ordinateur permettent d'améliorer la navigation ou d'analyser l'audience.
                    </p>
                    <p style={{ marginTop: '0.5rem' }}>
                        L’utilisateur peut s’opposer à l’enregistrement de ces cookies en configurant son logiciel de navigation.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PolitiqueConfidentialite;
