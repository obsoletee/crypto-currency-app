import { useState, useEffect } from 'react';

interface useLocalStorageProps<T> {
  key: string;
  initialValue: Array<T>;
}

interface useLocalStorageResult<T> {
  storedValue: T;
  setValue: (value: T) => void;
  remove: () => void;
}

export function useLocalStorage<T>({
  key,
  initialValue,
}: useLocalStorageProps<T>): useLocalStorageResult<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  const remove = () => {
    localStorage.removeItem(key);
    setStoredValue(undefined as unknown as T);
  };

  useEffect(() => {
    setValue(storedValue);
  }, [storedValue]);

  return { storedValue, setValue, remove };
}
