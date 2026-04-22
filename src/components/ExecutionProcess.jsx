import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Business & Tech Assessment",
    description: "Comprehensive discovery to understand your unique business challenges, technical requirements, and strategic goals for optimal alignment.",
    tag: "Assessment",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "02",
    title: "Solution or Talent Mapping",
    description: "Expert architecting of the ideal technology stack or identifying high-impact candidates who perfectly fit your culture and technical needs.",
    tag: "Mapping",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "03",
    title: "Rapid Execution / Hiring",
    description: "Accelerating your time-to-market with agile development cycles or streamlining talent integration through our efficient, expert-led onboarding process.",
    tag: "Execution",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "04",
    title: "Quality & Performance Focus",
    description: "Rigorous validation and continuous monitoring to maintain the highest standards of delivery excellence and ensure peak candidate performance across all projects.",
    tag: "Quality",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

const ExecutionProcess = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-[#FFC107]" />
            <span className="text-primary/50 font-black text-[0.65rem] uppercase tracking-[0.3em]">
              Our Methodology
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-5xl text-primary tracking-tighter uppercase max-w-4xl leading-[1]"
              style={{ fontWeight: 100, fontFamily: 'Outfit, sans-serif' }}
            >
              We Build What Your <span className="text-[#FFC107]">Business Needs</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 max-w-md text-sm leading-relaxed font-light mb-2"
            >
              A systematic approach from discovery to deployment, ensuring 
              alignment with your strategic vision and operational excellence.
            </motion.p>
          </div>
        </div>

        {/* Process Grid - Using bg-slate-200 and gap-px for thin line separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 overflow-hidden">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="group relative bg-white h-auto cursor-default overflow-hidden"
            >
              {/* Image & Hover Content Reveal Area */}
              <div className="relative h-[450px] overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Large Background Step Number */}
                <span className="absolute top-8 left-8 text-white/20 text-6xl font-black italic tracking-tighter transition-all duration-500 group-hover:text-white/40 select-none">
                  {step.number}
                </span>

                {/* Hover Slide-up Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-white/95 flex flex-col justify-end p-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.33, 1, 0.68, 1] z-30">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFC107] mb-4">
                        Phase {step.number}
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed font-light mb-8">
                        {step.description}
                    </p>
                    <div className="flex items-center gap-4 text-primary font-bold text-[10px] uppercase tracking-[0.3em] cursor-pointer hover:text-[#FFC107] transition-colors group/read">
                        Read More
                        <div className="w-12 h-[1px] bg-[#FFC107] origin-left scale-x-0 group-hover/read:scale-x-100 transition-transform duration-500" />
                    </div>
                </div>

              </div>

              {/* Static Footer - Title below the card contents */}
              <div className="p-8 pb-10 bg-white border-t border-slate-50 relative z-20">
                <div className="flex items-center gap-4 mb-2">
                   <div className="w-6 h-[1px] bg-[#FFC107]" />
                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FFC107]">{step.tag}</span>
                </div>
                <h3 className="text-xl text-primary font-normal tracking-tight transition-colors duration-300 group-hover:text-[#FFC107]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutionProcess;
