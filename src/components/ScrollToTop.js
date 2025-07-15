import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-20 sm:right-24 z-40 w-12 h-12 bg-primary-500 text-white rounded-sm shadow-lg hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Scroll to top"
        >
          <Icon name="arrow-up" size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;