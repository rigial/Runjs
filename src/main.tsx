import { createRoot } from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import { ThemeProvider } from './context/ThemeContext';
import { PwaProvider } from './context/PwaContext';

// Register PWA service worker in browser environments
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        reg.update();
      })
      .catch((err) => {
        console.warn('[SW] Registration failed:', err);
      });
  });
}

createRoot(document.getElementById('runjs')!).render(
  <ThemeProvider>
    <PwaProvider>
      <AppRouter />
    </PwaProvider>
  </ThemeProvider>
);
