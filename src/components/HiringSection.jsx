import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Placeholder high-end tech team image
const hiringImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070";

const HiringSection = () => {
    const bulletPoints = [
        "Pre-vetted candidates",
        "Fast onboarding",
        "Flexible hiring models"
    ];

    return (
        <section className="bg-primary py-[80px] overflow-hidden font-outfit relative">
            {/* Subtle background texture for light mode */}
            <div className="absolute inset-0 dot-grid opacity-[0.02] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-[60px]">
                    
                    {/* Left Side: Image/Illustration */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-white/5">
                            <img 
                                src={hiringImg} 
                                alt="Hiring Top IT Talent" 
                                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-[2s] opacity-80"
                            />
                        </div>
                        
                        {/* Decorative background element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left order-1 lg:order-2"
                    >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/5 border border-accent/10 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">
                                Available within 48 hours
                            </span>
                        </div>

                        <h2 className="text-4xl font-black text-white leading-tight tracking-tighter uppercase">
                            Hire Top IT <span className="text-accent">Talent</span> Quickly
                        </h2>

                        <p className="text-text-secondary text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-dm-sans">
                            Build your team with skilled, pre-vetted professionals ready to deliver from day one.
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-4 pt-2">
                            {bulletPoints.map((point, index) => (
                                <div key={index} className="flex items-center gap-4 justify-center lg:justify-start group">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 transition-all group-hover:bg-accent ring-2 ring-accent/0 group-hover:ring-accent/20">
                                        <Check size={14} className="text-accent group-hover:text-primary transition-colors" />
                                    </div>
                                    <span className="text-white font-bold tracking-tight group-hover:text-accent transition-colors">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <Link 
                                to="/contact?service=hiring"
                                className="inline-flex items-center gap-3 bg-accent text-primary px-10 py-[16px] rounded-lg font-black text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-accent/40 group"
                            >
                                Hire Developers Now
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HiringSection;
