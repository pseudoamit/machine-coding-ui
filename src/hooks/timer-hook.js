import { useRef, useState } from "react";

export function useTimer(initialCounter = 0) {
  const [counter, setCounter] = useState(initialCounter);
  const counterRef = useRef(null);

  const start = () => {
    if (counterRef.current) return;

    counterRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(counterRef.current);
    counterRef.current = null;
  };

  const reset = () => {
    setCounter(0);
    pause();
  };

  return [counter, start, pause, reset];
}
