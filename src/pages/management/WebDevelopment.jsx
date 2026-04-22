import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Monitor, 
  Cpu, 
  ShoppingBag, 
  Zap, 
  LifeBuoy, 
  Search, 
  PenTool, 
  CheckCircle,
  ArrowRight,
  Send
} from "lucide-react";

const services = [
  {
    title: "Custom Web Applications",
    description: "Built for performance and scalability from the ground up, tailored to your unique business logic.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Frontend Development",
    description: "Modern, reactive, and visually stunning user interfaces built with the latest technologies.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Backend Development",
    description: "Robust and secure server-side architectures ensuring data integrity and fast processing.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "E-commerce Solutions",
    description: "Strategic digital storefronts optimized for conversion, reliability, and seamless checkout flows.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Performance Optimization",
    description: "Advanced techniques to ensure lightning-fast loading times and peak SEO efficiency.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Maintenance & Support",
    description: "Long-term partnership with proactive updates, security patches, and structural stability.",
    icon: LifeBuoy,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
  }
];

const Rocket = ({ size }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-rocket"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
            <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
        </svg>
    );
};

const steps = [
    { title: "Discovery", desc: "Understanding your vision, goals, and strategic requirements.", icon: Search },
    { title: "Design", desc: "Creating intuitive blueprints and high-fidelity user experiences.", icon: PenTool },
    { title: "Development", desc: "Engineering clean, efficient, and scalable code structures.", icon: Code2 },
    { title: "Testing & QA", desc: "Rigorous quality assurance for bug-free performance.", icon: CheckCircle },
    { title: "Launch", desc: "Thorough deployment and live performance monitoring.", icon: Rocket },
    { title: "Support", desc: "Ongoing maintenance and structural stability updates.", icon: LifeBuoy }
];

const WebDevelopment = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section - Redesigned into Split Layout */}
      <section className="relative w-full overflow-hidden bg-white border-b border-slate-100 h-[500px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[80vh]">
          
          {/* Left Part: Text Content */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-24 py-20 relative z-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center w-fit px-4 py-1.5 rounded-full border border-[#1ABC9C]/30 bg-[#1ABC9C]/10 mb-8"
            >
              <span className="text-[#1ABC9C] text-[10px] font-black uppercase tracking-[0.3em]">
                High Performance Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-black text-[#292929] tracking-tight uppercase mb-8 leading-[0.9]"
            >
              Web <span className="text-[#1ABC9C]">Development</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="overflow-hidden"
            >
              <div className="w-24 h-1 bg-[#1ABC9C] mb-8 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-5 space-y-5"
            >
              {[
                "High-Performance Solutions",
                "Scalable Architecture",
                "Custom Web Applications",
                "E-commerce Solutions",
                "Performance Optimization",
               
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#1ABC9C]/50 flex items-center justify-center bg-[#1ABC9C]/10 shadow-[0_0_10px_rgba(26,188,156,0.2)]">
                    <CheckCircle size={12} className="text-[#1ABC9C]" />
                  </div>
                  <span className="text-[#616161] text-xm font-semibold tracking-wide">{item}</span>
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

          {/* Parallel Diagonal Divider Lines (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 z-20 pointer-events-none">
            {/* Main Bold Line */}
            <div className="absolute left-[-2px] inset-y-0 w-[4px] bg-[#1ABC9C] transform -skew-x-[15deg] origin-top shadow-[0_0_30px_rgba(26,188,156,0.4)]" />
            {/* Secondary Parallel Line */}
            <div className="absolute left-[-18px] inset-y-0 w-[1.5px] bg-[#1ABC9C]/40 transform -skew-x-[15deg] origin-top" />
          </div>

          {/* Right Part: Diagonal Image Section (Refined with clip-path) */}
          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
            <div 
              className="absolute inset-0 bg-[#0B1C2C] pointer-events-auto"
              style={{
                clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 39.5% 100%)'
              }}
            >
              <div className="absolute inset-0">
                {/* Main Hero Image */}
                <motion.div 
                   initial={{ scale: 1.1, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="absolute inset-0"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000" 
                    alt="Web Engineering" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1C2C]/60" />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-16 right-16 z-20 lg:block"
                >
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
                    <div className="flex items-center gap-6 text-white">
                      <div className="w-14 h-14 rounded-2xl bg-[#1ABC9C] flex items-center justify-center shadow-lg shadow-[#1ABC9C]/20">
                        <Zap size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">Performance Metrics</div>
                        <div className="text-2xl font-black tracking-tight">99.9% Uptime</div>
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
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000" 
              alt="Web Engineering" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1C2C]/80" />
            
            <div className="absolute bottom-10 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-xl bg-[#1ABC9C] flex items-center justify-center">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Performance</div>
                      <div className="text-lg font-black">99.9% Uptime</div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* Service Cards Grid - Reference-Matched Layout */}
      <section className="py-20 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#292929] tracking-tighter uppercase">
              Custom <span className="text-[#1ABC9C]">Web Solutions</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#1ABC9C] mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group h-[320px] overflow-hidden bg-slate-900 cursor-pointer shadow-lg"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 bg-slate-800 ">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 "
                  />
                  {/* The rising background overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-[28%] bg-[#031273] opacity-80 group-hover:h-full transition-all duration-800 ease-in-out" />
                </div>

                {/* Content Overlay - Fully Synchronized with Background Sweep */}
                <div className="absolute inset-0 flex flex-col z-10 px-10 pt-10 pb-2">
                 
                  <div className="h-full flex flex-col transition-transform duration-1000 ease-in-out translate-y-[78%] group-hover:translate-y-0">
                    <div className="flex items-center gap-6">
                      {/* Icon */}
                      <div className="text-[#5DBA2F] group-hover:scale-110 transition-transform duration-1000 flex-shrink-0">
                        <service.icon size={55} strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-black text-white leading-[1.2] tracking-tighter max-w-[200px] capitalize">
                        {service.title}
                      </h3>
                    </div>

                  
                    <div className="mt-8 transition-all duration-1000 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto justify-center">
                      <p className="text-slate-200 text-sm leading-relaxed mb-6 ml-3 font-medium max-w-[90%]">
                        {service.description}
                      </p>
                      
                      
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Process Section with Zigzag Layout */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <h2 className="text-3xl md:text-4xl font-black text-[#292929] tracking-tighter uppercase">
              Our <span className="text-[#1ABC9C]">Process</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#1ABC9C] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-24 lg:gap-8 relative">
            {/* Desktop Path Connector (Dashed / Adaptive) */}
            <div className="hidden lg:block absolute top-[25%] left-0 w-full h-[2px] border-t-2 border-dashed border-slate-400 z-0" />
            
            {steps.map((step, index) => {
              const IsBottom = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative text-center group z-10 lg:transition-transform lg:duration-700 ${IsBottom ? 'lg:translate-y-10' : 'lg:-translate-y-10'}`}
                >
                  <div className="relative">
                    <div className="w-24 h-24 bg-[#1ABC9C] border-4 border-white rounded-full flex items-center justify-center text-white mx-auto mb-8 transition-all duration-500 group-hover:bg-[#0B1C2C] group-hover:scale-110 relative z-10">
                      <step.icon size={36} />
                    </div>
                    
                    <h4 className="text-xl font-black text-[#292929] mb-4 tracking-tight uppercase">{step.title}</h4>
                    <p className="text-slate-500 text-[11px] font-medium leading-relaxed max-w-[150px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width Redesign */}
      <section className="pt-20 pb-32 bg-gray-b50/50 w-full border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black text-[#292929] tracking-tighter uppercase mb-8">
              Ready to <span className="text-[#1ABC9C]">Engineer</span> <br /> Your Vision?
            </h3>
            <p className="text-[#616161] text-lg mb-12 max-w-2xl mx-auto font-medium">
              Initiate a strategic partnership today and accelerate your digital transformation with our expert engineering team.
            </p>
            <motion.button 
              className="cta-animated-btn ripple-pulse font-black py-6 px-16 rounded-2xl flex items-center gap-3 mx-auto tracking-[0.2em] uppercase text-xs"
            >
              <span className="flex items-center gap-3 relative z-10 text-white">
                Get a Free Consultation <Send size={16} />
              </span>
            </motion.button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;
