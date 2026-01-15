import React, { useEffect, useState, useRef } from 'react';

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOpen = (e) => {
            const link = e.target.closest('a[href="#contact"], a[href="#postuler"]');
            if (link) {
                e.preventDefault();
                setIsOpen(true);
                document.body.style.overflow = 'hidden';
            }
        };

        document.addEventListener('click', handleOpen);
        return () => document.removeEventListener('click', handleOpen);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        alert(`Merci ${name} ! Votre message a été envoyé. Nous vous répondrons à ${email} sous peu.`);
        e.target.reset();
        closeModal();
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen]);

    const handleBackdropClick = (e) => {
        if (e.target === modalRef.current) {
            closeModal();
        }
    };

    return (
        <div
            id="contact"
            className={`modal ${isOpen ? 'active' : ''}`}
            ref={modalRef}
            onClick={handleBackdropClick}
        >
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Contactez-nous</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn-primary">Envoyer</button>
                </form>
            </div>
        </div>
    );
};
export default ContactModal;
