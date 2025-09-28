import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import { initReactErrorDetection } from './utils/reactErrorDetector.js'
import { initializeReact, waitForReact } from './utils/reactInitializer.js'

// Initialize React with safety checks
const reactInitialized = initializeReact()

if (!reactInitialized) {
  console.error('Failed to initialize React properly');
}

// Initialize React error detection after React is available
initReactErrorDetection()

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

// Ensure React is ready before rendering
waitForReact().then(() => {
  const root = createRoot(rootElement)
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}).catch((error) => {
  console.error('Failed to initialize React:', error);
  // Fallback: try to render anyway
  try {
    const root = createRoot(rootElement)
    root.render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    )
  } catch (fallbackError) {
    console.error('Fallback rendering also failed:', fallbackError);
  }
})
