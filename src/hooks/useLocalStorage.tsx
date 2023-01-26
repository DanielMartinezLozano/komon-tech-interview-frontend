import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState(fallbackValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    value
      ? localStorage.setItem(key, JSON.stringify(value))
      : localStorage.setItem(key, null);
  }, [key, value]);

  return [value, setValue] as const;
}
