import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CareersHero from "../../Careers/CareersHero";
import CultureSection from "../../Careers/CultureSection";
import BenefitsSection from "../../Careers/BenefitsSection";
import FilterBar from "../../Careers/FilterBar";
import ApplyModal from "../../Careers/ApplyModal";
import JobCard from "../../Careers/JobCard";
import Pagination from "../../components/common/Pagination";
import api from "../../services/api";

const JOBS_PER_PAGE = 6;

const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
};

export default function CareersPage() {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({ location: [], type: [], level: [] });
    const [view, setView] = useState("grid");
    const [sort, setSort] = useState("latest");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch jobs from backend API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const res = await api.get('/jobs/', { params: { company: 'orbintix', limit: 100 } });
                const data = res.data;
                const rawJobs = Array.isArray(data) ? data : (data.jobs || data.data || []);
                
                const processed = rawJobs.map(job => {
                    const cleanDesc = stripHtml(job.description);
                    return {
                        id: job._id || job.id,
                        title: job.job_title || job.role || job.title || 'Untitled Role',
                        location: job.location || 'Remote',
                        type: job.employment_type || job.jobType || job.type || 'Full-time',
                        level: job.experience || job.level || 'Entry Level',
                        category: job.department || job.category || 'Engineering',
                        description: cleanDesc,
                        postedDate: job.jobPostedDate || (job.createdAt ? new Date(job.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]),
                        company_name: job.company_name || job.company || 'wysele',
                        status: job.status || 'Published',
                        rawDescription: job.description // keep original HTML for detail page lookup if needed
                    };
                });
                
                // Filter only published jobs belonging to orbintix
                const orbintixJobs = processed.filter(j => 
                    j.company_name.toLowerCase().includes('orbintix') && 
                    (j.status.toLowerCase() === 'published' || j.status.toLowerCase() === 'active')
                );
                
                setJobs(orbintixJobs);
            } catch (err) {
                console.error("Error fetching jobs from API:", err);
                setJobs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    // Extract available filters from data
    const availableFilters = useMemo(() => {
        return {
            location: [...new Set(jobs.map(j => j.location))],
            type: [...new Set(jobs.map(j => j.type))],
            level: [...new Set(jobs.map(j => j.level))]
        };
    }, [jobs]);

    // Filtering & Search Logic
    const filteredJobs = useMemo(() => {
        return jobs
            .filter(job => {
                const matchesSearch =
                    job.title.toLowerCase().includes(search.toLowerCase()) ||
                    job.description.toLowerCase().includes(search.toLowerCase()) ||
                    job.category.toLowerCase().includes(search.toLowerCase());

                const matchesLocation = filters.location.length === 0 || filters.location.includes(job.location);
                const matchesType = filters.type.length === 0 || filters.type.includes(job.type);
                const matchesLevel = filters.level.length === 0 || filters.level.includes(job.level);

                return matchesSearch && matchesLocation && matchesType && matchesLevel;
            })
            .sort((a, b) => {
                if (sort === "alpha") return a.title.localeCompare(b.title);
                if (sort === "level") {
                    const seniority = { "Junior": 1, "Mid-level": 2, "Senior": 3, "Lead": 4, "Entry Level": 1, "Mid Level": 2, "Senior Level": 3, "Lead / Manager": 4 };
                    return (seniority[b.level] || 0) - (seniority[a.level] || 0);
                }
                // Date sort (safe check for Mongo string IDs or numeric IDs)
                return new Date(b.postedDate) - new Date(a.postedDate) || String(b.id).localeCompare(String(a.id));
            });
    }, [jobs, search, filters, sort]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
    const currentJobs = filteredJobs.slice(
        (currentPage - 1) * JOBS_PER_PAGE,
        currentPage * JOBS_PER_PAGE
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [search, filters]);

    return (
        <div className="bg-white min-h-screen font-outfit relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 dot-grid opacity-[0.1]" />
            </div>

            <CareersHero />

            {/* <CultureSection /> */}

            {/* Jobs Section */}
            <div id="open-positions" className="scroll-mt-[100px] bg-white py-14 relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4 inline-block">Global Opportunities</span>
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <h3 className="text-4xl md:text-5xl font-black text-primary tracking-tighter uppercase leading-[0.9]">Open <span className="text-accent italic">Positions</span></h3>
                            <p className="text-primary font-medium font-dm-sans uppercase text-[14px] tracking-[0.2em]">Active Roles: <span className="text-accent font-black">{filteredJobs.length}</span></p>
                        </div>
                    </motion.div>
                </div>


                <div data-aos="fade-up">
                    <FilterBar
                        search={search}
                        setSearch={setSearch}
                        filters={filters}
                        setFilters={setFilters}
                        view={view}
                        setView={setView}
                        sort={sort}
                        setSort={setSort}
                        availableFilters={availableFilters}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 py-10" data-aos="fade-up">
                    {loading ? (
                        <div className={`grid ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-primary/5 border border-primary/10 rounded-3xl h-80 animate-pulse" />
                            ))}
                        </div>
                    ) : currentJobs.length > 0 ? (
                        <>
                            <motion.div
                                layout
                                className={`grid ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}
                            >
                                <AnimatePresence mode="popLayout">
                                    {currentJobs.map(job => (
                                        <JobCard
                                            key={job.id}
                                            job={job}
                                            view={view}
                                            onApply={(job) => setSelectedJob(job)}
                                        />
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </>
                    ) : (
                        <div className="text-center py-32 border border-dashed border-primary/10 rounded-[3rem] bg-primary/5">
                            <div className="text-primary/40 mb-6 font-dm-sans uppercase font-black text-xs tracking-widest">No positions correlate with your current search.</div>
                            <button
                                onClick={() => { setSearch(""); setFilters({ location: [], type: [], level: [] }); }}
                                className="text-accent font-black uppercase text-xs tracking-widest border-b border-accent/30 pb-2 hover:border-accent transition-all"
                            >
                                Reset full directory
                            </button>
                        </div>
                    )}
                </div>
            </div>


            <ApplyModal
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                job={selectedJob}
            />
        </div>
    );
}
