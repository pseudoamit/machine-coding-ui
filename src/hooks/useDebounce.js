import { useEffect, useRef } from "react";

export function useDebounce(callback, delay) {
  const timer = useRef(null);
  function debouncedCallback(...args) {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback.call(this, ...args);
    }, delay);
  }

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return debouncedCallback;
}
