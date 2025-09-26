import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    })
  ],
  build: {
    target: 'es2020',
    minify: false, // Disable minification to test if it's causing the issue
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Debug chunking to identify React bundling issues
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router'
          }
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-ui'
          }
          if (id.includes('node_modules')) {
            return 'vendor-misc'
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
  }
})
