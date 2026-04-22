import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import offshoreImg from "../assets/offshore.jpg";

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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const missionPoints = [
    {
        id: "01.",
        title: "Our vision",
        description: "To be recognized as a leading force in modern digital transformation, driving innovation and setting benchmarks worldwide."
    },
    {
        id: "02.",
        title: "Our mission",
        description: "We bridge the gap between legacy systems and modern talent to help clients transition to seamless growth and long-term innovation."
    },
    {
        id: "03.",
        title: "Our goal",
        description: "Building sustainable relationships based on transparency, measurable results, and a deep commitment to our clients' success."
    }
];



export default function AboutUs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative w-full min-h-[600px] bg-white py-20 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:pl-10 lg:pr-16">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Content */}
                    <div className="w-full lg:w-[42%] space-y-12">
                        {/* Heading */}
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl lg:text-2xl text-primary leading-relaxed tracking-tight font-outfit"
                            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400 }}
                        >
                            Growth thrives on bold ideas, efficient execution, and focused simplicity. 
                            Innovation sparks progress, automation amplifies impact, and 
                            simplification clears the path to success
                        </motion.h2>

                        {/* Accordion List */}
                        <div className="space-y-4 border-t border-slate-200">
                            {missionPoints.map((point, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div 
                                        key={index}
                                        className="border-b border-slate-200 py-6"
                                    >
                                        <button 
                                            onClick={() => setActiveIndex(isActive ? -1 : index)}
                                            className="w-full flex items-center justify-between group text-left"
                                        >
                                            <div className="flex items-center gap-6">
                                                <span className={`text-sm font-bold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                                                    {point.id}
                                                </span>
                                                <h3 className={`text-lg font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-500 group-hover:text-primary'}`}>
                                                    {point.title}
                                                </h3>
                                            </div>
                                            {isActive ? (
                                                <ChevronUp size={20} className="text-slate-400" />
                                            ) : (
                                                <ChevronDown size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
                                            )}
                                        </button>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pt-4 text-slate-500 text-sm leading-relaxed max-w-xl font-light">
                                                        {point.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Image with Decorative Frame */}
                    <div className="w-full lg:w-[58%] relative mt-12 lg:mt-0">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            {/* Decorative Yellow Frame (Top Right) */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#FFC107] z-20" />
                            
                            <div className="relative overflow-hidden rounded-sm shadow-2xl">
                                <img 
                                    src="https://images.pexels.com/photos/7693754/pexels-photo-7693754.jpeg" 
                                    alt="About Us" 
                                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Subtle vignette overlay */}
                                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
