import { createRoot } from 'react-dom/client';
import './index.css';
import 'luna-console/luna-console.css';
import 'luna-object-viewer/luna-object-viewer.css';
import AppRouter from './AppRouter';
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('runjs')!).render(
  <ThemeProvider>
    <AppRouter />
  </ThemeProvider>
);
