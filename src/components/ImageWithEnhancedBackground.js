import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EnhancedImagePlaceholder from './EnhancedImagePlaceholder';

const ImageWithEnhancedBackground = ({ 
  src, 
  alt, 
  name,
  className = '',
  imageClassName = '',
  backgroundClassName = '',
  showBackground = true,
  onImageLoad,
  onImageError
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    if (onImageLoad) onImageLoad();
  };

  const handleImageError = () => {
    setImageError(true);
    if (onImageError) onImageError();
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Enhanced Background - Always visible when showBackground is true */}
      {showBackground && (
        <div className={`absolute inset-0 ${backgroundClassName}`}>
          <EnhancedImagePlaceholder 
            className="w-full h-full"
          />
        </div>
      )}
      
      {/* Transparent Image Overlay */}
      {src && !imageError && (
        <motion.div
          className="relative z-10 w-full h-full"
          variants={imageVariants}
          initial="hidden"
          animate={imageLoaded ? "visible" : "hidden"}
        >
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-contain ${imageClassName}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              // Ensure transparency is preserved
              backgroundColor: 'transparent',
              mixBlendMode: 'normal'
            }}
          />
        </motion.div>
      )}
      
      {/* Loading State */}
      {src && !imageLoaded && !imageError && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-gray-700 font-medium">Loading image...</span>
          </motion.div>
        </div>
      )}
      
      {/* Error State - Show only background */}
      {imageError && showBackground && (
        <div className="absolute inset-0 z-10">
          <EnhancedImagePlaceholder 
            name={name}
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default ImageWithEnhancedBackground;