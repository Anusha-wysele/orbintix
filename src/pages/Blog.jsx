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

  return (
    <div className="bg-white min-h-screen font-sans text-[#292929]">
      
      {/* 🔷 HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark & Teal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-[#00e5ff]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-[#FF6B00] font-black uppercase tracking-[0.4em] text-xs mb-4">
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Expert Insights on IT Consulting & Digital Transformation
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Stay ahead in the evolving tech landscape with expert perspectives on IT consulting, 
              software development, cloud solutions, and global talent hiring.
            </p>
            <a 
              href="#blog-feed"
              className="inline-flex items-center gap-3 bg-[#FF6B00] text-white px-8 py-4 rounded-none font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 active:scale-95"
            >
              Explore Blogs
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 🔷 MAIN CONTENT SECTION */}
      <section id="blog-feed" className="py-20 lg:py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-6 lg:px-20">
          
          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 border shadow-sm
                  ${selectedCategory === cat 
                    ? "bg-[#00e5ff] border-[#00e5ff] text-white" 
                    : "bg-white border-gray-200 text-[#292929] hover:border-[#00e5ff]"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-16">
            
            {/* BLOG POSTS GRID (70%) */}
            <div className="lg:col-span-12 xl:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <AnimatePresence mode="popLayout">
                  {currentPosts.map((post, index) => (
                    <motion.article
                      layout
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-white rounded-none shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                    >
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Teal Hover Overlay */}
                        <div className="absolute inset-0 bg-[#00e5ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                        
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#00e5ff] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="p-8 flex-grow flex flex-col">
                        <div className="flex items-center gap-6 text-[11px] text-[#616161] font-bold uppercase tracking-wider mb-4">
                          <div className="flex items-center gap-2">
                            <User size={14} className="text-[#00e5ff]" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-[#00e5ff]" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <MessageSquare size={14} className="text-[#00e5ff]" />
                            {post.comments}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-[#00e5ff] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#616161] text-sm leading-relaxed mb-8 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                          <button className="flex items-center gap-3 text-[#292929] text-[11px] font-black uppercase tracking-widest hover:text-[#00e5ff] transition-colors group/link">
                            Read More
                            <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-2" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {/* 🔷 PAGINATION (Always Visible) */}
              <div className="flex items-center justify-start gap-3 mt-8">
                {[...Array(Math.max(totalPages, 3))].map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => {
                        if (pageNum <= totalPages) {
                          setCurrentPage(pageNum);
                          document.getElementById('blog-feed')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`w-12 h-12 flex items-center justify-center text-xs font-black transition-all duration-300
                        ${isActive 
                          ? "bg-[#00e5ff] text-white" 
                          : "bg-[#0A192F] text-white hover:bg-[#00e5ff]"}`}
                    >
                      {String(pageNum).padStart(2, '0')}
                    </button>
                  );
                })}
                <button 
                  onClick={() => {
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className="w-12 h-12 flex items-center justify-center bg-[#0A192F] text-white hover:bg-[#00e5ff] transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {filteredPosts.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-gray-400 font-bold uppercase tracking-[0.2em]">No posts found matching your criteria</p>
                </div>
              )}
            </div>

            {/* SIDEBAR SECTION (30%) */}
            <aside className="lg:col-span-12 xl:col-span-3 space-y-12">
              
              {/* Search Box */}
              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#FF6B00]" />
                  Search
                </h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Type to search..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-50 border border-transparent focus:border-[#00e5ff] focus:bg-white px-5 py-4 text-sm outline-none transition-all pr-12"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#00e5ff]" />
                  Recent Posts
                </h4>
                <div className="space-y-6">
                  {recentPosts.map(post => (
                    <div key={post.id} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-[#00e5ff] uppercase tracking-wider mb-1">{post.date}</span>
                        <h5 className="text-sm font-bold leading-snug group-hover:text-[#00e5ff] transition-colors line-clamp-2">
                          {post.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services List */}
              <div className="bg-[#292929] p-8 text-white">
                <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#00e5ff]" />
                  Our Services
                </h4>
                <ul className="space-y-4">
                  {['IT Consulting', 'Web Development', 'Product Development', 'IT Staffing & US Recruitment', 'Salesforce Solutions'].map(service => (
                    <li key={service} className="group flex items-center justify-between cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0 hover:text-[#00e5ff] transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest">{service}</span>
                      <ChevronRight size={14} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#00e5ff]" />
                  Popluar Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Cloud', 'AI', 'Hiring', 'Development', 'Startup', 'Enterprise'].map(tag => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-500 border border-gray-100 cursor-pointer hover:bg-[#00e5ff] hover:text-white hover:border-[#00e5ff] transition-all"
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
