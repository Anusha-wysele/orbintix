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
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-100 font-lato">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4 font-roboto-condensed">Perks & Benefits</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#0B1C2C] tracking-tight mb-8 font-roboto-condensed">Invested In Your Success</h3>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
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
                  className="flex flex-col gap-3"
                >
                  <div className="text-[#D4AF37]">{perk.icon}</div>
                  <h4 className="text-[#0B1C2C] font-bold tracking-tight">{perk.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?w=1000&q=80" 
              alt="Team collaboration" 
              className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-slate-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
