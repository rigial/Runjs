import { useContext } from 'react';
import PwaContext, { PwaContextType } from '../context/PwaContext';

export function usePwaInstall(): PwaContextType {
  const context = useContext(PwaContext);
  if (!context) {
    throw new Error('usePwaInstall must be used within a PwaProvider');
  }
  return context;
}

export default usePwaInstall;
