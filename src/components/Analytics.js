import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { analytics } from '../utils/storage';

const Analytics = () => {
  const { currentTheme } = useTheme();

  useEffect(() => {
    // Track page view
    analytics.trackSectionView('portfolio_loaded');

    // Track theme on initial load
    analytics.trackThemeChange(null, currentTheme);

    // Track user engagement
    let startTime = Date.now();
    let isActive = true;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        const timeSpent = Date.now() - startTime;
        console.log(`Time spent on page: ${Math.round(timeSpent / 1000)}s`);
      } else {
        isActive = true;
        startTime = Date.now();
      }
    };

    const handleBeforeUnload = () => {
      if (isActive) {
        const timeSpent = Date.now() - startTime;
        console.log(`Total time spent: ${Math.round(timeSpent / 1000)}s`);
      }
    };

    // Track scroll depth
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Track milestone scroll depths
        if (scrollDepth >= 25 && maxScrollDepth < 25) {
          console.log('Scrolled 25%');
        } else if (scrollDepth >= 50 && maxScrollDepth < 50) {
          console.log('Scrolled 50%');
        } else if (scrollDepth >= 75 && maxScrollDepth < 75) {
          console.log('Scrolled 75%');
        } else if (scrollDepth >= 90 && maxScrollDepth < 90) {
          console.log('Scrolled 90%');
        }
      }
    };

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentTheme]);

  // Track section intersections
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    const observers = [];

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              analytics.trackSectionView(sectionId);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;