import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ChevronRight, MessageSquare } from 'lucide-react';
import blogService from '../services/blogService';
import blogData from '../data/blog.json'; // Fallback to local data if needed

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        // Attempt to fetch from backend
        const data = await blogService.getBlogById(id);
        const fetchedBlog = data.blog || data.data || data;

        if (fetchedBlog && fetchedBlog.title) {
          const hasPrefix = fetchedBlog.category && fetchedBlog.category.includes(':');
          const cleanCategory = hasPrefix ? fetchedBlog.category.split(':')[1] : (fetchedBlog.category || 'Organisation');

          // Normalize dates and properties
          const formattedBlog = {
            ...fetchedBlog,
            image: fetchedBlog.image_url || fetchedBlog.img || fetchedBlog.image || 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070',
            date: fetchedBlog.date || (fetchedBlog.createdAt ? new Date(fetchedBlog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })),
            author: fetchedBlog.author || 'Admin',
            category: cleanCategory,
            content: fetchedBlog.content || fetchedBlog.body || fetchedBlog.excerpt || 'No content details available.'
          };
          setBlog(formattedBlog);
        } else {
          // Fallback to local json data if ID matches
          const localPost = blogData.posts.find(post => String(post.id) === String(id));
          if (localPost) {
            setBlog(localPost);
          } else {
            throw new Error('Blog post not found.');
          }
        }
      } catch (err) {
        console.warn('API fetch error, falling back to local posts:', err);
        // Fallback to local json data
        const localPost = blogData.posts.find(post => String(post.id) === String(id));
        if (localPost) {
          setBlog(localPost);
        } else {
          setError('The requested publication could not be retrieved.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
    window.scrollTo(0, 0);
  }, [id]);

  // Load recent posts for sidebar
  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const data = await blogService.getAllBlogs();
        let fetchedList = [];
        if (Array.isArray(data)) fetchedList = data;
        else if (data.results && Array.isArray(data.results)) fetchedList = data.results;
        else if (data.blogs && Array.isArray(data.blogs)) fetchedList = data.blogs;
        else if (data.data && Array.isArray(data.data)) fetchedList = data.data;

        if (fetchedList.length > 0) {
          const mapped = fetchedList.slice(0, 4).map(post => ({
            id: post.id || post._id,
            title: post.title,
            image: post.image_url || post.img || post.image || 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070',
            date: post.date || (post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
          }));
          setRecentPosts(mapped);
        } else {
          setRecentPosts(blogData.posts.slice(0, 4));
        }
      } catch (e) {
        setRecentPosts(blogData.posts.slice(0, 4));
      }
    };
    fetchRecent();
  }, [id]);

  // SEO Updates
  useEffect(() => {
    if (!blog) return;
    const oldTitle = document.title;
    document.title = `${blog.title} | Insights | Orbintix Technologies`;
    return () => {
      document.title = oldTitle;
    };
  }, [blog]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-outfit">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-1 bg-primary/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">
            Decoding Intelligence
          </span>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center font-outfit text-primary">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Intel Not Found</h2>
        <p className="text-primary/40 font-bold uppercase tracking-widest text-sm mb-12">The publication does not exist or has been archived.</p>
        <Link to="/blog" className="px-10 py-5 bg-primary text-white font-black uppercase text-[10px] tracking-widest rounded-none hover:bg-accent hover:text-primary transition-all flex items-center gap-3">
          <ArrowLeft size={16} /> Back to Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-outfit text-primary relative overflow-hidden">
      {/* 🔷 MODERN HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover grayscale brightness-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
          <div className="absolute inset-0 dot-grid opacity-[0.1]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-black text-[10px] uppercase tracking-[0.3em] mb-8 hover:translate-x-[-8px] transition-transform">
              <ArrowLeft size={14} /> Back to Directory
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-accent" />
              <span className="text-accent font-black text-[0.7rem] uppercase tracking-[0.5em]">
                {blog.category} INSIGHTS
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl text-white tracking-tighter uppercase leading-[1.0] mb-8 font-black">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-8 py-6 border-t border-white/10 mt-8">
              {[
                { icon: User, label: "Author", value: blog.author },
                { icon: Calendar, label: "Published", value: blog.date },
                { icon: Clock, label: "Intel Access", value: blog.read_time || "5 Min Read" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-accent">
                    <item.icon size={16} />
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

      {/* 🔷 MAIN DETAILS FEED */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* ARTICLE BODY (70%) */}
            <div className="lg:col-span-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none text-primary/80 leading-loose font-dm-sans whitespace-pre-wrap text-base md:text-lg border-b border-primary/5 pb-16"
              >
                {blog.content}
              </motion.article>

              {/* Share block */}
              <div className="py-8 flex flex-wrap items-center justify-between gap-6 border-b border-primary/5">
                <div className="flex items-center gap-3">
                  <Share2 size={16} className="text-accent" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary/60">Share Intel Profile</span>
                </div>
                <div className="flex items-center gap-3">
                  {['facebook', 'twitter', 'linkedin'].map((platform) => {
                    const icons = { facebook: Facebook, twitter: Twitter, linkedin: Linkedin };
                    const Icon = icons[platform];
                    return (
                      <button
                        key={platform}
                        className="w-10 h-10 border border-primary/10 flex items-center justify-center text-primary/60 hover:text-accent hover:border-accent transition-all duration-300"
                        onClick={() => alert(`Shared profile to ${platform}`)}
                      >
                        <Icon size={16} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* SIDEBAR (30%) */}
            <aside className="lg:col-span-4 space-y-12">

              {/* Category Display widget */}
              <div className="bg-white p-10 border border-primary/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/20 group-hover:border-accent transition-colors" />
                <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-accent" />
                  Publication Taxonomy
                </h4>
                <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Primary Focus</span>
                  <span className="bg-accent text-primary text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 shadow-md">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Recent Publications */}
              <div className="bg-primary p-10 relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                <h4 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-accent" />
                  Recent Publications
                </h4>
                <div className="space-y-8">
                  {recentPosts.filter(p => String(p.id) !== String(blog.id)).map(post => (
                    <div
                      key={post.id}
                      onClick={() => navigate(`/blog/${post.id}`)}
                      className="flex gap-5 group cursor-pointer"
                    >
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

              {/* Units List */}
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

            </aside>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
