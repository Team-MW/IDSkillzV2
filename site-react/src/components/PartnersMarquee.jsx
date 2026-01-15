import React from 'react';
import amdLogo from '../assets/logo-AMDNoir-1536x1536-1-1024x1024.png';
import ecoLogo from '../assets/logo-ecosynergy-green-wh-black-1024x1024.png';
import hookahLogo from '../assets/logo-hookahcenter-fdblanc-1024x1024.jpg';
import monboumLogo from '../assets/logo-monboum-1024x1024.png';
import renobatLogo from '../assets/logo-renobat-fdblanc-1024x1024.png';

const partners = [
    { name: 'AMD', logo: amdLogo },
    { name: 'EcoSynergy', logo: ecoLogo },
    { name: 'Hookah Center', logo: hookahLogo },
    { name: 'Mon Boum', logo: monboumLogo },
    { name: 'Renobat', logo: renobatLogo },
    // Duplicate for seamless loop
    { name: 'AMD', logo: amdLogo },
    { name: 'EcoSynergy', logo: ecoLogo },
    { name: 'Hookah Center', logo: hookahLogo },
    { name: 'Mon Boum', logo: monboumLogo },
    { name: 'Renobat', logo: renobatLogo }
];

const PartnersMarquee = () => {
    return (
        <section className="partners-marquee">
            <div className="marquee-container">
                <div className="marquee-track">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-logo">
                            <img src={partner.logo} alt={`${partner.name} logo`} />
                        </div>
                    ))}
                    {/* Double the content again if needed for very wide screens to ensure no gaps */}
                    {partners.map((partner, index) => (
                        <div key={`dup-${index}`} className="partner-logo">
                            <img src={partner.logo} alt={`${partner.name} logo`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersMarquee;
