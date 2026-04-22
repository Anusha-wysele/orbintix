import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import contactImg from "../assets/contact.jpg";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service');
  const [subject, setSubject] = React.useState(
    service === 'hiring' ? 'Hiring / Talent Inquiry' : ''
  );
  return (
    <div className="bg-primary min-h-screen font-outfit relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={contactImg} 
            alt="Contact Us" 
            className="w-full h-full object-cover object-center scale-100 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2C]/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2C]/20 via-transparent to-[#0B1C2C]/20" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 mb-8 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                Contact Intelligence
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 leading-[0.9] font-outfit drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Start Your <br />
              <span className="text-accent">
                Modern
              </span> Journey
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed bg-primary/40 backdrop-blur-md p-6 border border-white/5 rounded-2xl font-dm-sans">
              Have a question or want to discuss a strategic technological transition? Our team of specialists is ready to help you navigate your next digital challenge.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              {[
                { 
                  icon: Mail, 
                  title: "Email Our Concierge", 
                  detail: "concierge@orbintixtech.com", 
                  sub: "Responsive support within 24 hours",
                  color: "var(--accent)"
                },
                { 
                  icon: Phone, 
                  title: "Direct Strategy Line", 
                  detail: "+1 (555) 012-3456", 
                  sub: "Available 24/7 for active partners" 
                },
                { 
                  icon: MapPin, 
                  title: "Hyderabad Tech Center", 
                  detail: "Awfis DSL Abacus IT Park, Uppal", 
                  sub: "Survey Colony, Hyderabad, TS 500039" 
                }
              ].map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-secondary border border-white/10 flex items-center justify-center text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_15px_30px_rgba(0,191,255,0.2)] rounded-xl">
                    <info.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white tracking-tight font-outfit uppercase">{info.title}</h3>
                    <p className="text-accent font-bold font-dm-sans">{info.detail}</p>
                    <p className="text-text-secondary text-sm font-medium font-dm-sans">{info.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Card */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="p-8 bg-secondary text-white relative overflow-hidden shadow-2xl shadow-primary/20 border border-white/5 rounded-2xl"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-50" />
              <h4 className="text-2xl font-bold tracking-tight mb-4 relative z-10 font-outfit uppercase">Dedicated to Your Mission.</h4>
              <p className="text-text-secondary text-sm leading-relaxed relative z-10 font-dm-sans">We don't just provide talent; we engineer success through deep strategic alignment and technical excellence.</p>
            </motion.div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-10 lg:p-14 border border-white/5 shadow-2xl rounded-3xl"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-1">Full Name</label>
                    <input type="text" className="w-full bg-primary/50 border border-white/10 px-6 py-4 text-white font-bold focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 rounded-xl" placeholder="John Walker" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-1">Email Address</label>
                    <input type="email" className="w-full bg-primary/50 border border-white/10 px-6 py-4 text-white font-bold focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 rounded-xl" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-1">Strategic Subject</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-primary/50 border border-white/10 px-6 py-4 text-white font-bold focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 rounded-xl" 
                    placeholder="Project Consultation" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-accent ml-1">Inquiry Brief</label>
                  <textarea rows="5" className="w-full bg-primary/50 border border-white/10 px-6 py-4 text-white font-bold focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 resize-none rounded-xl" placeholder="How can we help engineer your next vision?"></textarea>
                </div>
                <div className="flex justify-start">
                  <button className="w-max bg-accent hover:bg-white text-primary font-black py-4 px-12 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-accent/20 flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-xs rounded-full">
                    Submit <Send size={14} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border border-white/5 shadow-2xl overflow-hidden rounded-3xl"
        >
          <div className="w-full h-[450px] bg-secondary grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7456728096333!2d78.55523097516353!3d17.416801901614277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e84776ed93%3A0x63102377b5a83a4c!2sAwfis%20DSL%20Abacus%20IT%20Park!5e0!3m2!1sen!2sin!4v1713600000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hyderabad Tech Center Map"
            />
          </div>
          <div className="bg-secondary p-6 text-white flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-accent flex items-center justify-center text-primary rounded-lg">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">Awfis DSL Abacus IT Park</p>
                <p className="font-bold font-outfit tracking-tight uppercase">Hyderabad, Telangana 500039</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent">Operational Hours</p>
              <p className="font-bold font-outfit tracking-tight uppercase">Open 24 Hours</p>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest border-b border-accent text-accent hover:text-white hover:border-white transition-all pb-1">
              Get Directions
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
