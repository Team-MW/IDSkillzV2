import React, { useState, useEffect } from 'react';
import FAQ from '../components/FAQ';

const Contact = () => {
    useEffect(() => {
        // Trigger generic animations if present
        document.querySelectorAll('.animate-fade').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, []);

    return (
        <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
            <div className="container">
                <div className="services-header" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title">Contactez-nous</h2>
                    <p className="section-subtitle">Une question ? Un projet ? Nous sommes à votre écoute.</p>
                </div>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    padding: '3rem',
                    borderRadius: '20px',
                    maxWidth: '600px',
                    margin: '0 auto',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <form className="contact-form" onSubmit={(e) => {
                        e.preventDefault();
                        alert('Message envoyé !');
                    }}>
                        <div className="form-group">
                            <label htmlFor="name-page">Nom</label>
                            <input type="text" id="name-page" name="name" required style={{ width: '100%' }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-page">Email</label>
                            <input type="email" id="email-page" name="email" required style={{ width: '100%' }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message-page">Message</label>
                            <textarea id="message-page" name="message" rows="5" required style={{ width: '100%' }}></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Envoyer le message</button>
                    </form>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', color: 'rgba(255,255,255,0.6)' }}>
                    <p style={{ marginBottom: '0.5rem' }}>📍 6 Rue Aubert, 93200 Saint-Denis, France</p>
                    <p>📧 contact@idskillz.com</p>
                </div>
            </div>

            <FAQ data={[
                {
                    question: "Quels sont vos délais de réponse ?",
                    answer: "Nous nous engageons à répondre à toutes les demandes sous 24 heures ouvrées."
                },
                {
                    question: "Où êtes-vous situés ?",
                    answer: "Nos bureaux sont situés à Saint-Denis (93200), mais nous travaillons avec des clients partout en France et à l'international."
                },
                {
                    question: "Acceptez-vous les projets en freelance / sous-traitance ?",
                    answer: "Oui, nous sommes ouverts aux collaborations avec d'autres agences ou entreprises nécessitant une expertise ponctuelle."
                },
                {
                    question: "Comment se déroule le premier rendez-vous ?",
                    answer: "C'est un échange gratuit de 30 minutes (téléphone ou visio) pour comprendre vos besoins, vos enjeux et voir comment nous pouvons vous aider."
                }
            ]} />
        </div>
    );
};

export default Contact;
