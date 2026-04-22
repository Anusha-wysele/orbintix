import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, BarChart3, Briefcase } from 'lucide-react';

const features = [
    {
        title: "Strategic, Data-Driven Solutions",
        description: "We design and deliver technology solutions that drive measurable business outcomes and long-term success.",
        Icon: Lightbulb
    },
    {
        title: "Client-Focused Partnerships",
        description: "We build strong, long-term relationships focused on sustainable growth and continuous value delivery.",
        Icon: Users
    },
    {
        title: "Proven Results & Real Impact",
        description: "Our solutions improve efficiency, scalability, and overall business performance across industries.",
        Icon: BarChart3
    },
    {
        title: "Technology & Talent Expertise",
        description: "We combine development expertise with US IT staffing to deliver complete, end-to-end business solutions.",
        Icon: Briefcase
    }
];

const WhoWeAre = () => {
    return (
        <section className="py-10 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left Content Column */}
                    <div className="w-full lg:w-[45%] space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10"
                        >
                            <span className="text-accent text-xs font-black uppercase tracking-widest">
                                Who We Are
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter uppercase font-outfit"
                        >
                            Driving Innovation Through <br />
                            <span className="text-accent">Technology & Talent</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-text-secondary text-lg leading-relaxed font-dm-sans">
                                We are a technology-driven IT consulting and staffing company helping businesses scale through innovative digital solutions and top-tier talent.
                            </p>
                            <p className="text-white/70 text-base leading-relaxed font-dm-sans">
                                With expertise in web development, product engineering, and US-focused IT recruitment, we empower organizations to streamline operations, accelerate growth, and achieve measurable results.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Card Grid Column */}
                    <div className="w-full lg:w-[55%]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ 
                                        y: -6,
                                    }}
                                    className="relative group p-8 rounded-2xl bg-secondary transition-all duration-300 shadow-2xl overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-accent/5 before:scale-x-0 before:origin-center before:transition-transform before:duration-700 before:ease-in-out hover:before:scale-x-100 border border-white/5"
                                >
                                    {/* Abstract Teal Glow on Hover */}
                                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#1ABC9C] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity z-0" />

                                    {/* Content Wrapper to keep above pseudo-element */}
                                    <div className="relative z-10">
                                        {/* Icon Container (Solid Background for contrast) */}
                                        <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-8 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-accent border border-white/5">
                                            <feature.Icon className="text-accent group-hover:text-primary w-7 h-7" />
                                        </div>

                                        <h3 className="text-white font-black text-xl mb-4 leading-tight group-hover:text-accent transition-colors font-outfit uppercase">
                                            {feature.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed font-dm-sans">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
