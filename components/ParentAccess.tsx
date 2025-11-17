
import React from 'react';

const ParentAccess: React.FC = () => {
    return (
        <section id="parent-access" className="py-16 w-full max-w-3xl border-t border-b border-amber-600/50 my-12">
            <h3 className="text-3xl md:text-4xl font-light mb-8 text-amber-500 text-center">Academy Parent Access Portal</h3>
            <div className="hero-card p-8 rounded-2xl text-white animated-card">
                <p className="text-lg font-semibold mb-4 text-amber-300">🩰 Secure Your Student's Performance Tickets & Required Passes</p>
                <p className="mb-6 text-gray-300">
                    <strong>Dear Premier Parents,</strong><br />
                    Please use this dedicated portal to confirm your complimentary parent tickets and purchase any additional seating for extended family members. This section is <strong>exclusively for families of participating students</strong>, not for general VIP guest booking.
                </p>
                <div className="space-y-4">
                    <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300 shadow-lg">
                        ✓ CONFIRM STUDENT PERFORMANCE PASSES
                    </button>
                    <button className="w-full py-3 border-2 border-amber-500 text-amber-200 hover:bg-amber-900/50 rounded-lg transition duration-300 font-semibold">
                        🎟️ PURCHASE ADDITIONAL PARENT TICKETS (Discounted Rate)
                    </button>
                    <p className="text-xs mt-3 text-gray-500 italic">
                        <strong>Important:</strong> All students participating in The Nutcracker must confirm their attendance and ticket requirements by <strong>November 30th, 2025</strong>. Late confirmations may affect costume and stage blocking arrangements.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ParentAccess;