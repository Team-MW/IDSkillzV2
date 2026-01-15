import React, { useEffect } from 'react';

const MentionsLegales = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div className="container" style={{ maxWidth: '800px', color: 'rgba(255, 255, 255, 0.9)' }}>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>Mentions Légales</h1>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Éditeur du site</h2>
                    <p>
                        Le site internet <strong>GROW360</strong> est édité par la société GROW360, SAS au capital de 1 000 €, immatriculée au Registre des Commerces et des Sociétés de Bobigny.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        <strong>Siège social :</strong> 6 Rue Aubert, 93200 Saint-Denis, France<br />
                        <strong>Email :</strong> contact@grow360.com<br />
                        <strong>Téléphone :</strong> +33 1 00 00 00 00<br />
                        <strong>Numéro de TVA intracommunautaire :</strong> FR00000000000
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Directeur de la publication</h2>
                    <p>
                        Le Directeur de la publication est Monsieur [Nom du Directeur], en sa qualité de Président.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Hébergement</h2>
                    <p>
                        Le site est hébergé par la société Vercel Inc.<br />
                        <strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA<br />
                        <strong>Site web :</strong> https://vercel.com
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Données personnelles</h2>
                    <p>
                        Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant par email.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MentionsLegales;
