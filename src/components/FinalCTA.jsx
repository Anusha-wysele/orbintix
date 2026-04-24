import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="bg-white relative w-full py-24 overflow-hidden border-t border-primary ">

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Content Section */}
                    <div className="flex-1 space-y-4 text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-normal text-primary uppercase tracking-tighter"
                        >
                            Get the <span className="text-[#FFC107] font-bold">Countsy</span> advantage
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-300 text-sm md:text-base max-w-2xl font-light leading-relaxed font-dm-sans"
                        >
                            Our power of choice is untrammelled and when nothing prevents being able to <br className="hidden lg:block" />
                            do what we like best every pleasure.
                        </motion.p>
                    </div>

                    {/* Button Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-shrink-0"
                    >
                        <Link
                            to="/contact"
                            className="relative group inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-lg border border-white/10 font-bold text-xs uppercase tracking-[0.3em] overflow-hidden transition-all duration-300 shadow-2xl"
                        >
                            {/* Slide-up background */}
                            <span className="absolute inset-0 bg-[#FFC107] transition-transform duration-500 translate-y-full group-hover:translate-y-0" />

                            {/* Dynamic Content */}
                            <span className="relative z-10 flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                                Get In Touch
                                <ArrowRight size={18} />
                            </span>
                        </Link>
                    </motion.div>

                </div>
            </div>

            {/* Bottom Waves */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-0 overflow-hidden h-24 ">
                <motion.svg
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 w-[200%] h-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#FFC107"

                        d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,208C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </motion.svg>

                <motion.svg
                    initial={{ x: 0 }}
                    animate={{ x: -100 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 w-[200%] h-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#000000"

                        d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </motion.svg>
            </div>
        </section>
    );
};

export default FinalCTA;

