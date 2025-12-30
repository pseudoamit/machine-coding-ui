import React, { useEffect, useRef, useState } from "react";

const TimerNto0 = () => {
  const [counter, setCounter] = useState(60);
  const counterRef = useRef(null);

  useEffect(() => {
    counterRef.current = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 0) {
          clearInterval(counterRef.current);
          counterRef.current = null;
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(counterRef.current);
    };
  }, []);
  return (
    <>
      <h1>Counter: {counter}</h1>
    </>
  );
};

export default TimerNto0;
