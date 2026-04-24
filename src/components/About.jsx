import React, { useState } from 'react';

import { ChevronRight } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';



const accordionData = [

    {

        id: "01",

        title: "Who we are!",

        content: "Orbintix is a premier Consulting - Technology - Outsourcing powerhouse. Our core expertise spans SAP integration, high-performance Web and Mobility Solutions, GenAI implementation, and innovative product development."

    },

    {

        id: "02",

        title: "Our vision",

        content: "To lead the global digital frontier by architecting intelligent ecosystems that redefine industry standards and empower enterprises with sustainable, technology-driven growth."

    },

    {

        id: "03",

        title: "Our mission",

        content: "To deliver transformative excellence through strategic consulting and elite talent recruitment, bridging the gap between today's challenges and tomorrow's possibilities."

    }

];



export default function AboutUs() {

    const [openIndex, setOpenIndex] = useState(0);



    return (

        <section className="relative w-full py-24 bg-primary overflow-hidden">

            {/* Background Decorative Elements */}

            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />



            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch min-h-[550px]" data-aos="fade-up">



                    {/* Left Column: Text & Accordion */}

                    <div className="w-full lg:w-[50%] flex flex-col justify-center space-y-10 relative z-10">

                        {/* Headline */}

                        <motion.div

                            initial={{ opacity: 0, x: -30 }}

                            whileInView={{ opacity: 1, x: 0 }}

                            viewport={{ once: true }}

                            transition={{ duration: 0.8, ease: "easeOut" }}

                        >

                            <h2 style={{ fontWeight: 100 }} className="text-2xl lg:text-3xl leading-snug text-whitet tracking-tight max-w-xl">

                                <span className="text-accent italic ">Growth thrives</span> on bold ideas, <br />

                                <span className="font-light">efficient execution</span>, and focused simplicity.

                                <p className="mt-3 text-lg text-text-secondary font-lightleading-relaxed">

                                    Innovation sparks progress, automation amplifies impact, and simplification clears the path to success.

                                </p>

                            </h2>

                        </motion.div>



                        {/* Accordion */}

                        <div className="space-y-0 border-t border-white/10 w-full max-w-xl">

                            {accordionData.map((item, index) => {

                                const isOpen = openIndex === index;

                                return (

                                    <div key={item.id} className="border-b border-white/10 overflow-hidden">

                                        <button

                                            onClick={() => setOpenIndex(isOpen ? -1 : index)}

                                            className="w-full flex items-center justify-between py-5 text-left group transition-all duration-300"

                                        >

                                            <div className="flex items-center gap-6">

                                                <span className={`text-xs font-bold font-dm-sans transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-slate-500'}`}>

                                                    {item.id}

                                                </span>

                                                <h3 style={{ fontWeight: 100 }} className={`text-lg lg:text-xl  font-outfit transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-400 group-hover:text-white/70'}`}>

                                                    {item.title}

                                                </h3>

                                            </div>

                                            <motion.div

                                                animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.2 : 1 }}

                                                className={isOpen ? 'text-accent' : 'text-slate-500'}

                                            >

                                                <ChevronRight size={18} />

                                            </motion.div>

                                        </button>



                                        <AnimatePresence>

                                            {isOpen && (

                                                <motion.div

                                                    initial={{ height: 0, opacity: 0 }}

                                                    animate={{ height: "auto", opacity: 1 }}

                                                    exit={{ height: 0, opacity: 0 }}

                                                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}

                                                >

                                                    <div className="pb-6 pl-10 pr-4">

                                                        <p className="text-slate-400 text-sm leading-relaxed font-dm-sans">

                                                            {item.content}

                                                        </p>

                                                    </div>

                                                </motion.div>

                                            )}

                                        </AnimatePresence>

                                    </div>

                                );

                            })}

                        </div>

                    </div>



                    {/* Right Column: High-End Image */}

                    <div className="w-full lg:w-[50%] flex" data-aos="fade-left">

                        <motion.div

                            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}

                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}

                            viewport={{ once: true }}

                            transition={{ duration: 1.2, ease: "easeOut" }}

                            className="relative w-full h-full min-h-[400px] group overflow-hidden border border-white/5 shadow-2xl group"

                        >

                            <img

                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"

                                alt="Orbintix Strategic Collaboration"

                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"

                            />



                            <div className='absolute -right-10 top-10 w-full h-full border-4 border-yellow-400 group-hover:right-0 group-hover:top-0 transition-all duration-500'></div>



                            {/* Premium Overlay Shape */}

                            <div className="absolute inset-0 pointer-events-none">

                                <svg

                                    viewBox="0 0 500 700"

                                    className="w-full h-full opacity-20 text-accent"

                                    fill="none"

                                    xmlns="http://www.w3.org/2000/svg"

                                >

                                    <motion.path

                                        d="M400 50L450 100V250"

                                        stroke="currentColor"

                                        strokeWidth="20"

                                        strokeLinecap="round"

                                        initial={{ pathLength: 0 }}

                                        whileInView={{ pathLength: 1 }}

                                        transition={{ duration: 2, delay: 0.5 }}

                                    />

                                    <motion.path

                                        d="M100 650L50 600V450"

                                        stroke="currentColor"

                                        strokeWidth="10"

                                        strokeLinecap="round"

                                        initial={{ pathLength: 0 }}

                                        whileInView={{ pathLength: 1 }}

                                        transition={{ duration: 2, delay: 1 }}

                                    />

                                </svg>

                            </div>



                            {/* Gradient Fade Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />



                            {/* Floating Stats or Element */}

                            <motion.div

                                initial={{ opacity: 0, y: 20 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                transition={{ delay: 1.2 }}

                                className="absolute bottom-8 left-8 flex items-center gap-4 bg-black border border-white/10 p-3"

                            >

                                <div className="w-1.5 h-10 bg-accent " />

                                <div className="flex flex-col">

                                    <span className="text-white font-bold text-lg tracking-tight">Innovation Hub</span>

                                    <span className="text-slate-400 text-[10px] uppercase tracking-widest font-black">Digital Excellence</span>

                                </div>

                            </motion.div>

                        </motion.div>

                    </div>



                </div>

            </div>

        </section>

    );

}



