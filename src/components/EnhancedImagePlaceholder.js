import React from 'react';
import { motion } from 'framer-motion';

const EnhancedImagePlaceholder = ({ name = "", className = "" }) => {
  const initials = name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)

  return (
    <motion.div 
      className={`relative overflow-hidden bg-gradient-to-br from-secondary-300 via-accent-200 to-primary-100 flex items-center justify-center ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 bg-white/20 transform rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-6 left-6 w-6 h-6 bg-white/15"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-4 w-4 h-4 bg-white/25 transform rotate-45"
        animate={{ 
          y: [-10, 10, -10],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.div
          className="text-6xl lg:text-8xl font-bold text-white mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
        >
          {initials}
        </motion.div>
      </div>
      
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 border-4 border-white/30"
        animate={{
          borderColor: [
            "rgba(255,255,255,0.3)",
            "rgba(255,255,255,0.6)",
            "rgba(255,255,255,0.3)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white/50" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white/50" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white/50" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white/50" />
    </motion.div>
  );
};

export default EnhancedImagePlaceholder;