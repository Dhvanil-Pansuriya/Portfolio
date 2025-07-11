import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChatBubbleLeftRight, HiXMark } from "react-icons/hi2";
import { useTheme } from "../../contexts/ThemeContext";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentTheme } = useTheme();
  const loadingTimeoutRef = useRef(null);
  const iframeRef = useRef(null);
  const TAWK_TO_URL = process.env.REACT_APP_TAWK_TO;

  const toggleChat = () => {
    if (!isOpen) {
      setIsLoading(true);
      setIsOpen(true);
      // Fallback timeout in case iframe doesn't load
      loadingTimeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 10000); // 10 second timeout
    } else {
      setIsOpen(false);
      setIsLoading(false);
      // Clear any pending timeout
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
        loadingTimeoutRef.current = null;
      }
    }
  };

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  const handleIframeLoad = () => {
    // Add a small delay to ensure iframe content is fully rendered
    setTimeout(() => {
      setIsLoading(false);
      // Clear the fallback timeout since iframe loaded successfully
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
        loadingTimeoutRef.current = null;
      }
    }, 600); // 600ms delay to ensure content is rendered
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        disabled={isLoading}
        className={`
          fixed bottom-8 right-4 sm:right-8 z-50
          w-12 h-12
          bg-primary-500 hover:bg-primary-600
          text-white
          shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-primary-300
          active:scale-95
          ${isOpen ? "rotate-180" : "rotate-0"}
          ${isPressed ? "scale-95" : ""}
          ${isLoading ? "opacity-75 cursor-not-allowed" : ""}
          disabled:hover:bg-primary-500
        `}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
        aria-label={
          isLoading ? "Loading chat..." : isOpen ? "Close chat" : "Open chat"
        }
        title={
          isLoading
            ? "Loading chat..."
            : isOpen
            ? "Close chat"
            : "Open chat support"
        }
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="animate-spin rounded-full h-6 w-6 md:h-7 md:w-7 border-2 border-white/30 border-t-white"
            />
          ) : isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <HiXMark className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <HiChatBubbleLeftRight className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Interface - Tawk.to Iframe */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-4 sm:right-8 z-40 w-80 md:w-96 h-96 md:h-[500px] max-h-[calc(100vh-120px)] bg-white rounded-lg shadow-2xl overflow-hidden max-w-[calc(100vw-32px)] sm:max-w-[calc(100vw-48px)] md:max-w-none"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
              x: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 20,
              x: 20,
              transition: { duration: 0.2 },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* Loading Overlay - covers the white iframe until fully loaded */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-white flex items-center justify-center z-10 rounded-lg"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="animate-spin rounded-full h-10 w-10 border-2 border-primary-500/30 border-t-primary-500 mx-auto mb-4"
                    ></motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-sm text-gray-700 font-medium"
                    >
                      Loading chat...
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="text-xs text-gray-500 mt-1"
                    >
                      Connecting to support
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Iframe Container */}
            <div className="relative w-full h-full bg-white rounded-lg">
              <iframe
                ref={iframeRef}
                src={TAWK_TO_URL}
                className={`w-full h-full border-0 rounded-lg transition-all duration-500 ease-out ${
                  isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
                title="Live Chat Support"
                onLoad={handleIframeLoad}
                allow="microphone; camera"
                style={{
                  minHeight: "300px",
                  background: "white",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatButton;
