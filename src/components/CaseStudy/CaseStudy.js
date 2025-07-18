import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "../Icon";
import ImagePlaceholder from "../ImagePlaceholder";
import { useRef } from "react";

const CaseStudy = ({ caseStudyData, onClose }) => {
  const [activeSection, setActiveSection] = useState("overview");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hero Section
  const HeroSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary-300/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span className="text-primary-700 font-medium text-sm">
                  Case Study
                </span>
              </motion.div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">{caseStudyData.title}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {caseStudyData.executiveSummary.summary}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon name="mobile" size={16} className="text-primary-600" />
                  <span className="text-gray-700 font-medium">Mobile App</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon name="globe" size={16} className="text-primary-600" />
                  <span className="text-gray-700 font-medium">
                    Web Platform
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon name="video" size={16} className="text-primary-600" />
                  <span className="text-gray-700 font-medium">E-Learning</span>
                </motion.div>
              </div>
              <motion.button
                onClick={() =>
                  document
                    .getElementById("overview")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Case Study
              </motion.button>
            </motion.div>
            {/* Hero Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative p-8 w-full h-96 flex items-center justify-center">
                  <div className="aspect-w-16 aspect-h-9">
                    <ImagePlaceholder
                      src={caseStudyData.images.hero}
                      alt={`${caseStudyData.title} Hero`}
                      className="w-full h-full object-cover rounded-2xl drop-shadow-lg"
                      fallbackText={`${caseStudyData.title} Platform Preview`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon name="times" size={20} className="text-gray-600" />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-primary-600">
            <span className="text-sm font-medium">Scroll to explore</span>
            <Icon name="chevron-down" size={20} />
          </div>
        </motion.div>
      </motion.section>
    );
  };

  // Overview Section
  const OverviewSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <motion.section
        id="overview"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Project Overview</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {caseStudyData.executiveSummary.techSummary}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Objectives */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Project Objectives
              </h3>
              <div className="space-y-4">
                {caseStudyData.projectOverview.objectives.map(
                  (objective, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-700">{objective}</p>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* Target Audience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Target Audience
              </h3>
              <div className="grid gap-4">
                {caseStudyData.projectOverview.targetAudience.map(
                  (audience, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon
                        name="users"
                        size={20}
                        className="text-primary-600"
                      />
                      <span className="text-gray-700">{audience}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Architecture Diagram */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              System Architecture
            </h3>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
              <ImagePlaceholder
                src={caseStudyData.images.architecture}
                alt="System Architecture"
                className="w-full max-w-4xl mx-auto h-auto object-contain"
                fallbackText="System Architecture Diagram"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };
  const FeaturesSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    const featureCategories = [
      {
        name: "User Management",
        items: caseStudyData.featuresFunctionality.userManagement,
        icon: "user",
      },
      {
        name: "Content Management",
        items: caseStudyData.featuresFunctionality.contentManagement,
        icon: "video",
      },
      {
        name: "Subscription & Payment",
        items: caseStudyData.featuresFunctionality.subscriptionPayment,
        icon: "credit-card",
      },
      {
        name: "Analytics & Tracking",
        items: caseStudyData.featuresFunctionality.analyticsTracking,
        icon: "chart-bar",
      },
      {
        name: "Advanced Features",
        items: caseStudyData.featuresFunctionality.advancedFeatures,
        icon: "star",
      },
    ];

    return (
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Features & Functionality</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed for seamless learning experience
              across all platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featureCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                    <Icon
                      name={category.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.name}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Application Screenshots Gallery */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Application Screenshots</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the seamless interface design across all platforms
              </p>
            </div>

            {/* Enhanced Screenshots Layout */}
            <div className="space-y-16">
              {/* Web Application Section */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-50 to-accent-100  border border-accent-200 rounded-xl">
                    <Icon name="globe" size={20} className="text-accent-600" />
                    <span className="text-lg font-semibold text-accent-700">
                      Web Application
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {caseStudyData.images.webScreens.map((screen, index) => (
                      <motion.div
                        key={index}
                        className="relative group"
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? -50 : 50,
                          scale: 0.95,
                        }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.3,
                          type: "spring",
                          stiffness: 80,
                        }}
                      >
                        {/* Browser Frame */}
                        <div className="relative">
                          {/* Browser Shadow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-accent-200/30 to-accent-400/30 rounded-2xl blur-xl transform translate-y-4 scale-105" />

                          {/* Browser Window */}
                          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                            {/* Browser Header */}
                            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                              <div className="flex gap-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full" />
                                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                                <div className="w-3 h-3 bg-green-400 rounded-full" />
                              </div>
                              <div className="flex-1 mx-4">
                                <div className="bg-white rounded-lg px-2 py-1 text-xs text-gray-500 border flex items-center gap-2">
                                  <Icon name="home" size={13} />
                                  http://www.getdoolen.com
                                </div>
                              </div>
                            </div>

                            {/* Browser Content */}
                            <motion.div
                              className="h-fit bg-gray-50"
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <ImagePlaceholder
                                src={screen}
                                alt={`Web Screen ${index + 1}`}
                                className="w-full h-fit object-cover"
                                fallbackText={`Web Screen ${index + 1}`}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Application Section */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                    <Icon
                      name="mobile"
                      size={20}
                      className="text-primary-600"
                    />
                    <span className="text-lg font-semibold text-primary-700">
                      Mobile Application
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-center items-center gap-8 pb-4">
                    {caseStudyData.images.mobileScreens.map((screen, index) => (
                      <motion.div
                        key={index}
                        className="relative group flex-shrink-0"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                          type: "spring",
                          stiffness: 100,
                        }}
                      >
                        {/* Phone Frame */}
                        <div className="relative">
                          {/* Phone Shadow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-200/30 to-primary-400/30 rounded-[2.5rem] blur-xl transform translate-y-4 scale-105" />

                          {/* Phone Body */}
                          <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                            {/* Screen */}
                            <div className="bg-black rounded-[2rem] overflow-hidden w-64 h-[550px] relative">
                              {/* Status Bar */}
                              <div className="absolute top-0 left-0 right-0 h-8 bg-white rounded-t-[2rem] flex items-center px-6 z-10">
                                {/* Time (Left) */}
                                <div className="flex items-center gap-1">
                                  <span className="w-8 h-4 text-black rounded-full text-[10px] flex items-center justify-center font-bold">
                                    9:45
                                    <span className="text-[10px]">
                                      &nbsp;am
                                    </span>
                                  </span>
                                </div>
                                {/* Black Bar (Center) */}
                                <div className="flex-1 flex justify-center pl-4">
                                  <div className="w-[70px] h-5 bg-black rounded-full" />
                                </div>
                                {/* Icons (Right) */}
                                <div className="flex items-center gap-1">
                                  <Icon
                                    name="signal"
                                    size={14}
                                    className="text-black"
                                  />
                                  <Icon
                                    name="wifi"
                                    size={14}
                                    className="text-black"
                                  />
                                  <Icon
                                    name="battery"
                                    size={18}
                                    className="text-black"
                                  />
                                </div>
                              </div>

                              {/* Screen Content */}
                              <motion.div
                                className="w-full h-full pt-8 pb-3 relative bg-white"
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <ImagePlaceholder
                                  src={screen}
                                  alt={`Mobile Screen ${index + 1}`}
                                  className="w-full h-full object-cover"
                                  fallbackText={`Mobile Screen ${index + 1}`}
                                />
                                {/* Bat under the image */}
                                <div className="absolute left-1/2 bottom-1 transform -translate-x-1/2 flex justify-center">
                                  <div className="bg-gray-700 w-32 h-1 rounded-full" />
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Features Highlight */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="check-circle" size={16} />
                    <span className="text-sm font-medium">
                      Responsive Design
                    </span>
                  </div>
                  <div className="w-px h-4 bg-white/30" />
                  <div className="flex items-center gap-2">
                    <Icon name="check-circle" size={16} />
                    <span className="text-sm font-medium">
                      Cross-Platform Sync
                    </span>
                  </div>
                  <div className="w-px h-4 bg-white/30" />
                  <div className="flex items-center gap-2">
                    <Icon name="check-circle" size={16} />
                    <span className="text-sm font-medium">Modern UI/UX</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };

  // Challenges Section (Modern Style)
  const ChallengesSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-16 bg-transparent"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-800">
              Challenges & Solutions
            </h2>
            <p className="text-base text-gray-600">
              Addressing technical challenges with strategic and innovative
              solutions
            </p>
          </motion.div>
          <div className="space-y-2">
            {caseStudyData.challengesSolutions.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative border-b border-gray-200`}
              >
                <button
                  className={`w-full flex items-center justify-between px-2 py-4 focus:outline-none transition-colors`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <motion.div className="flex items-center gap-2" layout>
                    <Icon
                      name="exclamation-triangle"
                      size={18}
                      className="text-red-500"
                    />
                    <span className="font-semibold text-gray-800 text-base">
                      {item.challengeDescription || item.challenge}
                    </span>
                  </motion.div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon
                      name="chevron-down"
                      size={16}
                      className="text-gray-500"
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        bounce: 0.2,
                      }}
                      className="px-2 pb-4"
                    >
                      <motion.div
                        className="flex items-start gap-2 mb-1"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon
                          name="check-circle"
                          size={16}
                          className="text-green-600 mt-1"
                        />
                        <span className="font-semibold text-gray-800 text-sm">
                          Solution
                        </span>
                      </motion.div>
                      <motion.p
                        className="text-gray-700 pl-7 text-sm"
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.05 }}
                      >
                        {item.solution}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

  // Results Section
  const ResultsSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Results & Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes and positive impact on user experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Technical Highlights */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-800">
                Technical Performance
              </h3>
              <div className="space-y-4">
                {Object.entries(
                  caseStudyData.resultsImpact.technicalHighlights
                ).map(([key, value], index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-blue-700 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="font-bold text-blue-800">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Outcomes */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-800">
                Business Outcomes
              </h3>
              <div className="space-y-3">
                {caseStudyData.resultsImpact.businessOutcomes.map(
                  (outcome, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Icon
                        name="trending-up"
                        size={16}
                        className="text-green-600 mt-1"
                      />
                      <span className="text-green-700 text-sm">{outcome}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* User Experience */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-800">
                User Experience
              </h3>
              <div className="space-y-3">
                {caseStudyData.resultsImpact.userExperience.map(
                  (experience, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Icon
                        name="heart"
                        size={16}
                        className="text-purple-600 mt-1"
                      />
                      <span className="text-purple-700 text-sm">
                        {experience}
                      </span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };

  // Conclusion Section
  const ConclusionSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-20 bg-gradient-to-br from-primary-500 to-accent-500 text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Project Conclusion
            </h2>
            <p className="text-xl leading-relaxed mb-12 text-white/90">
              {caseStudyData.conclusion}
            </p>
            <motion.button
              onClick={onClose}
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Portfolio
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-white z-50 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <ChallengesSection />
        <ResultsSection />
        <ConclusionSection />
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseStudy;
