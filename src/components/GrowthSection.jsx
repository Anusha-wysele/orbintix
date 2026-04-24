import { motion } from "framer-motion";
import growthImg from "../assets/growth.png"

export default function GrowthSection() {
    const keyItems = [
        "Scalable cloud & enterprise solutions",
        "Custom software tailored to your business",
        "AI-driven automation for efficiency",
        "24/7 support & continuous optimization",
    ];

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    return (
        <section className="bg-white px-6 md:px-16 overflow-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className=" bg-[#FFC107]  p-8 rounded-sm relative"
            >
                {/* Decorative background elements inside the box */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

                <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-center relative z-10">

                    {/* COLUMN 1: HEADING */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-12 bg-primary" />
                            <span className="text-primary font-black text-[0.65rem] uppercase tracking-[0.4em]">
                                Growth Velocity
                            </span>
                        </div>
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl text-primary tracking-tighter uppercase leading-[0.95] mb-8"
                            style={{ fontWeight: 100, fontFamily: 'Outfit, sans-serif' }}
                        >
                            Scale <br />
                            <span className="font-black">Without</span> <br />
                            Limits
                        </h2>
                        <p className="text-primary/70 text-sm leading-relaxed font-medium max-w-sm">
                            We accelerate your digital roadmap with high-performance engineering
                            and strategic talent integration.
                        </p>
                    </motion.div>

                    {/* COLUMN 2: KEY ITEMS */}
                    <motion.div variants={itemVariants} className="p-10 ">
                        <div className="space-y-3">
                            {keyItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center gap-6 group cursor-default border-b pb-4 border-primary"
                                >
                                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full group-hover:scale-[2.5] transition-transform duration-500" />
                                    <p className="text-primary text-[11px] font-black uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* COLUMN 3: IMAGE */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        {/* <div className="absolute -inset-4 border-2 border-primary/20 rounded-[2rem] -rotate-3 transition-transform duration-700 group-hover:rotate-0" /> */}

                        <motion.div
                            whileHover={{ scale: 1.02, rotate: 2 }}
                            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                            className="relative overflow-hidden rounded-[1.5rem]  "
                        >
                            <img
                                src={growthImg}
                                alt="Scale"
                                className="w-full h-full object-cover transition-opacity duration-700"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

