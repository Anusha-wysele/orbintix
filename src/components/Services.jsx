import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2, TrendingUp, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Asset Imports
import servicesHeroImg from "../assets/innovation.png";

const stats = [
  {
    label: "Project Success",
    value: "98%",
    desc: "Achieving zero-regression delivery through automated QA and CI/CD pipelines, ensuring reliability across 150+ monthly deployments.",
    trend: [20, 35, 30, 55, 50] // Normalized to 0-60 height
  },
  {
    label: "Talent Capacity",
    value: "500+",
    desc: "Specialized guilds in Cloud Ops, AI/ML, and Cybersecurity with a proven average scaling time of under 21 days for critical projects.",
    trend: [10, 25, 45, 40, 55]
  },
  {
    label: "System Uptime",
    value: "99.9%",
    desc: "Redundant node architecture across multi-region clusters, delivering enterprise-grade resilience for tier-1 financial and retail systems.",
    trend: [50, 52, 51, 55, 58]
  },
  {
    label: "Efficiency Gain",
    value: "40%+",
    desc: "Proprietary automation frameworks and legacy modernization scripts reducing technical debt and operational overhead significantly.",
    trend: [10, 20, 35, 50, 55]
  }
];

const Services = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="bg-white overflow-hidden">
      {/* Row 1: Split Header & Chart with Dark Overlay */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border border-slate-200 overflow-hidden p-3 md:p-10"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.98, y: 20 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
              }
            }}
            className="bg-white flex flex-col group relative overflow-hidden"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8 p-10 bg-primary group-hover:bg-primary/95 transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FFC107] transition-colors">
                  <CheckCircle2 size={20} className="text-white/40 group-hover:text-[#FFC107] transition-colors" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Metric 0{index + 1}</span>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                className="text-5xl px-10 font-light text-primary mb-2 tracking-tighter transition-transform duration-500 group-hover:-translate-y-1"
              >
                {stat.value}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="text-xs px-10 font-bold uppercase tracking-widest text-[#FFC107] mb-6"
              >
                {stat.label}
              </motion.div>

              <p className="text-slate-500 px-10 text-sm leading-relaxed font-light mb-12 min-h-[60px]">
                {stat.desc}
              </p>

              {/* Fixed & Enhanced Sparkline */}
              <div className="mt-auto h-24 w-full relative">
                <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFC107" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.8 + (index * 0.1) }}
                    d={`M 0 ${60 - stat.trend[0]} L 50 ${60 - stat.trend[1]} L 100 ${60 - stat.trend[2]} L 150 ${60 - stat.trend[3]} L 200 ${60 - stat.trend[4]}`}
                    fill="none"
                    stroke="#FFC107"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 + (index * 0.1) }}
                    d={`M 0 ${60 - stat.trend[0]} L 50 ${60 - stat.trend[1]} L 100 ${60 - stat.trend[2]} L 150 ${60 - stat.trend[3]} L 200 ${60 - stat.trend[4]} L 200 60 L 0 60 Z`}
                    fill={`url(#grad-${index})`}
                  />
                </svg>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0" />
          </motion.div>
        ))}
      </motion.div>
      <div
        className="relative min-h-[600px] flex items-center py-24 md:py-32"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0, 0, 0.75)), url('https://images.pexels.com/photos/8866775/pexels-photo-8866775.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Column: Text Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-[#FFC107]" />
              <span className="text-[#FFC107] font-black text-[0.65rem] uppercase tracking-[0.3em]">
                Excellence in Service
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter uppercase mb-8"
              style={{ fontWeight: 100, fontFamily: 'Outfit, sans-serif' }}
            >
              Our <span className="text-[#FFC107]">Impact</span> <br />
              By The Numbers
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-lg leading-relaxed font-light max-w-xl"
            >
              We don't just build systems; we engineer growth. Our methodology combines
              transparent metrics with creative engineering to deliver measurable
              outcomes for the world's most ambitious enterprises.
            </motion.p>
          </div>

          {/* Right Column: Chart Stack */}
          <div className="relative z-10 flex flex-col gap-12 w-full">
            <div className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 p-4">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradientMain" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFC107" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFC107" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={i} x1="0" y1={40 * i} x2="400" y2={40 * i} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                ))}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M 0 180 Q 50 160 100 120 T 200 100 T 300 40 T 400 20"
                  fill="none"
                  stroke="#FFC107"
                  strokeWidth="3"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 1 }}
                  d="M 0 180 Q 50 160 100 120 T 200 100 T 300 40 T 400 20 L 400 200 L 0 200 Z"
                  fill="url(#chartGradientMain)"
                />
              </svg>
              <div className="absolute -top-4 -right-4 bg-white backdrop-blur px-6 py-4 border border-slate-100 shadow-2xl">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} className="text-[#FFC107]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Service Velocity</span>
                </div>
                <div className="text-2xl font-light text-primary mt-1">+42% Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 z-20">
        {[
          { title: "Innovation", label: "Future Tech", desc: "Leading with AI and decentralized architecture." },
          { title: "Agility", label: "Fast Track", desc: "Rapid prototyping and agile execution models." },
          { title: "Scale", label: "Infrastructure", desc: "Global systems built for infinite scalability." },
          { title: "Security", label: "Compliance", desc: "Zero-trust protocols and enterprise protection." }
        ].map((box, i) => (
          <div key={i} className="flex flex-col p-8 bg-primary backdrop-blur-xl border-r border-white/5 last:border-r-0 hover:bg-primary/90 transition-all duration-300 group">
            <span className="text-[#FFC107] text-[9px] font-black uppercase tracking-[0.2em] mb-2">{box.label}</span>
            <h4 style={{ fontWeight: 100 }} className="text-white text-xl font-normal tracking-tight mb-2 group-hover:text-[#FFC107] transition-colors">{box.title}</h4>
            <p className="text-slate-400 text-xs leading-relaxed font-light">{box.desc}</p>
          </div>
        ))}
      </div> */}

      {/* Stats Dashboard Grid */}
      <div className="w-full bg-slate-50 py-16 px-6 md:px-8">


        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <button
            onClick={() => navigate('/contact')}
            className="group relative inline-flex items-center gap-6 bg-primary text-white px-12 py-6 overflow-hidden"
          >
            <span className="relative z-10 font-bold uppercase tracking-[0.2em] text-[11px]">Start Your Project</span>
            <ArrowUpRight size={18} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#FFC107] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;



