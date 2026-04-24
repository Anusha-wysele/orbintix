import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Assets
import itImg from "../assets/it.jpg";
import appImg from "../assets/application.jpg";
import daasImg from "../assets/daas.jpg";
import offshoreImg from "../assets/offshore.jpg";

const caseStudies = [
    {
        title: "Healthcare Platform Optimization",
        category: "Software Engineering",
        result: "+65% Performance Boost",
        path: "/case-studies/healthcare",
        image: offshoreImg
    },
    {
        title: "E-commerce Scalability Upgrade",
        category: "Cloud Architecture",
        result: "3x Traffic Capacity",
        path: "/case-studies/ecommerce",
        image: appImg
    },
    {
        title: "Fintech Cloud Migration",
        category: "Financial Technology",
        result: "40% Cost Reduction",
        path: "/case-studies/fintech",
        image: daasImg
    },
    {
        title: "IT Staffing for US Startup",
        category: "Talent Acquisition",
        result: "Rapid Team Scaling",
        path: "/case-studies/staffing",
        image: itImg
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1]
        }
    }
};

export default function CaseStudies() {
    const navigate = useNavigate();

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-100" />

            <div className="w-full mx-auto px-6 lg:px-16">
                {/* Section Header - Matching Services Style */}
                <div className="flex flex-col mb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="h-[2px] w-12 bg-[#FFC107]" />
                        <span className="text-primary font-black text-[0.65rem] uppercase tracking-[0.3em]">
                            Case Studies
                        </span>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl text-primary tracking-tighter uppercase max-w-2xl"
                            style={{ fontWeight: 100, fontFamily: 'Outfit, sans-serif' }}
                        >
                            Proven Results <br />
                            For Global <span className="text-[#FFC107]">Enterprises</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 max-w-md text-sm leading-relaxed font-light mb-2"
                        >
                            Explore how we help industry leaders navigate digital complexity
                            through strategic engineering and measurable performance upgrades.
                        </motion.p>
                    </div>
                </div>

                {/* Grid Layout - 4 Columns */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-100 border border-slate-100 overflow-hidden"
                >
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            onClick={() => navigate(study.path)}
                            className="group relative h-[350px] bg-primary cursor-pointer overflow-hidden"
                        >
                            {/* Static Image with increased default visibility */}
                            <img
                                src={study.image}
                                alt={study.title}
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />

                            {/* Constant Dark Gradient Overlay for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90 group-hover:opacity-0 transition-opacity duration-500" />

                            {/* Default Content Overlay */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end z-20 group-hover:opacity-0 transition-opacity duration-500">
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + (index * 0.1) }}
                                    className="text-[#FFC107] text-[10px] font-bold uppercase tracking-widest mb-3"
                                >
                                    {study.category}
                                </motion.span>
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + (index * 0.1) }}
                                    style={{ fontWeight: 200 }}
                                    className="text-2xl text-white leading-tight tracking-tight mb-4 uppercase"
                                >
                                    {study.title}
                                </motion.h3>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.8 + (index * 0.1) }}
                                    className="text-slate-400 font-bold text-[10px] uppercase tracking-widest"
                                >
                                    {study.result}
                                </motion.div>
                            </div>

                            {/* Hover State: Full Color & Premium Detail */}
                            <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 p-10 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-[#FFC107] group-hover:rotate-45 transition-transform duration-500">
                                        <ArrowUpRight size={18} />
                                    </div>
                                    <span className="text-white/40 text-4xl font-light italic">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-[#FFC107] text-[10px] font-black uppercase tracking-[0.2em] mb-4 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        Impact Recorded
                                    </span>
                                    <h3 style={{ fontWeight: 100 }} className="text-3xl text-white tracking-tighter uppercase mb-6 leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                        {study.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-white font-bold text-[10px] uppercase tracking-[0.3em] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                                        Explore Strategy
                                        <div className="w-12 h-[1px] bg-[#FFC107] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Border Accent */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFC107] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-40" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 text-center"
                >
                    <button
                        onClick={() => navigate('/case-studies')}
                        className="group relative inline-flex items-center gap-6 bg-primary text-white px-12 py-6 overflow-hidden"
                    >
                        <span className="relative z-10 font-bold uppercase tracking-[0.2em] text-[11px]">View More Insights</span>
                        <ArrowUpRight size={18} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-[#FFC107] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </motion.div>
            </div>
        </section>

    );
}

