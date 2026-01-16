import React from 'react';
import Hero from '../components/Hero';
import PartnersMarquee from '../components/PartnersMarquee';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';


const Home = () => {
    return (
        <>
            <Hero />
            <PartnersMarquee />
            <About />
            <Services />
            <Clients />

        </>
    );
};

export default Home;
