
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    maxWidth?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, maxWidth = 'max-w-4xl' }) => {
    return (
        <section id={id} className={`py-12 md:py-16 text-center w-full ${maxWidth}`}>
            <div className="section-title-bg">
                <h3 className="text-3xl md:text-4xl font-light text-amber-500">{title}</h3>
            </div>
            {children}
        </section>
    );
};

export default Section;