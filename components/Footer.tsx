
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black/90 border-t border-amber-600/50 mt-auto p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left text-gray-300">
                <div>
                    <h3 className="text-xl font-bold mb-3 text-amber-400">Premier Ballet Academy</h3>
                    <p className="text-sm opacity-80">
                        Maadi, Cairo<br />
                        Upholding the standard of classical ballet excellence in Egypt since 2016.
                    </p>
                    <a href="https://premierballetacademy.org/" className="text-sm text-red-500 hover:text-red-400 mt-2 inline-block">Return to Main Site →</a>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-3 text-amber-400">VIP Services</h3>
                    <p className="text-sm opacity-80">
                        For VIP reservations & corporate packages:<br />
                        <a href="https://premierballetacademy.org/contact/" className="text-red-500 hover:text-red-400">Contact Us Directly</a><br />
                        <a href="tel:+201024213198" className="text-amber-300 hover:text-amber-200">+20 102 421 3198</a>
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-3 text-amber-400">Performance Details</h3>
                    <p className="text-sm opacity-80">
                        <strong>Cairo Opera House Main Hall</strong><br />
                        Gezira, Cairo<br />
                        December 10, 2025<br />
                        12:30 PM Matinée & 6:00 PM Soirée
                    </p>
                </div>
                
                <div>
                    <h3 className="text-xl font-bold mb-3 text-amber-400">Connect With Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4 mb-4">
                        <a href="https://www.instagram.com/premiereballetacademy/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-amber-300 hover:text-red-500 transition duration-300">
                             <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.585.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.355 2.175 8.741 2.163 12 2.163m0-2.163C8.74.001 8.333.015 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.015 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.015 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.015-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
                        </a>
                        <a href="https://www.facebook.com/premierballetacademy/" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-amber-300 hover:text-red-500 transition duration-300">
                           <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm-3.7 15.6h-2.1v6.4h-3.6v-6.4H8v-2.7h1.6V11c0-1.7 1-2.6 2.5-2.6h1.9v2.7h-1.4c-.6 0-.8.4-.8.7v1.1h2.2l-.3 2.7z"/></svg>
                        </a>
                        <a href="https://www.youtube.com/@premiereballetacademy5322" target="_blank" rel="noopener noreferrer" title="YouTube" className="text-amber-300 hover:text-red-500 transition duration-300">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.73 13.97l6.59-3.95-6.59-3.95v7.9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8 10c0 .35-.01.7-.03 1.04-.1 1.76-.79 3.23-1.89 4.33-1.1 1.1-2.57 1.79-4.33 1.89-1.34.02-1.69.03-2.04.03s-.7-.01-1.04-.03c-1.76-.1-3.23-.79-4.33-1.89-1.1-1.1-1.79-2.57-1.89-4.33C4.01 12.7 4 12.35 4 12s.01-.7.03-1.04c.1-1.76.79-3.23 1.89-4.33s2.57-1.79 4.33-1.89c.34-.02.69-.03 1.04-.03s.7.01 1.04.03c1.76.1 3.23.79 4.33 1.89s1.79 2.57 1.89 4.33c.02.34.03.69.03 1.04z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10 text-xs opacity-50 text-gray-500">
                <div className="space-x-4">
                    <a href="https://premierballetacademy.org/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                    <span>|</span>
                    <a href="https://premierballetacademy.org/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Terms & Conditions</a>
                </div>
                <p className="mt-2">&copy; 2025 Premier Ballet Academy. Exclusive VIP Invitation Only. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;