
import React from 'react';
import Section from './Section';

const benefits = [
    { icon: "🌟", title: "Premium Orchestra Seating", description: "Finest views in the Cairo Opera House Main Hall with dedicated VIP concierge service and priority access." },
    { icon: "🎭", title: "Exclusive Backstage Access", description: "Private backstage tour, meet & greet with principal dancers, and photo opportunity with the founders." },
    { icon: "🎁", title: "VIP Souvenir Package", description: "Limited edition commemorative program, signed performance poster, and exclusive gifts." },
    { icon: "🥂", title: "Pre-Performance Reception", description: "Invitation to an exclusive VIP reception with refreshments and networking with fellow patrons of the arts." },
    { icon: "📸", title: "Professional Photography", description: "Complimentary professional photos of your VIP experience delivered digitally within 48 hours." },
    { icon: "💼", title: "Investor Briefing Opportunity", description: "Exclusive invitation to post-performance investor consultation regarding Academy expansion plans (2026-2028)." }
];

const VIPBenefits: React.FC = () => {
    return (
        <Section id="vip-benefits" title="Exclusive VIP Benefits" maxWidth="max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="vip-card p-6 rounded-xl animated-card" style={{ transitionDelay: `${index * 100}ms`}}>
                        <div className="text-amber-400 text-4xl mb-3">{benefit.icon}</div>
                        <h4 className="font-bold mb-2 text-xl text-amber-400">{benefit.title}</h4>
                        <p className="text-sm opacity-80 text-gray-400">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default VIPBenefits;