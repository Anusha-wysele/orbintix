import React from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Globe, 
  MessageCircle, 
  Play, 
  ChevronUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden font-outfit border-t border-white/5">
      {/* Decorative background pulse */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: Branding and Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-16">
          
          {/* Column 1: Branding */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-10">
            <Link to="/" className="text-3xl font-black tracking-tighter flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary font-black text-2xl transition-all duration-500 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(0,191,255,0.4)]">
                O
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white">ORBINTIX</span>
                <span className="text-accent text-[10px] tracking-[0.4em] mt-1">TECHNOLOGIES LLC</span>
              </div>
            </Link>
            <p className="text-text-secondary text-lg leading-relaxed max-w-md font-dm-sans">
              Orbintix Technologies LLC is a premier strategic IT partner, specializing in next-generation application development, full-scale cloud transformations, and global talent solutions.
            </p>
          </div>

          <div className="lg:col-span-1 border-r border-white/5 hidden xl:block mx-auto" />

          {/* Column 2: Company */}
          <div className="lg:col-span-3 xl:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />Home</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />About Us</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />Services</Link></li>
              <li><Link to="/careers" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="lg:col-span-3 xl:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Expertise</h4>
            <ul className="space-y-4">
              <li><Link to="/management/web-development" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />Web Dev</Link></li>
              <li><Link to="/management/product-development" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />Product</Link></li>
              <li><Link to="/management/salesforce-solutions" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />Salesforce</Link></li>
              <li><Link to="/management/it-staffing" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />IT Staffing</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-3 xl:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Connect</h4>
            <div className="space-y-6">
                <ul className="space-y-4">
                  <li><Link to="/contact" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />Contact</Link></li>
                  <li><a href="mailto:info@orbintix.com" className="text-text-secondary hover:text-white transition-all font-medium font-dm-sans flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all" />Email Us</a></li>
                </ul>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 group">
                    <Users size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 group">
                    <Globe size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 group">
                    <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal and Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 Orbintix Technologies LLC. All rights reserved. Built for the next generation.
          </p>
          <div className="flex gap-10">
            <Link to="#" className="text-white/30 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy Policy</Link>
            <Link to="#" className="text-white/30 hover:text-accent transition-colors text-[10px] font-bold uppercase tracking-widest">Terms</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 w-14 h-14 bg-secondary border border-white/10 text-accent rounded-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-accent hover:text-primary hover:border-accent transition-all duration-500 group z-[100]"
      >
        <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
