import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

// Import Pinal's data
import { 
  personalInfo, 
  skills, 
  experiences, 
  projects, 
  interests,
  education
} from '../data/pinalData';

const PinalPortfolio = () => {
  const { switchTheme, currentThemeInfo } = useTheme();

  useEffect(() => {
    switchTheme('pinal');
  }, [switchTheme]);

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${personalInfo.name} - Development Lead Portfolio`}
        description="Experienced Development Lead with 9+ years of expertise in PHP, Laravel, Yii2, and full-stack web development. Complex problem-solver with analytical mindset."
        keywords="Development Lead, PHP Developer, Laravel, Yii2, Full Stack Developer, Web Development, Team Lead, Portfolio"
      />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero personalInfo={personalInfo} />
        </section>
        
        <section id="about">
          <About personalInfo={personalInfo} interests={interests} education={education} />
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

export default PinalPortfolio;