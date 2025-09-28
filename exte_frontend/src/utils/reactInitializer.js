// React Initialization Utility
// This ensures React is properly loaded before any components try to use it

export const ensureReactIsReady = () => {
  // Check if React is available
  if (typeof React === 'undefined') {
    console.error('React is not available globally');
    return false;
  }
  
  // Check if React.Children is available
  if (typeof React.Children === 'undefined') {
    console.error('React.Children is undefined - this will cause the error!');
    return false;
  }
  
  // Check if React.createElement is available
  if (typeof React.createElement === 'undefined') {
    console.error('React.createElement is undefined');
    return false;
  }
  
  console.log('✅ React is properly initialized');
  return true;
};

// Initialize React with safety checks
export const initializeReact = () => {
  // Ensure React is available globally
  if (typeof window.React === 'undefined' && typeof React !== 'undefined') {
    window.React = React;
  }
  
  // Run safety checks
  const isReady = ensureReactIsReady();
  
  if (!isReady) {
    console.error('❌ React initialization failed');
    return false;
  }
  
  console.log('✅ React initialization successful');
  return true;
};

// Wait for React to be ready
export const waitForReact = (maxAttempts = 10, delay = 100) => {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    
    const checkReact = () => {
      attempts++;
      
      if (ensureReactIsReady()) {
        resolve(true);
        return;
      }
      
      if (attempts >= maxAttempts) {
        reject(new Error('React failed to initialize after maximum attempts'));
        return;
      }
      
      setTimeout(checkReact, delay);
    };
    
    checkReact();
  });
};
