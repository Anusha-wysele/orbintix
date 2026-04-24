import { motion } from "framer-motion";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import CompanyMission from "../components/CompanyMission";
import AboutContent from "../components/About";
import Team from "../components/Team";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-primary min-h-screen font-outfit">
      <AboutHero />
      <div data-aos="fade-up">
        <WhoWeAre />
      </div>
      <div data-aos="fade-right">
        <CompanyMission />
      </div>
      <div data-aos="fade-left">
        <AboutContent />
      </div>
      <div data-aos="fade-up">
        <Team />
      </div>
    </div>
  );
};

export default About;

