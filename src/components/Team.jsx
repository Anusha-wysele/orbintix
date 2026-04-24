import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveUp } from 'lucide-react';

const Team = () => {
    const teamMembers = [
        {
            name: "Arnav Gillespie",
            role: "MANAGING DIRECTOR",
            image: "https://images.pexels.com/photos/10041273/pexels-photo-10041273.jpeg"
        },
        {
            name: "Edward Richardson",
            role: "TECHNICAL ARCHITECT",
            image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
        },
        {
            name: "Zak Thompson",
            role: "SENIOR PROJECT LEAD",
            image: "https://images.pexels.com/photos/29995735/pexels-photo-29995735.jpeg"
        }
    ];

    const socialIcons = [
        {
            name: 'Facebook',
            path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
            viewBox: "0 0 24 24",
            color: "#1877F2"
        },
        {
            name: 'X',
            path: "M18.901 1.153 1.034 1.545-12.062 18.149H6.839l12.062-18.15Z M4.856 1.4h3.766l1 1.5H5.856l-1-1.5Z",
            viewBox: "0 0 24 24",
            color: "#4c4646ff"
        },
        {
            name: 'YouTube',
            path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2c.46-1.72.46-5.33.46-5.33a29 29 0 00-.46-5.33z M9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
            viewBox: "0 0 24 24",
            color: "#FF0000"
        },
        {
            name: 'LinkedIn',
            path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 11-2 2 2 2 0 012-2z",
            viewBox: "0 0 24 24",
            color: "#0077B5"
        }
    ];

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Column: Narrative */}
                    <div className="w-full lg:w-[30%] space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3 text-[#FFC107]">
                                <MoveUp size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Team Members</span>
                            </div>

                            <h2 style={{ fontWeight: 100 }} className="text-3xl lg:text-4xl font-outfit text-slate-900 leading-tight tracking-tighter uppercase">
                                Elite Minds. <br />
                                <span className="text-[#FFC107] font-normal">Scalable</span> Innovation.
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-sm font-medium lg:text-base leading-relaxed font-light"
                        >
                            Meet the specialists who bridge the gap between complex technology and business success, delivering tailored strategies with architectural precision.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <button className="relative group px-10 py-5 bg-[#FFC107] text-black font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all duration-500 hover:text-white">
                                <span className="relative z-10 flex items-center gap-3">
                                    Meet Our Team <ArrowRight size={14} />
                                </span>
                                <div className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500 group-hover:h-full z-0" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Cards Grid */}
                    <div className="w-full lg:w-[70%]">
                        <div className="flex flex-row gap-4">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="group"
                                >
                                    <div className="aspect-[4/5] w-full overflow-hidden mb-6 relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Premium Black Overlay at Bottom */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                        {/* Social Icons Overlay */}
                                        <div className="absolute inset-0 flex items-end justify-center pb-8">
                                            <div className="flex gap-4">
                                                {socialIcons.map((social, i) => (
                                                    <motion.a
                                                        key={i}
                                                        href="#"
                                                        className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-[#FFC107] transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                                                        style={{ transitionDelay: `${i * 75}ms` }}
                                                    >
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox={social.viewBox}
                                                            fill="white"
                                                            stroke="currentColor"
                                                            strokeWidth={0}
                                                            className="fill-current"
                                                            dangerouslySetInnerHTML={{
                                                                __html: social.name === 'X'
                                                                    ? '<path d="M18.901 1.153 1.034 1.545-12.062 18.149H6.839l12.062-18.15Z" />'
                                                                    : `<path d="${social.path}" />`
                                                            }}
                                                        />
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Sharp Base Accent Line */}
                                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFC107] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </div>
                                    <div className="text-left space-y-1">
                                        <h4 style={{ fontWeight: 100 }} className="text-slate-900 text-lg uppercase tracking-tight">
                                            {member.name}
                                        </h4>
                                        <p className="text-[#FFC107] text-[10px] font-bold tracking-[0.25em] uppercase">
                                            {member.role}
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

export default Team;
