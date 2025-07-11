import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

const ImagePlaceholder = ({ 
  src, 
  alt, 
  className = '', 
  fallback = null,
  gradient = 'from-primary-400 to-accent-400',
  icon = <Icon name="mobile" size={32} className="text-white" />,
  text = ''
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // If we have a real image source and it hasn't errored
  if (src && !imageError) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <motion.div
              className="text-white text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="text-4xl mb-2">{icon}</div>
              <div className="text-sm font-medium">Loading...</div>
            </motion.div>
          </div>
        )}
        
        {/* Actual image */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
    );
  }

  // Fallback or placeholder
  return (
    <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
      {fallback || (
        <div className="text-white text-center">
          <motion.div
            className="text-4xl mb-2"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
          {text && (
            <div className="text-sm font-medium opacity-90">
              {text}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder;