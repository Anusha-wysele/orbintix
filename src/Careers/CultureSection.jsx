import React from "react";
import { motion } from "framer-motion";
import { Zap, Heart, Users, Target } from "lucide-react";

const values = [
  {
    icon: <Zap size={32} className="text-accent" />,
    title: "Innovation First",
    desc: "We push the boundaries of what's possible in enterprise tech, always looking for the next breakthrough.",
    color: "bg-accent/5",
    border: "border-accent/20"
  },
  {
    icon: <Users size={32} className="text-accent" />,
    title: "Radical Collaboration",
    desc: "No silos. We work across teams, geographies, and time zones to deliver exceptional value together.",
    color: "bg-accent/5",
    border: "border-accent/20"
  },
  {
    icon: <Heart size={32} className="text-accent" />,
    title: "People Centric",
    desc: "Our strength lies in our diversity. We foster an inclusive culture where every voice is heard and valued.",
    color: "bg-accent/5",
    border: "border-accent/20"
  },
  {
    icon: <Target size={32} className="text-accent" />,
    title: "Growth Mindset",
    desc: "We invest in your development. Constant learning is part of our DNA and our career progression framework.",
    color: "bg-accent/5",
    border: "border-accent/20"
  }
];

export default function CultureSection() {
  return (
    <section className="py-32 px-6 bg-primary relative overflow-hidden font-outfit">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            Our Philosophy
          </motion.div>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6 uppercase">
            CORE VALUES
          </h3>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-medium font-dm-sans">
            The principles that define our mission and how we build the future of tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="relative group h-full"
            >
              {/* Card Background with Glassmorphism */}
              <div className="relative h-full p-10 rounded-[2.5rem] bg-secondary/50 border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] backdrop-blur-2xl flex flex-col transition-all duration-500 group-hover:bg-secondary group-hover:border-accent/20 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.3)] overflow-hidden">
                
                {/* Accent Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-accent/40`} />

                <div className="mb-10 inline-flex items-center justify-center p-5 rounded-3xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {value.icon}
                </div>

                <h4 className="text-2xl font-bold text-white mb-5 tracking-tight group-hover:text-accent transition-colors uppercase">{value.title}</h4>
                
                <p className="text-text-secondary text-sm leading-relaxed font-medium group-hover:text-white/80 transition-colors font-dm-sans">
                  {value.desc}
                </p>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-700 group-hover:via-accent/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
