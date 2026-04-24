import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % featureDetails.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full bg-white overflow-hidden border-t border-slate-100 flex flex-col lg:flex-row min-h-screen lg:min-h-0">

            {/* Left Column: Content Area */}
            <div className="w-full lg:w-1/2 bg-white px-8 md:px-16 lg:px-24 py-20 flex flex-col items-start justify-center relative">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full space-y-6"
                >
                    {/* Header Part */}
                    <div className="space-y-6">
                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#FFC107]" />
                            <span className="text-primary font-black text-[0.65rem] uppercase tracking-[0.4em]">
                                Value Proposition
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl md:text-4xl lg:text-5xl text-primary tracking-tighter uppercase leading-[1.1]"
                            style={{ fontWeight: 100, fontFamily: 'Outfit, sans-serif' }}
                        >
                            Why Industry Leaders <br />
                            <span className="text-[#FFC107]">Choose Us</span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-slate-500 text-sm font-bold leading-relaxed max-w-md"
                        >
                            We pride ourselves on delivering superior quality in every aspect of our service,
                            Exceeding client expectations across global markets.
                        </motion.p>
                    </div>

                    {/* Featured Item Box */}
                    <motion.div
                        variants={itemVariants}
                        className="relative bg-slate-50 p-7 rounded-lg border border-primary "
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-5xl font-black text-[#FFC107]/20 italic select-none">
                                        {featureDetails[activeIndex].number}
                                    </span>
                                    <h3
                                        className="text-2xl text-primary uppercase tracking-tight"
                                        style={{ fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}
                                    >
                                        {featureDetails[activeIndex].title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    {featureDetails[activeIndex].details.map((detail, dIdx) => (
                                        <div key={dIdx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#FFC107]" />
                                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Dots inside the box */}
                        <div className="absolute bottom-10 right-10 flex gap-2">
                            {featureDetails.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-8 bg-[#FFC107]' : 'w-2 bg-slate-200'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Action Area */}
                    <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-center gap-10">
                        <button className="group relative bg-primary text-white px-10 py-5 overflow-hidden transition-all hover:-translate-y-1">
                            <span className="absolute inset-0 bg-[#FFC107] transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
                            <span className="relative z-10 font-bold text-[11px] uppercase tracking-[0.3em] group-hover:text-primary transition-colors duration-300">
                                Explore More
                            </span>
                        </button>

                        <div className="flex flex-col border-l border-slate-200 pl-8">
                            <span className="text-slate-400 font-black text-[9px] uppercase tracking-[0.4em] mb-1">
                                Global Standards
                            </span>
                            <span className="text-primary font-black text-xs uppercase tracking-tighter">
                                Project Excellence
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Right Column: Visual Anchor */}
            <div className="w-full lg:w-1/2 bg-slate-50 relative min-h-[500px] lg:min-h-0 flex items-center justify-center p-10 lg:p-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.1] select-none pointer-events-none">
                    <span className="text-[20vw] font-black text-primary leading-none uppercase -rotate-12 transform translate-x-1/4">
                        Quality
                    </span>
                </div>

                <div className="relative w-full max-w-[500px] z-10 group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border-[12px] border-primary"
                    >
                        <img
                            src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg"
                            alt="Professional Solutions"
                            className="w-full h-full object-cover aspect-[4/5] scale-110 group-hover:scale-100 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
