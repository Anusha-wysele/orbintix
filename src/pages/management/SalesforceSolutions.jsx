import React from "react";
import { 
  CheckCircle, 
  Zap, 
  Settings, 
  Database, 
  Cloud,
  Globe,
  Users,
  TrendingUp,
  Headphones,
  Megaphone,
  Layout,
  DollarSign,
  PenTool,
  LifeBuoy,
  ClipboardList,
  ShieldCheck,
  Cpu,
  Maximize,
  Send,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const SalesforceSolutions = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section - Mirrored Split Layout */}
      <section className="relative w-full overflow-hidden bg-white border-b border-slate-100 h-[550px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[80vh]">
          
          {/* Right Part: Text Content (Mirrored - Shifted to Right) */}
          <div className="w-full lg:w-[55%] lg:ml-auto flex flex-col justify-center px-6 sm:px-10 lg:pl-32 lg:pr-16 py-20 relative z-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center w-fit px-4 py-1.5 rounded-full border border-[#1ABC9C]/30 bg-[#1ABC9C]/10 mb-8"
            >
              <span className="text-[#1ABC9C] text-[10px] font-black uppercase tracking-[0.3em]">
                Salesforce Platform Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-black text-[#292929] tracking-tighter uppercase mb-8 leading-[0.9]"
            >
              Salesforce <br />
              <span className="text-[#1ABC9C]">Solutions</span>
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
                "Implementation & Customization",
                "Managed Services & Support",
                "CRM Integration & Automation",
                "Revenue Cloud & CPQ",
                "AppExchange Product Dev"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#1ABC9C]/50 flex items-center justify-center bg-[#1ABC9C]/10 shadow-[0_0_10px_rgba(26,188,156,0.2)]">
                    <CheckCircle size={12} className="text-[#1ABC9C]" />
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

          {/* Parallel Diagonal Divider Lines (Mirrored Skew) */}
          <div className="hidden lg:block absolute left-[45%] top-0 bottom-0 z-20 pointer-events-none">
            {/* Main Bold Line */}
            <div className="absolute left-[-2px] inset-y-0 w-[4px] bg-[#1ABC9C] transform skew-x-[12deg] origin-top shadow-[0_0_30px_rgba(26,188,156,0.4)]" />
            {/* Secondary Parallel Line */}
            <div className="absolute left-[12px] inset-y-0 w-[1.5px] bg-[#1ABC9C]/40 transform skew-x-[12deg] origin-top" />
          </div>

          {/* Left Part: Diagonal Image Section (Mirrored Clip-Path) */}
          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
            <div 
              className="absolute inset-0 bg-[#0B1C2C] pointer-events-auto"
              style={{
                clipPath: 'polygon(0 0, 45% 0, 54% 100%, 0 100%)'
              }}
            >
              <div className="absolute inset-0">
                <motion.div 
                   initial={{ scale: 1.1, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="absolute inset-0"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
                    alt="Salesforce CRM Excellence" 
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
                      <div className="w-14 h-14 rounded-2xl bg-[#1ABC9C] flex items-center justify-center shadow-lg shadow-[#1ABC9C]/20">
                        <Zap size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">Operational Efficiency</div>
                        <div className="text-2xl font-black tracking-tight">40% Productivity Gain</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Hero View (Non-diagonal) */}
          <div className="w-full lg:hidden relative bg-[#0B1C2C] min-h-[400px] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
               alt="Salesforce Solutions" 
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
                       <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Success</div>
                       <div className="text-lg font-black">98% Deployment</div>
                     </div>
                   </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* Preservation of original content below hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white selection:bg-[#1ABC9C]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black text-[#292929] font-nunito uppercase tracking-tight mb-6">
                  Maximize Your <span className="text-[#1ABC9C]">CRM Investment</span>
                </h2>
                <p className="text-slate-600 leading-relaxed font-lato text-lg">
                  Salesforce is more than just a tool; it's a platform for total business transformation. We specialize in tailoring Salesforce to fit your specific workflows, ensuring that your team has the data they need to make winning decisions.
                </p>
              </motion.div>
              
              <ul className="space-y-5">
                {[
                  "Salesforce Implementation & Customization",
                  "CRM Integration & Automation",
                  "Data Migration & Support",
                  "AppExchange App Development"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 text-[#292929] font-bold"
                  >
                    <div className="bg-[#1ABC9C]/10 p-1.5 rounded-full text-[#1ABC9C] border border-[#1ABC9C]/20 shadow-sm shadow-[#1ABC9C]/10">
                      <Settings size={18} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Data-Driven Growth",
                  desc: '"We transform raw customer data into actionable insights that fuel your sales and marketing engines."',
                  icon: Database
                },
                {
                  title: "Cross-Cloud Synergy",
                  desc: '"Unify Sales, Service, and Marketing clouds into a single source of truth for total customer visibility."',
                  icon: Users
                },
                {
                  title: "Scalable Automation",
                  desc: '"Eliminate manual bottlenecks with custom Flow orchestrations that adapt as your enterprise grows."',
                  icon: Zap
                }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#0B1C2C] p-6 rounded-none shadow-xl shadow-blue-900/10 overflow-hidden relative group flex items-start gap-6 border border-white/5 hover:border-[#1ABC9C]/30 transition-all duration-500"
                >
                  <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#1ABC9C]/5 blur-[80px] group-hover:bg-[#1ABC9C]/10 transition-all duration-700"></div>
                  
                  {/* Left Side: Icon Container (Sharp Edges) */}
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-none flex items-center justify-center text-[#1ABC9C] shadow-inner transition-all duration-500 group-hover:bg-[#1ABC9C] group-hover:text-white group-hover:scale-110">
                     <card.icon size={26} />
                  </div>

                  {/* Right Side: Content */}
                  <div className="relative z-10 flex flex-col items-start pt-1">
                    <h3 className="text-xl font-black text-white mb-2 font-nunito tracking-tight italic leading-none">{card.title}</h3>
                    <p className="text-slate-400 italic font-lato text-xs leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {card.desc}
                    </p>
                    <div className="w-8 h-[2px] bg-[#1ABC9C] mt-4 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Salesforce Capabilities Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1ABC9C] mb-4">Core Clusters</h2>
            <h3 className="text-4xl font-black text-[#292929] uppercase tracking-tighter">Salesforce <span className="text-[#1ABC9C]">Capabilities</span></h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Sales Cloud", 
                desc: "Empower your teams with AI-driven lead management and revenue growth.", 
                icon: TrendingUp 
              },
              { 
                title: "Service Cloud", 
                desc: "Deliver multi-channel support and automated field service management.", 
                icon: Headphones 
              },
              { 
                title: "Marketing Cloud", 
                desc: "Create personalized customer journeys and data-driven campaigns.", 
                icon: Megaphone 
              },
              { 
                title: "Experience Cloud", 
                desc: "Build immersive, branded communities that connect partners seamlessly.", 
                icon: Layout 
              }
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-slate-100 p-10 shadow-sm rounded-none transition-all duration-500 hover:shadow-2xl hover:border-[#1ABC9C]/30 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-[#1ABC9C]/5 rounded-none flex items-center justify-center text-[#1ABC9C] mb-8 group-hover:bg-[#1ABC9C] group-hover:text-white transition-all duration-500 shadow-sm">
                  <capability.icon size={28} />
                </div>
                <h4 className="text-lg font-black text-[#292929] uppercase tracking-tighter mb-4 font-nunito">{capability.title}</h4>
                <p className="text-[#616161] text-xs font-lato leading-relaxed max-w-[200px]">{capability.desc}</p>
                <div className="w-12 h-1 bg-[#1ABC9C]/20 mt-8 rounded-full group-hover:w-20 group-hover:bg-[#1ABC9C] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salesforce Implementation Process - Zigzag Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1ABC9C] mb-4">Methodology</h2>
            <h3 className="text-4xl font-black text-[#292929] uppercase tracking-tighter">Implementation <span className="text-[#1ABC9C]">Process</span></h3>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Desktop Connective Curve (Dashed) */}
            <div className="hidden lg:block absolute top-[40%] left-0 w-full h-24 z-0">
               <svg width="100%" height="100%" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
                 <path 
                   d="M0,50 C100,50 150,10 250,10 C350,10 400,90 500,90 C600,90 650,10 750,10 C850,10 900,50 1000,50" 
                   stroke="#1ABC9C" 
                   strokeWidth="2" 
                   strokeDasharray="8 8" 
                   className="opacity-20"
                 />
               </svg>
            </div>

            {/* Steps Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4">
              {[
                { 
                  title: "Requirement Analysis", 
                  desc: "Deep-dive discovery to align Salesforce with your business goals.", 
                  icon: ClipboardList, 
                  offset: "lg:-translate-y-12" 
                },
                { 
                  title: "CRM Strategy Design", 
                  desc: "Architecting a tailored ecosystem for maximum scalability.", 
                  icon: PenTool, 
                  offset: "lg:translate-y-12" 
                },
                { 
                  title: "Implementation & Customization", 
                  desc: "Agile execution of custom Apex, Flows, and platform logic.", 
                  icon: Settings, 
                  offset: "lg:-translate-y-12" 
                },
                { 
                  title: "Testing & Deployment", 
                  desc: "Rigorous validation and seamless push to production environments.", 
                  icon: CheckCircle, 
                  offset: "lg:translate-y-12" 
                },
                { 
                  title: "Optimization & Support", 
                  desc: "Continuous evolution and high-readiness managed services.", 
                  icon: LifeBuoy, 
                  offset: "lg:-translate-y-12" 
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col items-center text-center max-w-[200px] mx-auto ${step.offset}`}
                >
                  <div className="relative mb-8">
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0B1C2C] text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-lg z-20">
                      {idx + 1}
                    </div>
                    
                    {/* Icon Circle (Editorial Sharp Edges) */}
                    <div className="w-24 h-24 rounded-none bg-white border border-slate-100 shadow-xl flex items-center justify-center text-[#1ABC9C] relative z-10 transition-all duration-500 hover:scale-110 hover:shadow-[#1ABC9C]/20 group">
                       <step.icon size={32} />
                    </div>

                    {/* Decorative Background Accent */}
                    <div className="absolute inset-0 bg-[#1ABC9C]/5 rounded-none scale-125 -z-10 animate-pulse hidden lg:block" />
                  </div>

                  <h4 className="text-base font-black text-[#292929] mb-4 font-nunito leading-tight uppercase tracking-tighter">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-xs font-lato leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Trust Layer */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/30 border-t border-slate-100">
        <div className="max-w-7xl mx-auto mb-16 text-center">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1ABC9C] mb-4">Excellence Guaranteed</h2>
            <h3 className="text-4xl font-black text-[#292929] uppercase tracking-tighter">Why <span className="text-[#1ABC9C]">Choose Us</span></h3>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: 2x2 Expertise Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Certified Salesforce Experts",
                desc: "Our team holds multiple platform certifications, ensuring your CRM is in the most capable hands.",
                icon: ShieldCheck
              },
              {
                title: "Custom-Built Solutions",
                desc: "We don't believe in one-size-fits-all. Every implementation is tailored to your unique logic.",
                icon: Cpu
              },
              {
                title: "Scalable Architecture",
                desc: "Designing ecosystems that don't just work today, but evolve with your global growth.",
                icon: Maximize
              },
              {
                title: "Ongoing Support",
                desc: "Providing 24/7 managed services to keep your sales engine running at peak performance.",
                icon: Headphones
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 border border-slate-100 rounded-none shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Decorative L-Border Corner (Mirrored from image) */}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#1ABC9C]/40" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#1ABC9C]/40" />
                <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-[#1ABC9C]/40" />
                <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-[#1ABC9C]/40" />

                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-14 h-14 bg-[#1ABC9C] flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-[#1ABC9C]/20 transition-transform duration-500 group-hover:rotate-[360deg]">
                     <item.icon size={26} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#292929] uppercase tracking-tight mb-4 font-nunito">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-lato leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Tall Experience Metric Card */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full bg-[#0B1C2C] border-[12px] border-white shadow-2xl flex flex-col items-center justify-center py-24 px-8 relative overflow-hidden text-center group"
            >
              {/* Subtle Background Text */}
              <div className="absolute top-0 right-0 text-[180px] font-black text-white/5 leading-none select-none pointer-events-none transform translate-x-20 -translate-y-10 group-hover:text-white/10 transition-all duration-700">
                15+
              </div>

              <div className="relative z-10">
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="text-white text-8xl md:text-9xl font-black font-nunito tracking-tighter block mb-4"
                >
                  15+
                </motion.span>
                <div className="w-20 h-1.5 bg-[#1ABC9C] mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(26,188,156,0.6)]" />
                <h4 className="text-white text-3xl font-black uppercase tracking-widest font-nunito leading-tight">
                  Years of <br />
                  <span className="text-[#1ABC9C]">Experience</span>
                </h4>
              </div>

              <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1ABC9C] to-transparent" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-white relative overflow-hidden">
        {/* Background Decorative Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1ABC9C]/5 blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1ABC9C]/5 blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-6xl font-black text-[#292929] tracking-tighter uppercase mb-8 leading-[0.9]">
              Transform Your <br /> Business with <span className="text-[#1ABC9C]">Salesforce</span>
            </h3>
            <p className="text-[#616161] text-lg mb-12 max-w-2xl mx-auto font-medium font-lato">
              Leverage Salesforce to streamline operations, boost productivity, and drive growth.
            </p>
            <motion.button 
              className="cta-animated-btn ripple-pulse font-black py-6 px-16 rounded-2xl flex items-center gap-3 mx-auto tracking-[0.2em] uppercase text-xs transition-all"
            >
              <span className="flex items-center gap-3 relative z-10 text-white">
                Get Salesforce Consultation <Send size={16} />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SalesforceSolutions;
