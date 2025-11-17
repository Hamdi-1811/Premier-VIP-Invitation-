
import React from 'react';
import Section from './Section';

const Founders: React.FC = () => {
    return (
        <Section id="founders" title="Trained by Cairo's Ballet Masters" maxWidth="max-w-6xl">
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80 text-gray-300">
                Premier Ballet Academy was founded in 2016 by <strong>Ahmed Yehya and Anja Ahcin</strong>, principal dancers with the Cairo Opera Ballet Company, recognized as <strong>"the best known ballet pair in Egypt"</strong>—partners in both dance and life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ahmed Yehya */}
                <div className="founder-card p-8 rounded-2xl animated-card">
                    <img src="https://ik.imagekit.io/ukuvewd1m/Gemini_Generated_Image_ya4fxqya4fxqya4f.png" alt="Ahmed Yehya" className="founder-img"/>
                    <h4 className="text-2xl font-bold mb-2 text-amber-500">Ahmed Yehya</h4>
                    <p className="text-amber-300 mb-4 font-semibold">Deputy Manager, Cairo Opera Ballet Company</p>
                    <div className="text-left text-gray-300">
                        <p className="text-base mb-4">
                            Ahmed Yehya brings unmatched institutional authority as Deputy Manager of the Cairo Opera Ballet Company since 2021 and Principal Dancer since 2000. His distinguished career includes performing alongside ballet legend Julio Bocca in Don Quixote (2005) and being awarded "Best Egyptian Ballet Dancer" in 2013.
                        </p>
                        <p className="text-base">
                            As a member of the Ministry of Culture's artistic advisory council, Ahmed provides Premier Ballet Academy with exclusive Opera House access and institutional credibility that elevates our students' training and performance opportunities.
                        </p>
                    </div>
                </div>
                
                {/* Anja Ahcin */}
                <div className="founder-card p-8 rounded-2xl animated-card">
                    <img src="https://ik.imagekit.io/ukuvewd1m/AnjaAhcinYehia.jpg" alt="Anja Ahcin" className="founder-img"/>
                    <h4 className="text-2xl font-bold mb-2 text-amber-500">Anja Ahcin</h4>
                    <p className="text-amber-300 mb-4 font-semibold">International Principal Dancer</p>
                    <div className="text-left text-gray-300">
                        <p className="text-base mb-4">
                            Anja Ahcin brings international pedigree to Premier Ballet Academy, having placed 3rd at the prestigious Premio Roma Competition in Italy (2006) and graduating "with excellence" from the "Lujo Davico" ballet school in Belgrade, Serbia. As Principal Dancer with Cairo Opera Ballet Company since 2008, she infuses world-class training methodology into our curriculum.
                        </p>
                        <p className="text-base">
                            Anja serves as an international bridge, fusing deep Egyptian heritage with European classical technique to create a training environment that meets global standards while honoring local artistic traditions.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="mt-10 readability-bg text-gray-300 animated-card">
                <p className="text-base">
                    <strong>The Premier Advantage:</strong> Ahmed and Anja dedicate personal attention to every performance, ensuring each student receives mentorship from artists who have graced stages worldwide. Their combined expertise creates a training environment unmatched in the region.
                </p>
            </div>
        </Section>
    );
};

export default Founders;