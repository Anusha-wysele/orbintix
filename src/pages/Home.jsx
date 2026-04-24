import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FadeIn from "../components/FadeIn";
import GrowthSection from "../components/GrowthSection";

// Lazy load secondary sections
const CaseStudies = lazy(() => import("../components/CaseStudies"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));
const ExecutionProcess = lazy(() => import("../components/ExecutionProcess"));
const TechStack = lazy(() => import("../components/TechStack"));
const HiringSection = lazy(() => import("../components/HiringSection"));
const FinalCTA = lazy(() => import("../components/FinalCTA"));

// Simple placeholder for lazy sections
const SectionLoader = () => (
  <div className="h-64 flex items-center justify-center bg-primary/10">
    <div className="w-8 h-8 border-2 border-white/10 border-t-accent rounded-full animate-spin" />
  </div>
);

const Home = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Hero />
      <div data-aos="fade-up">
        <Services />
      </div>
      <div data-aos="fade-right">
        <About />
      </div>


      <Suspense fallback={<SectionLoader />}>
        <div data-aos="fade-left">
          <CaseStudies />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <div data-aos="fade-up">
          <GrowthSection />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <div data-aos="zoom-in">
          <ExecutionProcess />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <div data-aos="fade-up">
          <TechStack />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <div data-aos="fade-right">
          <WhyChooseUs />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <div data-aos="fade-left">
          <HiringSection />
        </div>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <div data-aos="fade-up">
          <FinalCTA />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
