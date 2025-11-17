
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center w-full max-w-4xl pt-10 pb-20">
             <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <div className="vip-badge px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-bold tracking-wide md:tracking-widest shadow-2xl text-black text-center">
                    ⭐ EXCLUSIVE VIP INVITATION ⭐
                </div>
             </div>

            <div className="hero-card p-8 md:p-12 text-center rounded-2xl shadow-2xl w-full relative mt-16">
                <p className="text-lg mb-2 tracking-wider opacity-80 uppercase text-amber-500">PREMIER BALLET ACADEMY, MAADI PRESENTS</p>
                <h1 className="text-4xl md:text-5xl font-extralight tracking-widest mt-4">An Extraordinary Performance of</h1>
                
                <p className="nutcracker-title font-serif mt-4 mb-8">THE NUTCRACKER</p>
                
                <p className="text-xl md:text-2xl font-light mb-6 text-amber-400">
                    The Prestige of the Cairo Opera House Main Hall<br/>
                    <span className="font-bold text-red-500">December 10, 2025 | 12:30 PM Matinée & 6:00 PM Soirée</span>
                </p>

                <div className="bg-amber-800/50 border border-amber-500/50 rounded-lg p-4 mb-6 text-white">
                    <p className="text-sm">
                        ✨ <strong>For Our Distinguished VIP Guests:</strong> We are honored to welcome you to experience the magic of The Nutcracker in an exclusive setting crafted for your enjoyment.
                    </p>
                    <p className="text-sm mt-1">
                        🩰 <strong>For Academy Families:</strong> A dedicated section awaits you below with special arrangements for our performing students and their loved ones.
                    </p>
                </div>

                <div className="flex justify-center mt-10">
                    <a href="#registration" className="cta-button-primary px-8 py-4 text-lg font-bold tracking-widest uppercase rounded-xl text-white transition-all duration-300">
                        🎟️ RESERVE VIP SEATS
                    </a>
                </div>
            </div>
            
            <a href="#academy-intro" className="mt-8 text-sm tracking-widest opacity-80 cursor-pointer hover:text-amber-500 transition duration-300 z-20 flex items-center text-white">
                DISCOVER THE PREMIER DIFFERENCE
                <svg className="w-4 h-4 ml-2 animate-bounce scroll-down-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
        </div>
    );
};

export default Hero;