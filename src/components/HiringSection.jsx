import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const HiringSection = () => {
    const bulletPoints = [
        "Pre-vetted Senior Developers",
        "Rapid Onboarding (48 hours)",
        "Scalable On-Demand Talent",
        "Expert Technology Matching"
    ];

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

    return (
        <section className="relative w-full bg-white overflow-hidden border-t border-slate-100 flex flex-col lg:flex-row min-h-screen lg:min-h-0">

            {/* Left Column: Editorial Visual */}
            <div className="w-full lg:w-1/2 bg-slate-50 relative min-h-[500px] lg:min-h-0 flex items-center justify-center p-10 lg:p-24 overflow-hidden order-2 lg:order-1">
                <div className="absolute inset-0 z-0 opacity-[0.1] select-none pointer-events-none">
                    <span className="text-[20vw] font-black text-primary leading-none uppercase rotate-90 transform translate-y-1/4">
                        Talent
                    </span>
                </div>

                <div className="relative w-full max-w-[520px] z-10 group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border-[12px] border-primary"
                    >
                        <img
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                            alt="IT Talent Collaboration"
                            className="w-full h-full object-cover aspect-[4/5] scale-105 group-hover:scale-100 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </motion.div>

                    {/* Circular Accent */}
                    <motion.div
                        initial={{ opacity: 0, x: 60, rotate: 15 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="absolute -right-12 lg:-right-20 bottom-1/4 w-32 h-32 lg:w-48 lg:h-48 rounded-full border-[10px] lg:border-[12px] border-primary shadow-2xl z-20 overflow-hidden hidden md:block"
                    >
                        <img
                            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                            alt="Expert Developer"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Right Column: Content Area */}
            <div className="w-full lg:w-1/2 bg-white px-8 md:px-16 lg:px-24 py-16 lg:py-32 flex flex-col items-start justify-center relative order-1 lg:order-2">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full max-w-xl mx-auto lg:mx-0 space-y-12"
                >
                    {/* Header Part */}
                    <div className="space-y-6">
                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <div className="h-[2px] w-12 bg-[#FFC107]" />
                            <span className="text-primary font-black text-[0.65rem] uppercase tracking-[0.4em]">
                                Strategic Staffing
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-5xl lg:text-6xl text-primary tracking-tighter uppercase leading-[1.1]"
                            style={{ fontWeight: 100, fontFamily: 'Outfit, sans-serif' }}
                        >
                            High-Impact Talent <br />
                            <span className="text-[#FFC107]">On Demand</span>
                        </motion.h2>
                    </div>

                    {/* Bullet Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 pt-4">
                        {bulletPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center gap-5 group"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FFC107] transition-transform duration-300 group-hover:scale-150" />
                                <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-[#FFC107] transition-colors">
                                    {point}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Action Area */}
                    <motion.div variants={itemVariants} className="pt-8 flex flex-col sm:flex-row items-center gap-10">
                        <Link
                            to="/contact?service=hiring"
                            className="group relative bg-primary text-white px-10 py-5 overflow-hidden transition-all hover:-translate-y-1 text-center min-w-[200px]"
                        >
                            <span className="absolute inset-0 bg-[#FFC107] transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
                            <span className="relative z-10 font-bold text-[11px] uppercase tracking-[0.3em] group-hover:text-primary transition-colors duration-300">
                                Scale Your Team
                            </span>
                        </Link>

                        <div className="flex flex-col border-l border-slate-200 pl-8">
                            <span className="text-slate-400 font-black text-[9px] uppercase tracking-[0.4em] mb-1">
                                Availability
                            </span>
                            <span className="text-primary font-black text-xs uppercase tracking-tighter">
                                Start Within 48h
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HiringSection;
