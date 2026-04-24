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
    <section className="py-32 px-6 bg-white relative overflow-hidden font-outfit">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-6"
          >
            Our Philosophy
          </motion.div>
          <h3 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none mb-6 uppercase">
            CORE <span className="text-accent italic">VALUES</span>
          </h3>
          <p className="text-primary/50 text-lg md:text-xl max-w-2xl mx-auto font-medium font-dm-sans uppercase tracking-[0.1em]">
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
              <div className="relative h-full p-10 rounded-[3rem] bg-white border border-primary/5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col transition-all duration-500 group-hover:border-accent/20 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-accent opacity-0 group-hover:opacity-100 transition-all duration-500 -mr-1 -mt-1" />
                
                <div className="mb-10 inline-flex items-center justify-center p-5 rounded-3xl bg-primary/5 border border-primary/10 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-sm">
                  {React.cloneElement(value.icon, { className: "group-hover:text-primary transition-colors" })}
                </div>

                <h4 className="text-2xl font-black text-primary mb-5 tracking-tight group-hover:text-accent transition-colors uppercase leading-tight">{value.title}</h4>
                
                <p className="text-primary/60 text-sm leading-relaxed font-medium transition-colors font-dm-sans">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

