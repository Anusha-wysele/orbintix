import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2, Loader2 } from "lucide-react";

export default function ApplyModal({ job, isOpen, onClose }) {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-secondary border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] font-outfit"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

            <div className="p-8 md:p-12 relative z-10">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>

              {formState === "success" ? (
                <div className="py-12 text-center">
                  <div className="flex justify-center mb-10">
                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-accent shadow-[0_0_40px_rgba(0,191,255,0.2)]">
                      <CheckCircle2 size={48} />
                    </div>
                  </div>
                  <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Application Sent!</h2>
                  <p className="text-text-secondary mb-12 max-w-sm mx-auto font-dm-sans">
                    Thanks for applying for the <span className="text-white font-bold">{job?.title}</span> role. Our elite squad will review your profile and get back to you soon.
                  </p>
                  <button 
                    onClick={onClose}
                    className="group relative px-12 py-5 bg-accent text-primary font-black uppercase text-xs tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,191,255,0.2)]"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-12">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Apply Now</span>
                    <h2 className="text-4xl font-black text-white mt-3 uppercase tracking-tighter leading-none">{job?.title}</h2>
                    <div className="flex gap-4 mt-3">
                        <p className="text-text-secondary text-xs font-bold uppercase tracking-widest">{job?.location}</p>
                        <span className="w-1 h-1 rounded-full bg-white/20 my-auto" />
                        <p className="text-text-secondary text-xs font-bold uppercase tracking-widest">{job?.type}</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-dm-sans"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-dm-sans"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">Resume / CV</label>
                      <div className="relative group">
                        <input
                          required
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        <div className={`w-full bg-white/5 border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center transition-all ${formData.resume ? "border-accent bg-accent/5" : "border-white/10 group-hover:border-accent/30 group-hover:bg-white/10"}`}>
                          {formData.resume ? (
                            <div className="text-center animate-in fade-in zoom-in duration-300">
                              <CheckCircle2 size={32} className="text-accent mx-auto mb-3" />
                              <span className="text-sm text-white font-bold">{formData.resume.name}</span>
                            </div>
                          ) : (
                            <div className="text-center">
                              <Upload size={32} className="text-white/20 mx-auto mb-3 group-hover:text-accent transition-colors" />
                              <span className="text-sm text-white/40 font-medium font-dm-sans">Click or drag PDF to upload</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary ml-1">Cover Letter (Optional)</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us why you're a great fit..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-dm-sans resize-none"
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      />
                    </div>

                    <button
                      disabled={formState === "submitting"}
                      type="submit"
                      className="w-full py-6 bg-accent text-primary font-black uppercase text-xs tracking-widest rounded-2xl transition-all hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,191,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {formState === "submitting" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
