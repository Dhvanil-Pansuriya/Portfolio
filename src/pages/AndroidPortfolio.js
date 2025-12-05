import React, { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FaHeart } from "react-icons/fa";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SEO from "../components/SEO";
import hardikImage from '../assets/images/hardik_ramoliya.png';

// Import Android data
import {
  androidPersonalInfo as personalInfo,
  androidSkills as skills,
  androidExperiences as experiences,
  androidProjects as projects,
  androidInterests as interests,
  androidCoreStrengths as coreStrengths,
} from "../data/hardikData.js";
import Footer from "../components/Footer";

const AndroidPortfolio = () => {
  const { switchTheme, currentThemeInfo } = useTheme();

  useEffect(() => {
    switchTheme("android");
  }, [switchTheme]);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${personalInfo.name} - Android Developer Portfolio`}
        description="Professional Android Developer with 11+ years of experience. Specializing in native Android app development with modern technologies."
        keywords="Android Developer, Mobile App Development, Native Android, Portfolio, Freelancer"
      />

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero personalInfo={personalInfo} profileImage={hardikImage} />
        </section>

        <section id="about">
          <About personalInfo={personalInfo} interests={interests} />
        </section>

        <section id="skills">
          <Skills skills={skills} />
        </section>

        <section id="experience">
          <Experience experiences={experiences} />
        </section>

        <section id="projects">
          <Projects projects={projects} />
        </section>

        <section id="contact">
          <Contact personalInfo={personalInfo} />
        </section>
      </main>

      {/* Footer */}
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default AndroidPortfolio;
