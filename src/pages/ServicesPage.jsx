import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Globe, Rocket, Users, Cloud, Server, Shield,
  Database, Activity, Brain, CheckCircle, ArrowRight,
  Send, Lightbulb, Code, TrendingUp, Layers, Zap,
  BarChart, PieChart, Briefcase
} from "lucide-react";

const servicesSections = [
  { id: "web-development", title: "Web Development" },
  { id: "product-development", title: "Product Development" },
  { id: "it-staffing", title: "US IT Staffing" },
  { id: "salesforce-solutions", title: "Salesforce Solutions" },
  { id: "it-infrastructure", title: "IT Infrastructure" },
  { id: "cyber-security", title: "Cyber Security" },
  { id: "cloud-transformation", title: "Cloud Transformation" },
  { id: "ai-ml", title: "AI & Machine Learning" },
  { id: "data-analytics", title: "Data & Analytics" },
];

const ServicesPage = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const SectionHeader = ({ title, highlight, icon: Icon }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex items-center gap-6 mb-12"
    >
      <div className="w-14 h-14 bg-black rounded-sm flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FFC107]/10">
        <Icon strokeWidth={1} size={28} className="text-[#FFC107]" />
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl font-medium text-black tracking-tighter uppercase font-outfit leading-none">
          {title} <span className="text-[#FFC107]">{highlight}</span>
        </h2>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800" ref={containerRef}>

      {/* 0. PREMIUM LANDING HERO */}
      <section className="relative w-full overflow-hidden min-h-[80vh] flex items-center border-b border-slate-100">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            alt="Global Tech Network"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFC107]/90 clip-path-diagonal pointer-events-none z-0" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFC107] rounded-full blur-[150px] opacity-90 pointer-events-none z-0" />

        <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-4">

          {/* Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/10 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
                <span className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">Enterprise Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-6xl md:text-7xl font-medium text-white tracking-tighter uppercase mb-6 leading-[0.85] font-outfit">
                Design.<br />
                Build.<br />
                <span className="text-[#FFC107] relative inline-block">
                  Dominate.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full h-2 bg-white origin-left"
                  />
                </span>
              </h1>

              <p className="text-lg text-slate-200 mb-10 max-w-lg font-medium leading-relaxed">
                We orchestrate end-to-end digital transformation. From scalable cloud architectures to intelligent automation, we engineer the systems that power industry leaders.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={() => scrollToSection("web-development")}
                  className="bg-[#FFC107] text-black px-10 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:-translate-y-1"
                >
                  Explore Capabilities <ArrowRight size={16} />
                </button>
                <div className="flex items-center gap-4 text-sm font-bold text-white uppercase tracking-wider">
                  <div className="w-12 h-12 rounded-full border-2 border-[#FFC107] flex items-center justify-center text-xl shadow-[0_0_15px_rgba(255,193,7,0.2)]">
                    +9
                  </div>
                  Core Services
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Imagery - Overlapping Composition */}
          <motion.div style={{ y: heroY }} className="lg:col-span-6 relative h-[600px] hidden lg:block">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="absolute top-10 right-0 w-[80%] h-[75%] rounded-sm overflow-hidden  z-10">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Corporate Architecture" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="absolute bottom-10 -left-24 w-[65%] h-[55%] rounded-sm overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] z-20">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Data Dashboard" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-[10px] font-black tracking-widest uppercase text-[#FFC107] mb-1">Performance</div>
                <div className="text-2xl font-bold font-outfit">99.9% SLA</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, type: "spring" }} className="absolute top-32 -left-8 bg-white p-5 rounded-sm border border-slate-100 z-30 flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <CheckCircle size={20} className="text-[#FFC107]" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Delivery Rate</div>
                <div className="text-md font-black text-black">100% On-Time</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STICKY NAVIGATION */}
      <div className="sticky top-[88px] z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max pb-1">
            {servicesSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`px-5 py-2.5 rounded-none text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border
                  ${hash === `#${sec.id}`
                    ? 'bg-black text-[#FFC107] border-black shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-black hover:text-black'
                  }`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION WRAPPERS - Compact Spacing (py-16) and Consistent Colors */}

      {/* 1. WEB DEVELOPMENT */}
      <section id="web-development" className="py-16 bg-white border-b border-slate-100 scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] rounded-sm overflow-hidden group shadow-2xl" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Web Dev" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-sm">
              <Code className="text-[#FFC107] mb-3" size={28} />
              <div className="text-white font-medium text-md">Scalable Architecture</div>
              <div className="text-white/70 text-sm">Built for millions of users.</div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:pl-10">
            <SectionHeader title="Web" highlight="Development" icon={Globe} />
            <p className="text-slate-600 text-md mb-8 leading-relaxed">
              We engineer high-performance web applications that convert visitors into loyal customers. Our architecture guarantees blazing-fast load speeds, robust security, and seamless scalability to support your business as it grows globally.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Custom Web Apps', 'E-commerce Platforms', 'Performance Optimization', 'Progressive Web Apps'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-[#FFC107]" />
                  <span className="font-bold text-black text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT DEVELOPMENT */}
      <section id="product-development" className="py-6 bg-slate-50 border-b border-slate-100 scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10" data-aos="fade-right">
            <SectionHeader title="Product" highlight="Development" icon={Rocket} />
            <p className="text-slate-600 text-md mb-8 leading-relaxed">
              Turn ambitious ideas into market-ready SaaS and enterprise products. By utilizing agile frameworks, we ensure rapid MVP launches and continuous iterations, helping you capture market share faster while minimizing risk.
            </p>
            <div className="space-y-4">
              {[
                { icon: Lightbulb, title: "Ideation & Strategy", desc: "Validating core concepts and market fit." },
                { icon: Layers, title: "UI/UX Architecture", desc: "Designing intuitive, user-centric interfaces." },
                { icon: Zap, title: "Agile Engineering", desc: "Rapid sprint cycles and continuous delivery." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 bg-white p-5 rounded-sm shadow-sm border border-slate-100 hover:border-black transition-colors group">
                  <div className="w-12 h-12 rounded-sm bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFC107] transition-colors">
                    <item.icon strokeWidth={1} size={20} className="text-white group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-black font-medium text-lg">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl border border-slate-200" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" alt="Product Dev" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* 3. US IT STAFFING */}
      <section id="it-staffing" className="py-16 bg-black scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="w-16 h-16 bg-[#FFC107] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-black" />
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter uppercase mb-6 font-outfit">
              US IT <span className="text-[#FFC107]">Staffing</span>
            </h2>
            <p className="text-slate-400 text-md leading-relaxed">
              Scale your engineering capacity overnight. We provide pre-vetted, elite US-based tech talent perfectly matched to your company culture and technical stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
            {[
              { title: "Contract Staffing", desc: "Flexible, short-to-mid term talent injection for specific project sprints.", icon: Briefcase },
              { title: "Direct Hire", desc: "Long-term, strategic placements for core leadership and engineering roles.", icon: CheckCircle },
              { title: "Team Augmentation", desc: "Seamlessly integrate specialized squads into your existing workflows.", icon: Users }
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFC107]/20 rounded-sm blur-[40px] group-hover:bg-[#FFC107]/40 transition-colors" />
                <card.icon strokeWidth={1} size={40} className="text-[#FFC107] mb-6 relative z-10" />
                <h3 className="text-2xl font-medium text-white uppercase tracking-tight mb-4 relative z-10">{card.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed relative z-10">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SALESFORCE SOLUTIONS */}
      <section id="salesforce-solutions" className="py-10 bg-white border-b border-slate-100 scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Implementation", desc: "Tailored deployment of Salesforce clouds.", icon: Cloud },
                  { title: "Customization", desc: "Complex Apex & Lightning components.", icon: Code },
                  { title: "Integration", desc: "Seamless third-party API connectivity.", icon: Activity },
                  { title: "Data Migration", desc: "Zero-downtime, secure data transfers.", icon: Database }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-slate-50 rounded-sm border border-slate-100 hover:border-black transition-colors">
                    <item.icon strokeWidth={1} size={32} className="text-[#FFC107] mb-4" />
                    <h3 className="text-md font-medium text-black mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 lg:pl-10" data-aos="fade-left">
              <SectionHeader title="Salesforce" highlight="Solutions" icon={Cloud} />
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Maximize your CRM efficiency to boost sales and customer retention. We design, implement, and optimize robust Salesforce ecosystems that align perfectly with your complex operational workflows.
              </p>
              <button className="text-black font-black uppercase tracking-widest text-xs border-b-2 border-[#FFC107] pb-1 hover:text-[#FFC107] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IT INFRASTRUCTURE */}
      <section id="it-infrastructure" className="py-16 bg-slate-50 border-b border-slate-100 scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5" data-aos="fade-right">
            <SectionHeader title="IT" highlight="Infrastructure" icon={Server} />
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Robust cloud and on-premise setups engineered for high availability. We future-proof your infrastructure to ensure your operations never experience downtime, enabling seamless global scaling.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-6" data-aos="fade-left">
            {[
              { val: "99.99%", label: "Uptime SLA" },
              { val: "24/7", label: "Monitoring" },
              { val: "Multi", label: "Cloud Strategy" },
              { val: "<50ms", label: "Global Latency" }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow text-center">
                <div className="text-2xl font-medium text-black mb-2 font-outfit">{stat.val}</div>
                <div className="text-[11px] uppercase tracking-widest text-[#FFC107] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CYBER SECURITY */}
      <section id="cyber-security" className="py-16 bg-white border-b border-slate-100 scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] rounded-sm overflow-hidden shadow-2xl" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" alt="Cyber Security" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <Shield size={40} className="text-[#FFC107]" />
              <div>
                <div className="text-white font-black text-xl">Zero-Trust Architecture</div>
                <div className="text-white/60 text-sm">Enterprise-grade protection verified.</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:pl-10">
            <SectionHeader title="Cyber" highlight="Security" strokeWidth={1} icon={Shield} />
            <p className="text-slate-600 text-md mb-8 leading-relaxed">
              Protecting your digital assets with military-grade encryption and zero-trust architectures. We proactively defend against emerging threats, ensuring compliance and safeguarding your company's reputation.
            </p>
            <div className="space-y-6">
              {[
                { title: "Threat Intelligence", desc: "Proactive monitoring and threat neutralization." },
                { title: "Compliance & Auditing", desc: "SOC2, HIPAA, and GDPR standard adherence." },
                { title: "Data Encryption", desc: "End-to-end security for data at rest and in transit." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#FFC107] mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-black font-medium">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOUD TRANSFORMATION */}
      <section id="cloud-transformation" className="py-6 bg-slate-50 border-b border-slate-100 scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-medium text-black tracking-tighter uppercase mb-6 font-outfit">
              Cloud <span className="text-[#FFC107]">Transformation</span>
            </h2>
            <p className="text-slate-600 text-md leading-relaxed">
              Modernize your architecture with seamless cloud migration. Whether AWS, Azure, or GCP, we architect highly scalable, fault-tolerant environments that drastically reduce operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3" data-aos="fade-up" data-aos-delay="200">
            {[
              { icon: Server, title: "Cloud Migration", desc: "Zero-downtime transitions of legacy systems." },
              { icon: Layers, title: "Cloud Native App Dev", desc: "Microservices and serverless functions." },
              { icon: Shield, title: "Cloud Security", desc: "Robust IAM and continuous compliance." },
              { icon: Zap, title: "FinOps & Optimization", desc: "Auditing resources to maximize ROI." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-sm border border-slate-200 hover:border-black hover:shadow-xl transition-all duration-300">
                <feature.icon strokeWidth={1} size={32} className="text-[#FFC107] mb-3" />
                <h3 className="text-xl font-medium text-black mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AI & MACHINE LEARNING */}
      <section id="ai-ml" className="py-16 bg-black scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10" data-aos="fade-right">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-14 h-14 bg-[#FFC107] rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain size={28} className="text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase font-outfit leading-none">
                AI & <span className="text-[#FFC107]">Machine Learning</span>
              </h2>
            </div>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Unlock the hidden value in your data with custom AI solutions. From intelligent automation to complex predictive modeling, we integrate enterprise-grade AI that drives efficiency.
            </p>
            <div className="space-y-4">
              {[
                "Generative AI & LLM Integration",
                "Predictive Analytics & Forecasting",
                "Computer Vision & NLP Pipelines"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#FFC107]/20 flex items-center justify-center">
                    <CheckCircle size={16} className="text-[#FFC107]" />
                  </div>
                  <span className="text-white font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#FFC107]/5" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="AI" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-[#FFC107]/20">
              <div className="text-white font-bold tracking-widest text-[10px] uppercase mb-1">Predictive Accuracy</div>
              <div className="text-[#FFC107] font-black text-4xl">94.8%</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DATA & ANALYTICS */}
      <section id="data-analytics" className="py-16 bg-white border-b border-slate-100 scroll-mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5" data-aos="fade-right">
            <SectionHeader title="Data &" highlight="Analytics" icon={Database} />
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Transform raw, disjointed data into a unified single source of truth. We build robust data pipelines and interactive BI dashboards that empower your leadership to make fast, evidence-based strategic decisions.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
            {[
              { icon: Database, title: "Data Engineering", desc: "Architecting scalable ETL/ELT pipelines and warehouses." },
              { icon: BarChart, title: "Business Intelligence", desc: "Real-time dashboards visualizing critical KPIs." },
              { icon: TrendingUp, title: "Strategy Consulting", desc: "Defining data governance and monetization strategies." },
              { icon: PieChart, title: "Advanced Analytics", desc: "Deep statistical modeling and cohort analysis." }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-sm border border-slate-200 ${i === 1 ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
                <item.icon size={32} className={i === 1 ? "text-[#FFC107] mb-6" : "text-black mb-6"} />
                <h3 className="text-md font-medium mb-3">{item.title}</h3>
                <p className={i === 1 ? "text-slate-400 text-sm" : "text-slate-500 text-sm"}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL CTA */}
      <section className="py-24 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-medium text-black tracking-tighter uppercase mb-6 font-outfit leading-tight">
            Ready to <br />Transform?
          </h2>
          <p className="text-black/80 text-lg font-medium mb-10 max-w-2xl mx-auto">
            Let's discuss how our enterprise engineering solutions can accelerate your growth and dominate your market.
          </p>
          <button onClick={() => navigate('/contact')} className="bg-black text-white px-12 py-6 rounded-xl font-black text-sm uppercase tracking-[0.2em] hover:-translate-y-1 transition-transform duration-300 flex items-center gap-4 mx-auto shadow-2xl">
            Start A Project <Send size={18} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
