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

// Import Deep's data
import { 
  personalInfo, 
  skills, 
  experiences, 
  projects, 
  interests,
  education,
  languages,
  certifications,
  achievements,
  technicalSkills
} from '../data/deepData';

const DeepPortfolio = () => {
  const { switchTheme, currentThemeInfo } = useTheme();

  useEffect(() => {
    switchTheme('deep');
  }, [switchTheme]);

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${personalInfo.name} - Mobile Developer Portfolio`}
        description="Experienced Mobile Developer specializing in Android app development using Kotlin and Jetpack Compose, as well as cross-platform apps using React Native. Currently learning Kotlin Multiplatform."
        keywords="Mobile Developer, Android Developer, Kotlin, Jetpack Compose, React Native, Cross-Platform Development, Mobile App Development, Portfolio"
      />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero personalInfo={personalInfo} />
        </section>
        
        <section id="about">
          <About 
            personalInfo={personalInfo} 
            interests={interests} 
            education={education}
            languages={languages}
            certifications={certifications}
            achievements={achievements}
            technicalSkills={technicalSkills}
          />
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

export default DeepPortfolio;