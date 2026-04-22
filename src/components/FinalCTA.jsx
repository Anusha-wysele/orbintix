import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="relative w-full py-10 bg-secondary overflow-hidden font-outfit">
            {/* Background Visual Enhancements */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Mesh Glows */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
                {/* Dot Grid */}
                <div className="absolute inset-0 dot-grid opacity-[0.03]" />
            </div>

            <div className="max-w-[900px] mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center space-y-8"
                >
                    {/* Optional Sparkle Icon */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="inline-block p-3 rounded-2xl bg-accent/5 border border-accent/20 mb-2"
                    >
                        <Zap size={24} className="text-accent" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight font-outfit tracking-tighter uppercase">
                        Ready to Transform Your Business <br />
                        with <span className="text-accent">Smart IT Solutions?</span>
                    </h2>

                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-dm-sans">
                        Whether you need expert developers, scalable software, or reliable IT consulting — we’re here to help you move faster and smarter.
                    </p>

                    {/* CTA Buttons Group */}
                    <div className="flex items-center justify-center pt-6">
                        {/* Primary Button */}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link 
                                to="/contact"
                                className="inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-lg font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-accent/40"
                            >
                                Get Free Consultation
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Trust Line */}
                    <div className="pt-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                            Trusted by startups & growing businesses
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
