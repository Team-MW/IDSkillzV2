import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo-idskillz-ligne-transparent-blanc-e1734050813553.png';

const PageTransition = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Trigger transition on route change
        setIsActive(true);

        // Duration of the transition (black screen visible time)
        const timer = setTimeout(() => {
            setIsActive(false);
        }, 1200); // 1.2 seconds total cycle

        return () => clearTimeout(timer);
    }, [location.pathname]);

    if (!isActive) return null;

    return (
        <div className="page-transition-overlay">
            <div className="transition-content">
                <img src={logo} alt="IDSKILLZ Loading" className="transition-logo" />
            </div>
        </div>
    );
};

export default PageTransition;
