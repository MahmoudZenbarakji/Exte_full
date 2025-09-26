import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      jsxImportSource: 'react',
    })
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        format: 'es',
        manualChunks: undefined,
      }
    }
  },
  esbuild: {
    jsx: 'automatic'
  }
})
