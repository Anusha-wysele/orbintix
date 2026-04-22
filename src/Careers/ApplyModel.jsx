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
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-2xl font-lato"
          >
            <div className="p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-[#0B1C2C] transition-colors"
              >
                <X size={20} />
              </button>

              {formState === "success" ? (
                <div className="py-12 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37]">
                      <CheckCircle2 size={48} />
                    </div>
                  </div>
                  <h2 className="text-3xl font-black text-[#0B1C2C] mb-4 font-roboto-condensed">Application Sent!</h2>
                  <p className="text-slate-500 mb-10 max-w-sm mx-auto">
                    Thanks for applying for the <strong>{job?.title}</strong> role. Our team will review your application and get back to you soon.
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-12 py-4 bg-[#0B1C2C] text-white font-black uppercase text-xs tracking-widest rounded-full transition-all hover:bg-[#D4AF37]"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] font-roboto-condensed">Apply Now</span>
                    <h2 className="text-3xl font-black text-[#0B1C2C] mt-2 font-roboto-condensed leading-tight">{job?.title}</h2>
                    <p className="text-slate-500 text-sm mt-2">{job?.location} • {job?.type}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[#0B1C2C] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#0B1C2C] ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[#0B1C2C] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Resume / CV</label>
                      <div className="relative group">
                        <input
                          required
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        <div className={`w-full bg-transparent border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center transition-all group-hover:border-[#D4AF37]/50 ${formData.resume ? "border-[#D4AF37]/30 bg-[#D4AF37]/5" : ""}`}>
                          {formData.resume ? (
                            <div className="text-center">
                              <CheckCircle2 size={24} className="text-[#D4AF37] mx-auto mb-2" />
                              <span className="text-sm text-[#0B1C2C] font-medium">{formData.resume.name}</span>
                            </div>
                          ) : (
                            <div className="text-center">
                              <Upload size={24} className="text-gray-500 mx-auto mb-2 group-hover:text-[#D4AF37]" />
                              <span className="text-sm text-gray-400">Click or drag PDF to upload</span>
                              <Upload size={24} className="text-slate-400 mx-auto mb-2 group-hover:text-[#D4AF37]" />
                              <span className="text-sm text-slate-400">Click or drag PDF to upload</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Cover Letter (Optional)</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us why you're a great fit..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-[#0B1C2C] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] resize-none"
                          value={formData.coverLetter}
                          onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        />
                      </div>

                    <button
                      disabled={formState === "submitting"}
                      type="submit"
                      className="w-full py-4 bg-[#D4AF37] text-[#0B1C2C] font-black uppercase text-xs tracking-widest rounded-xl transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 font-roboto-condensed"
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
