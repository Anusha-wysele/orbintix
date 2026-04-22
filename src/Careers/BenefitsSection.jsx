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
    <section className="py-24 px-6 bg-primary border-y border-white/5 font-outfit relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4">Perks & Benefits</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 uppercase leading-[0.9]">Invested In Your Success</h3>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed font-medium font-dm-sans">
              We offer a comprehensive benefits package designed to support your physical, mental, and professional well-being.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {perks.map((perk, idx) => (
                <motion.div 
                  key={perk.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-3 group"
                >
                  <div className="text-accent transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{perk.icon}</div>
                  <h4 className="text-white font-bold tracking-tight group-hover:text-accent transition-colors uppercase">{perk.title}</h4>
                  <p className="text-text-secondary text-xs leading-relaxed font-dm-sans">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/5 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-square lg:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?w=1000&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
