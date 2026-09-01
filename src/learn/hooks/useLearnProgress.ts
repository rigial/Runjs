import { useContext } from 'react';
import LearnProgressContext from '../context/LearnProgressContext';
import type { LearnProgressContextType } from '../context/LearnProgressContext';

export function useLearnProgress(): LearnProgressContextType {
  const context = useContext(LearnProgressContext);
  if (!context) {
    throw new Error(
      'useLearnProgress must be used within a LearnProgressProvider'
    );
  }
  return context;
}
