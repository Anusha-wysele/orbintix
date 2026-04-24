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
        <div className="relative h-full bg-white border border-primary/15  p-8 rounded-sm  flex flex-col transition-all duration-500 group-hover:border-accent/30  overflow-hidden font-outfit">
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[100%]" />

          <div className="flex justify-between items-start mb-3">
            <div className="w-14 h-14 bg-accent rounded-sm flex items-center justify-center text-primary shadow-lg transform group-hover:rotate-6 transition-transform">
              <BriefcaseBusiness strokeWidth={1} size={28} />
            </div>
            <div className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40 group-hover:text-accent transition-colors">
                {job.type}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-medium text-primary mb-4 tracking-tight group-hover:text-accent transition-colors leading-tight uppercase">
            {job.title}
          </h3>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-lg border border-primary/10">
              <MapPin size={14} className="text-accent" />
              <span className="text-[11px] text-primary/60 font-black uppercase tracking-wider">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-lg border border-primary/10">
              <Clock size={14} className="text-primary/40" />
              <span className="text-[11px] text-primary/60 font-black uppercase tracking-wider">{job.level}</span>
            </div>
          </div>

          <p className="text-primary/50 text-sm mb-4 line-clamp-3 leading-relaxed font-medium font-dm-sans">
            {job.description}
          </p>

          <div className="mt-auto pt-6 border-t border-primary/5">
            <button
              onClick={() => onApply(job)}
              className="w-full relative py-4 bg-primary text-white font-black uppercase text-xs tracking-[0.2em] rounded-sm overflow-hidden transition-all duration-300 group/btn hover:bg-accent hover:text-primary shadow-xl hover:shadow-accent/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Apply Now
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
      <div className="relative bg-white border border-primary/15  p-8 rounded-sm flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 hover:border-accent/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] font-outfit" >
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h3 className="text-xl font-medium text-primary group-hover:text-accent transition-colors tracking-tight uppercase leading-none">{job.title}</h3>
            <span className="text-[10px] font-black uppercase px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full tracking-widest">
              {job.type}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-4">
            <div className="flex items-center gap-2.5 text-[10px] text-primary/40 font-black uppercase tracking-[0.2em]">
              <MapPin size={16} className="text-accent" /> {job.location}
            </div>
            <div className="flex items-center gap-2.5 text-[10px] text-primary/40 font-black uppercase tracking-[0.2em]">
              <Briefcase size={16} className="text-accent" /> {job.category}
            </div>
            <div className="flex items-center gap-2.5 text-[10px] text-primary/40 font-black uppercase tracking-[0.2em]">
              <Clock size={16} className="text-accent" /> {job.level}
            </div>
          </div>
          <p className="text-primary/50 text-sm max-w-4xl line-clamp-2 leading-relaxed font-medium font-dm-sans">{job.description}</p>
        </div>

        <div className="flex-shrink-0">
          <button
            onClick={() => onApply(job)}
            className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-[0.3em] rounded-sm hover:bg-accent hover:text-primary transition-all duration-300 shadow-xl"
          >
            Apply Now
          </button>
        </div>
      </div>
    </motion.div>
  );

}
