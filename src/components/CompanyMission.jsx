import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

// Assets
import missionImg from "../assets/offshore.jpg";

const missionPoints = [
    {
        id: "01.",
        title: "Scalable Digital Solutions",
        description: "We design and build high-performance applications that grow with your business."
    },
    {
        id: "02.",
        title: "Strategic IT Staffing",
        description: "We connect companies with top-tier talent across the US to accelerate delivery and innovation."
    },
    {
        id: "03.",
        title: "End-to-End Technology Partnership",
        description: "We support businesses from idea to deployment with reliable, scalable, and future-ready solutions.",
    }
];

const CompanyMission = () => {
    const missionPoints = [
        {
            id: "01.",
            title: "Scalable Digital Solutions",
            description: "We design and build high-performance applications that grow with your business, ensuring technical debt is minimized while scalability is maximized."
        },
        {
            id: "02.",
            title: "Strategic IT Staffing",
            description: "We connect companies with top-tier talent across the US to accelerate delivery, innovation, and long-term project success."
        },
        {
            id: "03.",
            title: "End-to-End Technology Partnership",
            description: "We support businesses from original concept to final deployment with reliable, scalable, and future-ready solutions."
        }
    ];

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-start">

                    {/* Left Column: Mission Content */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-[#FFC107] text-sm font-normal uppercase tracking-[0.4em] relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-[2px] before:bg-[#FFC107]">
                                    Company Mission
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                style={{ fontWeight: 100 }}
                                className="text-4xl lg:text-5xl font-outfit font-extralight text-slate-900 leading-tight tracking-tighter uppercase"
                            >
                                Helping Fast-moving Innovators <br />
                                <span className="text-[#FFC107] font-normal">Scale</span> With Business Purpose
                            </motion.h2>
                        </div>

                        {/* Mission Points List */}
                        <div className="space-y-10">
                            {missionPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-start gap-8 border-l border-slate-100 pl-8 relative"
                                >
                                    <span className="text-[#FFC107] font-medium text-lg leading-none pt-1">
                                        {point.id}
                                    </span>
                                    <div className="space-y-3">
                                        <h3 style={{ fontWeight: 100 }} className=" text-xl text-slate-900 border-b border-slate-300 pb-2 uppercase tracking-tight">
                                            {point.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-lg font-light">
                                            {point.description}
                                        </p>
                                    </div>
                                    {/* Hover Accent Bar */}
                                    <div className="absolute left-[-1px] top-0 w-[2px] h-0 bg-[#FFC107] transition-all duration-500 group-hover:h-full" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sharp Imagery */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative border border-slate-100"
                        >
                            <img
                                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                                alt="Company Strategy Team"
                                className="w-full h-[500px] lg:h-[650px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Minimalism Decor: Simple Border Offset */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#FFC107]/20 -z-10" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompanyMission;
