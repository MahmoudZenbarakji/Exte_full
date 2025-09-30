import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import { initReactErrorDetection } from './utils/reactErrorDetector.js'
import './utils/reactImportFix.js'
import './utils/heroiconsFix.js'

// Initialize React error detection
initReactErrorDetection()

// Ensure React is available globally and forwardRef is accessible
if (typeof window.React === 'undefined') {
  window.React = React
}

// Ensure forwardRef is available globally
if (typeof window.React.forwardRef === 'undefined') {
  window.React.forwardRef = React.forwardRef
}

// Additional safety check for forwardRef
if (typeof React.forwardRef === 'undefined') {
  console.error('React.forwardRef is undefined! This will cause component errors.');
}

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

const root = createRoot(rootElement)
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
