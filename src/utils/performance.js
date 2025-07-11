// Performance optimization utilities

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for resize events
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy loading utility for images
export const lazyLoadImage = (src, placeholder = '') => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

// Preload critical resources
export const preloadResources = (resources) => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as || 'image';
    if (resource.type) link.type = resource.type;
    document.head.appendChild(link);
  });
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if user is on a slow connection
export const isSlowConnection = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    return connection.effectiveType === 'slow-2g' || 
           connection.effectiveType === '2g' || 
           connection.saveData;
  }
  return false;
};

// Intersection Observer utility
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Performance monitoring
export const performanceMonitor = {
  // Measure component render time
  measureRender: (componentName, renderFunction) => {
    const startTime = performance.now();
    const result = renderFunction();
    const endTime = performance.now();
    console.log(`${componentName} render time: ${endTime - startTime}ms`);
    return result;
  },

  // Measure function execution time
  measureFunction: (functionName, func, ...args) => {
    const startTime = performance.now();
    const result = func(...args);
    const endTime = performance.now();
    console.log(`${functionName} execution time: ${endTime - startTime}ms`);
    return result;
  },

  // Get Core Web Vitals
  getCoreWebVitals: () => {
    return new Promise((resolve) => {
      const vitals = {};
      
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        vitals.fcp = entries[entries.length - 1].startTime;
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        vitals.lcp = entries[entries.length - 1].startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        vitals.fid = entries[0].processingStart - entries[0].startTime;
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        vitals.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      setTimeout(() => {
        resolve(vitals);
      }, 5000);
    });
  }
};

// Memory usage monitoring
export const memoryMonitor = {
  // Get current memory usage
  getCurrentUsage: () => {
    if ('memory' in performance) {
      return {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      };
    }
    return null;
  },

  // Monitor memory usage over time
  startMonitoring: (interval = 5000) => {
    const monitor = setInterval(() => {
      const usage = memoryMonitor.getCurrentUsage();
      if (usage) {
        console.log('Memory Usage:', {
          used: `${(usage.used / 1048576).toFixed(2)} MB`,
          total: `${(usage.total / 1048576).toFixed(2)} MB`,
          percentage: `${((usage.used / usage.total) * 100).toFixed(2)}%`
        });
      }
    }, interval);

    return () => clearInterval(monitor);
  }
};