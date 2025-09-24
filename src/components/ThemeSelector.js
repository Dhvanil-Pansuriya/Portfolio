import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const ThemeSelector = () => {
  const { themes, currentTheme: contextTheme, switchTheme } = useTheme();
  const location = useLocation();

  // Map routes to themes
  const routeThemeMap = {
    "/": "mobile app development",
    "/hardik-ramoliya/react-native": "react-native",
    "/hardik-ramoliya/android": "android",
    "/hardik-ramoliya/mobile-app-development": "mobile app development",
    "/hardik-ramoliya/ios": "mobile app development", // Legacy route
    "/react-native": "react-native", // Legacy route
    "/android": "android", // Legacy route
    "/ios": "mobile app development", // Legacy route
    "/pinal-ramoliya": "pinal",
    "/dhvanil-pansuriya": "dhvanil",
    "/deep-surti": "deep",
  };

  // Use context theme if available, otherwise fall back to route-based detection
  const currentTheme =
    contextTheme ||
    routeThemeMap[location.pathname] ||
    "mobile app development";

  // Map themes to routes
  const themeRoutes = {
    "react-native": "/hardik-ramoliya/react-native",
    android: "/hardik-ramoliya/android",
    "mobile app development": "/hardik-ramoliya/mobile-app-development",
    pinal: "/pinal-ramoliya",
    dhvanil: "/dhvanil-pansuriya",
    deep: "/deep-surti",
  };

  return (
    <motion.div
      className="fixed bottom-4 left-4 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="card-professional p-3 shadow-lg">
        <div className="flex space-x-3">
          {Object.entries(themes).map(([key, theme]) => (
            <motion.div key={key} className="relative">
              <Link
                to={themeRoutes[key]}
                onClick={() => {
                  // Ensure theme is switched when clicking
                  if (themes[key]) {
                    switchTheme(key);
                  }
                }}
                className={`
                  relative block px-5 py-3 rounded-professional text-sm font-medium transition-all duration-300
                  ${
                    currentTheme === key
                      ? "bg-secondary-500 text-white shadow-lg"
                      : "text-gray-700 hover:bg-secondary-50 hover:text-secondary-600"
                  }
                `}
                title={theme.description}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2"
                >
                  <span className="hidden sm:inline font-semibold">
                    {theme.name}
                  </span>
                </motion.div>
                {currentTheme === key && (
                  <motion.div
                    className="absolute inset-0 bg-secondary-500 rounded-professional -z-10"
                    layoutId="activeTheme"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeSelector;
