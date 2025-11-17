
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "https://premierballetacademy.org/", text: "Home" },
        { href: "#registration", text: "VIP Registration" },
        { href: "https://premierballetacademy.org/contact/", text: "Contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        // For external links, the default browser behavior will handle navigation.
        setIsMenuOpen(false); // Close menu on any link click
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-lg shadow-amber-500/10' : 'bg-transparent'} py-4 px-4 border-b border-amber-600/30`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="https://premierballetacademy.org/" className="flex-shrink-0">
                    <img 
                        src="https://ik.imagekit.io/weo7pcw8v/image-removebg-preview%20(4).png?updatedAt=1762952993215" 
                        alt="Premier Ballet Academy Logo" 
                        className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.text} 
                            href={link.href} 
                            className="text-white uppercase tracking-wider text-sm font-semibold hover:text-amber-400 transition-colors duration-300"
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.text}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Open menu">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm shadow-lg py-4">
                    <nav className="flex flex-col items-center space-y-4">
                       {navLinks.map((link) => (
                            <a 
                                key={link.text} 
                                href={link.href} 
                                className="text-white uppercase tracking-wider text-lg font-semibold hover:text-amber-400 transition-colors duration-300" 
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.text}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;