import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from './ContactModal';
import WhatsAppButton from './WhatsAppButton';
import ParticlesBackground from './ParticlesBackground';
import PageTransition from './PageTransition';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <PageTransition />
            <ParticlesBackground />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ContactModal />
            <WhatsAppButton />
        </>
    );
};

export default Layout;
