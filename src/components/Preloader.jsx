import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-primary flex items-center justify-center pointer-events-none"
        >
            <div className="relative flex flex-col items-center">
                {/* Brand Name */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center mb-10"
                >
                    <h1 className="text-white text-4xl font-black tracking-[0.25em] uppercase mb-1">
                        Orbintix
                    </h1>
                     <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 0.4 }}
                        className="text-white text-[10px] font-black uppercase tracking-[0.6em] ml-2"
                    >
                        Technologies LLC
                    </motion.span>
                </motion.div>

                {/* Navy Blue Lines Animation */}
                <div className="flex gap-2 items-end h-12">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 4, opacity: 0.2 }}
                            animate={{ 
                                height: [4, 48, 4],
                                opacity: [0.2, 1, 0.2]
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.15
                            }}
                            className="w-1.5 bg-accent rounded-full"
                        />
                    ))}
                </div>

                {/* Progress Detail */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-col items-center gap-3"
                >
                    <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            className="absolute inset-0 bg-accent"
                        />
                    </div>
                    <span className="text-text-secondary text-[9px] font-black uppercase tracking-[0.4em]">
                        Preparing Strategic Experience
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
