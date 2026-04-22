
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Asset Imports
import appImg from "../assets/application.jpg";
import daasImg from "../assets/daas.jpg";
import itImg from "../assets/it.jpg";
import offshoreImg from "../assets/offshore.jpg";

const slides = [
  {
    id: 1,
    label: "Digital Engineering",
    title: "Scalable Architecture: High-performance engineering for the modern enterprise",
    desc: "We design and build resilient digital platforms that align cutting-edge frontend experiences with bulletproof backend systems — accelerating your time to market globally.",
    image: "https://images.pexels.com/photos/36169771/pexels-photo-36169771.jpeg",
    path: "/services/digital-engineering",
    category: "INSIGHTS",
    accent: "#FFC107",
  },
  {
    id: 2,
    label: "Cloud & Infrastructure",
    title: "Cloud Transformation: Modernizing infrastructure for agility, security, and scale",
    desc: "From cloud migration to multi-cloud orchestration, we help enterprises reduce operational costs, improve resilience, and unlock new capability through intelligent infrastructure design.",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    path: "/services/cloud-infrastructure",
    category: "STRATEGY",
    accent: "#FFC107",
  },
  {
    id: 3,
    label: "US IT Staffing",
    title: "Strategic IT Advisory: Aligning technology investments with business outcomes",
    desc: "Our senior consultants work alongside your leadership to craft technology roadmaps that reduce complexity, manage risk, and position your organization for long-term competitive advantage.",
    image: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg",
    path: "/services/it-consulting",
    category: "ADVISORY",
    accent: "#FFC107",
  },
  {
    id: 4,
    label: "Cybersecurity",
    title: "Enterprise Security: Proactive defense for your most critical digital assets",
    desc: "From threat modeling to zero-trust implementation, our cybersecurity practice safeguards your infrastructure, ensures compliance, and builds organizational resilience against evolving threats.",
    image: "https://images.pexels.com/photos/6266267/pexels-photo-6266267.jpeg",
    path: "/services/cybersecurity",
    category: "INNOVATION",
    accent: "#FFC107",
  },
];

const SLIDE_DURATION = 5000;
const TRANSITION_DURATION = 1; // seconds

// Easing for the slide-in/out
const SLIDE_EASE = [0.76, 0, 0.24, 1];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const progressRef = useRef(0);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const pauseRef = useRef(isPaused);
  pauseRef.current = isPaused;

  const goTo = useCallback((nextIndex, dir) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(dir);
    setPrevIndex(currentIndex);
    setCurrentIndhex(nextIndex);
    setProgress(0);
    progressRef.current = 0;
    lastTimeRef.current = null;

    setTimeout(() => {
      setIsTransitioning(false);
      setPrevIndex(null);
    }, TRANSITION_DURATION * 1000 + 100);
  }, [currentIndex, isTransitioning]);

  const handleNext = useCallback(() => {
    goTo((currentIndex + 1) % slides.length, 1);
  }, [currentIndex, goTo]);

  const handlePrev = useCallback(() => {
    goTo((currentIndex - 1 + slides.length) % slides.length, -1);
  }, [currentIndex, goTo]);

  const handleManualSelect = useCallback((index) => {
    if (index === currentIndex || isTransitioning) return;
    const dir = index > currentIndex ? 1 : -1;
    goTo(index, dir);
  }, [currentIndex, goTo, isTransitioning]);

  // RAF-based smooth progress
  useEffect(() => {
    const tick = (timestamp) => {
      if (pauseRef.current) {
        lastTimeRef.current = null;
        animFrameRef.current = requestAnimationFrame(tick);
        return;
      }
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      progressRef.current = Math.min(progressRef.current + (delta / SLIDE_DURATION) * 100, 100);
      setProgress(progressRef.current);

      if (progressRef.current >= 100) {
        progressRef.current = 0;
        setProgress(0);
        lastTimeRef.current = null;
        // Advance slide
        setCurrentIndex((prev) => {
          const next = (prev + 1) % slides.length;
          setDirection(1);
          setPrevIndex(prev);
          setIsTransitioning(true);
          setTimeout(() => {
            setIsTransitioning(false);
            setPrevIndex(null);
          }, TRANSITION_DURATION * 1000 + 100);
          return next;
        });
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: TRANSITION_DURATION, ease: SLIDE_EASE },
        opacity: { duration: 0.4, ease: "easeOut" },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-8%" : "8%",
      opacity: 0,
      transition: {
        x: { duration: TRANSITION_DURATION, ease: SLIDE_EASE },
        opacity: { duration: TRANSITION_DURATION * 0.6, ease: "easeIn" },
      },
    }),
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 40,
      clipPath: "inset(0 0 100% 0)",
    },
    center: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      transition: {
        opacity: { duration: 0.7, delay: 0.3, ease: "easeOut" },
        y: { duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] },
        clipPath: { duration: 0.8, delay: 0.25, ease: [0.33, 1, 0.68, 1] },
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        opacity: { duration: 0.3, ease: "easeIn" },
        y: { duration: 0.3, ease: "easeIn" },
      },
    },
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* === BACKGROUND SLIDES === */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Image with Ken Burns */}
            <motion.div
              className="absolute inset-0"
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.label}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center center",
                  filter: "brightness(0.6) saturate(1.1)",
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-[1]"></div>


      {/* === MAIN CONTENT === */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-28"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-4xl"
          >
            {/* Category pill */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                className="h-[6px] md:h-[10px] bg-[#FFC107]"
                initial={{ width: 0 }}
                animate={{ width: "36px" }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              />
              <span
                className="text-[#FFC107] font-bold uppercase tracking-[0.45em]"
                style={{ fontSize: "clamp(10px, 1.2vw, 11px)" }}
              >
                {currentSlide.category}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal  mb-6"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 100 }}

            >
              {currentSlide.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
              className="text-white/80 leading-relaxed mb-10 md:mb-12 border-l-2 md:border-l-[3px] border-[#FFC107] pl-4 md:pl-8"
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)",
                maxWidth: "650px",
              }}
            >
              {currentSlide.desc}
            </motion.p>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(currentSlide.path)}
              className="group/btn flex items-center gap-4 bg-[#FFC107] text-black font-black uppercase tracking-[0.2em] px-6 py-4 md:px-10 md:py-5 transition-all duration-300 hover:bg-white"
              style={{ fontSize: "11px" }}
            >
              Learn More
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-2"
              />
            </motion.button>
          </motion.div>
        </AnimatePresence>
        <div className=" w-full">
          <div          >
            {/* Top divider */}


            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-8">

              {/* === SLIDE TABS WITH LOADING BARS === */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 lg:gap-x-10 gap-y-6 w-full md:w-auto">
                {slides.map((slide, index) => {
                  const isActive = currentIndex === index;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => handleManualSelect(index)}
                      disabled={isTransitioning}
                      className="relative flex flex-col gap-2 pt-1 outline-none group/tab"
                      style={{ minWidth: "120px" }}
                    >
                      {/* Loading bar track */}
                      <div
                        className="relative w-full overflow-hidden"
                        style={{ height: "2px", background: "rgba(255,255,255,0.12)" }}
                      >
                        {/* Active progress bar */}
                        {isActive && (
                          <motion.div
                            className="absolute left-0 top-0 h-full"
                            style={{
                              width: `${progress}%`,
                              background: "#FFC107",
                              boxShadow: "0 0 8px rgba(255,193,7,0.6)",
                            }}
                          />
                        )}
                        {/* Completed bar (instant fill on past slides, empty on future) */}
                        {!isActive && (
                          <div
                            className="absolute left-0 top-0 h-full transition-all duration-500"
                            style={{
                              width: index < currentIndex ? "100%" : "0%",
                              background: "rgba(255,255,255,0.35)",
                            }}
                          />
                        )}
                      </div>

                      {/* Label */}
                      <span
                        className="font-bold uppercase tracking-wider transition-all duration-300 text-left"
                        style={{
                          fontSize: "10px",
                          color: isActive
                            ? "rgba(255,255,255,1)"
                            : "rgba(255,255,255,0.4)",
                        }}
                      >
                        {slide.label}
                      </span>

                      {/* Hover glow underline */}
                      {!isActive && (
                        <div
                          className="absolute bottom-0 left-0 h-px w-0 bg-white/40 group-hover/tab:w-full transition-all duration-300"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* === PLAYBACK CONTROLS === */}
              <div
                className="flex items-center gap-1 border border-white/10 bg-black/40 backdrop-blur-xl rounded-full px-2 py-1.5 md:py-2"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <button
                  onClick={handlePrev}
                  disabled={isTransitioning}
                  className="p-2 rounded-full text-white/50 hover:text-[#FFC107] hover:bg-white/5 transition-all duration-200 active:scale-90 disabled:opacity-30"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={handleNext}
                  disabled={isTransitioning}
                  className="p-2 rounded-full text-white/50 hover:text-[#FFC107] hover:bg-white/5 transition-all duration-200 active:scale-90 disabled:opacity-30"
                >
                  <ChevronRight size={18} />
                </button>

                <div className="w-px h-4 bg-white/15 mx-1" />

                <button
                  onClick={() => setIsPaused((p) => !p)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 active:scale-95"
                  style={{ fontSize: "10px" }}
                >
                  {isPaused ? (
                    <>
                      <Play size={14} className="text-[#FFC107]" fill="currentColor" />
                      <span className="font-bold uppercase tracking-widest text-[#FFC107]">
                        Play
                      </span>
                    </>
                  ) : (
                    <>
                      <Pause size={14} fill="currentColor" />
                      <span className="font-bold uppercase tracking-widest">Pause</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === BOTTOM NAVIGATION === */}


      {/* === DECORATIVE SIDE ACCENT === */}
      <div
        className="absolute right-0 top-0 bottom-0 w-px z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,193,7,0.2) 40%, rgba(255,193,7,0.1) 60%, transparent 100%)",
        }}
      />
    </section>
  );
};

export default Hero;