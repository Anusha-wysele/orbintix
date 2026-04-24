import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Coffee, Globe, Shield, Smile, Watch } from "lucide-react";

const perks = [
  { icon: <Shield size={20} />, title: "Health & Wellness", desc: "Premium medical, dental, and vision insurance for you and your family." },
  { icon: <Watch size={20} />, title: "Flexible Work", desc: "Work from anywhere or from our modern offices. We value output over hours." },
  { icon: <BookOpen size={20} />, title: "Learning Fund", desc: "Annual budget for courses, conferences, and books to help you grow." },
  { icon: <Globe size={20} />, title: "Truly Global", desc: "Collaborate with talented individuals from over 30 countries." },
  { icon: <Coffee size={20} />, title: "Office Perks", desc: "Free snacks, lunches, and high-end equipment at our physical hubs." },
  { icon: <Smile size={20} />, title: "Parental Leave", desc: "Generous paid leave for new parents to bond with their little ones." }
];

export default function BenefitsSection() {
  return (
    <section className="py-32 px-6 bg-white border-y border-primary/5 font-outfit relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4 block">Perks & Benefits</span>
            <h3 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-8 uppercase leading-[0.85]">Invested In Your <span className="text-accent italic">Success</span></h3>
            <p className="text-primary/50 text-lg mb-12 leading-relaxed font-medium font-dm-sans uppercase tracking-widest text-[11px]">
              We offer a comprehensive benefits package designed to support your physical, mental, and professional well-being in a high-performance environment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {perks.map((perk, idx) => (
                <motion.div 
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-accent transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm group-hover:bg-accent group-hover:text-primary">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="text-primary font-black tracking-tight group-hover:text-accent transition-colors uppercase text-sm mb-2">{perk.title}</h4>
                    <p className="text-primary/40 text-[11px] leading-relaxed font-bold uppercase tracking-wide">{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-[3rem] border-8 border-primary/5 aspect-square shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?w=1000&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                {/* Floating Badge */}
                <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-primary/5">
                   <p className="text-[8px] font-black text-accent uppercase tracking-widest mb-1">Elite Squad</p>
                   <p className="text-primary font-black text-xl uppercase tracking-tighter leading-none">JOIN THE<br/>REVOLUTION</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

