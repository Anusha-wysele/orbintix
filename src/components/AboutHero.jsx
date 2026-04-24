import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// Assets
import aboutImg from "../assets/about.jpg";

const AboutHero = () => {
    return (
        <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-[90vh] flex items-center justify-start overflow-hidden pt-10 border-b border-white/10">
            {/* 1. Full-Width Background Image */}
            <div className="absolute inset-0 z-0 bg-black/50">
                <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                    alt="Corporate Strategy Hero"
                    className="w-full h-full object-cover brightness-110 saturate-110 opacity-100"
                    style={{ transition: 'transform 10s linear' }}
                />
                {/* 2. Full-Image Gradient Overlay (Lighter on the right) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/10 z-10" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full h-full flex items-center">
                <div className="w-full relative py-20">
                    <div className="max-w-4xl space-y-8">

                        {/* Breadcrumbs */}
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="flex items-center gap-4"
                        >
                            <div className="h-[4px] w-8 bg-[#FFC107] rounded-full" />
                            <span className="text-[#FFC107] text-[10px] font-bold uppercase tracking-[0.5em]">About</span>
                        </motion.div>

                        {/* Headline Section */}
                        <div className="space-y-8">
                            <motion.h1
                                className="text-2xl lg:text-4xl xl:text-5xl text-white font-outfit leading-[1.2] tracking-tighter uppercase drop-shadow-xl flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]"
                                style={{ fontWeight: 100 }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.08,
                                            delayChildren: 0.3
                                        }
                                    }
                                }}
                            >
                                {["Empowering", "Businesses", "with"].map((word, i) => (
                                    <span key={i} className="inline-block whitespace-nowrap">
                                        {word.split("").map((char, j) => (
                                            <motion.span
                                                key={j}
                                                variants={{
                                                    hidden: { opacity: 0, x: -20 },
                                                    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] } }
                                                }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                                <span className="flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]">
                                    {["Scalable", "IT", "Solutions"].map((word, i) => (
                                        <span key={i} className={`inline-block whitespace-nowrap ${i === 0 ? 'text-[#FFC107] font-normal' : ''}`}>
                                            {word.split("").map((char, j) => (
                                                <motion.span
                                                    key={j}
                                                    variants={{
                                                        hidden: { opacity: 0, x: -20 },
                                                        visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] } }
                                                    }}
                                                    className="inline-block"
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    ))}
                                </span>
                            </motion.h1>

                            <motion.div
                                className="flex flex-col space-y-6 border-l-[2px] border-[#FFC107]/80 pl-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.04,
                                            delayChildren: 0.8
                                        }
                                    }
                                }}
                            >
                                <h2 className="text-white text-base md:text-lg font-light max-w-2xl leading-relaxed">
                                    {"We help startups and enterprises build, scale, and optimize digital products through expert consulting, custom development, and top-tier tech talent.".split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                                            }}
                                            className="inline-block mr-[0.25em]"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </h2>

                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0, transition: { delay: 1.5, duration: 1 } }
                                    }}
                                    className="text-white/50 text-xs font-light italic max-w-xl tracking-wide"
                                >
                                    Trusted by global clients to deliver reliable, cost-effective, and high-performance solutions.
                                </motion.p>
                            </motion.div>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.8 }}
                            className="flex flex-wrap gap-6 pt-6"
                        >
                            <button className="relative group px-8 py-4 bg-[#FFC107] text-black font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all duration-500 hover:text-white">
                                <span className="relative z-10">Start Your Project</span>
                                <div className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500 group-hover:h-full z-0" />
                            </button>

                            <button className="relative group px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all duration-500">
                                <span className="relative z-10">Hire IT Experts</span>
                                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#FFC107] transition-all duration-500 group-hover:h-full z-0" />
                                <div className="absolute inset-0 bg-transparent group-hover:text-black transition-colors duration-500" />
                            </button>
                        </motion.div>
                    </div>

                    {/* 3. Floating Consulting Box (Desktop Only) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.2, ease: [0.33, 1, 0.68, 1] }}
                        className="hidden lg:flex absolute bottom-0 right-0 w-[400px] h-[220px] bg-slate-900/80 backdrop-blur-xl border-l-4 border-[#FFC107] p-8 flex flex-col justify-center space-y-4 shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
                    >
                        <span className="text-[#FFC107] text-[10px] font-bold uppercase tracking-[0.4em]">Expert Insight</span>
                        <h3 className="text-white text-xl font-outfit font-light uppercase tracking-tight">Strategic IT Consulting</h3>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Aligning your technology roadmap with core business objectives to ensure sustainable, high-performance growth through expert architecture and leadership.
                        </p>
                        <div className="pt-2">
                            <div className="w-12 h-[1px] bg-white/20" />
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default AboutHero;
