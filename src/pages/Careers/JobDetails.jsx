import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MapPin, Clock, Briefcase, Calendar, ArrowLeft, Send, Shield, Globe, Rocket, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ApplyModal from '../../Careers/ApplyModal';
import api from '../../services/api';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/jobs/${id}`);
        const data = res.data;
        
        if (data) {
          setJob({
            id: data._id || data.id,
            title: data.job_title || data.role || data.title || 'Untitled Role',
            location: data.location || 'Remote',
            type: data.employment_type || data.jobType || data.type || 'Full-time',
            level: data.experience || data.level || 'Entry Level',
            category: data.department || data.category || 'Engineering',
            description: data.description || '',
            postedDate: data.jobPostedDate || (data.createdAt ? new Date(data.createdAt).toLocaleDateString() : new Date().toLocaleDateString()),
            responsibilities: data.responsibilities || []
          });
        } else {
          setJob(null);
        }
      } catch (err) {
        console.error("Error fetching job details from API:", err);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-1 bg-primary/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center font-outfit">
        <h2 className="text-5xl font-black text-primary uppercase tracking-tighter mb-4">Job Not Found</h2>
        <p className="text-primary/40 font-bold uppercase tracking-widest text-sm mb-12">The position has been archived or filled.</p>
        <Link to="/careers" className="px-10 py-5 bg-primary text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-accent hover:text-primary transition-all flex items-center gap-3">
          <ArrowLeft size={16} /> Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-outfit relative overflow-hidden text-primary">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 dot-grid opacity-[0.1]" />
      </div>

      {/* Modern Cinematic Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Office"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link to="/careers" className="inline-flex items-center gap-2 text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-8 hover:translate-x-[-8px] transition-transform">
              <ArrowLeft size={14} /> Back to directory
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-accent" />
              <span className="text-accent font-black text-[0.7rem] uppercase tracking-[0.5em]">
                {job.category} UNIT
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl text-white tracking-tighter uppercase leading-[0.85] mb-8 font-black">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-8 py-8 border-t border-white/10 mt-12">
               {[
                 { icon: MapPin, label: "Location", value: job.location },
                 { icon: Briefcase, label: "Type", value: job.type },
                 { icon: Clock, label: "Seniority", value: job.level },
                 { icon: Calendar, label: "Posted", value: job.postedDate }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent">
                     <item.icon size={18} />
                   </div>
                   <div>
                     <p className="text-[8px] font-black uppercase tracking-widest text-white/40">{item.label}</p>
                     <p className="text-white font-bold text-sm uppercase tracking-tight">{item.value}</p>
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Job Details */}
          <div className="lg:col-span-8 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-primary/5 rounded-[3rem] border border-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-accent -mr-1 -mt-1" />
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">Mission <span className="text-accent italic">Overview</span></h3>
              <div className="text-primary/70 leading-relaxed font-medium space-y-6 text-lg">
                {job.description && (job.description.trim().startsWith('<') || job.description.includes('</')) ? (
                  <div dangerouslySetInnerHTML={{ __html: job.description }} />
                ) : (
                  <p>{job.description}</p>
                )}
                {!job.description && (
                  <p>
                    We are looking for a dedicated professional who is passionate about delivering high-quality solutions. 
                    In this role, you will collaborate with cross-functional teams to design, develop, and implement strategies 
                    that align with our clients' business goals.
                  </p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-white border border-primary/10 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">Operational <span className="text-accent italic">Requirements</span></h3>
              <ul className="space-y-6">
                {(job.responsibilities && job.responsibilities.length > 0
                  ? job.responsibilities
                  : [
                      "Proven experience in a similar role within the technology sector.",
                      "Strong analytical and problem-solving skills.",
                      "Excellent communication and interpersonal abilities.",
                      "Ability to work effectively in a fast-paced environment.",
                      "Relevant certifications or specialized training is a plus."
                    ]
                ).map((req, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={14} className="text-primary" />
                    </div>
                    <span className="text-primary font-bold uppercase tracking-tight text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-primary text-white rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
              <Shield className="absolute -bottom-10 -right-10 text-white/5 w-48 h-48 rotate-12" />
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Why <span className="text-accent italic">Orbintix?</span></h4>
              <ul className="space-y-6 relative z-10">
                {[
                  { icon: Globe, text: "Global Impact Projects" },
                  { icon: Rocket, text: "Accelerated Growth Path" },
                  { icon: Shield, text: "Elite Security Culture" }
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent">
                      <benefit.icon size={18} />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-[10px]">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setIsApplyModalOpen(true)}
                className="w-full mt-12 py-6 bg-accent text-primary font-black uppercase text-[11px] tracking-[0.3em] rounded-2xl hover:scale-105 transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-3"
              >
                INITIATE APPLICATION <Send size={14} />
              </button>
            </motion.div>

            <div className="p-10 border border-primary/10 rounded-[3rem] bg-primary/5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6">Internal Transmission</h4>
              <p className="text-primary/50 text-sm font-medium mb-8 uppercase tracking-widest">Share this mission profile with your network.</p>
              <div className="flex flex-col gap-4">
                {['LinkedIn', 'Twitter', 'Direct Link'].map((platform) => (
                  <button key={platform} className="flex items-center justify-between group border-b border-primary/10 pb-3 hover:border-accent transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{platform}</span>
                    <div className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                      <Send size={10} className="-rotate-45" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
        job={job} 
      />
    </div>
  );
};

export default JobDetails;

