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

// Import Dhvanil's data
import { 
  personalInfo, 
  skills, 
  experiences, 
  projects, 
  interests,
  education,
  certificates,
  achievements,
  hobbies,
  softSkills
} from '../data/dhvanilData';

const DhvanilPortfolio = () => {
  const { switchTheme, currentThemeInfo } = useTheme();

  useEffect(() => {
    switchTheme('dhvanil');
  }, [switchTheme]);

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${personalInfo.name} - MERN Stack Developer Portfolio`}
        description="Passionate MERN stack developer with hands-on experience in building real-time applications and web solutions. Specialized in React.js, Node.js, and full-stack development."
        keywords="React Developer, Node.js Developer, MERN Stack, Full Stack Developer, JavaScript, MongoDB, Express.js, Web Development, Portfolio"
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
            certificates={certificates}
            achievements={achievements}
            hobbies={hobbies}
            softSkills={softSkills}
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

export default DhvanilPortfolio;