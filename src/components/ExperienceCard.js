import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const ExperienceCard = ({ experience, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative pl-8 pb-8 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500">
      {/* Timeline dot */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-0 top-2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1.5 shadow-lg group-hover:shadow-glow transition-all duration-300"
      />
      </div>

      <div className="glass-effect p-6 rounded-xl hover-lift ml-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-primary-200 transition-colors duration-300">
            {experience.designation}
          </h3>
          <div className="flex items-center text-accent-300 text-sm mt-1 sm:mt-0">
            <FaCalendarAlt className="w-4 h-4 mr-2" />
            {experience.duration}
          </div>
        </div>

        <div className="flex items-center text-primary-300 mb-3">
          <FaBuilding className="w-4 h-4 mr-2" />
          <span className="font-medium">{experience.organization}</span>
        </div>

        {experience.description && (
          <p className="text-gray-300 text-sm leading-relaxed">
            {experience.description}
          </p>
        )}

        {experience.achievements && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-accent-300 mb-2">Key Achievements:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-400 mr-2">▸</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;