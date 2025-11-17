
import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Cast from './components/Cast';
import Founders from './components/Founders';
import VIPBenefits from './components/VIPBenefits';
import InvestorVision from './components/InvestorVision';
import RegistrationForm from './components/RegistrationForm';
import VideoBelt from './components/VideoBelt';
import Footer from './components/Footer';
import FloatingBackButton from './components/FloatingBackButton';

const App: React.FC = () => {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = mainRef.current?.querySelectorAll('.animated-card');
        if (cards) {
            cards.forEach((card) => observer.observe(card));
        }

        return () => {
            if (cards) {
                cards.forEach((card) => observer.unobserve(card));
            }
        };
    }, []);
    
    return (
        <div className="dramatic-bg min-h-screen flex flex-col">
            <Header />

            <main ref={mainRef} className="flex-grow flex flex-col items-center p-4 pt-20">
                <Hero />
                <Section id="academy-intro" title="Premier Ballet Academy: Excellence in Motion" maxWidth="max-w-4xl">
                    <div className="vip-card p-8 rounded-2xl text-left animated-card">
                        <p className="text-lg mb-4 text-gray-300">
                            Premier Ballet Academy, founded in 2016 in Maadi, Cairo, delivers top-tier classical ballet training built on discipline, artistry, and meaningful stage experience. Through our exclusive partnership with the Cairo Opera House, our students are among the few in Egypt who perform on the prestigious Main Hall stage.
                        </p>
                        <p className="text-lg text-gray-300">
                            This December's Nutcracker performance is the result of years of dedication and growth, reflecting our commitment to nurturing exceptional talent and advancing classical ballet in the region.
                        </p>
                    </div>
                </Section>
                <Section id="story" title="The Magic of The Nutcracker" maxWidth="max-w-4xl">
                    <div className="vip-card p-8 rounded-2xl text-left text-gray-300 animated-card">
                        <p className="text-lg mb-6 opacity-90">
                            Tchaikovsky's The Nutcracker is a holiday spell—an enchanting journey from a sparkling Victorian Christmas Eve to a daring battle with the Mouse King, and onward to the wondrous Land of Sweets.
                        </p>
                        <p className="text-lg mb-6 opacity-90">
                            Clara's magical adventure begins when her mysterious godfather, Drosselmeyer, gifts her a nutcracker that springs to life. At midnight, the ordinary world dissolves as she and her transformed Nutcracker Prince travel through the shimmering Kingdom of Snow and into the radiant realm ruled by the Sugar Plum Fairy.
                        </p>
                        <p className="text-lg opacity-90">
                            This invitation welcomes you into that world of wonder. Your presence not only celebrates the classical arts, but also inspires the next generation of Egypt's ballet talent, elevating this performance into a truly memorable cultural occasion.
                        </p>
                    </div>
                </Section>
                <Cast />
                <Founders />
                <VIPBenefits />
                <InvestorVision />
                <RegistrationForm />
                <VideoBelt />
            </main>

            <Footer />
            <FloatingBackButton />
        </div>
    );
};

export default App;