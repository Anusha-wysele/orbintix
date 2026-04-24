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
        <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
            </div>

            <div className="absolute top-10 right-10 border-4 p-32 border-accent text-white font-black text-6xl opacity-20 pointer-events-none select-none">CAREERS</div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[2px] w-12 bg-accent" />
                        <span className="text-accent font-black text-[0.7rem] uppercase tracking-[0.5em]">
                            Global Talent Framework
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-7xl text-white tracking-tighter uppercase leading-[0.85] mb-8 font-black">
                        SHAPING THE <br />
                        <span className="text-accent italic">NEXT GENERATION.</span>
                    </h1>

                    <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-medium mb-12 border-l-4 border-accent pl-8">
                        We don't just build software. We engineer the digital nervous systems of the world's most ambitious enterprises. Join our elite squad.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <button
                            onClick={scrollToPositions}
                            className="group relative px-12 py-6 bg-accent text-primary font-black uppercase text-[11px] tracking-[0.4em] rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                        >
                            <span className="relative z-10">EXPLORE OPENINGS</span>
                            <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                            <span className="absolute inset-0 flex items-center justify-center text-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 z-20 font-black">
                                EXPLORE OPENINGS
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Element */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -right-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none hidden xl:block"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent/20 rounded-full blur-sm" />
            </motion.div>
        </section>

    );
}
