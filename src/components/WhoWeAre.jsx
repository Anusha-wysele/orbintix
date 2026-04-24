import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react';

const WhoWeAre = () => {
    const navigate = useNavigate();

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* 1. Left Content Column */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        {/* Tagline */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            <span className="text-[#FFC107] text-sm font-semibold uppercase tracking-[0.4em] relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-[2px] before:bg-[#FFC107]">
                                We Are
                            </span>
                            <h2 style={{ fontWeight: 200 }} className="text-4xl lg:text-5xl font-outfit font-light text-slate-900 leading-tight tracking-tighter uppercase">
                                Leaders in {" "}
                                <span className="text-[#FFC107]">Digital Transformation</span>
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-600/90 text-lg leading-relaxed max-w-xl font-light"
                        >
                            We are a technology-driven IT consulting and staffing powerhouse helping businesses scale through innovative digital ecosystems and top-tier expert talent. Our mission is to architect high-performance solutions that grow as you do.
                        </motion.p>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                            {[
                                { title: "Tailored Advice & Support", icon: Lightbulb, desc: "Bespoke strategies for unique goals." },
                                { title: "Scalable Tech Policies", icon: ShieldCheck, desc: "Future-proof infrastructure & code." }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 w-10 h-10 bg-slate-50 flex items-center justify-center border border-slate-100 text-[#FFC107]">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 style={{ fontWeight: 300 }} className="text-slate-900 font-normal text-sm uppercase tracking-wider">{feature.title}</h4>
                                        <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Right Visual Composition Column */}
                    <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[550px]">
                        {/* Main Portrait Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="absolute left-0 top-0 w-[80%] h-[85%] overflow-hidden border border-slate-100"
                        >
                            <img
                                src="https://images.pexels.com/photos/12903173/pexels-photo-12903173.jpeg"
                                alt="Professional Consultant"
                                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
                            />
                        </motion.div>

                        {/* Overlapping Tech Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, y: 40 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="absolute right-0 bottom-0 w-[60%] h-[55%] overflow-hidden z-20"
                        >
                            <img
                                src="https://images.pexels.com/photos/36765612/pexels-photo-36765612.jpeg"
                                alt="Digital Transformation"
                                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                            />
                            {/* Play Button Overlay (Acts as Link to Contact) */}
                            <div
                                onClick={() => navigate('/contact')}
                                className="absolute inset-0 flex items-center justify-center bg-black/10 group cursor-pointer"
                            >
                                <div className="w-14 h-14 bg-[#FFC107] flex items-center justify-center transition-transform duration-500 group-hover:scale-125">
                                    <ArrowRight size={20} className="text-black rotate-[-45deg]" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Highlight Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute left-[5%] bottom-[5%] z-30 p-8 bg-[#FFC107] text-black space-y-4 max-w-[280px]"
                        >
                            <div className="flex gap-2">
                                <div className="w-2 h-2 bg-black/20" />
                                <div className="w-12 h-2 bg-black" />
                            </div>
                            <h3 className="text-xl font-medium font-outfit leading-tight uppercase">
                                Making What’s Possible in Technology
                            </h3>
                            <div className="pt-2 flex items-center gap-3 border-t border-black/10">
                                <div className="w-8 h-[2px] bg-black" />
                                <span className="text-[10px] font-normal uppercase tracking-widest">Innovation Core</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
;

export default WhoWeAre;
