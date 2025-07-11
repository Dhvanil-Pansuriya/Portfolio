// Simple test to verify tab close detection is working

export const testTabCloseDetection = () => {
  console.log('🧪 Testing Tab Close Detection...');
  
  // Add test data to localStorage
  localStorage.setItem('portfolio_test_data', 'This should be cleared on tab close');
  localStorage.setItem('portfolio_chat_test', JSON.stringify(['test', 'message']));
  localStorage.setItem('non_portfolio_data', 'This should NOT be cleared');
  
  console.log('✅ Test data added to localStorage');
  console.log('📋 Current localStorage:', Object.keys(localStorage));
  
  // Test reload flag
  sessionStorage.setItem('portfolio_simple_reload', 'true');
  console.log('🔄 Reload flag set - data should be preserved on next beforeunload');
  
  setTimeout(() => {
    sessionStorage.removeItem('portfolio_simple_reload');
    console.log('❌ Reload flag cleared - data should be cleared on next beforeunload');
  }, 3000);
  
  console.log('💡 Instructions:');
  console.log('1. Wait 3 seconds for reload flag to clear');
  console.log('2. Close this tab (not reload)');
  console.log('3. Reopen the site');
  console.log('4. Check if portfolio data was cleared');
};

// Test different scenarios
export const testReloadScenarios = () => {
  console.log('🧪 Testing Reload Scenarios...');
  
  // Test keyboard shortcut detection
  const testKeyboardShortcut = () => {
    console.log('⌨️ Simulating F5 key press...');
    const event = new KeyboardEvent('keydown', { key: 'F5' });
    document.dispatchEvent(event);
    
    const reloadFlag = sessionStorage.getItem('portfolio_simple_reload');
    console.log('Reload flag after F5:', reloadFlag);
  };
  
  // Test context menu detection
  const testContextMenu = () => {
    console.log('🖱️ Simulating right-click...');
    const event = new MouseEvent('contextmenu', { bubbles: true });
    document.dispatchEvent(event);
    
    const reloadFlag = sessionStorage.getItem('portfolio_simple_reload');
    console.log('Reload flag after right-click:', reloadFlag);
  };
  
  testKeyboardShortcut();
  setTimeout(testContextMenu, 1000);
};

export default {
  testTabCloseDetection,
  testReloadScenarios
};