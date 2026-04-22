import { motion } from "framer-motion";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import CompanyMission from "../components/CompanyMission";
import AboutContent from "../components/About";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-primary min-h-screen font-outfit">
      <AboutHero />
      <WhoWeAre />
      <CompanyMission />
      <AboutContent />
    </div>
  );
};

export default About;
