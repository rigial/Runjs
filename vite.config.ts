import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [tailwindcss(), react(), visualizer({ open: false })],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@codesandbox/sandpack-react') || id.includes('@codesandbox')) {
              return 'sandpack';
            }
            if (id.includes('@monaco-editor') || id.includes('monaco-editor')) {
              return 'monaco';
            }
            if (id.includes('@xterm')) {
              return 'xterm';
            }
            if (id.includes('lucide-react')) {
              return 'lucide';
            }
            if (id.includes('esbuild-wasm')) {
              return 'esbuild-wasm';
            }
            if (id.includes('luna-console') || id.includes('luna-object-viewer')) {
              return 'luna';
            }
            if (
              id.includes('/react/') ||
              id.includes('/react-dom/') ||
              id.includes('/react-router/')
            ) {
              return 'vendor-react';
            }
          }
        },
      },
    },
  },
});

