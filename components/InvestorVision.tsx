
import React from 'react';
import Section from './Section';

const InvestorVision: React.FC = () => {
    return (
        <Section id="investor-vision" title="" maxWidth="max-w-5xl">
            <div className="investor-highlight p-6 md:p-10 rounded-2xl animated-card">
                <h3 className="text-3xl md:text-4xl font-light mb-6 text-amber-500">Investing in Egypt's Cultural Future</h3>
                <p className="text-lg mb-6 text-gray-300">
                    Premier Ballet Academy stands at an exciting inflection point. With proven institutional partnerships, a growing student base, and demonstrated market demand for high-quality arts education, we are preparing for <strong>strategic regional expansion (2026-2028)</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-black/40 p-6 rounded-xl border border-amber-500/30">
                        <p className="text-3xl font-bold text-amber-400 mb-2">+20.1%</p>
                        <p className="text-sm text-gray-400">Education Spending Growth in Egypt (Annual)</p>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-amber-500/30">
                        <p className="text-3xl font-bold text-amber-400 mb-2">3.6x+</p>
                        <p className="text-sm text-gray-400">Projected ROI (Excluding Lifetime Value)</p>
                    </div>
                    <div className="bg-black/40 p-6 rounded-xl border border-amber-500/30">
                        <p className="text-3xl font-bold text-amber-400 mb-2">MENA</p>
                        <p className="text-sm text-gray-400">Regional Market Expansion Target</p>
                    </div>
                </div>
                <p className="text-base text-gray-300">
                    <strong>Exclusive Opportunity:</strong> VIP guests attending this performance will receive priority access to a private investor briefing following the event. Learn about our expansion roadmap, financial projections, and partnership opportunities.
                </p>
                <div className="mt-8 flex justify-center">
                    <a href="#registration" className="cta-button-primary px-6 md:px-8 py-3 text-base font-bold tracking-wider uppercase rounded-xl text-white transition-all duration-300">
                        REQUEST INVESTOR CONSULTATION
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default InvestorVision;