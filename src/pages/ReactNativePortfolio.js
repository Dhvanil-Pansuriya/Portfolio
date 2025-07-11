import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaHeart } from 'react-icons/fa';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import hardikImage from '../assets/images/hardik_ramoliya.png';

// Import React Native data
import {
  reactNativePersonalInfo as personalInfo,
  reactNativeSkills as skills,
  reactNativeExperiences as experiences,
  reactNativeProjects as projects,
  reactNativeInterests as interests,
} from "../data/hardikData.js";
import Footer from '../components/Footer';

const ReactNativePortfolio = () => {
  const { switchTheme, currentThemeInfo } = useTheme();

  useEffect(() => {
    switchTheme('react-native');
  }, [switchTheme]);

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${personalInfo.name} - React Native Developer Portfolio`}
        description="Professional React Native Developer with 5+ years of experience. Specializing in cross-platform mobile app development with modern technologies."
        keywords="React Native Developer, Mobile App Development, Cross-Platform, Portfolio, Freelancer"
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
      <Footer personalInfo={personalInfo}/>
    </div>
  );
};

export default ReactNativePortfolio;