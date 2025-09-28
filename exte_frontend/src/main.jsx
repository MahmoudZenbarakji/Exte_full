import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import { initReactErrorDetection } from './utils/reactErrorDetector.js'

// Initialize React error detection
initReactErrorDetection()

// Only set global React if it's not already available
// This prevents conflicts with bundled React
if (typeof window.React === 'undefined') {
  window.React = React
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
