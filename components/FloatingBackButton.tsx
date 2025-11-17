
import React, { useState, useEffect } from 'react';

const FloatingBackButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-40 cta-button-primary text-white font-bold tracking-wider uppercase rounded-lg shadow-lg transition-opacity duration-300 ease-in-out flex items-center px-4 py-3 text-sm ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Back to Invitation"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15l7-7 7 7" />
            </svg>
            <span>Back To Invitation</span>
        </button>
    );
};

export default FloatingBackButton;