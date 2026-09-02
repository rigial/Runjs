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
          // Never assign CSS to JavaScript chunks
          if (id.endsWith('.css') || id.includes('.css?')) {
            return undefined;
          }

          // Route Vite internal dynamic import helpers into vendor-react
          if (
            id.includes('vite/preload-helper') ||
            id.includes('commonjsHelpers')
          ) {
            return 'vendor-react';
          }

          if (id.includes('node_modules')) {
            // Feature-specific heavy packages must be checked first before generic react matching
            if (
              id.includes('@codesandbox') ||
              id.includes('sandpack')
            ) {
              return 'sandpack';
            }
            if (
              id.includes('monaco-editor') ||
              id.includes('@monaco-editor') ||
              id.includes('emmet-monaco-es') ||
              id.includes('state-local')
            ) {
              return 'monaco';
            }
            if (id.includes('@xterm')) {
              return 'xterm';
            }
            if (id.includes('acorn') || id.includes('acorn-walk')) {
              return 'acorn';
            }
            if (id.includes('lucide-react')) {
              return 'lucide';
            }
            if (id.includes('esbuild-wasm')) {
              return 'esbuild-wasm';
            }
            if (
              id.includes('luna-console') ||
              id.includes('luna-object-viewer')
            ) {
              return 'luna';
            }
            if (id.includes('jszip')) {
              return 'jszip';
            }
            // Strict core React packages only
            if (
              id.includes('/node_modules/react/') ||
              id.includes('/node_modules/react-dom/') ||
              id.includes('/node_modules/react-router/') ||
              id.includes('/react@') ||
              id.includes('/react-dom@') ||
              id.includes('/react-router@')
            ) {
              return 'vendor-react';
            }
          }
        },
      },
    },
  },
});

