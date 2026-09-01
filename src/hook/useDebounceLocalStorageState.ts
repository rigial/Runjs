import { useState, useEffect } from 'react';

function useDebounceLocalStorageState<T>(
  key: string,
  initialValue: T,
  delay: number = 500
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
    } catch (error) {
      console.warn(
        `Failed to parse debounced localStorage key "${key}":`,
        error
      );
    }
    return initialValue;
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.warn(
          `Failed to set debounced localStorage key "${key}":`,
          error
        );
      }
    }, delay);

    return () => clearTimeout(handler);
  }, [state, delay, key]);

  return [state, setState];
}

export default useDebounceLocalStorageState;
