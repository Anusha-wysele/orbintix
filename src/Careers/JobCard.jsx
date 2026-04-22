import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ChevronRight, BriefcaseBusiness } from "lucide-react";

export default function JobCard({ job, view, onApply }) {
  const isGrid = view === "grid";

  if (isGrid) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="relative group h-full"
      >
        {/* Glow implementation */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
        
        <div className="relative h-full bg-secondary/50 border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl p-8 rounded-3xl flex flex-col transition-all duration-500 group-hover:bg-secondary group-hover:border-accent/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden font-outfit">
          {/* Decorative shine */}
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[100%]" />

          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,191,255,0.3)] transform group-hover:rotate-6 transition-transform">
              <BriefcaseBusiness size={28} />
            </div>
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-text-secondary group-hover:text-accent transition-colors">
                {job.type}
              </span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors leading-tight uppercase">
            {job.title}
          </h3>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <MapPin size={14} className="text-accent" />
              <span className="text-[11px] text-text-secondary font-bold uppercase tracking-wider">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <Clock size={14} className="text-text-secondary" />
              <span className="text-[11px] text-text-secondary font-bold">{job.level}</span>
            </div>
          </div>

          <p className="text-text-secondary text-sm mb-10 line-clamp-3 leading-relaxed font-medium font-dm-sans">
            {job.description}
          </p>

          <div className="mt-auto">
            <button
              onClick={() => onApply(job)}
              className="w-full relative py-4 bg-primary border border-white/10 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl overflow-hidden transition-all duration-300 group/btn hover:border-accent"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-primary transition-colors">
                APPLY PROFILE
                <ChevronRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="relative group"
    >
      <div className="relative bg-secondary/50 border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all duration-500 hover:bg-secondary hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] font-outfit" >
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-4 mb-4">
             <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors tracking-tight uppercase">{job.title}</h3>
             <span className="text-[10px] font-black uppercase px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full tracking-widest">
               {job.type}
             </span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
             <div className="flex items-center gap-2.5 text-xs text-text-secondary font-bold uppercase tracking-widest">
               <MapPin size={16} className="text-accent" /> {job.location}
             </div>
             <div className="flex items-center gap-2.5 text-xs text-text-secondary font-bold uppercase tracking-widest">
               <Briefcase size={16} className="text-accent" /> {job.category}
             </div>
             <div className="flex items-center gap-2.5 text-xs text-text-secondary font-bold uppercase tracking-widest">
               <Clock size={16} className="text-accent" /> {job.level}
             </div>
          </div>
          <p className="text-text-secondary text-sm max-w-4xl line-clamp-2 leading-relaxed font-medium font-dm-sans">{job.description}</p>
        </div>

        <div className="flex-shrink-0">
          <button
            onClick={() => onApply(job)}
            className="px-10 py-4 bg-accent text-primary font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(0,191,255,0.3)] transition-all duration-300"
          >
            JOIN SQUAD
          </button>
        </div>
      </div>
    </motion.div>
  );
}
