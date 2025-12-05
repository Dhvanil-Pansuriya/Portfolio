import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Navigation from "./components/Navigation";
import ThemeSelector from "./components/ThemeSelector";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import SkeletonLoading from "./components/SkeletonLoading";
import { ChatButton } from "./chat";
import { runAllFixes } from "./utils/errorFixer";
import {
  setupTabCloseDetection,
  setupSimpleTabCloseDetection,
} from "./utils/tabCloseDetection";
 
// Import portfolio pages
import ReactNativePortfolio from "./pages/ReactNativePortfolio";
import AndroidPortfolio from "./pages/AndroidPortfolio";
import IOSPortfolio from "./pages/IOSPortfolio";
import PinalPortfolio from "./pages/PinalPortfolio";
import DhvanilPortfolio from "./pages/DhvanilPortfolio";
import DeepPortfolio from "./pages/DeepPortfolio";
 
const AppLayout = ({ children }) => {
  useEffect(() => {
    // Run error detection and fixes after component mount
    const timer = setTimeout(() => {
      runAllFixes();
    }, 2000); // Wait 2 seconds for all components to load
 
    return () => clearTimeout(timer);
  }, []);
 
  useEffect(() => {
    // Setup tab close detection to clear localStorage only when tab is actually closed (not on reload)
    // Using simple detection for better reliability
    const cleanupSession = setupSimpleTabCloseDetection(false); // false = only clear portfolio data, true = clear all localStorage
 
    return cleanupSession; // Cleanup event listeners on component unmount
  }, []);
 
  return (
    <div className="min-h-screen">
      <Analytics />
      <Navigation />
      {/* <ThemeSelector /> */}
      <ScrollToTop />
      <ChatButton />
      {children}
    </div>
  );
};
 
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);
 
  // Force scroll to top on page load/reload
  useEffect(() => {
    // Scroll to top immediately when component mounts
    window.scrollTo(0, 0);
    
    // Also prevent browser from restoring scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
 
  useEffect(() => {
    // Simulate app initialization and loading
    const initializeApp = async () => {
      try {
        // Wait for minimum loading time to show the beautiful loader
        const minLoadTime = new Promise((resolve) => setTimeout(resolve, 2500));
 
        // Wait for any async operations (fonts, initial data, etc.)
        const appInitialization = new Promise((resolve) => {
          // Simulate app initialization
          setTimeout(() => {
            setIsAppReady(true);
            resolve();
          }, 1000);
        });
 
        // Wait for both minimum time and app initialization
        await Promise.all([minLoadTime, appInitialization]);
 
        // Hide loading screen
        setIsLoading(false);
      } catch (error) {
        console.error("App initialization error:", error);
        // Even if there's an error, hide loading screen
        setIsLoading(false);
      }
    };
 
    initializeApp();
  }, []);
 
  return (
    <ErrorBoundary>
      <ThemeProvider>
        {isLoading ? (
          <SkeletonLoading />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key="app"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
            >
              <Router>
                <AppLayout>
                  <Routes>
                    {/* Default route redirects to Hardik's Mobile App Development portfolio */}
                    <Route
                      path="/"
                      element={
                        <Navigate
                          to="/hardik-ramoliya/mobile-app-development"
                          replace
                        />
                      }
                    />
 
                    {/* Hardik's Portfolio routes */}
                    <Route
                      path="/hardik-ramoliya/mobile-app-development"
                      element={<IOSPortfolio />}
                    />
                    <Route
                      path="/hardik-ramoliya/react-native"
                      element={<ReactNativePortfolio />}
                    />
                    <Route
                      path="/hardik-ramoliya/android"
                      element={<AndroidPortfolio />}
                    />
 
                    {/* Pinal's Portfolio route */}
                    <Route
                      path="/pinal-ramoliya"
                      element={<PinalPortfolio />}
                    />
 
                    {/* Dhvanil's Portfolio route */}
                    <Route
                      path="/dhvanil-pansuriya"
                      element={<DhvanilPortfolio />}
                    />
 
                    {/* Deep's Portfolio route */}
                    <Route path="/deep-surti" element={<DeepPortfolio />} />
 
                    {/* Legacy routes - redirect to new structure */}
                    <Route
                      path="/react-native"
                      element={
                        <Navigate to="/hardik-ramoliya/react-native" replace />
                      }
                    />
                    <Route
                      path="/android"
                      element={
                        <Navigate to="/hardik-ramoliya/android" replace />
                      }
                    />
                    <Route
                      path="/ios"
                      element={
                        <Navigate
                          to="/hardik-ramoliya/mobile-app-development"
                          replace
                        />
                      }
                    />
                    <Route
                      path="/hardik-ramoliya/ios"
                      element={
                        <Navigate
                          to="/hardik-ramoliya/mobile-app-development"
                          replace
                        />
                      }
                    />
 
                    {/* Catch all route - redirect to Hardik's Mobile App Development */}
                    <Route
                      path="*"
                      element={
                        <Navigate
                          to="/hardik-ramoliya/mobile-app-development"
                          replace
                        />
                      }
                    />
                  </Routes>
                </AppLayout>
              </Router>
            </motion.div>
          </AnimatePresence>
        )}
      </ThemeProvider>
    </ErrorBoundary>
  );
}
 
export default App;
