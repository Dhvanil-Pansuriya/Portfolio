import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const Loading = ({ message = "Loading..." }) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const loadingTexts = [
    "Initializing portfolio...",
    "Loading projects...",
    "Preparing experience...",
    "Setting up skills...",
    "Configuring themes...",
    "Loading assets...",
    "Optimizing performance...",
    "Almost ready...",
    message,
  ];

  // Typewriter effect
  useEffect(() => {
    const currentFullText = loadingTexts[textIndex];

    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 50 + Math.random() * 50); // Variable typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, textIndex, isTyping, loadingTexts]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-100 via-gray-100 to-gray-50 flex items-center justify-center z-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[
          "react",
          "android",
          "apple",
          "javascript",
          "swift",
          "kotlin",
          "typescript",
          "firebase",
          "git",
          "xcode",
          "redux",
          "flutter",
          "nodejs",
          "graphql",
          "docker",
          "aws",
          "azure",
          "linux",
        ].map((iconName, index, arr) => (
          <motion.div
            key={iconName}
            className="absolute"
            style={{
              left: `${(index + 1) * (200 / (arr.length + 1))}%`,
              top: `${50 + Math.sin(index) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          >
            <Icon name={iconName} size={32} className="text-black/40" />
          </motion.div>
        ))}
      </div>
      <div className="text-center relative z-10">
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full mb-6 mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-gray-800 to-gray-400 rounded-full"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Typewriter Text */}
        <motion.div
          className="h-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-black text-lg font-medium">
            {currentText}
            <motion.span
              className="inline-block w-0.5 h-5 bg-white ml-1"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </p>
        </motion.div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-gray-800 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-white/5 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
