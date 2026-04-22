import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

// Assets
import missionImg from "../assets/offshore.jpg";

const missionPoints = [
    {
        id: "01.",
        title: "Scalable Digital Solutions",
        description: "We design and build high-performance applications that grow with your business."
    },
    {
        id: "02.",
        title: "Strategic IT Staffing",
        description: "We connect companies with top-tier talent across the US to accelerate delivery and innovation."
    },
    {
        id: "03.",
        title: "End-to-End Technology Partnership",
        description: "We support businesses from idea to deployment with reliable, scalable, and future-ready solutions.",
    }
];

const CompanyMission = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-10 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column: Numbered List Content */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10"
                            >
                                <span className="text-accent text-xs font-black uppercase tracking-widest">
                                    Company mission
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl lg:text-5xl font-black text-white leading-tight tracking-tighter uppercase font-outfit"
                            >
                                Helping Fast-moving Innovators <br />
                                <span className="text-accent">Scale</span> With Business Purpose
                            </motion.h2>
                        </div>

                        <div className="space-y-4">
                            {missionPoints.map((point, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        onClick={() => setActiveIndex(isActive ? -1 : index)}
                                        className={`group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${
                                            isActive 
                                            ? 'bg-secondary border-accent/30 shadow-lg translate-x-2' 
                                            : 'bg-primary border-white/5 hover:border-accent/20 hover:bg-secondary/50'
                                        }`}
                                    >
                                        <div className="p-6">
                                            <div className="flex items-center gap-6">
                                                <span className={`font-black text-xl transition-colors duration-300 ${isActive ? 'text-accent' : 'text-white/20'}`}>
                                                    {point.id}
                                                </span>
                                                <h3 className={`font-bold text-xl tracking-tight transition-colors duration-300 font-outfit uppercase ${isActive ? 'text-white' : 'text-text-secondary group-hover:text-white'}`}>
                                                    {point.title}
                                                </h3>
                                            </div>

                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0, y: 10 }}
                                                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                        exit={{ opacity: 0, height: 0, y: 10 }}
                                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                                    >
                                                        <div className="pt-4 space-y-4">
                                                            <p className="text-text-secondary text-sm leading-relaxed max-w-md font-dm-sans">
                                                                {point.description}
                                                            </p>
                                                            {point.extra && (
                                                                <p className="text-[#1ABC9C] text-sm font-medium pt-4 border-t border-slate-200 mt-2">
                                                                    {point.extra}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Image with Overlaying Stat Card */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl lg:h-[700px]"
                        >
                            <img 
                                src={missionImg} 
                                alt="Company Strategy" 
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                            
                            {/* Floating Performance Stat Card - Professional Layout Mapping */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-6 right-6 w-[280px] h-[160px] bg-primary rounded-2xl flex flex-col justify-between p-6 z-20 shadow-[-20px_20px_60px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-2 hover:translate-x-2 border border-white/5"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">
                                        Since (2020)
                                    </span>
                                    <ArrowUpRight size={18} className="text-white opacity-80" />
                                </div>
                                
                                <div className="flex items-end justify-between gap-4">
                                    <h4 className="text-4xl font-black text-white tracking-tighter leading-none font-outfit">
                                        +60<span className="text-accent">%</span>
                                    </h4>
                                    <p className="text-[10px] text-text-secondary font-bold leading-tight max-w-[100px] text-right uppercase tracking-wider font-dm-sans">
                                        Faster Strategy <br/> Delivery Results
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompanyMission;
