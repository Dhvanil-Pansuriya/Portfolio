import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Icon from './Icon';
import ImagePlaceholder from './ImagePlaceholder';

const Projects = ({ projects }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const getTechColor = (tech) => {
    const colorMap = {
    // Existing
    'React Native': 'bg-blue-100 text-blue-700',
    'Swift': 'bg-orange-100 text-orange-700',
    'Kotlin': 'bg-purple-100 text-purple-700',
    'Firebase': 'bg-yellow-100 text-yellow-700',
    'Redux': 'bg-indigo-100 text-indigo-700',
    'TypeScript': 'bg-blue-100 text-blue-700',
    'JavaScript': 'bg-yellow-100 text-yellow-700',
    'Android SDK': 'bg-green-100 text-green-700',
    'iOS SDK': 'bg-gray-100 text-gray-700',
    'SwiftUI': 'bg-blue-100 text-blue-700',
    'UIKit': 'bg-gray-100 text-gray-700',
    'Xcode': 'bg-gray-200 text-gray-800',
    'Android Studio': 'bg-green-200 text-green-800',
    'Git': 'bg-red-100 text-red-700',
    'Expo': 'bg-purple-200 text-purple-800',
    'Jira': 'bg-blue-200 text-blue-800',
    'Instruments': 'bg-gray-300 text-gray-800',
    'CocoaPods': 'bg-red-200 text-red-800',
    'Swift Package Manager': 'bg-orange-200 text-orange-800',
    'Room Database': 'bg-green-300 text-green-800',
    'SQLite': 'bg-gray-300 text-gray-800',
    'Core Data': 'bg-blue-300 text-blue-800',
    'AsyncStorage': 'bg-yellow-200 text-yellow-800',
    'Real-time Database': 'bg-orange-300 text-orange-800',
    'Redux': 'bg-indigo-200 text-indigo-800',
    'React Navigation': 'bg-purple-300 text-purple-800',
    'REST APIs': 'bg-green-200 text-green-800',
    'GraphQL': 'bg-pink-200 text-pink-800',
    'WebSockets': 'bg-yellow-300 text-yellow-800',
    'Push Notifications': 'bg-red-300 text-red-800',
    'In-App Purchases': 'bg-blue-300 text-blue-800',
    'Social Integration': 'bg-indigo-300 text-indigo-800',
    'Maps Integration': 'bg-green-300 text-green-800',
    'AWS S3': 'bg-yellow-300 text-yellow-800',
    'Debugging': 'bg-gray-300 text-gray-800',
    'Performance Optimization': 'bg-purple-200 text-purple-800',
    'MVVM Architecture': 'bg-indigo-200 text-indigo-800',
    'RxJava': 'bg-purple-300 text-purple-800',
    'Retrofit': 'bg-green-200 text-green-800',
    'Google Maps': 'bg-green-300 text-green-800',
    'Bluetooth Low Energy (BLE)': 'bg-blue-200 text-blue-800',
    'Beacon Technology': 'bg-indigo-300 text-indigo-800',
    'Material Design': 'bg-purple-200 text-purple-800',
    'Custom Views': 'bg-indigo-200 text-indigo-800',
    'Play Store Publishing': 'bg-green-200 text-green-800',
    'Core Animation': 'bg-gray-200 text-gray-800',
    'AVFoundation': 'bg-gray-300 text-gray-800',
    'MapKit': 'bg-green-300 text-green-800',
    'CloudKit': 'bg-blue-200 text-blue-800',
    'JSON Parsing': 'bg-yellow-200 text-yellow-800',
    'Auto Layout': 'bg-gray-200 text-gray-800',
    'MVC/MVVM': 'bg-indigo-200 text-indigo-800',
    'Grand Central Dispatch': 'bg-gray-300 text-gray-800',
    'App Store Connect': 'bg-blue-200 text-blue-800',
    'TestFlight': 'bg-gray-200 text-gray-800',

    // Added from pinalSkills
    'PHP': 'bg-indigo-100 text-indigo-700',
    'HTML': 'bg-orange-100 text-orange-700',
    'CSS': 'bg-blue-100 text-blue-700',
    'Laravel': 'bg-red-100 text-red-700',
    'Yii2': 'bg-purple-100 text-purple-700',
    'Vue': 'bg-green-100 text-green-700',
    'React': 'bg-blue-100 text-blue-700',
    'Node.js': 'bg-green-200 text-green-800',
    'jQuery': 'bg-blue-200 text-blue-800',
    'Apache JMeter': 'bg-orange-200 text-orange-800',
    'MySQL': 'bg-yellow-200 text-yellow-800',
    'MongoDB': 'bg-green-300 text-green-800',
    'Schema Design': 'bg-gray-200 text-gray-800',
    'Project Management': 'bg-pink-100 text-pink-700',
    'Website Performance Enhancement': 'bg-teal-100 text-teal-700',
    'Website Load Testing': 'bg-yellow-100 text-yellow-700',
    };

    
    for (const [key, color] of Object.entries(colorMap)) {
      if (tech.toLowerCase().includes(key.toLowerCase())) {
        return color;
      }
    }
    return 'bg-gray-100 text-gray-700';
  };

  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Icon name="times" size={20} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                Key Features
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2 p-3 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                >
                  <Icon name="google-play" size={16} />
                  Play Store
                </a>
              )}
              {project.appStore && (
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                >
                  <Icon name="app-store" size={16} />
                  App Store
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <Icon name="github" size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing my best work and the impact I've made
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Project Image */}
                  

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon name="google-play" size={16} />
                        </a>
                      )}
                      {project.appStore && (
                        <a
                          href={project.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon name="app-store" size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-primary-700">
                Want to see more?
              </h3>
              <p className="text-gray-600 mb-6">
                These are just a few highlights from my portfolio. I have many more projects 
                and would love to discuss how I can help bring your ideas to life.
              </p>
              <motion.button
                className="px-8 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;