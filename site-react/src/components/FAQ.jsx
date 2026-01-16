import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item" onClick={() => setIsOpen(!isOpen)} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', padding: '1.5rem 0' }}>
            <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>
                {question}
                <span className="faq-toggle" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s', color: '#667eea', fontSize: '1.5rem' }}>+</span>
            </div>
            <div className="faq-answer" style={{
                maxHeight: isOpen ? '500px' : '0',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                color: 'rgba(255,255,255,0.7)',
                marginTop: isOpen ? '1rem' : '0',
                lineHeight: '1.6'
            }}>
                {answer}
            </div>
        </div>
    );
};

const FAQ = ({ data }) => {
    return (
        <section className="faq-section" style={{ padding: '80px 0', background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Questions Fréquentes</h2>
                <div className="faq-list">
                    {data.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
