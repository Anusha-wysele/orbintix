import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle,
  Zap,
  Send,
  Lightbulb,
  Palette,
  Code,
  Search,
  Rocket,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const ProductDevelopment = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section - Mirrored Split Layout */}
      <section className="relative w-full overflow-hidden bg-white border-b border-slate-100 h-[500px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[80vh]">
          
          {/* Right Part: Text Content (Shifted to Right with extra padding to avoid overlap) */}
          <div className="w-full lg:w-[55%] lg:ml-auto flex flex-col justify-center px-6 sm:px-10 lg:pl-32 lg:pr-16 py-20 relative z-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center w-fit px-4 py-1.5 rounded-full border border-[#00C9A7]/30 bg-[#00C9A7]/10 mb-8"
            >
              <span className="text-[#00C9A7] text-[10px] font-black uppercase tracking-[0.3em]">
                Strategic Product Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-black text-[#292929] tracking-tighter uppercase mb-8 leading-tight whitespace-nowrap"
            >
              Product <span className="text-[#00C9A7]">Development</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="overflow-hidden"
            >
              <div className="w-24 h-1 bg-[#00C9A7] mb-8 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-5 space-y-5"
            >
              {[
                "End-to-End Product Design",
                "MVP & Rapid Prototyping",
                "Agile Execution Frameworks",
                "Scalable System Architecture",
                "Continuous Value Delivery"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#00C9A7]/50 flex items-center justify-center bg-[#00C9A7]/10 shadow-[0_0_10px_rgba(0,201,167,0.2)]">
                    <CheckCircle size={12} className="text-[#00C9A7]" />
                  </div>
                  <span className="text-[#616161] text-xs font-semibold tracking-wide">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <button className="cta-animated-btn py-4 px-10 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3">
                Get Started <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Parallel Diagonal Divider Lines (Mirrored Geometry - Optimized to avoid overlap) */}
          <div className="hidden lg:block absolute left-[45%] top-0 bottom-0 z-20 pointer-events-none">
            {/* Main Bold Line (Positive Skew) */}
            <div className="absolute left-[-2px] inset-y-0 w-[4px] bg-[#00C9A7] transform skew-x-[12deg] origin-top shadow-[0_0_30px_rgba(0,201,167,0.4)]" />
            {/* Secondary Parallel Line (Now correctly positioned to the right of the bold line) */}
            <div className="absolute left-[12px] inset-y-0 w-[1.5px] bg-[#00C9A7]/40 transform skew-x-[12deg] origin-top" />
          </div>

          {/* Left Part: Diagonal Image Section (Mirrored clip-path - Optimized) */}
          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
            <div 
              className="absolute inset-0 bg-[#0B1C2C] pointer-events-auto"
              style={{
                clipPath: 'polygon(0 0, 45% 0, 53.5% 100%, 0 100%)'
              }}
            >
              <div className="absolute inset-0">
                {/* Product/Dashboard Image Layer */}
                <motion.div 
                   initial={{ scale: 1.1, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="absolute inset-0"
                >
                  <img 
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000" 
                    alt="Product Management Dashboard" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2C]/80 to-transparent" />
                </motion.div>

                {/* Decorative Metrics Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-16 left-16 z-20 lg:block"
                >
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
                    <div className="flex items-center gap-6 text-white">
                      <div className="w-14 h-14 rounded-2xl bg-[#00C9A7] flex items-center justify-center shadow-lg shadow-[#00C9A7]/20">
                        <Zap size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">Delivery Velocity</div>
                        <div className="text-2xl font-black tracking-tight">2.4x Faster Release</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Fallback for Mobile (Non-diagonal) */}
          <div className="w-full lg:hidden relative bg-[#0B1C2C] min-h-[450px] overflow-hidden">
             <img 
              src="/C:/Users/Dell/.gemini/antigravity/brain/08b85928-e8e5-4500-908d-0f9fb3e6c280/dashboard_mockup_v1_1776574386262.png" 
              alt="Product Management Dashboard" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1C2C]/80" />
            
            <div className="absolute bottom-10 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-xl bg-[#00C9A7] flex items-center justify-center">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Success Rate</div>
                      <div className="text-lg font-black">98% Deployment</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* Restored Sections */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#292929] font-nunito">From Vision to Velocity</h2>
              <p className="text-slate-600 leading-relaxed font-lato">
                We partner with visionaries to turn complex ideas into high-performing digital products. Our agile-first methodology ensures that we pivot when necessary and deliver value early and often.
              </p>
              <ul className="space-y-4">
                {[
                  "MVP Development & Prototyping",
                  "Scalable System Architecture",
                  "Continuous Improvement & Support",
                  "Market Readiness Analysis"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#292929] font-medium">
                    <div className="bg-[#00C9A7]/20 p-1 rounded-full text-[#00C9A7]">
                      <Zap size={18} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right Part: Scrolling Value Highlight Cards with Visible Divider Line */}
            <div className="h-[500px] overflow-y-auto no-scrollbar relative pl-20">
              {/* Vertical Divider Line */}
              <div className="absolute left-[39px] top-0 bottom-0 w-[1px] bg-slate-100 z-0" />
              
              <div className="space-y-16 py-10 relative z-10">
                {[
                  {
                    title: "Idea Validation",
                    desc: "The argument in favor of using filler text goes some labore et dolore magna aliqua consectetur.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                  },
                  {
                    title: "Risk Management",
                    desc: "The argument in favor of using filler text goes some labore et dolore magna aliqua consectetur.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" x2="16" y1="9" y2="9"/><line x1="8" x2="16" y1="13" y2="13"/></svg>
                  },
                  {
                    title: "Easy to manage fund",
                    desc: "The argument in favor of using filler text goes some labore et dolore magna aliqua consectetur.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-center group transition-all relative">
                    {/* Centered on visible divider line icon */}
                    <div className="flex-shrink-0 w-20 h-20 bg-[#a6e22e] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform absolute -left-[80px] z-20">
                      {item.icon}
                    </div>
                    {/* Text content */}
                    <div className="pl-6">
                      <h4 className="text-xl font-bold text-[#031273] mb-2">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lifecycle Section */}
      <section className="bg-slate-50/50 py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column: Vertical Lifecycle steps (Zigzag) */}
            <div className="relative">
              <div className="mb-20">
                <h2 className="text-2xl font-black text-[#292929] tracking-tighter uppercase mb-6">
                  Product <span className="text-[#00C9A7]">Lifecycle</span>
                </h2>
                
              </div>

              {/* Vertical Timeline Container (Zigzag Logic) */}
              <div className="relative">
                {/* Center Line for Zigzag */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-dashed border-l-4 border-dashed border-[#00C9A7] transform -translate-x-1/2 hidden sm:block" />
                
                <div className="space-y-2">
                  {[
                    { title: "Ideation", desc: "Concept discovery and market-fit analysis.", icon: <Lightbulb size={16} /> },
                    { title: "Design", desc: "UX architecture and high-fidelity prototyping.", icon: <Palette size={16} /> },
                    { title: "Development", desc: "Agile engineering and clean code execution.", icon: <Code size={16} /> },
                    { title: "Testing", desc: "Rigorous QA and performance optimization.", icon: <Search size={16} /> },
                    { title: "Launch", desc: "Strategic deployment and market entry.", icon: <Rocket size={16} /> },
                    { title: "Scale", desc: "Continuous growth and post-launch support.", icon: <TrendingUp size={16} /> }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex items-center justify-center sm:justify-between w-full ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                    >
                      {/* Content Card with Advanced Hover Effect (Image-matched) */}
                      <div className="w-full sm:w-[45%] group cursor-pointer transition-all duration-300 relative">
                        {/* Main Card */}
                        <div className="bg-white px-8 py-6 rounded-2xl border border-slate-100 transition-all duration-500 group-hover:bg-[#0B1C2C] group-hover:border-[#0B1C2C] group-hover:shadow-[0_20px_40px_-15px_rgba(11,28,44,0.4)] relative z-10">
                          {/* Triangle Arrow (Visible on Hover) */}
                          <div className={`hidden sm:block absolute ${index % 2 === 0 ? '-right-2' : '-left-2'} top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0B1C2C] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          
                          <div className="flex items-center gap-4 mb-3">
                             <div className="w-8 h-8 rounded-full bg-[#00C9A7]/10 flex items-center justify-center text-[#00C9A7] transition-all duration-300 group-hover:bg-[#00C9A7] group-hover:text-white">
                               {item.icon}
                             </div>
                             <h4 className="text-[20px] font-bold text-[#292929] transition-colors duration-300 group-hover:text-white">{item.title}</h4>
                          </div>
                          <p className="text-slate-500 text-[15px] font-medium leading-relaxed transition-colors duration-300 group-hover:text-white/80">{item.desc}</p>
                        </div>
                      </div>

                      {/* Center Point Badge */}
                      <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-[3px] border-[#00C9A7] z-10 shadow-lg" />
                      
                      {/* Spacer for the other side */}
                      <div className="hidden sm:block w-[45%]" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Strategic Impact Data */}
            <div className="lg:sticky lg:top-32 space-y-10">
              <div className="bg-[white] p-12 relative overflow-hidden">
                {/* Decorative teal glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#00C9A7]/10 blur-[100px] rounded-full" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#00C9A7]/30 bg-[#00C9A7]/10 mb-8">
                    <span className="text-[#00C9A7] text-[10px] font-black uppercase tracking-[0.2em]">Strategy Excellence</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-black mb-8 leading-tight tracking-tight">
                    Engineering <span className="text-[#00C9A7]">Success</span> Through Precision.
                  </h3>
                   <p className="mb-8 text-slate-500 text-sm leading-relaxed font-lato">
                      Our process is built on the philosophy that great products aren't just built—they are engineered through continuous cycles of validation and optimization.
                    </p>
                  
                  <div className="space-y-8 border-t border-slate-800 pt-8">
                    {[
                      { label: "Execution Sprints", val: "2X Faster", icon: Zap },
                      { label: "Architecture Reliability", val: "99.9%", icon: CheckCircle },
                      { label: "Resource Efficiency", val: "35% Up", icon: CheckCircle },
                      { label: "System Scalability", val: "100%", icon: CheckCircle }
                    ].map((metric, i) => (
                      <div key={i} className="group flex items-center gap-6 border border-slate-100 p-5 w-full sm:w-[420px] rounded-xl transition-all duration-500 hover:bg-[#0B1C2C] hover:border-[#0B1C2C] hover:shadow-[0_20px_40px_-15px_rgba(11,28,44,0.4)] cursor-pointer bg-white relative">
                        {/* Triangle Arrow (Visible on Hover) - Using invisible to prevent artifacts */}
                        <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0B1C2C] rotate-45 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500" />
                        
                        <div className="w-12 h-12 rounded-2xl bg-[#00C9A7]/10 flex items-center justify-center text-[#00C9A7] transition-all duration-500 group-hover:bg-[#00C9A7] group-hover:text-white">
                          <metric.icon size={22} className="transition-colors duration-500" />
                        </div>
                        <div className="relative z-20">
                          <div className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-1 transition-colors duration-500 group-hover:text-white">{metric.label}</div>
                          <div className="text-sm font-black text-gray-500 transition-colors duration-500 group-hover:text-white/80">{metric.val}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  
                </div>
              </div>


              
            </div>

          </div>
        </div>
      </section>


      {/* What We Build Section */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black text-[#292929] tracking-tighter uppercase mb-4"
            >
              What We <span className="text-[#00C9A7]">Build</span>
            </motion.h2>
            <p className="text-slate-500 font-medium">Engineering digital excellence across the product spectrum.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "SaaS Platforms",
                desc: "Cloud-native architectures engineered for multi-tenant scale and recurring revenue.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                icon: <Zap size={18} />
              },
              {
                title: "Web Applications",
                desc: "High-performance, responsive interfaces built for optimal speed and reliability.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
                icon: <Code size={18} />
              },
              {
                title: "MVP Development",
                desc: "Strategic feature validation to turn ambitious ideas into functional market winners.",
                img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800",
                icon: <Send size={18} />
              },
              {
                title: "Enterprise Systems",
                desc: "Robust, integrated platforms designed to handle complex business logistics securely.",
                img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
                icon: <CheckCircle size={18} />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                {/* Main Card */}
                <div className="bg-white overflow-hidden border border-slate-100 transition-all duration-500 group-hover:bg-[#0B1C2C] group-hover:border-[#0B1C2C] group-hover:shadow-[0_20px_40px_-15px_rgba(11,28,44,0.4)] h-full flex flex-col relative z-20">
                  {/* Image Header */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content Body */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#00C9A7]/10 flex items-center justify-center text-[#00C9A7] transition-all duration-300 group-hover:bg-[#00C9A7] group-hover:text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#292929] transition-colors group-hover:text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed transition-colors group-hover:text-white/70">
                      {item.desc}
                    </p>
                  </div>

                  {/* Indicator Arrow */}
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-[#0B1C2C] rotate-45 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-[#292929] tracking-tighter uppercase mb-6 leading-[1.1]"
          >
            Start Building Your <span className="text-[#00C9A7]">Product Today</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Initiate a strategic partnership today and accelerate your digital transformation with our expert engineering team.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-animated-btn ripple-pulse font-black py-6 px-16 rounded-2xl flex items-center gap-3 mx-auto tracking-[0.2em] uppercase text-xs shadow-xl shadow-blue-500/20 transition-all"
          >
            <span className="flex items-center gap-3 relative z-10 text-white">
              Get a Free Consultation <Send size={16} />
            </span>
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default ProductDevelopment;
