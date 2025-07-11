import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

const PortfolioAnimations = ({ theme }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.7 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [-8, 8, -8],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Enhanced Android Animation with Theme Colors
  const AndroidAnimation = () => (
    <motion.div
      className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary-300/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central Android Robot with Theme Colors */}
      <motion.div
        className="relative z-10"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div
          className="w-40 h-40 rounded-3xl flex items-center justify-center relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 5 }}
          style={{
            boxShadow: `0 0 30px rgba(var(--color-primary-500), 0.4)`,
          }}
          animate={{
            boxShadow: [
              `0 0 30px rgba(var(--color-primary-500), 0.4)`,
              `0 0 60px rgba(var(--color-primary-500), 0.7)`,
              `0 0 30px rgba(var(--color-primary-500), 0.4)`,
            ],
          }}
          transition={{
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: [-100, 100],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <Icon name="android" size={120} className="text-primary-600 relative z-10" />
        </motion.div>
      </motion.div>

      {/* Enhanced Orbiting Elements with Theme Colors */}
      <motion.div
        className="absolute inset-0"
        variants={orbitVariants}
        animate="animate"
      >
        {[
          { icon: "code", position: "top-0 left-1/2 -translate-x-1/2", delay: 0 },
          { icon: "mobile", position: "top-1/2 right-0 -translate-y-1/2", delay: 0.5 },
          { icon: "database", position: "bottom-0 left-1/2 -translate-x-1/2", delay: 1 },
          { icon: "tools", position: "top-1/2 left-0 -translate-y-1/2", delay: 1.5 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 rounded-2xl flex items-center justify-center ${item.position}`}
            variants={pulseVariants}
            animate="animate"
            style={{ animationDelay: `${item.delay}s` }}
            whileHover={{ scale: 1.3, rotate: 15 }}
          >
            <Icon name={item.icon} size={30} className="text-primary-500" />
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Background Particles with Theme Colors */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-accent-400 rounded-full"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            scale: [0.3, 1.8, 0.3],
            opacity: [0.2, 0.9, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Code Snippets with Theme Colors */}
      {['Kotlin', 'Java', 'XML', 'Gradle'].map((text, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-500 font-mono text-sm font-bold opacity-60"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${20 + (i * 20)}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  );

  // Enhanced iOS Animation with Theme Colors
  const IOSAnimation = () => (
    <motion.div
      className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Elegant Outer Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary-300/20"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central Apple Logo with Theme Colors */}
      <motion.div
        className="relative z-10"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div
          className="w-40 h-40  rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: -5 }}
          style={{
            boxShadow: `0 0 30px rgba(var(--color-primary-600), 0.3)`,
          }}
          animate={{
            boxShadow: [
              `0 0 30px rgba(var(--color-primary-600), 0.3)`,
              `0 0 60px rgba(var(--color-primary-600), 0.6)`,
              `0 0 30px rgba(var(--color-primary-600), 0.3)`,
            ],
          }}
          transition={{
            boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Premium Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: [-120, 120],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <Icon name="apple" size={120} className="text-secondary-800 relative z-10" />
        </motion.div>
      </motion.div>

      {/* iOS App Icons with Theme Colors */}
      <motion.div
        className="absolute inset-0"
        variants={orbitVariants}
        animate="animate"
      >
        {[
          { icon: "swift", position: "top-6 left-1/2 -translate-x-1/2", delay: 0 },
          { icon: "mobile", position: "top-1/2 right-6 -translate-y-1/2", delay: 0.7 },
          { icon: "cloudKit", position: "bottom-6 left-1/2 -translate-x-1/2", delay: 1.4 },
          { icon: "tools", position: "top-1/2 left-6 -translate-y-1/2", delay: 2.1 },
          { icon: "xcode", position: "top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2", delay: 0.1 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-3xl flex items-center justify-center ${item.position}`}
            variants={pulseVariants}
            animate="animate"
            style={{ animationDelay: `${item.delay}s` }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <Icon name={item.icon} size={30} className="text-primary-500" />
          </motion.div>
        ))}
      </motion.div>

      {/* Elegant Particles with Theme Colors */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-accent-400 rounded-full"
          style={{
            left: `${25 + Math.random() * 50}%`,
            top: `${25 + Math.random() * 50}%`,
          }}
          animate={{
            scale: [0.2, 1.2, 0.2],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* iOS Technologies with Theme Colors */}
      {['Swift', 'UIKit', 'SwiftUI', 'Core'].map((text, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-500 font-semibold text-sm opacity-70"
          style={{
            left: `${25 + (i * 12)}%`,
            top: `${25 + (i * 15)}%`,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  );

  // Enhanced React Native Animation with Theme Colors
  const ReactNativeAnimation = () => (
    <motion.div
      className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Central React Logo with Theme Colors */}
      <motion.div
        className="relative z-10"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div
          className="w-40 h-40 rounded-3xl flex items-center justify-center relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 10 }}
          style={{
            boxShadow: `0 0 30px rgba(var(--color-primary-500), 0.4)`,
          }}
          animate={{
            boxShadow: [
              `0 0 30px rgba(var(--color-primary-500), 0.4)`,
              `0 0 60px rgba(var(--color-primary-500), 0.7)`,
              `0 0 30px rgba(var(--color-primary-500), 0.4)`,
            ],
          }}
          transition={{
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* React Atom Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
            animate={{
              x: [-100, 100],
              rotate: [0, 360],
            }}
            transition={{
              x: { duration: 2.5, repeat: Infinity, ease: "linear" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            }}
          />
          <Icon name="react" size={120} className="text-primary-600 relative z-10" />
        </motion.div>
      </motion.div>

      {/* Enhanced Electron Orbits with Theme Colors */}
      <motion.div className="absolute inset-0">
        {[0, 60, 120].map((rotation, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 border-2 border-primary-300/40 rounded-full"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
            animate={{
              rotate: [rotation, rotation + 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 12 + index * 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="absolute w-5 h-5 bg-accent-400 rounded-full -top-2.5 left-1/2 -translate-x-1/2 shadow-lg"
              animate={{
                scale: [0.6, 1.4, 0.6],
              }}
              style={{
                boxShadow: `0 0 10px rgba(var(--color-accent-400), 0.5)`,
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.8,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Platform Icons with Theme Colors */}
      <motion.div
        className="absolute inset-0"
        variants={orbitVariants}
        animate="animate"
      >
        {[
          { icon: "android", position: "top-10 right-10", delay: 0 },
          { icon: "apple", position: "bottom-10 left-10", delay: 0.4 },
          { icon: "javascript", position: "top-10 left-10", delay: 0.8 },
          { icon: "mobile", position: "bottom-10 right-10", delay: 1.2 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 rounded-2xl flex items-center justify-center ${item.position}`}
            variants={pulseVariants}
            animate="animate"
            style={{ animationDelay: `${item.delay}s` }}
            whileHover={{ scale: 1.3, rotate: 20 }}
          >
            <Icon name={item.icon} size={30} className="text-primary-500" />
          </motion.div>
        ))}
      </motion.div>

      {/* Cross-Platform Particles with Theme Colors */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-accent-400 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            scale: [0.3, 1.5, 0.3],
            opacity: [0.3, 0.9, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* React Native Technologies with Theme Colors */}
      {['JavaScript', 'TypeScript', 'Git', 'Firebase'].map((text, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-500 font-bold text-sm opacity-70"
          style={{
            left: `${25 + (i * 10)}%`,
            top: `${15 + (i * 25)}%`,
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.6,
          }}
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  );

  // Enhanced Pinal Portfolio Animation with Theme Colors
  const PinalAnimation = () => (
    <motion.div
      className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Central Code Icon with Theme Colors */}
      <motion.div
        className="relative z-10"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div
          className="w-40 h-40 rounded-3xl flex items-center justify-center relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: -8 }}
          style={{
            boxShadow: `0 0 30px rgba(var(--color-primary-500), 0.4)`,
          }}
          animate={{
            boxShadow: [
              `0 0 30px rgba(var(--color-primary-500), 0.4)`,
              `0 0 60px rgba(var(--color-primary-500), 0.7)`,
              `0 0 30px rgba(var(--color-primary-500), 0.4)`,
            ],
          }}
          transition={{
            boxShadow: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* Code Matrix Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: [-120, 120],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <Icon name="code" size={120} className="text-primary-600 relative z-10" />
        </motion.div>
      </motion.div>

      {/* Enhanced Technology Stack with Theme Colors */}
      <motion.div
        className="absolute inset-0"
        variants={orbitVariants}
        animate="animate"
      >
        {[
          { icon: "html", position: "top-0 left-1/2 -translate-x-1/2", delay: 0 },
          { icon: "css", position: "top-1/2 right-0 -translate-y-1/2", delay: 0.3 },
          { icon: "javascript", position: "bottom-0 left-1/2 -translate-x-1/2", delay: 0.6 },
          { icon: "database", position: "top-1/2 left-0 -translate-y-1/2", delay: 0.9 },
          { icon: "tools", position: "top-6 right-6", delay: 1.2 },
          { icon: "mobile", position: "bottom-6 left-6", delay: 1.5 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 rounded-2xl flex items-center justify-center ${item.position}`}
            variants={pulseVariants}
            animate="animate"
            style={{ animationDelay: `${item.delay}s` }}
            whileHover={{ scale: 1.3, rotate: 25 }}
          >
            <Icon name={item.icon} size={30} className="text-primary-500" />
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Code Particles with Theme Colors */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-accent-400 font-mono text-sm font-bold opacity-70"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.4, 0.9, 0.4],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {['<>', '{}', '[]', '()', '&&', '||', '=>', '++', 'fn', 'var', 'let', 'const', 'if', 'for', 'while'][i % 15]}
        </motion.div>
      ))}

      {/* Full-Stack Technologies with Theme Colors */}
      {['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Node.js', 'React'].map((text, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-500 font-bold text-xs opacity-60"
          style={{
            left: `${15 + (i * 12)}%`,
            top: `${15 + (i * 14)}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  );

  // Render appropriate animation based on theme
  const renderAnimation = () => {
    switch (theme) {
      case 'android':
        return <AndroidAnimation />;
      case 'ios':
        return <IOSAnimation />;
      case 'react-native':
        return <ReactNativeAnimation />;
      case 'pinal':
        return <PinalAnimation />;
      default:
        return <ReactNativeAnimation />;
    }
  };

  return (
    <div className="flex items-center justify-center">
      {renderAnimation()}
    </div>
  );
};

export default PortfolioAnimations;