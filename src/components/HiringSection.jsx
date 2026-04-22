import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Placeholder high-end tech team image
const hiringImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070";

const HiringSection = () => {
    const bulletPoints = [
        "Pre-vetted Senior Developers",
        "Rapid Onboarding (48 hours)",
        "Scalable On-Demand Talent",
        "Expert Technology Matching"
    ];

    return (
        <section className="relative w-full bg-white overflow-hidden border-t border-slate-100 flex flex-col lg:flex-row">
            
            {/* Left Column: Fixed Editorial Visual (Split Layout) */}
            <div className="w-full lg:w-1/2 bg-slate-50 relative min-h-[500px] lg:min-h-screen flex items-center justify-center p-10 lg:p-24 overflow-hidden">
                
                {/* 1. Background Decorative Pattern (SVG) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-150 rotate-90">
                        <circle cx="200" cy="200" r="150" stroke="#FFC107" strokeWidth="0.5" strokeDasharray="6 6" />
                        <circle cx="200" cy="200" r="120" stroke="#FFC107" strokeWidth="0.5" strokeDasharray="3 3" />
                        <path d="M350 200C350 282.843 282.843 350 200 350" stroke="#FFC107" strokeWidth="0.5" strokeDasharray="4 4" />
                    </svg>
                </div>

                <div className="relative w-full max-w-[520px] lg:sticky lg:top-24 z-10">
                    
                    {/* 2. Offset Yellow Frame */}
                    <div className="absolute -right-8 -top-8 w-full h-full border-4 border-[#FFC107] rounded-none z-0">
                        {/* Top-Right Dot Accent */}
                        <div className="absolute -right-2 -top-2 w-4 h-4 bg-white border-4 border-[#FFC107] rounded-full shadow-lg" />
                    </div>

                    {/* 3. Main Talent Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="relative w-full h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] rounded-3xl overflow-hidden z-10 border-[16px] border-white"
                    >
                        <img 
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                            alt="IT Talent Collaboration" 
                            className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto"
                        />
                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                    </motion.div>

                    {/* 4. Circular Overlaid Developer Shot */}
                    <motion.div
                        initial={{ opacity: 0, x: 60, rotate: 15 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="absolute -right-12 lg:-right-24 bottom-1/4 w-32 h-32 lg:w-48 lg:h-48 rounded-full border-[10px] lg:border-[16px] border-white shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] z-20 overflow-hidden"
                    >
                        <img 
                            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg" 
                            alt="Expert Developer" 
                            className="w-full h-full object-cover px-2"
                        />
                    </motion.div>

                    {/* 5. Decorative Yellow Badge */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFC107] rounded-full mix-blend-multiply opacity-15 blur-3xl z-0" />
                </div>
            </div>

            {/* Right Column: Content Area (Full Split) */}
            <div className="w-full lg:w-1/2 bg-white px-8 md:px-16 lg:px-24 py-16 lg:py-40 flex flex-col items-start justify-center relative">
                
                <div className="w-full max-w-xl mx-auto lg:mx-0 space-y-12">
                    {/* Header Part */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-[2px] w-12 bg-[#FFC107]" />
                            <span className="text-primary/50 font-black text-[0.6rem] uppercase tracking-[0.4em]">
                                Recruitment & Staffing
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-4xl xl:text-5xl text-primary tracking-tighter uppercase leading-[1.1]"
                            style={{ fontWeight: 100, fontFamily: 'Outfit, sans-serif' }}
                        >
                            Hire High-Impact <br />
                            <span className="text-[#FFC107] font-normal italic">Talent</span> Instantly
                        </motion.h2>

                        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light text-left">
                            We bridge the gap between engineering needs and top-tier expertise. Our curated pool 
                            of senior IT professionals is ready to integrate seamlessly into your project workflow 
                            within 48 hours.
                        </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 pt-4">
                        {bulletPoints.map((point, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#FFC107]/10 flex items-center justify-center text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-primary transition-all duration-300">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="text-primary font-bold text-xs uppercase tracking-wider">
                                    {point}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Action Area */}
                    <div className="pt-10 flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
                        <Link 
                            to="/contact?service=hiring"
                            className="w-full sm:w-auto bg-primary text-white px-12 py-5 font-bold text-xs tracking-[0.3em] uppercase transition-all hover:bg-[#FFC107] hover:text-primary shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 text-center"
                        >
                            Scale Your Team
                        </Link>
                        
                        <div className="flex flex-col border-l border-slate-200 pl-8">
                            <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.4em] mb-1">
                                Available Now
                            </span>
                            <span className="text-primary font-black text-xs uppercase tracking-tighter">
                                Start Within 48 Hours
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiringSection;
