import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Play } from 'lucide-react';

const featureDetails = [
    {
        number: "01",
        title: "Commitment to Excellence",
        description: "Our pursuit of perfection is more than a goal; it's our standard. We meticulously engineer every solution to ensure it meets the highest benchmarks of performance and reliability.",
        details: ["Zero-Regression Standards", "ISO Certified Methodologies"]
    },
    {
        number: "02",
        title: "We Ensure Quality Work",
        description: "Quality is embedded in our DNA. From the first line of code to the final deployment, we implement continuous QA cycles and peer reviews to maintain absolute integrity.",
        details: ["Automated QA Pipelines", "Security-First Architecture"]
    },
    {
        number: "03",
        title: "Strategic Digital Growth",
        description: "We don't just build systems; we architect growth. Our digital strategies are designed to be scalable and future-proof, ensuring your business stays ahead of the curve.",
        details: ["Scalable Infrastructure", "ROI-Focused Roadmaps"]
    },
    {
        number: "04",
        title: "24/7 Expert Support",
        description: "Expert assistance is always within reach. We provide round-the-clock support led by senior engineers who understand your system's critical nature.",
        details: ["Global Response Guilds", "Direct Engineer Access"]
    }
];

const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % featureDetails.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-white overflow-hidden min-h-[600px] lg:h-[750px] flex flex-col lg:flex-row">
            
            {/* Left Content Column - Teal Background */}
            <div className="w-full lg:w-[50%] bg-[#1ABC9C] p-10 lg:p-24 flex flex-col justify-center relative">
                
                <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="text-white text-sm font-bold border-b-2 border-white/50 pb-1 uppercase tracking-widest">
                            Free Forever Attendance
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] font-bold"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                        Reduce Cost and Limit <br /> Liability with IT Solutions
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-sm leading-relaxed max-w-lg font-light"
                    >
                        When you work with Orbintix, you get the best. We provide adaptable solutions 
                        that allow you to be a part of the entire process from start to finish.
                    </motion.p>

                    {/* Carousel Container - One by One content */}
                    <div className="relative min-h-[160px] pt-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h3 className="text-white font-bold text-lg leading-tight">
                                            {featureDetails[activeIndex].title}
                                        </h3>
                                    </div>
                                    <p className="text-white/70 text-[13px] leading-relaxed">
                                        {featureDetails[activeIndex].description}
                                    </p>
                                </div>

                                {/* Mirror or Next Feature (as seen in layout) */}
                                <div className="space-y-4 opacity-50 hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h3 className="text-white font-bold text-lg leading-tight">
                                            {featureDetails[(activeIndex + 1) % featureDetails.length].title}
                                        </h3>
                                    </div>
                                    <p className="text-white/70 text-[13px] leading-relaxed">
                                        {featureDetails[(activeIndex + 1) % featureDetails.length].description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Dots */}
                        <div className="flex gap-2 mt-12">
                            {featureDetails.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${
                                        activeIndex === i ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Footer Signature Area */}
                    <div className="pt-12 flex flex-col sm:flex-row items-center gap-12 border-t border-white/10">
                        <button className="bg-[#141d2b] text-white px-10 py-4 font-bold text-[13px] hover:bg-white hover:text-primary transition-all">
                            Read More
                        </button>
                        
                        <div className="flex flex-col">
                            <span className="text-white text-2xl font-serif italic opacity-60" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                                Orbintix Team
                            </span>
                            <span className="text-white/50 text-[10px] font-bold uppercase tracking-[0.3em]">
                                Leaders in Tech Excellence
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Image Side */}
            <div className="w-full lg:w-[50%] relative h-[400px] lg:h-auto">
                <img 
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg" 
                    alt="Corporate Meeting" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 pointer-events-none" />

                {/* Decorative Play Button Overlay */}
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#1ABC9C] rounded-full flex items-center justify-center cursor-pointer shadow-2xl group"
                >
                    <Play className="text-white fill-white transition-transform group-hover:scale-110" size={32} />
                    <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 animate-ping group-hover:opacity-40" />
                </motion.div>
            </div>

        </section>
    );
};

export default WhyChooseUs;
