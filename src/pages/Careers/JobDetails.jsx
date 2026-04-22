import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MapPin, Clock, Briefcase, Calendar, ArrowLeft, Send } from 'lucide-react';
import jobsData from '../../data/jobs.json';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const foundJob = jobsData.find((j) => j.id === parseInt(id));
    setJob(foundJob);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#000075]"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Job Not Found</h2>
        <p className="mt-4 text-gray-600">The position you are looking for is no longer available.</p>
        <Link to="/careers" className="mt-8 text-[#000075] font-bold flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/careers" className="text-slate-500 hover:text-[#000075] flex items-center gap-2 transition-colors">
            <ArrowLeft size={16} /> Back to Careers
          </Link>
        </nav>

        {/* Header Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#000075] text-sm font-bold mb-4">
                {job.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-[#000047] tracking-tight">{job.title}</h1>
              
              <div className="flex flex-wrap gap-4 mt-6 text-slate-600">
                <div className="flex items-center gap-1.5">
                  <MapPin size={18} className="text-[#1ABC9C]" />
                  <span className="text-sm font-medium">{job.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase size={18} className="text-[#1ABC9C]" />
                  <span className="text-sm font-medium">{job.type}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={18} className="text-[#1ABC9C]" />
                  <span className="text-sm font-medium">{job.level}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={18} className="text-[#1ABC9C]" />
                  <span className="text-sm font-medium">{job.postedDate}</span>
                </div>
              </div>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-10 py-4 bg-[#000075] text-white rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Apply Now <Send size={18} />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-[#000047] mb-6">Job Description</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {job.description}
                {"\n\n"}
                We are looking for a dedicated professional who is passionate about delivering high-quality solutions. 
                In this role, you will collaborate with cross-functional teams to design, develop, and implement strategies 
                 that align with our clients' business goals.
                {"\n\n"}
                Key Responsibilities:
                • Collaborate with stakeholders to understand project requirements.
                • Develop and maintain scalable solutions using industry best practices.
                • Participate in code reviews and contribute to architectural discussions.
                • Stay updated with the latest industry trends and technologies.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-[#000047] mb-6">Requirements</h2>
              <ul className="space-y-4 text-slate-600 list-disc pl-5">
                <li>Proven experience in a similar role within the technology sector.</li>
                <li>Strong analytical and problem-solving skills.</li>
                <li>Excellent communication and interpersonal abilities.</li>
                <li>Ability to work effectively in a fast-paced, collaborative environment.</li>
                <li>Relevant certifications or specialized training is a plus.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#000047] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Why Orbintix?</h3>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1ABC9C] font-bold">✓</span>
                    <span>Innovative work environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1ABC9C] font-bold">✓</span>
                    <span>Growth & learning opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1ABC9C] font-bold">✓</span>
                    <span>Comprehensive health benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1ABC9C] font-bold">✓</span>
                    <span>Flexible work arrangements</span>
                  </li>
                </ul>
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#1ABC9C] rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-[#000047] mb-4">Share this position</h3>
              <div className="flex gap-4">
                <button className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">LinkedIn</button>
                <button className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">Twitter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
