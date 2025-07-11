import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGooglePlay, FaAppStore } from 'react-icons/fa';

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="glass-effect p-6 rounded-2xl hover-lift group"
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {project.features && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary-300 mb-2">Key Features:</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent-400 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.technologies && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-500/20 text-primary-200 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {(project.playStore || project.appStore || project.website) && (
        <div className="flex space-x-3 pt-4 border-t border-white/10">
          {project.playStore && (
            <motion.a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-3 py-2 bg-green-600/20 text-green-300 rounded-lg hover:bg-green-600/30 transition-colors duration-300"
            >
              <FaGooglePlay className="w-4 h-4" />
              <span className="text-sm">Play Store</span>
            </motion.a>
          )}
          
          {project.appStore && (
            <motion.a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-colors duration-300"
            >
              <FaAppStore className="w-4 h-4" />
              <span className="text-sm">App Store</span>
            </motion.a>
          )}

          {project.website && (
            <motion.a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-3 py-2 bg-purple-600/20 text-purple-300 rounded-lg hover:bg-purple-600/30 transition-colors duration-300"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="text-sm">Website</span>
            </motion.a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;