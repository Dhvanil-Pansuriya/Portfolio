import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "../Icon";
import ImagePlaceholder from "../ImagePlaceholder";

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
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-3xl opacity-30"
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
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl w-full h-96 flex items-center justify-center">
                  <div className="aspect-w-16 aspect-h-9">
                    <ImagePlaceholder
                      src={caseStudyData.images.hero}
                      alt={`${caseStudyData.title} Hero`}
                      className="w-full h-full object-cover rounded-2xl"
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

  // Technical Architecture Section
  const TechnicalSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const techCategories = [
      {
        name: "Backend",
        items: caseStudyData.technicalArchitecture.backend,
        icon: "server",
      },
      {
        name: "Web Frontend",
        items: caseStudyData.technicalArchitecture.webFrontend,
        icon: "globe",
      },
      {
        name: "Android App",
        items: caseStudyData.technicalArchitecture.androidApp,
        icon: "mobile",
      },
      {
        name: "Shared Technologies",
        items: caseStudyData.technicalArchitecture.sharedTechnologies,
        icon: "cog",
      },
    ];

    return (
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Technical Architecture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technologies for scalability, performance, and
              user experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={category.icon}
                      size={20}
                      className="text-primary-600"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {category.name}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Visualization */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Technology Stack
            </h3>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <ImagePlaceholder
                src={caseStudyData.images.techStack}
                alt="Technology Stack"
                className="w-full max-w-5xl mx-auto h-80 object-contain"
                fallbackText="Technology Stack Diagram"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };

  // Features Section
  const FeaturesSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
        name: "Assessment System",
        items: caseStudyData.featuresFunctionality.assessmentSystem,
        icon: "clipboard-check",
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
                whileHover={{ y: -5 }}
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

          {/* Screenshots Gallery */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Application Screenshots
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mobile Screenshots */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700">
                  Mobile Application
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {caseStudyData.images.mobileScreens.map((screen, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ImagePlaceholder
                        src={screen}
                        alt={`Mobile Screen ${index + 1}`}
                        className="w-full h-auto object-cover"
                        fallbackText={`Mobile Screen ${index + 1}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Web Screenshots */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-700">
                  Web Platform
                </h4>
                <div className="space-y-4">
                  {caseStudyData.images.webScreens.map((screen, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.02 }}
                    >
                      <ImagePlaceholder
                        src={screen}
                        alt={`Web Screen ${index + 1}`}
                        className="w-full h-auto object-cover"
                        fallbackText={`Web Screen ${index + 1}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };

  // Challenges Section
  const ChallengesSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
              Challenges & Solutions
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Addressing technical challenges with strategic and innovative
              solutions
            </p>
          </motion.div>
          <div className="space-y-10">
            {caseStudyData.challengesSolutions.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col lg:flex-row gap-6"
                whileHover={{ y: -5 }}
              >
                <div className="lg:w-1/2 left-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        name="exclamation-triangle"
                        size={18}
                        className="text-red-600"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Challenge
                    </h3>
                  </div>
                  <p className="text-gray-600 pl-9">
                    {item.challengeDescription || item.challenge}
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        name="check-circle"
                        size={18}
                        className="text-green-600"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Solution
                    </h3>
                  </div>
                  <p className="text-gray-600 pl-9">{item.solution}</p>
                </div>
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

          {/* Results Analytics */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Performance Analytics
            </h3>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
              <ImagePlaceholder
                src={caseStudyData.images.results}
                alt="Results Analytics"
                className="w-full max-w-4xl mx-auto h-80 object-contain"
                fallbackText="Performance Analytics Dashboard"
              />
            </div>
          </motion.div>
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
        {/* <TechnicalSection /> */}
        <FeaturesSection />
        <ChallengesSection />
        <ResultsSection />
        <ConclusionSection />
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseStudy;
