import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Shield, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import contactImg from "../assets/contact.jpg";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service');
  const [subject, setSubject] = React.useState(
    service === 'hiring' ? 'Hiring / Talent Inquiry' : ''
  );
  const [formStatus, setFormStatus] = React.useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 2000);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      detail: "info@orbintix.com",
      sub: "Average response: 4 hours",
      color: "accent"
    },
    {
      icon: Phone,
      title: "Global Sales",
      detail: "+1 3072237343",
      sub: "Mon-Fri, 9am - 6pm MST"
    },
    {
      icon: MapPin,
      title: "Corporate HQ",
      detail: "30 N Gould St Ste R",
      sub: "Sheridan, WY 82801, USA"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <div className="bg-white min-h-screen font-outfit relative overflow-hidden text-primary">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 dot-grid opacity-[0.1]" />
      </div>

      {/* Modern Cinematic Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop"
            alt="Connectivity"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/10 to-transparent" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
        </div>

        <div className="absolute top-10 right-10 border-4 p-32 border-[#FFC107] text-white font-medium text-6xl">CONTACT US</div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-accent" />
              <span className="text-accent font-black text-[0.7rem] uppercase tracking-[0.5em]">
                Global Connectivity Framework
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-6xl text-white tracking-tighter uppercase leading-[0.85] mb-8"
              style={{ fontWeight: 100 }}
            >
              The Bridge to <br />
              <span className="font-black text-accent">Digital Excellence.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white/70 text-lg md:text-lg max-w-2xl leading-relaxed font-dm-sans mb-12 border-l-4 border-accent pl-8"
            >
              We don't just provide services; we build the high-performance connections that bridge your vision with global execution.
            </motion.p>

            {/* How We Help Connect - Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                {
                  title: "Bridging Talent",
                  desc: "Connecting world-class engineering squads with visionary projects."
                },
                {
                  title: "Architectural Alignment",
                  desc: "Connecting your business objectives with resilient technical design."
                },
                {
                  title: "Global Scale",
                  desc: "Connecting regional innovation with scalable global infrastructure."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="space-y-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <h4 className="text-white font-black text-[10px] uppercase tracking-widest">{feature.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>

        {/* Decorative Element */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -right-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none hidden xl:block"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent/20 rounded-full blur-sm" />
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 text-primary">Inquiry <span className="text-accent italic">Channels</span></h3>
              <p className="text-primary/60 font-medium">Select your preferred method of transmission to reach our specialized units.</p>
            </motion.div>

            {contactOptions.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-primary/5 hover:bg-primary transition-all duration-500 rounded-l-full cursor-default overflow-hidden"
              >
                <div className="flex gap-8 items-center relative z-10">
                  <div className="flex-shrink-0 w-16 h-16 bg-white border border-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-accent transition-all duration-500 shadow-lg">
                    <info.icon strokeWidth={1} size={28} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-2 group-hover:text-white transition-colors">{info.title}</h3>
                    <p className="text-md font-bold text-primary tracking-tight mb-1 group-hover:text-white transition-colors">{info.detail}</p>
                    <p className="text-primary/40 font-medium text-xs group-hover:text-white/60 transition-colors uppercase tracking-widest">{info.sub}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                  <info.icon strokeWidth={1} size={100} className="text-white" />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-12 bg-accent mt-12 rounded-sm relative overflow-hidden"
            >
              <MessageSquare className="absolute -bottom-10 -right-10 text-primary/10 w-48 h-48 rotate-12" />
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 text-primary">Strategic Advisory</h4>
              <p className="text-primary/70 leading-relaxed font-medium">Our senior partners are available for direct technological consultation and high-level project scaling strategies.</p>
              <button className="mt-8 flex items-center gap-3 text-primary font-black uppercase text-[10px] tracking-[0.3em] hover:translate-x-2 transition-transform">
                Request Consultation <ArrowRight size={14} />
              </button>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 lg:p-20 border border-primary/20 relative overflow-hidden group"
            >
              {/* Reference Yellow Border Offset for Form */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-accent -mr-2 -mt-2 transition-all group-hover:mr-0 group-hover:mt-0" />

              <div className="relative z-10">
                <div className="mb-12">
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">Initiate <span className="text-accent italic">Briefing</span></h2>
                  <p className="text-primary/50 text-sm font-medium tracking-wide">CONFIDENTIAL TRANSMISSION CHANNEL</p>
                </div>

                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <Send size={40} />
                      </div>
                      <h2 className="text-5xl font-medium uppercase tracking-tighter mb-4">Transmission Complete</h2>
                      <p className="text-primary/60 mb-12 font-medium">Your intel has been received. Our units will respond within 24 operational hours.</p>
                      <button
                        onClick={() => setFormStatus('idle')}
                        className="px-12 py-5 bg-primary text-white font-black uppercase text-[11px] tracking-[0.4em] rounded-sm hover:bg-accent hover:text-primary transition-all shadow-xl"
                      >
                        New Transmission
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-12"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-focus-within:text-accent transition-colors">Identity</label>
                          <input
                            required
                            type="text"
                            placeholder="OPERATIVE NAME"
                            className="w-full bg-transparent border-b-2 border-primary/10 px-0 py-4 text-primary font-black uppercase tracking-wider focus:outline-none focus:border-accent transition-all placeholder:text-primary/10 text-sm"
                          />
                        </div>
                        <div className="group space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-focus-within:text-accent transition-colors">Digital Node</label>
                          <input
                            required
                            type="email"
                            placeholder="EMAIL@ENTERPRISE.COM"
                            className="w-full bg-transparent border-b-2 border-primary/10 px-0 py-4 text-primary font-black uppercase tracking-wider focus:outline-none focus:border-accent transition-all placeholder:text-primary/10 text-sm"
                          />
                        </div>
                      </div>

                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-focus-within:text-accent transition-colors">Mission Subject</label>
                        <input
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="NATURE OF INQUIRY"
                          className="w-full bg-transparent border-b-2 border-primary/10 px-0 py-4 text-primary font-black uppercase tracking-wider focus:outline-none focus:border-accent transition-all placeholder:text-primary/10 text-sm"
                        />
                      </div>

                      <div className="group space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-focus-within:text-accent transition-colors">Detailed Intel</label>
                        <textarea
                          rows="4"
                          required
                          placeholder="DESCRIBE YOUR PROJECT REQUIREMENTS OR STRATEGIC GOALS..."
                          className="w-full bg-transparent border-b-2 border-primary/10 px-0 py-4 text-primary font-black uppercase tracking-wider focus:outline-none focus:border-accent transition-all placeholder:text-primary/10 resize-none text-sm"
                        ></textarea>
                      </div>

                      <div className="flex justify-end pt-8">
                        <button
                          disabled={formStatus === 'sending'}
                          className="group relative px-16 py-6 bg-primary text-white font-black uppercase text-[12px] tracking-[0.4em] rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 disabled:opacity-50 shadow-2xl"
                        >
                          <span className="relative z-10 flex items-center gap-4">
                            {formStatus === 'sending' ? 'TRANSMITTING...' : 'INITIATE SEND'}
                            <Send size={18} className={formStatus === 'sending' ? 'animate-bounce' : 'group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform'} />
                          </span>
                          <div className="absolute inset-0 bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                          {/* Inner text for hover state */}
                          <span className="absolute inset-0 flex items-center justify-center text-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 z-20 font-black">
                            {formStatus === 'sending' ? 'TRANSMITTING...' : 'INITIATE SEND'}
                          </span>
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 relative" data-aos="fade-up">
          {/* Reference Style Background Box */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-sm overflow-hidden border border-primary/10 shadow-2xl relative group h-[600px]"
          >
            <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.191763784013!2d-106.9558914!3d44.79612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc5c610497%3A0x6b772439121d589e!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801!5e0!3m2!1sen!2sus!4v1713600000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sheridan WY HQ"
              />
            </div>

            {/* Floating Map Overlay */}
            <div className="absolute top-10 left-10 max-w-sm bg-white p-10 border-l-8 border-accent shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-20px] group-hover:translate-x-0">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4">Command Center</h4>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-primary">Sheridan, WY</h3>
              <p className="text-primary/60 font-medium mb-8">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://maps.google.com/?q=30+N+Gould+St+Ste+R+Sheridan+WY+82801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group/link border-b border-primary/10 pb-2 hover:border-accent transition-colors"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Get Directions</span>
                  <ChevronRight size={16} className="text-accent group-hover/link:translate-x-2 transition-transform" />
                </a>
                <button className="flex items-center justify-between group/link border-b border-primary/10 pb-2 hover:border-accent transition-colors text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Copy Coordinates</span>
                  <ChevronRight size={16} className="text-accent group-hover/link:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
