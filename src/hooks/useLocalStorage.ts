import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Получить значение из localStorage или установить начальное значение
  const getValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handleStorageChange = () => {
      setValue(getValue());
    };

    // Добавляем слушатель события storage
    window.addEventListener('storage', handleStorageChange);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const setItem = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    // Вызов события storage вручную для других вкладок
    window.dispatchEvent(new Event('storage'));
  };

  return [value, setItem];
};
