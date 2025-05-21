import { createRoot } from 'react-dom/client';
import './index.css';
import 'luna-console/luna-console.css';
import 'luna-object-viewer/luna-object-viewer.css';
import 'luna-data-grid/luna-data-grid.css';
import 'luna-dom-viewer/luna-dom-viewer.css';
import AppRouter from './AppRouter';

createRoot(document.getElementById('runjs')!).render(<AppRouter />);
