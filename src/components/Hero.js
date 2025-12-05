import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { useTheme } from "../contexts/ThemeContext";
import PortfolioAnimations from "./PortfolioAnimations";

const Hero = ({ personalInfo }) => {
  const { currentThemeInfo, currentTheme } = useTheme();
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Check if resume is available in personalInfo
    if (!personalInfo.resume) {
      console.error("Resume file not found in personalInfo");
      return;
    }

    // Generate filename based on person's name
    const fileName = `${personalInfo.name.replace(/ /g, '_')}.pdf`;

    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = sectionId === "home" ? 0 : element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-6 py-3 card-professional text-primary-700 text-sm font-medium mb-6">
                {currentThemeInfo.icon}
                <span>{currentThemeInfo.description}</span>
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-2">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {personalInfo.subtitle}
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              {personalInfo.objective}
            </motion.p>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            >
              <div className="flex items-center gap-3 p-4 card-professional text-gray-600">
                <Icon
                  name="envelope"
                  size={18}
                  className="text-secondary-500"
                />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 p-4 card-professional text-gray-600">
                <Icon name="phone" size={18} className="text-secondary-500" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-4 mb-8"
            >
              <div className="flex items-center gap-3 p-4 card-professional text-gray-600">
                <Icon
                  name="map-marker"
                  size={18}
                  className="text-secondary-500"
                />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.button
                className="px-8 py-4 bg-secondary-500 text-white font-semibold shadow-lg hover:bg-secondary-600 transition-all duration-500 ease-smooth flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
              >
                <Icon name="download" size={16} />
                Download CV
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-secondary-500 text-secondary-600 font-semibold hover:bg-secondary-500 hover:text-white transition-all duration-500 ease-smooth"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4 mt-8"
            >
              {personalInfo.socialLinks && Object.entries(personalInfo.socialLinks).map(([platform, url], index) => {
                // Map platform names to icon names
                const iconMap = {
                  github: "github",
                  linkedin: "linkedin",
                  x: "x-twitter",
                  bitbucket: "bitbucket",
                  gitlab: "gitlab",
                  whatsapp : "whatsapp"
                };
                
                const iconName = iconMap[platform] || platform;
                const label = platform.charAt(0).toUpperCase() + platform.slice(1);
                
                return (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 card-professional flex items-center justify-center text-gray-600 hover:text-secondary-500 transition-all duration-400 ease-smooth"
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                >
                  <Icon name={iconName} size={22} />
                </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Portfolio Animation */}
          <motion.div
            className="flex-1 justify-center lg:justify-end hidden lg:flex"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Portfolio Animation Container */}
              <div className="relative">
                <PortfolioAnimations theme={currentTheme} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Button */}
        <motion.div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="flex items-center justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon name="chevron-down" size={20} className="text-secondary-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;