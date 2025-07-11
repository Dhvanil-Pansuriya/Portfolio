// Session cleanup utilities for clearing localStorage on tab close

/**
 * Clear all portfolio-related localStorage data
 */
export const clearPortfolioStorage = () => {
  try {
    // Get all localStorage keys
    const keys = Object.keys(localStorage);
    
    // Filter and remove portfolio-related keys
    const portfolioKeys = keys.filter(key => 
      key.startsWith('portfolio_') || 
      key.includes('chat') || 
      key.includes('theme') || 
      key.includes('preferences') ||
      key.includes('visited') ||
      key.includes('faqs')
    );
    
    portfolioKeys.forEach(key => {
      localStorage.removeItem(key);
    });
    
    console.log('Portfolio localStorage data cleared on tab close');
  } catch (error) {
    console.warn('Failed to clear portfolio localStorage:', error);
  }
};

/**
 * Clear all localStorage data (complete cleanup)
 */
export const clearAllStorage = () => {
  try {
    localStorage.clear();
    console.log('All localStorage data cleared on tab close');
  } catch (error) {
    console.warn('Failed to clear localStorage:', error);
  }
};

/**
 * Setup session cleanup on tab close (simple version)
 * Only clears data on actual tab close, not on page reload
 * @param {boolean} clearAll - If true, clears all localStorage. If false, only clears portfolio-related data
 */
export const setupSessionCleanup = (clearAll = false) => {
  let isReloading = false;
  
  const handleBeforeUnload = (event) => {
    // Check if this is a reload
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0];
      isReloading = navEntry.type === 'reload';
    }
    
    // Only cleanup if it's not a reload
    if (!isReloading) {
      if (clearAll) {
        clearAllStorage();
      } else {
        clearPortfolioStorage();
      }
    }
  };

  // Track reload attempts
  const handleKeyDown = (event) => {
    if ((event.ctrlKey && event.key === 'r') || 
        event.key === 'F5' || 
        (event.ctrlKey && event.key === 'F5')) {
      isReloading = true;
    }
  };

  // Reset reload flag
  const handleLoad = () => {
    isReloading = false;
  };

  // Add event listeners
  window.addEventListener('beforeunload', handleBeforeUnload);
  document.addEventListener('keydown', handleKeyDown);
  window.addEventListener('load', handleLoad);

  // Return cleanup function to remove event listeners
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    document.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('load', handleLoad);
  };
};

/**
 * Setup session cleanup with page visibility API for better detection
 * Only clears data on actual tab close, not on page reload
 */
export const setupAdvancedSessionCleanup = (clearAll = false) => {
  const cleanup = clearAll ? clearAllStorage : clearPortfolioStorage;
  let isReloading = false;
  let isNavigating = false;
  
  const handleBeforeUnload = (event) => {
    // Check if this is a reload or navigation within the same site
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0];
      isReloading = navEntry.type === 'reload';
      isNavigating = navEntry.type === 'navigate';
    }
    
    // Only cleanup if it's not a reload and not a navigation
    if (!isReloading && !isNavigating) {
      cleanup();
    }
  };

  const handleVisibilityChange = () => {
    // Only clear data when page becomes hidden AND it's not a reload
    if (document.visibilityState === 'hidden' && !isReloading) {
      // Add a small delay to distinguish between tab switch and tab close
      setTimeout(() => {
        if (document.visibilityState === 'hidden') {
          cleanup();
        }
      }, 1000);
    }
  };

  const handlePageHide = (event) => {
    // Only cleanup on pagehide if it's not a reload
    if (!isReloading && event.persisted === false) {
      cleanup();
    }
  };

  // Track page reload attempts
  const handleKeyDown = (event) => {
    // Detect Ctrl+R, F5, Ctrl+F5 (reload shortcuts)
    if ((event.ctrlKey && event.key === 'r') || 
        event.key === 'F5' || 
        (event.ctrlKey && event.key === 'F5')) {
      isReloading = true;
    }
  };

  // Reset reload flag on page load
  const handleLoad = () => {
    isReloading = false;
    isNavigating = false;
  };

  // Add event listeners
  window.addEventListener('beforeunload', handleBeforeUnload);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('pagehide', handlePageHide);
  document.addEventListener('keydown', handleKeyDown);
  window.addEventListener('load', handleLoad);

  // Return cleanup function
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('pagehide', handlePageHide);
    document.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('load', handleLoad);
  };
};

export default {
  clearPortfolioStorage,
  clearAllStorage,
  setupSessionCleanup,
  setupAdvancedSessionCleanup
};