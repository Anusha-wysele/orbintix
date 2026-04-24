import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, Calendar, User, MessageSquare, ArrowRight, Tag } from 'lucide-react';
import blogData from '../data/blog.json';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ['All', 'AI', 'Cloud', 'Hiring', 'Development', 'Salesforce', 'Consulting'];

  const filteredPosts = useMemo(() => {
    setCurrentPage(1); // Reset to page 1 when filters change
    return blogData.posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const recentPosts = blogData.posts.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
    <div className="bg-white min-h-screen font-outfit text-primary">

      {/* 🔷 MODERN CINEMATIC HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            alt="Insights & Resources"
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
          <div className="absolute inset-0 dot-grid opacity-[0.1]" />
        </div>

        <div className="absolute top-10 right-10 border-4 p-24 border-accent text-white font-medium text-4xl hidden lg:block opacity-20 uppercase tracking-[0.5em] rotate-90 origin-right translate-y-32">
          INSIGHTS
        </div>

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
                Knowledge & Transformation
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-7xl text-white tracking-tighter uppercase leading-[0.85] mb-8"
              style={{ fontWeight: 100 }}
            >
              Expert <span className="font-black text-accent">Perspectives</span> <br />
              <span className="text-3xl md:text-5xl">on Digital Excellence.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-dm-sans mb-12 border-l-4 border-accent pl-8"
            >
              Stay ahead in the evolving tech landscape with expert perspectives on IT consulting,
              software development, cloud solutions, and global talent hiring.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="#blog-feed"
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-accent text-primary font-black uppercase text-[11px] tracking-[0.3em] transition-all hover:scale-105 active:scale-95"
              >
                Explore Publications
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🔷 MAIN CONTENT SECTION */}
      <section id="blog-feed" className="py-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10" />

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* BLOG POSTS AREA (70%) */}
            <div className="lg:col-span-8">

              {/* CATEGORY FILTER */}
              <div className="flex flex-wrap items-center gap-3 mb-12" data-aos="fade-up">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border
                      ${selectedCategory === cat
                        ? "bg-primary border-primary text-accent shadow-xl"
                        : "bg-white border-primary/10 text-primary/60 hover:border-accent hover:text-accent"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <AnimatePresence mode="popLayout">
                  {currentPosts.map((post, index) => (
                    <motion.article
                      layout
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group bg-white border border-primary/5 hover:border-accent/30 transition-all duration-700 flex flex-col relative"
                    >
                      {/* Accent Line on Top */}
                      <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700" />

                      {/* Image Container */}
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-40 transition-opacity" />

                        <div className="absolute bottom-4 left-4">
                          <span className="bg-accent text-primary text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 shadow-2xl">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="p-8 flex-grow flex flex-col">
                        <div className="flex flex-wrap items-center gap-4 text-[10px] text-primary/40 font-black uppercase tracking-widest mb-6">
                          <div className="flex items-center gap-2">
                            <User size={12} className="text-accent" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={12} className="text-accent" />
                            {post.date}
                          </div>
                        </div>

                        <h3 className="text-xl font-black leading-tight mb-4 group-hover:text-accent transition-colors uppercase tracking-tight">
                          {post.title}
                        </h3>
                        <p className="text-primary/60 text-sm leading-relaxed mb-8 font-dm-sans line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto pt-6 border-t border-primary/5 flex items-center justify-between">
                          <button className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.3em] group/btn transition-colors hover:text-accent">
                            Access Intel
                            <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {/* 🔷 PAGINATION */}
              <div className="flex items-center justify-start gap-3 mt-16">
                {[...Array(Math.max(totalPages, 1))].map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => {
                        if (pageNum <= totalPages) {
                          setCurrentPage(pageNum);
                          window.scrollTo({ top: document.getElementById('blog-feed').offsetTop - 100, behavior: 'smooth' });
                        }
                      }}
                      className={`w-12 h-12 flex items-center justify-center text-[11px] font-black transition-all duration-500
                        ${isActive
                          ? "bg-accent text-primary shadow-xl"
                          : "bg-primary/5 text-primary hover:bg-accent hover:text-primary"}`}
                    >
                      {String(pageNum).padStart(2, '0')}
                    </button>
                  );
                })}
                {totalPages > 1 && (
                  <button
                    onClick={() => {
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className="w-12 h-12 flex items-center justify-center bg-primary text-white hover:bg-accent hover:text-primary transition-all duration-500 shadow-lg"
                  >
                    <ChevronRight size={18} />
                  </button>
                )}
              </div>

              {filteredPosts.length === 0 && (
                <div className="py-32 text-center bg-primary/5 border border-primary/10">
                  <p className="text-primary/40 font-black uppercase tracking-[0.4em] text-xs">No Intel Found Matching Criteria</p>
                </div>
              )}
            </div>

            {/* SIDEBAR SECTION (30%) */}
            <aside className="lg:col-span-4 space-y-12" data-aos="fade-left">

              {/* Search Box */}
              <div className="bg-white p-10 border border-primary/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/20 group-hover:border-accent transition-colors" />

                <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-accent" />
                  Global Search
                </h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ENTER QUERY..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-primary/5 border-b-2 border-primary/10 px-0 py-4 text-xs font-black uppercase tracking-wider focus:outline-none focus:border-accent transition-all placeholder:text-primary/20"
                  />
                  <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-accent transition-colors" size={18} />
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-primary p-10 relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

                <h4 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-accent" />
                  Latest Intel
                </h4>
                <div className="space-y-8">
                  {recentPosts.map(post => (
                    <div key={post.id} className="flex gap-5 group cursor-pointer">
                      <div className="w-16 h-16 flex-shrink-0 bg-white/5 border border-white/10 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[9px] font-black text-accent uppercase tracking-widest mb-1">{post.date}</span>
                        <h5 className="text-xs font-black text-white leading-tight group-hover:text-accent transition-colors line-clamp-2 uppercase tracking-wide">
                          {post.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services List / Advisory */}
              <div className="p-10 bg-accent relative overflow-hidden group">
                <MessageSquare className="absolute -bottom-10 -right-10 text-primary/10 w-40 h-40 rotate-12" />
                <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-primary">Strategic Units</h4>
                <ul className="space-y-5 relative z-10">
                  {['IT Consulting', 'Web Architecture', 'Cloud Infrastructure', 'Talent Solutions', 'Salesforce Mastery'].map(service => (
                    <li key={service} className="group/item flex items-center justify-between cursor-pointer border-b border-primary/10 pb-4 last:border-0 last:pb-0 hover:translate-x-2 transition-transform">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/80 group-hover/item:text-primary">{service}</span>
                      <ChevronRight size={14} className="text-primary/30 group-hover/item:text-primary transition-colors" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white p-10 border border-primary/10">
                <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-accent" />
                  Taxonomy
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Cloud', 'AI', 'Staffing', 'Architecture', 'Scale', 'Nexus'].map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-primary/5 text-[9px] font-black uppercase tracking-[0.2em] text-primary/50 hover:bg-primary hover:text-accent transition-all cursor-pointer border border-transparent hover:border-accent"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
