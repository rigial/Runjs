import { useState, useEffect } from 'react';

function useLocalStorageState<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        const parsed = JSON.parse(storedValue);
        // Seamlessly migrate legacy double-stringified objects (e.g. "\"{\\\"q\\\":1}\"")
        if (
          typeof parsed === 'string' &&
          typeof initialValue === 'object' &&
          initialValue !== null
        ) {
          try {
            return JSON.parse(parsed) as T;
          } catch {
            return parsed as unknown as T;
          }
        }
        return parsed as T;
      }
    } catch (error) {
      console.warn(`Failed to parse localStorage key "${key}":`, error);
    }
    return initialValue;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn(`Failed to set localStorage key "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
