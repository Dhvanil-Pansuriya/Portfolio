import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import { useTheme } from "../contexts/ThemeContext";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { currentThemeInfo } = useTheme();
  const location = useLocation();

  // Get the current portfolio name based on route
  const getPortfolioName = () => {
    switch (location.pathname) {
      case "/pinal-ramoliya":
        return "Pinal Ramoliya";
      case "/dhvanil-pansuriya":
        return "Dhvanil Pansuriya";
      case "/deep-surti":
        return "Deep Surti";
      case "/hardik-ramoliya/android":
      case "/hardik-ramoliya/mobile-app-development":
      case "/hardik-ramoliya/react-native":
        return "Hardik Ramoliya";
      default:
        return "Hardik Ramoliya";
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: "home" },
    { id: "about", label: "About", icon: "user" },
    { id: "skills", label: "Skills", icon: "code" },
    { id: "experience", label: "Experience", icon: "briefcase" },
    { id: "projects", label: "Projects", icon: "project-diagram" },
    { id: "contact", label: "Contact", icon: "envelope" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* Desktop Navigation - No slide animation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              tabIndex={0}
              aria-label="Portfolio Logo"
            >
              <div className="w-14 h-14 flex items-center justify-center text-white font-bold text-lg">
                {currentThemeInfo.icon}
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-gray-800 flex flex-col">
                  <div>{currentThemeInfo.description}</div>
                  <div className="font-normal text-sm -mt-1">{getPortfolioName()}</div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <nav
              className="hidden lg:flex items-center space-x-2"
              aria-label="Section Navigation"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-3 text-sm font-medium transition-all duration-500 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 ${
                    activeSection === item.id
                      ? "text-secondary-600 bg-secondary-50"
                      : "text-gray-600 hover:text-secondary-600 hover:bg-gray-50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  aria-label={item.label}
                >
                  <span className="flex items-center space-x-2">
                    <Icon name={item.icon} size={16} />
                    <span>{item.label}</span>
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-1 left-2 right-2 h-0.5 bg-secondary-500"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <Icon name="times" size={20} />
              ) : (
                <Icon name="bars" size={20} />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu */}
            <motion.div
              id="mobile-menu"
              className="fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              role="menu"
              aria-label="Mobile Navigation"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                      {currentThemeInfo.icon}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        {getPortfolioName()}
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-3 hover:bg-gray-100 transition-all duration-300 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close menu"
                  >
                    <Icon name="times" size={20} />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <motion.div
                  className="space-y-2 flex-1"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      variants={itemVariants}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-5 py-4 text-left transition-all duration-500 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 ${
                        activeSection === item.id
                          ? "bg-secondary-50 text-secondary-600 border-l-4 border-secondary-500"
                          : "text-gray-600 hover:bg-gray-50 hover:text-secondary-600"
                      }`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      aria-current={
                        activeSection === item.id ? "page" : undefined
                      }
                      aria-label={item.label}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </motion.div>

                {/* Footer */}
                <div className="mt-8">
                  <div className="text-center text-sm text-gray-500">
                    <p>© 2024 {getPortfolioName()}</p>
                    <p>All rights reserved</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Navigation Dots (Desktop) - Vertical */}
      <div className="hidden xl:block fixed right-6 top-1/2 transform -translate-y-1/2 z-30">
        <div className="card-professional p-2 space-y-3">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative w-3 h-3 transition-all duration-400 ease-smooth flex items-center justify-center ${
                activeSection === item.id
                  ? "bg-secondary-500 scale-90 shadow-lg"
                  : "bg-gray-300 hover:bg-secondary-400"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              title={item.label}
            >
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 bg-secondary-500"
                  layoutId="activeNavDot"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {/* Tooltip */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 card-professional px-4 py-2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-gray-700 font-medium pointer-events-none">
                <div className="flex items-center justify-center gap-x-2">
                  <Icon name={item.icon} size={12} />
                  {item.label}
                </div>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
