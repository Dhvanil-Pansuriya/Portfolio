// Local Storage Utilities
export const storage = {
  // Get item from localStorage
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error getting ${key} from localStorage:`, error);
      return defaultValue;
    }
  },

  // Set item in localStorage
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting ${key} in localStorage:`, error);
      return false;
    }
  },

  // Remove item from localStorage
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing ${key} from localStorage:`, error);
      return false;
    }
  },

  // Clear all localStorage
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  }
};

// Theme preference keys
export const STORAGE_KEYS = {
  THEME: 'portfolio_theme',
  VISITED: 'portfolio_visited',
  PREFERENCES: 'portfolio_preferences'
};

// User preferences utilities
export const preferences = {
  // Get user preferences
  get: () => {
    return storage.get(STORAGE_KEYS.PREFERENCES, {
      theme: 'react-native',
      reducedMotion: false,
      highContrast: false,
      fontSize: 'medium'
    });
  },

  // Set user preferences
  set: (newPreferences) => {
    const currentPreferences = preferences.get();
    const updatedPreferences = { ...currentPreferences, ...newPreferences };
    return storage.set(STORAGE_KEYS.PREFERENCES, updatedPreferences);
  },

  // Reset preferences to default
  reset: () => {
    return storage.remove(STORAGE_KEYS.PREFERENCES);
  }
};

// Session cleanup utilities
export const sessionCleanup = {
  // Clear all portfolio-related data
  clearPortfolioData: () => {
    try {
      const keys = Object.keys(localStorage);
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
      
      console.log('Portfolio data cleared from localStorage');
      return true;
    } catch (error) {
      console.error('Error clearing portfolio data:', error);
      return false;
    }
  },

  // Clear all localStorage
  clearAllData: () => {
    try {
      localStorage.clear();
      console.log('All localStorage data cleared');
      return true;
    } catch (error) {
      console.error('Error clearing all localStorage data:', error);
      return false;
    }
  }
};

// Analytics utilities (for tracking user interactions)
export const analytics = {
  // Track theme changes
  trackThemeChange: (oldTheme, newTheme) => {
    console.log(`Theme changed from ${oldTheme} to ${newTheme}`);
    // Here you could integrate with Google Analytics, Mixpanel, etc.
  },

  // Track section views
  trackSectionView: (sectionName) => {
    console.log(`Section viewed: ${sectionName}`);
  },

  // Track project views
  trackProjectView: (projectName) => {
    console.log(`Project viewed: ${projectName}`);
  },

  // Track contact form submissions
  trackContactSubmission: () => {
    console.log('Contact form submitted');
  }
};