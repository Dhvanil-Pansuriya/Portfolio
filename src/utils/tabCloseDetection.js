// Reliable tab close detection that distinguishes between reload and actual tab close

/**
 * Setup reliable tab close detection
 * Strategy: Use beforeunload + unload events with reload flag tracking
 */
export const setupTabCloseDetection = (clearAll = false) => {
  const RELOAD_FLAG_KEY = 'portfolio_page_reload_flag';
  const TAB_ID_KEY = 'portfolio_tab_id';
  
  // Generate unique tab ID if not exists
  if (!sessionStorage.getItem(TAB_ID_KEY)) {
    sessionStorage.setItem(TAB_ID_KEY, `${Date.now()}_${Math.random()}`);
  }
  
  const cleanup = () => {
    try {
      if (clearAll) {
        localStorage.clear();
        console.log('🗑️ All localStorage data cleared on tab close');
      } else {
        // Clear portfolio-related data
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
        
        console.log('🗑️ Portfolio localStorage data cleared on tab close');
      }
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  };

  // Check if current navigation is a reload
  const isCurrentlyReloading = () => {
    // Method 1: Check sessionStorage flag
    const reloadFlag = sessionStorage.getItem(RELOAD_FLAG_KEY) === 'true';
    
    // Method 2: Check Navigation API
    let navReload = false;
    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        navReload = navEntries[0].type === 'reload';
      }
    } catch (e) {
      // Fallback for older browsers
      if (performance.navigation) {
        navReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;
      }
    }
    
    return reloadFlag || navReload;
  };

  // Handle beforeunload - this fires for both reload and tab close
  const handleBeforeUnload = (event) => {
    // Don't clear data here, wait for unload to confirm it's not a reload
    console.log('📤 beforeunload triggered');
  };

  // Handle unload - this is the final event before page is gone
  const handleUnload = (event) => {
    const isReload = isCurrentlyReloading();
    
    console.log('📤 unload triggered, isReload:', isReload);
    
    if (!isReload) {
      // This is a tab close, clear the data
      console.log('🚪 Tab close confirmed - clearing data');
      cleanup();
    } else {
      console.log('🔄 Reload confirmed - preserving data');
    }
  };

  // Handle page load
  const handleLoad = () => {
    const wasReload = sessionStorage.getItem(RELOAD_FLAG_KEY) === 'true';
    
    // Check Navigation API for additional confirmation
    let navigationTypeReload = false;
    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        navigationTypeReload = navEntries[0].type === 'reload';
      }
    } catch (e) {
      if (performance.navigation) {
        navigationTypeReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;
      }
    }
    
    if (wasReload || navigationTypeReload) {
      sessionStorage.removeItem(RELOAD_FLAG_KEY);
      console.log('✅ Page reloaded - localStorage preserved');
    } else {
      console.log('🆕 Fresh page load detected');
    }
  };

  // Handle visibility change as backup detection
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      // Page became hidden - could be tab close or tab switch
      // Use a longer timeout to be more conservative
      setTimeout(() => {
        if (document.visibilityState === 'hidden') {
          const isReload = isCurrentlyReloading();
          if (!isReload) {
            console.log('👻 Tab likely closed via visibility change - clearing data');
            cleanup();
          }
        }
      }, 5000); // 5 second delay
    }
  };

  // Handle page hide (mobile browsers)
  const handlePageHide = (event) => {
    // Only clear if page is not being cached and it's not a reload
    if (!event.persisted) {
      const isReload = isCurrentlyReloading();
      if (!isReload) {
        console.log('📱 Page hide detected (mobile) - clearing data');
        cleanup();
      }
    }
  };

  // Detect reload keyboard shortcuts
  const handleKeyDown = (event) => {
    const isReloadShortcut = 
      (event.ctrlKey && event.key.toLowerCase() === 'r') ||
      event.key === 'F5' ||
      (event.ctrlKey && event.key === 'F5') ||
      (event.metaKey && event.key.toLowerCase() === 'r'); // Mac Cmd+R
    
    if (isReloadShortcut) {
      sessionStorage.setItem(RELOAD_FLAG_KEY, 'true');
      console.log('��️ Reload shortcut detected');
    }
  };

  // Detect right-click context menu (potential reload)
  const handleContextMenu = (event) => {
    sessionStorage.setItem(RELOAD_FLAG_KEY, 'true');
    console.log('🖱️ Context menu detected - potential reload');
  };

  // Detect clicks (potential reload button)
  const handleClick = (event) => {
    // Set reload flag for any click - this is aggressive but ensures reload detection
    sessionStorage.setItem(RELOAD_FLAG_KEY, 'true');
    
    // Clear the flag after a short delay if no reload happens
    setTimeout(() => {
      sessionStorage.removeItem(RELOAD_FLAG_KEY);
    }, 2000);
  };

  // Add event listeners
  window.addEventListener('beforeunload', handleBeforeUnload);
  window.addEventListener('unload', handleUnload);
  window.addEventListener('load', handleLoad);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('pagehide', handlePageHide);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('contextmenu', handleContextMenu);
  document.addEventListener('click', handleClick);
  
  // Initialize
  handleLoad();

  // Return cleanup function
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    window.removeEventListener('unload', handleUnload);
    window.removeEventListener('load', handleLoad);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('pagehide', handlePageHide);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('contextmenu', handleContextMenu);
    document.removeEventListener('click', handleClick);
  };
};

/**
 * Alternative approach: More aggressive tab close detection
 * This version prioritizes clearing data on tab close over preserving on reload
 */
export const setupAggressiveTabCloseDetection = (clearAll = false) => {
  const RELOAD_FLAG_KEY = 'portfolio_aggressive_reload_flag';
  
  const cleanup = () => {
    try {
      if (clearAll) {
        localStorage.clear();
        console.log('🗑️ All localStorage cleared (aggressive mode)');
      } else {
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
        
        console.log('🗑️ Portfolio data cleared (aggressive mode)');
      }
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  };

  let reloadInitiated = false;

  // Mark reload when user initiates it
  const markReload = () => {
    reloadInitiated = true;
    sessionStorage.setItem(RELOAD_FLAG_KEY, 'true');
    console.log('🔄 Reload marked');
  };

  // Handle beforeunload
  const handleBeforeUnload = (event) => {
    // If reload wasn't explicitly initiated, assume it's a tab close
    if (!reloadInitiated && sessionStorage.getItem(RELOAD_FLAG_KEY) !== 'true') {
      console.log('🚪 Tab close detected in beforeunload');
      cleanup();
    }
  };

  // Handle load
  const handleLoad = () => {
    const wasReload = sessionStorage.getItem(RELOAD_FLAG_KEY) === 'true';
    if (wasReload) {
      sessionStorage.removeItem(RELOAD_FLAG_KEY);
      console.log('✅ Reload confirmed - data should be preserved');
    }
    reloadInitiated = false;
  };

  // Detect all possible reload triggers
  const handleKeyDown = (event) => {
    if ((event.ctrlKey && event.key.toLowerCase() === 'r') || 
        event.key === 'F5' ||
        (event.metaKey && event.key.toLowerCase() === 'r')) {
      markReload();
    }
  };

  const handleContextMenu = () => markReload();
  const handleClick = () => markReload();

  // Add event listeners
  window.addEventListener('beforeunload', handleBeforeUnload);
  window.addEventListener('load', handleLoad);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('contextmenu', handleContextMenu);
  document.addEventListener('click', handleClick);

  // Initialize
  handleLoad();

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    window.removeEventListener('load', handleLoad);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('contextmenu', handleContextMenu);
    document.removeEventListener('click', handleClick);
  };
};

/**
 * Simple and reliable approach using only essential events
 */
export const setupSimpleTabCloseDetection = (clearAll = false) => {
  const RELOAD_FLAG_KEY = 'portfolio_simple_reload';
  
  const cleanup = () => {
    try {
      if (clearAll) {
        localStorage.clear();
      } else {
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
      }
      console.log('🗑️ localStorage cleared (simple mode)');
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  };

  // Handle beforeunload
  const handleBeforeUnload = () => {
    const isReload = sessionStorage.getItem(RELOAD_FLAG_KEY) === 'true';
    if (!isReload) {
      cleanup();
    }
    // Clear the flag for next time
    sessionStorage.removeItem(RELOAD_FLAG_KEY);
  };

  // Mark reload on keyboard shortcuts
  const handleKeyDown = (event) => {
    if ((event.ctrlKey && event.key.toLowerCase() === 'r') || 
        event.key === 'F5' ||
        (event.metaKey && event.key.toLowerCase() === 'r')) {
      sessionStorage.setItem(RELOAD_FLAG_KEY, 'true');
    }
  };

  // Mark reload on context menu
  const handleContextMenu = () => {
    sessionStorage.setItem(RELOAD_FLAG_KEY, 'true');
  };

  window.addEventListener('beforeunload', handleBeforeUnload);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('contextmenu', handleContextMenu);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('contextmenu', handleContextMenu);
  };
};

export default {
  setupTabCloseDetection,
  setupAggressiveTabCloseDetection,
  setupSimpleTabCloseDetection
};