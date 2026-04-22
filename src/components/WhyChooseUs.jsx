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
        <section className="relative w-full bg-white overflow-hidden border-t border-slate-100 flex flex-col lg:flex-row">
            
            {/* Left Column: Content Area (Full Split) */}
            <div className="w-full lg:w-1/2 bg-white px-8 md:px-16 lg:px-24 py-10 lg:py-20 flex flex-col items-start justify-center relative">
                
                <div className="w-full max-w-xl mx-auto lg:mx-0 space-y-8">
                    {/* Header Part */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-[3px] w-12 bg-[#FFC107]" />
                            <span className="text-primary/50 font-black text-[0.7rem] uppercase tracking-[0.4em]">
                                Why Choose Us
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-4xl lg:text-4xl text-primary tracking-tighter uppercase leading-tight"
                            style={{ fontWeight: 100, fontFamily: 'Outfit, sans-serif' }}
                        >
                            Delivering Superior <br />
                            <span className="text-[#FFC107] font-normal italic">Quality</span> Every Time
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 text-sm leading-relaxed font-light text-left mt-3"
                        >
                            We pride ourselves on delivering superior quality in every aspect of our service. 
                            Our team is dedicated to exceeding client expectations and upholding the highest 
                            standards of craftsmanship across global markets.
                        </motion.p>
                    </div>

                    {/* Carousel Container - One by One content */}
                    <div className="relative min-h-[140px] w-full pt-6 border-t border-slate-100">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="space-y-4 text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-full bg-[#FFC107]/10 flex items-center justify-center text-[#FFC107] shadow-sm">
                                        <CheckCircle2 size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl text-primary font-bold tracking-tight">
                                        {featureDetails[activeIndex].title}
                                    </h3>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed font-light">
                                    {featureDetails[activeIndex].description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {featureDetails[activeIndex].details.map((detail, dIdx) => (
                                        <div key={dIdx} className="flex items-center gap-2 px-4 py-1 bg-slate-50 border border-slate-200/50 rounded-full shadow-sm">
                                            <div className="w-1 h-1 rounded-full bg-[#FFC107]" />
                                            <span className="text-primary/60 text-[9px] font-bold uppercase tracking-[0.2em]">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex gap-2 pt-2">
                        {featureDetails.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`h-1 transition-all duration-500 rounded-full ${
                                    activeIndex === i ? 'w-10 bg-[#FFC107]' : 'w-3 bg-slate-200 hover:bg-slate-300'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Action Area */}
                    <div className="pt-6 flex items-center gap-10">
                        <button className="bg-primary text-white px-10 py-4 font-bold text-xs tracking-[0.3em] uppercase transition-all hover:bg-[#FFC107] hover:text-primary shadow-2xl hover:-translate-y-1">
                            Explore More
                        </button>
                        
                        <div className="hidden sm:flex flex-col border-l border-slate-200 pl-8">
                            <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.4em] mb-1">
                                Global Standards
                            </span>
                            <span className="text-primary font-black text-xs uppercase tracking-tighter">
                                Project Excellence
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Fixed Visual Anchor (Split Layout) */}
            <div className="w-full lg:w-1/2 bg-slate-50 relative min-h-[500px] lg:min-h-[650px] flex items-center justify-center p-10 lg:p-20 overflow-hidden">
                
                {/* 1. Background Decorative Pattern (SVG) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-150">
                        <circle cx="200" cy="200" r="150" stroke="#FFC107" strokeWidth="0.5" strokeDasharray="4 4" />
                        <circle cx="200" cy="200" r="100" stroke="#FFC107" strokeWidth="0.5" strokeDasharray="2 2" />
                        <path d="M50 200C50 117.157 117.157 50 200 50" stroke="#FFC107" strokeWidth="0.5" strokeDasharray="4 4" />
                    </svg>
                </div>

                <div className="relative w-full max-w-[500px] lg:sticky lg:top-24 z-10">
                    
                    {/* 2. Offset Yellow Frame */}
                    <div className="absolute -left-8 -top-8 w-full h-full border-4 border-[#FFC107] rounded-none z-0">
                        {/* Top-Left Dot Accent */}
                        <div className="absolute -left-2 -top-2 w-4 h-4 bg-white border-4 border-[#FFC107] rounded-full shadow-lg" />
                    </div>

                    {/* 3. Main Professional Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="relative w-full h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden z-10 border-[16px] border-white"
                    >
                        <img 
                            src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg" 
                            alt="Professional Solutions" 
                            className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
                        />
                        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                    </motion.div>

                    {/* 4. Circular Overlaid Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60, rotate: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="absolute -left-16 lg:-left-24 top-1/3 w-36 h-36 lg:w-56 lg:h-56 rounded-full border-[10px] lg:border-[16px] border-white shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] z-20 overflow-hidden"
                    >
                        <img 
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" 
                            alt="Team Collaboration" 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* 5. Decorative Badge */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFC107] rounded-full mix-blend-multiply opacity-10 blur-3xl z-0" />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
