import { useEffect, useRef } from "react";

export function useThrottle(callback, delay) {
  let timer = useRef(null);
  let isCooling = useRef(false);
  let lastArgs = useRef(null);
  let callbackRef = useRef(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  function throttleCallback(...args) {
    if (!isCooling.current) {
      callbackRef.current.call(this, ...args);
      isCooling.current = true;

      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        isCooling.current = false;
        if (lastArgs.current) {
          throttleCallback(...lastArgs.current);
          lastArgs.current = null;
        }
      }, delay);
    } else {
      lastArgs.current = args;
    }
  }

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return throttleCallback;
}
