import { 
  CheckCircle, 
  Zap, 
  Send,
  Users,
  UserPlus,
  Watch,
  Search,
  ShieldCheck,
  Layers,
  Handshake,
  ClipboardList,
  Globe,
  MessageSquare,
  Rocket,
  Code,
  Database,
  Settings,
  Cloud,
  Lock,
  Palette,
  ClipboardCheck,
  Activity,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const ITStaffing = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section - Split Layout */}
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
                Strategic Talent Acquisition
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-black text-[#292929] tracking-tighter uppercase mb-8 leading-[0.9]"
            >
              IT Staffing & 
              <span className="text-[#1ABC9C] ml-3">Recruitment</span>
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
                "Technical Resource Outsourcing",
                "Dedicated Engineering Teams",
                "Contract-to-Hire Solutions",
                "Global Talent Network",
                "Specialized Tech Recruitment"
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

          {/* Parallel Diagonal Divider Lines */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 z-20 pointer-events-none">
            {/* Main Bold Line */}
            <div className="absolute left-[-2px] inset-y-0 w-[4px] bg-[#1ABC9C] transform -skew-x-[15deg] origin-top shadow-[0_0_30px_rgba(26,188,156,0.4)]" />
            {/* Secondary Parallel Line */}
            <div className="absolute left-[-18px] inset-y-0 w-[1.5px] bg-[#1ABC9C]/40 transform -skew-x-[15deg] origin-top" />
          </div>

          {/* Right Part: Diagonal Image Section */}
          <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
            <div 
              className="absolute inset-0 bg-[#0B1C2C] pointer-events-auto"
              style={{
                clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 39.5% 100%)'
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
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000" 
                    alt="Strategic IT Recruitment" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1C2C]/60" />
                </motion.div>

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
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">Recruitment Quality</div>
                        <div className="text-2xl font-black tracking-tight">98% Placement Success</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Hero (Non-diagonal) */}
          <div className="w-full lg:hidden relative bg-[#0B1C2C] min-h-[400px] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000" 
               alt="Strategic IT Recruitment" 
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
                       <div className="text-lg font-black">98% Placement</div>
                     </div>
                   </div>
                 </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#292929] font-nunito mb-16">Why Our Staffing Solutions Stand Out</h2>
              
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-10">
              {[
                { 
                  title: "Pre-Vetted Engineers", 
                  desc: "Expertly screened talent ready to contribute from day one", 
                  icon: ShieldCheck 
                },
                { 
                  title: "Rapid Deployment", 
                  desc: "Accelerate hiring with a 48–72 hour turnaround", 
                  icon: Zap 
                },
                { 
                  title: "Scalable Hiring Models", 
                  desc: "Flexible engagement tailored to your project needs", 
                  icon: Layers 
                },
                { 
                  title: "Cultural Alignment", 
                  desc: "Talent that integrates seamlessly with your team", 
                  icon: Handshake 
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex gap-6 group cursor-default"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300 group-hover:bg-[#1ABC9C]/10 group-hover:border-[#1ABC9C]/20 group-hover:text-[#1ABC9C] group-hover:shadow-[0_0_20px_rgba(26,188,156,0.1)]">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#292929] mb-2 font-nunito transition-colors group-hover:text-[#1ABC9C]">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 font-lato text-sm max-w-md">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-8">
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Column 1 */}
                <div className="flex-1 space-y-6">
                  {[
                    { title: "Direct Hire", desc: "Long-term placements for your core technical teams.", icon: Users },
                    { title: "Project Based", desc: "Specialized experts for time-sensitive technical initiatives.", icon: Watch }
                  ].map((item, index) => (
                    <div key={index} className="group relative bg-white p-10 border border-slate-100 shadow-xl  overflow-hidden transition-all duration-500 cursor-pointer h-[280px] flex items-center justify-center">
                      <div className="absolute top-0 left-0 w-full h-0 bg-[#0B1C2C] group-hover:h-full transition-all duration-500 ease-in-out z-0" />
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#1ABC9C]/10 flex items-center justify-center text-[#1ABC9C] mb-6 transition-all duration-500 group-hover:bg-[#1ABC9C] group-hover:text-white">
                          <item.icon size={28} />
                        </div>
                        <h3 className="text-[#292929] font-bold text-xl font-nunito mb-3 transition-colors duration-500 group-hover:text-white">{item.title}</h3>
                        <p className="text-slate-500 font-lato text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/80">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2 (Offset Upwards) */}
                <div className="flex-1 space-y-6 sm:mt-[-40px]">
                  {[
                    { title: "Contract-to-Hire", desc: "Evaluate talent in your environment before commitment.", icon: UserPlus },
                    { title: "Executive Search", desc: "Identifying top-tier leadership for strategic growth.", icon: Search }
                  ].map((item, index) => (
                    <div key={index} className="group relative bg-white p-10 border border-slate-100 shadow-xl  overflow-hidden transition-all duration-500 cursor-pointer h-[280px] flex items-center justify-center">
                      <div className="absolute top-0 left-0 w-full h-0 bg-[#0B1C2C] group-hover:h-full transition-all duration-500 ease-in-out z-0" />
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#1ABC9C]/10 flex items-center justify-center text-[#1ABC9C] mb-6 transition-all duration-500 group-hover:bg-[#1ABC9C] group-hover:text-white">
                          <item.icon size={28} />
                        </div>
                        <h3 className="text-[#292929] font-bold text-xl font-nunito mb-3 transition-colors duration-500 group-hover:text-white">{item.title}</h3>
                        <p className="text-slate-500 font-lato text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/80">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              
            </div>
          </div>

          <div className="bg-slate-50/50 border border-slate-100 rounded-[3rem] p-12 md:p-16 mt-32">
            <div className="text-center mb-24">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1ABC9C] mb-4">Talent Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-black text-[#292929] uppercase tracking-tighter">Specialized Roles <span className="text-[#1ABC9C]">We Fill</span></h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20">
              {[
                { 
                  title: "Full-Stack Engineers", 
                  desc: "Bridging creative front-ends with robust back-end architecture.", 
                  icon: Code 
                },
                { 
                  title: "Data Scientists", 
                  desc: "Unlocking insights through statistical modeling and machine learning.", 
                  icon: Database 
                },
                { 
                  title: "DevOps Specialists", 
                  desc: "Automating pipelines and ensuring high-availability infrastructure.", 
                  icon: Settings 
                },
                { 
                  title: "Cloud Architects", 
                  desc: "Designing secure, scalable, and cost-efficient cloud ecosystems.", 
                  icon: Cloud 
                },
                { 
                  title: "Cybersecurity Experts", 
                  desc: "Protecting digital assets with advanced threat detection protocols.", 
                  icon: Lock 
                },
                { 
                  title: "UI/UX Designers", 
                  desc: "Crafting intuitive experiences that blend beauty with functional logic.", 
                  icon: Palette 
                },
                { 
                  title: "Project Managers", 
                  desc: "Orchestrating strategic alignment and excellence in delivery.", 
                  icon: ClipboardCheck 
                },
                { 
                  title: "Quality Assurance", 
                  desc: "Ensuring flawless performance through rigorous automated testing.", 
                  icon: Activity 
                }
              ].map((role, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="relative group bg-white p-10 pt-16 shadow-2xl shadow-slate-200/50 transition-all duration-500 text-center flex flex-col items-center"
                >
                  {/* Floating Icon Badge (Matching Reference) */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#1ABC9C] to-[#16A085] flex items-center justify-center text-white shadow-xl shadow-[#1ABC9C]/30 transition-transform duration-500 group-hover:scale-110">
                    <role.icon size={30} strokeWidth={1.5} />
                  </div>

                  <h4 className="text-[#0B1C2C] font-black text-lg mb-4 leading-tight">{role.title}</h4>
                  <p className="text-slate-500 text-xs font-lato leading-relaxed max-w-[180px]">{role.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        <div className="py-24 border-t border-slate-100">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1ABC9C] mb-4">Workflow</h2>
            <h3 className="text-4xl font-black text-[#292929] uppercase tracking-tighter">Our Hiring <span className="text-[#1ABC9C]">Process</span></h3>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto px-4">
            
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
            <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-12 lg:gap-4">
              {[
                { 
                  title: "Requirement Analysis", 
                  desc: "Defining your technical needs and cultural fit.", 
                  icon: ClipboardList, 
                  offset: "lg:-translate-y-12" 
                },
                { 
                  title: "Talent Sourcing", 
                  desc: "Global network search for elite candidates.", 
                  icon: Globe, 
                  offset: "lg:translate-y-12" 
                },
                { 
                  title: "Screening & Selection", 
                  desc: "Rigorous technical vetting and assessments.", 
                  icon: CheckCircle, 
                  offset: "lg:-translate-y-12" 
                },
                { 
                  title: "Interviews & Hiring", 
                  desc: "Facilitating final rounds and selection.", 
                  icon: MessageSquare, 
                  offset: "lg:translate-y-12" 
                },
                { 
                  title: "Onboarding & Support", 
                  desc: "Seamless integration and ongoing care.", 
                  icon: Rocket, 
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
                  <div className="relative mb-6">
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0B1C2C] text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-lg z-20">
                      {idx + 1}
                    </div>
                    
                    {/* Icon Circle */}
                    <div className="w-24 h-24 rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center text-[#1ABC9C] relative z-10 transition-transform duration-500 hover:scale-110 hover:shadow-[#1ABC9C]/20 group">
                       <step.icon size={32} />
                    </div>

                    {/* Decorative Ripple (Desktop only) */}
                    <div className="hidden lg:block absolute inset-0 bg-[#1ABC9C]/5 rounded-full scale-125 -z-10 animate-pulse" />
                  </div>

                  <h4 className="text-lg font-black text-[#292929] mb-3 font-nunito leading-tight">
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
      </div>
    </section>

    {/* CTA Section - Mirroring WebDevelopment Style */}
    <section className="pt-24 pb-32 bg-slate-50/30 w-full border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h3 className="text-4xl md:text-6xl font-black text-[#292929] tracking-tighter uppercase mb-8">
            Find the Right <span className="text-[#1ABC9C]">Talent—Faster</span>
          </h3>
          <p className="text-[#616161] text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Hire qualified candidates quickly with our streamlined recruitment process and expert screening.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-animated-btn ripple-pulse !bg-[#1ABC9C] hover:!bg-[#0B1C2C] text-white font-black py-6 px-16 rounded-2xl flex items-center gap-3 mx-auto tracking-[0.2em] uppercase text-xs shadow-2xl shadow-[#1ABC9C]/40 transition-all duration-500 group"
          >
            <span className="flex items-center gap-3 relative z-10">
              Get a Free Consultation 
              <Send size={16} className="transition-transform duration-500 group-hover:translate-x-2" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  </div>
);
};

export default ITStaffing;
