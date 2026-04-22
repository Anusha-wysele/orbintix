import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FadeIn from "../components/FadeIn";

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
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>


      <Suspense fallback={<SectionLoader />}>
        <FadeIn>
          <CaseStudies />
        </FadeIn>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FadeIn>
          <ExecutionProcess />
        </FadeIn>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FadeIn>
          <TechStack />
        </FadeIn>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FadeIn>
          <WhyChooseUs />
        </FadeIn>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FadeIn>
          <HiringSection />
        </FadeIn>
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FadeIn>
          <FinalCTA />
        </FadeIn>
      </Suspense>
    </div>
  );
};

export default Home;
