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

// Import Mobile App Development data
import {
  mobileAppPersonalInfo as personalInfo,
  mobileAppSkills as skills,
  mobileAppExperiences as experiences,
  mobileAppProjects as projects,
  mobileAppInterests as interests,
} from "../data/hardikData.js";
import Footer from "../components/Footer";

const IOSPortfolio = () => {
  const { switchTheme, currentThemeInfo } = useTheme();

  useEffect(() => {
    switchTheme("mobile app development");
  }, [switchTheme]);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${personalInfo.name} - Mobile App Developer Portfolio`}
        description="Professional Mobile App Developer with 11+ years of experience. Specializing in iOS and Android app development with modern technologies."
        keywords="Mobile App Developer, iOS Developer, Android Developer, Cross-Platform Development, Portfolio, Freelancer"
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

export default IOSPortfolio;
