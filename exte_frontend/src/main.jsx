import React from 'react'
import ReactDOM from 'react-dom/client'

// Simple test component to verify React is working
function TestApp() {
  return React.createElement('div', { style: { padding: '20px', textAlign: 'center' } },
    React.createElement('h1', null, 'React App is Working!'),
    React.createElement('p', null, 'If you can see this, React is properly loaded.'),
    React.createElement('button', { 
      onClick: () => alert('React is working!') 
    }, 'Test React')
  )
}

// Ensure React is available globally
window.React = React

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(rootElement)
root.render(React.createElement(TestApp))
