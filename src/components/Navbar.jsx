import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, Globe, Rocket, Users, Cloud, User, LogIn, Shield, Database } from "lucide-react";
import { routes } from "../routes/config";

const ICON_MAP = {
  Globe: Globe,
  Rocket: Rocket,
  Users: Users,
  Cloud: Cloud,
  Shield: Shield,
  Database: Database
};

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef(null);
  const loginCloseTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterServices = () => {
    clearTimeout(closeTimer.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    closeTimer.current = setTimeout(() => setIsServicesOpen(false), 120);
  };

  const handleMouseEnterLogin = () => {
    clearTimeout(loginCloseTimer.current);
    setIsLoginOpen(true);
  };

  const handleMouseLeaveLogin = () => {
    loginCloseTimer.current = setTimeout(() => setIsLoginOpen(false), 120);
  };

  // Filter routes for navbar display
  const navItems = routes
    .filter((route) => route.showInNavbar)
    .map((route) => ({
      name: route.label,
      path: route.path,
      dropdown: route.children?.map((child) => ({
        name: child.label,
        path: child.path,
        icon: child.icon,
        description: child.description,
      })),
    }));

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-xl py-4" : "bg-white py-4"
        }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-[#FFC107] shadow-[0_0_10px_rgba(255,193,7,0.5)] transition-all duration-100 z-[1001]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-14">
        {/* LOGO (LEFT) */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#FFC107] flex items-center justify-center font-black text-xl text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            O
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-lg tracking-tight text-black uppercase">Orbintix</span>
            <span className="text-[8px] tracking-[0.3em] text-primary/80 font-bold mt-0.5 uppercase">Technologies</span>
          </div>
        </Link>

        {/* NAVIGATION LINKS (CENTER) */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-8 h-full">
          {navItems.filter(item => item.name !== "Contact").map((item) => (
            <div
              key={item.name}
              className="relative h-full flex items-center"
              onMouseEnter={item.dropdown ? handleMouseEnterServices : undefined}
              onMouseLeave={item.dropdown ? handleMouseLeaveServices : undefined}
            >
              {item.dropdown ? (
                <div className="h-full flex items-center px-4 cursor-pointer">
                  <button
                    className={`flex items-center gap-2 font-bold text-[13px] tracking-[0.12em] uppercase transition-all duration-300 ${isServicesOpen ? "text-primary" : "text-black hover:text-primary"
                      }`}
                  >
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* SERVICES DROPDOWN PANEL */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-[1000px] transition-all duration-300 transform ${isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                      }`}
                  >
                    <div className="bg-black/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 mt-4 grid grid-cols-3 gap-6">
                      <div className="col-span-3 pb-4 mb-4 border-b border-white/5 text-[10px] font-black tracking-[0.3em] uppercase text-[#00e5ff]">
                        Our Expertise
                      </div>
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsServicesOpen(false)}
                          className={({ isActive }) => `flex items-start gap-4 p-4 transition-all duration-300 border-r-4 border-transparent hover:bg-white/5 hover:border-[#FFC107] group/item ${isActive ? 'bg-white/5 border-[#00e5ff]' : ''}`}
                        >
                          {({ isActive }) => (
                            <>
                              <div className="w-10 h-10 rounded-lg bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] transition-all duration-300 group-hover/item:bg-[#00e5ff] group-hover/item:text-[#0A192F] group-hover/item:scale-110 group-hover/item:-rotate-6">
                                {(() => {
                                  const IconComponent = ICON_MAP[sub.icon] || Globe;
                                  return <IconComponent size={20} />;
                                })()}
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className={`font-bold text-xs uppercase tracking-wide transition-colors ${isActive ? 'text-[#00e5ff]' : 'text-white'}`}>
                                  {sub.name}
                                </span>
                                <span className="text-[10px] leading-relaxed text-[#8892B0] font-medium">
                                  {sub.description}
                                </span>
                              </div>
                            </>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `px-4 font-bold text-[13px] tracking-[0.12em] uppercase transition-all duration-300 relative group/link ${isActive ? "text-primary" : "text-black hover:text-accent"
                    }`}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      <span className={`absolute -bottom-1 left-4 right-4 h-0.5 bg-[#FFC107] transition-all duration-300 transform ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'}`} />
                    </>
                  )}
                </NavLink>
              )}
            </div>
          ))}
        </div>

        {/* ACTIONS (RIGHT) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Contact Button */}
          {navItems.find(item => item.name === "Contact") && (
            <NavLink
              to={navItems.find(item => item.name === "Contact").path}
              className="bg-black text-white text-[11px] font-black tracking-[0.15em] uppercase px-7 py-3 rounded-full hover:bg-[#FFC107] hover:text-black transition-all duration-300 shadow-lg"
            >
              Contact Us
            </NavLink>
          )}

          {/* Login Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnterLogin}
            onMouseLeave={handleMouseLeaveLogin}
          >
            <button
              className={`flex items-center gap-2 font-black text-[11px] tracking-[0.15em] uppercase transition-colors ${isLoginOpen ? 'text-primary' : 'text-black hover:text-primary'
                }`}
            >
              <User size={16} />
              Login
              <ChevronDown size={14} className={`transition-transform duration-300 ${isLoginOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* LOGIN DROPDOWN CONTENT */}
            <div
              className={`absolute top-9 right-0 w-56 transition-all duration-300 transform ${isLoginOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                }`}
            >
              <div className="mt-4 bg-[#FFC107] overflow-hidden border border-black/5">
                <Link
                  to="/signin"
                  className="flex items-center gap-3 w-full px-6 py-4 text-white hover:bg-primary transition-colors font-bold text-xs uppercase tracking-wider"
                  onClick={() => setIsLoginOpen(false)}
                >
                  <LogIn size={16} />
                  Sign In
                </Link>
                <div className="h-px bg-black/10 mx-2" />
                <Link
                  to="/signup"
                  className="flex items-center gap-3 w-full px-6 py-4 text-white hover:bg-primary transition-colors font-bold text-xs uppercase tracking-wider"
                  onClick={() => setIsLoginOpen(false)}
                >
                  <User size={16} />
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-black hover:bg-black/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <div className={`lg:hidden fixed top-0 left-0 w-full bg-white transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? "h-screen opacity-100 visible" : "h-0 opacity-0 invisible"
        }`}>
        <div className="flex flex-col p-6 pt-24 gap-4">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between p-4 bg-black/5 rounded-xl font-bold uppercase text-xs tracking-widest text-black"
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-64 py-2" : "max-h-0"}`}>
                    {item.dropdown.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        className="block p-3 pl-8 text-xs font-bold text-black/60 uppercase tracking-wider hover:text-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `p-4 font-bold uppercase text-xs tracking-widest rounded-xl transition-colors ${isActive ? "bg-accent/10 text-accent" : "text-black/80 hover:bg-black/5"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}

          {/* Mobile Login Actions */}
          <div className="mt-8 grid grid-cols-2 gap-4 pt-8 border-t">
            <Link
              to="/signin"
              className="p-4 bg-[#FFC107] text-black text-center font-bold uppercase text-xs tracking-widest rounded-xl shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="p-4 bg-black text-white text-center font-bold uppercase text-xs tracking-widest rounded-xl shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Close Button (Overlaid) */}
        <button
          className="absolute top-6 right-6 w-12 h-12 bg-black text-white flex items-center justify-center rounded-full shadow-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;