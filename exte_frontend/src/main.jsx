import React from 'react'
import { createRoot } from 'react-dom/client'

// Simple test component to verify React is working
function TestApp() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>React App is Working!</h1>
      <p>If you can see this, React is properly loaded.</p>
      <button onClick={() => alert('React is working!')}>
        Test React
      </button>
    </div>
  )
}

// Ensure React is available globally
window.React = React

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

const root = createRoot(rootElement)
root.render(<TestApp />)
