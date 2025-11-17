import React, { useState, useRef } from 'react';
import Section from './Section';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    package: string;
    guests: string;
    requests: string;
    investorInterest: boolean;
    privacyConsent: boolean;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyhqeiDHuZQHzBV0zgLQMIDzzpiPZ3eueE1uwvrtmCMwVHqOdBezc5Wt8_D00ikXxdz/exec';

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '', lastName: '', email: '', phone: '', company: '',
        package: '', guests: '', requests: '', investorInterest: false, privacyConsent: false
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [confirmationNumber, setConfirmationNumber] = useState<string>('');
    const formRef = useRef<HTMLFormElement>(null);

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required.';
        if (!formData.lastName) newErrors.lastName = 'Last name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required.';
        if (!formData.package) newErrors.package = 'Please select a package.';
        if (!formData.guests) newErrors.guests = 'Please select the number of guests.';
        if (!formData.privacyConsent) newErrors.privacyConsent = 'You must agree to the privacy policy.';
        
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length > 0) {
            const firstErrorKey = Object.keys(validationErrors)[0] as keyof FormData;
            formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorKey}"]`)?.focus();
            return;
        }

        setStatus('loading');
        
        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Even if the response is not ok, we try to parse it for error messages from the script.
            const result = await response.json();

            if (response.ok && result.result === 'success') {
                console.log('Form Submitted:', formData);
                const newConfirmationNumber = `PBA-${Date.now().toString().slice(-6)}`;
                setConfirmationNumber(newConfirmationNumber);
                setStatus('success');
                setFormData({
                    firstName: '', lastName: '', email: '', phone: '', company: '',
                    package: '', guests: '', requests: '', investorInterest: false, privacyConsent: false
                });
                setErrors({});
            } else {
                console.error('Submission failed:', result.message);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <Section id="registration" title="VIP Registration" maxWidth="max-w-3xl">
            <div className="hero-card p-8 md:p-10 rounded-2xl animated-card relative overflow-hidden">
                {status === 'loading' && (
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl z-20">
                        <svg className="animate-spin h-12 w-12 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-white mt-4 text-lg font-semibold tracking-wider">Submitting Your Registration...</p>
                    </div>
                )}
                
                {status === 'success' ? (
                    <div className="text-center p-4 bg-green-900/50 border border-green-500 rounded-lg">
                        <h4 className="text-2xl font-bold text-green-300">🎭 Registration Confirmed!</h4>
                        <p className="text-green-200 mt-4">Thank you for reserving your VIP experience. Your registration has been successfully submitted.</p>
                        
                        <div className="mt-6 bg-black/30 p-4 rounded-lg border border-green-500/50">
                            <p className="text-sm text-gray-300 uppercase tracking-widest">Confirmation Number</p>
                            <p className="text-2xl font-mono text-amber-300 tracking-widest mt-1">{confirmationNumber}</p>
                        </div>

                        <p className="text-green-200 mt-6">
                            <strong>Next Steps:</strong> Our team will contact you within <strong>24 hours</strong> via the email and phone number you provided to finalize your reservation and share event details.
                        </p>

                        <button 
                            onClick={() => setStatus('idle')} 
                            className="cta-button-secondary mt-8 px-6 py-2 text-sm font-bold tracking-wider uppercase rounded-xl text-white"
                        >
                            Register another guest
                        </button>
                    </div>
                ) : (
                <>
                    <p className="text-center text-gray-300 mb-6">
                        Complete this form to reserve your exclusive VIP experience. Our team will contact you within 24 hours to confirm your reservation and provide additional event details.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="vip-form space-y-4" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-90 text-white" htmlFor="firstName">First Name *</label>
                                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg" placeholder="Enter your first name" aria-required="true" aria-invalid={!!errors.firstName} />
                                {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                            </div>
                            <div>
                               <label className="block text-sm font-medium mb-2 opacity-90 text-white" htmlFor="lastName">Last Name *</label>
                               <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg" placeholder="Enter your last name" aria-required="true" aria-invalid={!!errors.lastName}/>
                               {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                            </div>
                        </div>
                         <div>
                            <label className="block text-sm font-medium mb-2 opacity-90 text-white" htmlFor="email">Email Address *</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg" placeholder="your.email@example.com" aria-required="true" aria-invalid={!!errors.email}/>
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 opacity-90 text-white" htmlFor="phone">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg" placeholder="+20 XXX XXX XXXX" aria-required="true" aria-invalid={!!errors.phone} />
                            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 opacity-90 text-white" htmlFor="package">VIP Package Selection *</label>
                            <select id="package" name="package" value={formData.package} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg" aria-required="true" aria-invalid={!!errors.package}>
                                <option value="">Select Your VIP Package</option>
                                <option value="premium">Premium Orchestra Seating (EGP 1,500 per person)</option>
                                <option value="executive">Executive VIP Box (EGP 2,500 per person)</option>
                                <option value="platinum">Platinum Experience with Investor Briefing (EGP 5,000 per person)</option>
                            </select>
                            {errors.package && <p className="text-red-400 text-xs mt-1">{errors.package}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 opacity-90 text-white" htmlFor="guests">Number of Guests *</label>
                            <select id="guests" name="guests" value={formData.guests} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg" aria-required="true" aria-invalid={!!errors.guests}>
                                <option value="">Select number of guests</option>
                                <option value="1">1 Guest</option><option value="2">2 Guests</option><option value="3">3 Guests</option><option value="4">4 Guests</option><option value="5+">5+ Guests (Corporate Booking)</option>
                            </select>
                             {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
                        </div>
                         <div className="flex items-start">
                            <input type="checkbox" id="investorInterest" name="investorInterest" checked={formData.investorInterest} onChange={handleChange} className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"/>
                            <label htmlFor="investorInterest" className="text-sm text-gray-300">I am interested in learning about investment opportunities with Premier Ballet Academy.</label>
                        </div>
                         <div className="flex items-start">
                            <input type="checkbox" id="privacyConsent" name="privacyConsent" checked={formData.privacyConsent} onChange={handleChange} required className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500" aria-required="true" aria-invalid={!!errors.privacyConsent}/>
                            <label htmlFor="privacyConsent" className="text-sm text-gray-300">I agree to the <a href="https://premierballetacademy.org/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline text-amber-400 hover:text-amber-300">Privacy Policy</a> and <a href="https://premierballetacademy.org/terms/" target="_blank" rel="noopener noreferrer" className="underline text-amber-400 hover:text-amber-300">Terms & Conditions</a>. *</label>
                        </div>
                         {errors.privacyConsent && <p className="text-red-400 text-xs mt-1">{errors.privacyConsent}</p>}
                        
                        <button type="submit" disabled={status === 'loading'} className="cta-button-primary w-full py-4 text-lg font-bold rounded-lg transition-all duration-300 text-white flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                            🎭 SUBMIT VIP REGISTRATION
                        </button>
                        {status === 'error' && <p className="text-red-400 text-center text-sm mt-2">Something went wrong. Please try again.</p>}
                    </form>
                </>
                )}
            </div>
        </Section>
    );
};

export default RegistrationForm;