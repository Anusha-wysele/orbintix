import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2, Loader2, Send } from "lucide-react";

export default function ApplyModal({ job, isOpen, onClose }) {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success

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
            className="relative w-full max-w-2xl bg-white border border-primary/10 rounded-sm overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] font-outfit"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

            <div className="p-8 md:p-12 relative z-10">
              <button
                onClick={onClose}
                className="absolute top-8 right-8 p-3 rounded-full bg-primary/5 border border-primary/10 text-primary/40 hover:text-primary hover:bg-primary/10 transition-all"
              >
                <X size={20} />
              </button>

              <div className="mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">How to Apply</span>
                <h2 className="text-xl font-medium text-primary mt-3 uppercase tracking-tighter leading-none">{job?.title}</h2>
                <div className="flex gap-4 mt-3">
                  <p className="text-primary/40 text-xs font-bold uppercase tracking-widest">{job?.location}</p>
                  <span className="w-1 h-1 rounded-full bg-primary/20 my-auto" />
                  <p className="text-primary/40 text-xs font-bold uppercase tracking-widest">{job?.type}</p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="p-10 bg-primary/5 rounded-sm border border-primary/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-accent -mr-1 -mt-1" />

                  <p className="text-primary/70 text-sm leading-relaxed font-medium mb-4">
                    We have moved to a direct transmission process for all career inquiries. To ensure your application is reviewed by the appropriate unit, please follow these steps:
                  </p>

                  <ul className="space-y-2 mb-6">
                    {[
                      "Attach your latest Resume/CV and Portfolio.",
                      "Mention the job title in your email subject.",
                      "Send all documents to the address below."
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center text-[10px] font-black shrink-0 mt-1">{i + 1}</div>
                        <span className="text-primary font-medium text-xs uppercase tracking-tight">{step}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white p-8 rounded-sm border border-primary/5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-2 block">Application Portal</span>
                      <a href="mailto:info@orbintx.com" className="text-lg font-medium text-primary hover:text-accent transition-colors">info@orbintx.com</a>
                    </div>
                    <a
                      href={`mailto:info@orbintx.com?subject=Application for ${job?.title}`}
                      className="px-10 py-5 bg-primary text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-accent hover:text-primary transition-all flex items-center gap-3 shadow-2xl"
                    >
                      Send Resume <Send size={14} />
                    </a>
                  </div>
                </div>

                <p className="text-center text-primary/30 text-[10px] font-black uppercase tracking-[0.3em]">
                  Confidentiality Guaranteed • Global Recruitment Framework
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

