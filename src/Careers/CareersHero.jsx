import React from "react";
import { motion } from "framer-motion";

export default function CareersHero() {
    const scrollToPositions = () => {
        const element = document.getElementById("open-positions");
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-primary">
            {/* Animated Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-white/80 text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                            Careers at Orbintix
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] font-outfit uppercase">
                        SHAPING THE <br />
                        <span className="text-accent">
                            NEXT GEN.
                        </span>
                    </h1>

                    <p className="text-text-secondary text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-medium leading-relaxed tracking-tight font-dm-sans">
                        We don't just build software. We engineer the digital nervous systems of the world's most ambitious enterprises. Join our elite squad.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex flex-col items-center gap-10"
                >
                    <button
                        onClick={scrollToPositions}
                        className="group relative px-10 py-5 bg-primary text-white border border-accent/30 font-black text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,191,255,0.15)]"
                    >
                        <span className="relative z-10">EXPLORE OPENINGS</span>
                        <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-full group-hover:translate-y-0" />
                        <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">EXPLORE OPENINGS</span>
                    </button>

                </motion.div>
            </div>
        </section>
    );
}
