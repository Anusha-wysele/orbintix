import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// Assets
import aboutImg from "../assets/about.jpg";

const AboutHero = () => {
    return (
        <section className="relative pt-12 pb-8 lg:pt-16 lg:pb-12 overflow-hidden bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left Side: Animated Image Section */}
                    <div className="relative w-full lg:w-1/2">
                        {/* Decorative Quarter Circle Overlay */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-bl-full z-20 pointer-events-none opacity-20"
                        />
                        
                        {/* Geometric Frame Border */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/30 z-0"
                        />

                        {/* Main Image with Slide Animation */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-accent/5"
                        >
                            <img 
                                src={aboutImg} 
                                alt="Consulting Team" 
                                className="w-[500px] h-[500px] object-cover rounded-2xl opacity-80"
                            />
                        </motion.div>
                    </div>

                    {/* Right Side: Animated Content Section */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full"
                        >
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-accent text-xs font-black uppercase tracking-widest">
                                About Company
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter uppercase font-outfit"
                        >
                            Your Partner in <span className="text-accent">Corporate Strategy</span> Achievement
                        </motion.h1>

                        <motion.p
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-text-secondary text-lg leading-relaxed max-w-xl font-dm-sans"
                        >
                            We specialize in empowering businesses to achieve their long-term goals through tailored corporate strategies with decades of experience, our team of seasoned consultants is dedicated to help companies navigate complex business landscapes.
                        </motion.p>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Experienced Consultants", desc: "We bring a wealth of knowledge and a fresh perspective to each project." },
                                { title: "Commitment Success", desc: "We are committed to fostering long-term relationships with our clients." }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: -30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="space-y-3 p-4 bg-secondary/50 border border-white/5 rounded-2xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                            <CheckCircle2 size={14} className="text-primary" />
                                        </div>
                                        <span className="text-white font-bold text-base tracking-tight font-outfit uppercase">
                                            {feature.title}
                                        </span>
                                    </div>
                                    <p className="text-text-secondary text-sm pl-9 font-dm-sans">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutHero;
