"use client"
import { useState, useEffect } from 'react';

const useSessionStorage = (key) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem(key);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [key]);

  return data;
};

export default useSessionStorage;