import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "Salesforce", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg" },
  { name: "AWS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
  { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
];

const TechStack = () => {
  return (
    <section className="py-10 px-4 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Lifestyle Image with Yellow Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Corner Frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-8 border-l-8 border-[#FFC107] z-10" />
            
            <div className="relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                alt="Modern Technology Lab" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </motion.div>

          {/* Right Column: Content and Sliding Marquee */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-[#FFC107]" />
              <span className="text-primary/50 font-black text-[0.65rem] uppercase tracking-[0.3em]">
                Innovation Engine
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl text-primary tracking-tighter uppercase mb-8"
              style={{ fontWeight: 100, fontFamily: 'Outfit, sans-serif' }}
            >
              Building with <span className="text-[#FFC107]">Modern </span> <br />
              Technologies
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-sm leading-relaxed font-light mb-12 max-w-xl"
            >
              We leverage an enterprise-grade technology stack to deliver 
              scalable, high-performance solutions that power the future of 
              business operations and user experiences.
            </motion.p>

            {/* Double Row Sliding Marquee */}
            <div className="space-y-6">
              {/* Row 1: Left Moving */}
              <div className="relative overflow-hidden whitespace-nowrap py-2 border-y border-slate-100">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  className="flex items-center gap-6"
                >
                  {[...technologies, ...technologies].map((tech, idx) => (
                    <div key={idx} className="flex-shrink-0 w-24 h-24 bg-white border border-slate-100 flex items-center justify-center p-6 group hover:border-[#FFC107] transition-all duration-300">
                      <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain transition-all" />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 2: Right Moving */}
              <div className="relative overflow-hidden whitespace-nowrap py-2 border-b border-slate-100">
                <motion.div 
                  animate={{ x: [-1000, 0] }}
                  transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                  className="flex items-center gap-6"
                >
                  {[...technologies, ...technologies].reverse().map((tech, idx) => (
                    <div key={idx} className="flex-shrink-0 w-24 h-24 bg-white border border-slate-100 flex items-center justify-center p-6 group hover:border-[#FFC107] transition-all duration-300">
                      <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain transition-all" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
