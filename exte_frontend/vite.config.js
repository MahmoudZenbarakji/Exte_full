import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Use automatic JSX runtime
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@services': resolve(__dirname, 'src/services'),
      '@utils': resolve(__dirname, 'src/utils'),
    }
  },
  build: {
    // Simplified build configuration
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          query: ['@tanstack/react-query'],
        }
      }
    },
    // Enable source maps for debugging
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Minify for production
    minify: 'esbuild',
    // Target modern browsers
    target: 'esnext',
  },
  // Development server optimization
  server: {
    hmr: {
      overlay: false
    },
    // Enable compression
    middlewareMode: false,
  },
  // CSS optimization
  css: {
    devSourcemap: true,
    // Enable CSS modules if needed
    modules: {
      localsConvention: 'camelCase'
    }
  },
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'axios',
      '@tanstack/react-query',
      'react-window',
      'react-window-infinite-loader'
    ],
    // Exclude from pre-bundling
    exclude: ['@tanstack/react-query-devtools']
  },
  // Define environment variables
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    // Make environment variables available to the app
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
    'import.meta.env.VITE_APP_NAME': JSON.stringify(process.env.VITE_APP_NAME),
    'import.meta.env.VITE_NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  // Enable experimental features
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `/${filename}` }
      } else {
        return { relative: true }
      }
    }
  }
})
