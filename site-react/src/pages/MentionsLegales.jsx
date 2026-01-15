import React, { useEffect } from 'react';

const MentionsLegales = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', background: '#0a0a0a', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '900px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
                <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem', fontSize: '2.5rem' }}>Mentions Légales</h1>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>1. Édition du site</h2>
                    <p>
                        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>https://idskillz.com</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <p><strong>Propriétaire du site :</strong> IDSKILLZ SAS</p>
                        <p><strong>Statut :</strong> Société par Actions Simplifiée (SAS) au capital social de 1 000 €</p>
                        <p><strong>Siège social :</strong> 6 Rue Aubert, 93200 Saint-Denis, France</p>
                        <p><strong>Contact :</strong> contact@idskillz.com / +33 1 00 00 00 00</p>
                        <p><strong>SIRET :</strong> 987 654 321 00012 (Exemple)</p>
                        <p><strong>Numéro de TVA intracommunautaire :</strong> FR 12 9876543210</p>
                        <p><strong>RCS :</strong> Bobigny B 987 654 321</p>
                    </div>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>2. Directeur de la publication</h2>
                    <p>
                        Le Directeur de la publication est <strong>M. Elamine</strong> (Nom à confirmer), en qualité de Président.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>3. Hébergement</h2>
                    <p>
                        Le site est hébergé par :
                    </p>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <p><strong>Vercel Inc.</strong></p>
                        <p>340 S Lemon Ave #4133</p>
                        <p>Walnut, CA 91789</p>
                        <p>États-Unis</p>
                        <p>Site web : <a href="https://vercel.com" style={{ color: '#667eea' }}>https://vercel.com</a></p>
                    </div>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>4. Propriété intellectuelle et contrefaçons</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>IDSKILLZ</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                    </p>
                    <p>
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong>IDSKILLZ</strong>.
                    </p>
                    <p>
                        Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>5. Limitations de responsabilité</h2>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>IDSKILLZ</strong> ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://idskillz.com.
                    </p>
                    <p>
                        <strong>IDSKILLZ</strong> décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur https://idskillz.com.
                    </p>
                    <p>
                        <strong>IDSKILLZ</strong> s’engage à sécuriser au mieux le site, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
                    </p>
                    <p>
                        Des espaces interactifs (espace contact) sont à la disposition des utilisateurs. <strong>IDSKILLZ</strong> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>6. Droit applicable et attribution de juridiction</h2>
                    <p>
                        Tout litige en relation avec l’utilisation du site <strong>https://idskillz.com</strong> est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de <strong>Bobigny</strong>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MentionsLegales;
