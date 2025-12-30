// TIMER START FROM 0 , increment by 1 every second, RESET WHEN REACHES to 10

import React, { useEffect, useRef, useState } from "react";

const CounterReset = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);

  console.log("re-rendered");

  useEffect(() => {
    counterRef.current = setInterval(() => {
      setCounter((prev) => (prev === 10 ? 0 : prev + 1));
    }, 1000);

    return () => {
      clearInterval(counterRef.current);
    };
  }, []);

  return <div>counterReset: {counter}</div>;
};

export default CounterReset;
