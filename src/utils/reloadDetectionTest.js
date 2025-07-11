// Test script to verify reload detection is working properly

export const testReloadDetection = () => {
  console.log('=== Reload Detection Test ===');
  
  // Test Navigation Timing API
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      const navEntry = navEntries[0];
      console.log('Navigation Type:', navEntry.type);
      console.log('Navigation Entry:', navEntry);
    } else {
      console.log('No navigation entries found');
    }
  } catch (e) {
    console.log('Navigation Timing API not available:', e);
  }
  
  // Test deprecated performance.navigation
  if (performance.navigation) {
    console.log('Performance Navigation Type:', performance.navigation.type);
    console.log('TYPE_NAVIGATE:', performance.navigation.TYPE_NAVIGATE);
    console.log('TYPE_RELOAD:', performance.navigation.TYPE_RELOAD);
    console.log('TYPE_BACK_FORWARD:', performance.navigation.TYPE_BACK_FORWARD);
  } else {
    console.log('performance.navigation not available');
  }
  
  // Test sessionStorage flags
  console.log('Reload Flag:', sessionStorage.getItem('portfolio_page_reload_flag'));
  console.log('Last Activity:', sessionStorage.getItem('portfolio_last_activity'));
  console.log('Page Load Time:', sessionStorage.getItem('portfolio_page_load_time'));
  
  // Test referrer
  console.log('Document Referrer:', document.referrer);
  console.log('Current URL:', window.location.href);
  
  console.log('=== End Test ===');
};

// Auto-run test on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(testReloadDetection, 1000);
  });
}

export default testReloadDetection;