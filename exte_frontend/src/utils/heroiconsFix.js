// Heroicons React 19 Compatibility Fix
// This fixes the forwardRef issue with @heroicons/react and React 19

// Ensure React and forwardRef are available before heroicons loads
if (typeof window !== 'undefined') {
  // Make sure React is available globally
  if (typeof window.React === 'undefined') {
    try {
      const React = require('react');
      window.React = React;
    } catch (error) {
      console.warn('React not available globally');
    }
  }
  
  // Ensure forwardRef is available
  if (window.React && typeof window.React.forwardRef === 'undefined') {
    try {
      const { forwardRef } = require('react');
      window.React.forwardRef = forwardRef;
    } catch (error) {
      console.warn('forwardRef not available');
    }
  }
  
  // Patch the forwardRef issue specifically for heroicons
  const originalForwardRef = window.React?.forwardRef;
  if (originalForwardRef) {
    window.React.forwardRef = function(component) {
      try {
        return originalForwardRef.call(this, component);
      } catch (error) {
        console.warn('forwardRef error caught, using fallback:', error);
        // Return a component that doesn't use forwardRef
        return function(props) {
          return component(props);
        };
      }
    };
  }
}

// Export the fix
export default function applyHeroiconsFix() {
  console.log('Heroicons React 19 compatibility fix applied');
}
