
import React from 'react';
import Section from './Section';

const Cast: React.FC = () => {
    return (
        <Section id="cast" title="Meet Our Academy Stars" maxWidth="max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="vip-card p-6 rounded-xl animated-card">
                    <img src="https://ik.imagekit.io/ukuvewd1m/image(1).png" alt="Clara Stahlbaum" className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-amber-500/80 shadow-lg"/>
                    <h4 className="text-2xl font-bold mb-3 text-amber-400">Clara Stahlbaum</h4>
                    <p className="text-gray-300 mb-2 italic">[Principal Student Name]</p>
                    <p className="text-sm opacity-80 text-gray-400">The brave young heroine whose Christmas Eve adventure takes her on a magical journey through the Land of Sweets.</p>
                </div>
                <div className="vip-card p-6 rounded-xl animated-card">
                    <img src="https://ik.imagekit.io/ukuvewd1m/image(3).png" alt="The Nutcracker Prince" className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-amber-500/80 shadow-lg"/>
                    <h4 className="text-2xl font-bold mb-3 text-amber-400">The Nutcracker Prince</h4>
                    <p className="text-gray-300 mb-2 italic">[Principal Student Name]</p>
                    <p className="text-sm opacity-80 text-gray-400">The valiant prince who defeats the Mouse King and escorts Clara on her enchanted journey.</p>
                </div>
            </div>
            <p className="mt-8 text-sm text-gray-400 italic">
                Additional principal roles including the Sugar Plum Fairy, Arabian Princess, and Spanish Dancers will be announced closer to the performance date.
            </p>
        </Section>
    );
};

export default Cast;