import { useState, useEffect } from 'react';

function useDebounceLocalStorageState<T>(
  key: string,
  initialValue: T,
  delay: number = 500
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, delay);

    return () => clearTimeout(handler);
  }, [state, delay, key]);

  return [state, setState];
}

export default useDebounceLocalStorageState;
