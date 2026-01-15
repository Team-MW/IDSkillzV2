import React from 'react';
import Hero from '../components/Hero';
import PartnersMarquee from '../components/PartnersMarquee';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Branches from '../components/Branches';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <PartnersMarquee />
            <About />
            <Services />
            <Clients />
            <Branches />
            <CTA />
        </>
    );
};

export default Home;
