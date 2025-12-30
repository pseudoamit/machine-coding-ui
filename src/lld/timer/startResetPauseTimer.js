// START, PAUSE, RESET TIMER

import React, { useRef, useState } from "react";

const StartResetPauseTimer = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const resetTimer = () => {
    setCounter(0);
    pauseTimer();
  };

  return (
    <>
      <h1>Counter: {counter} </h1>
      <button onClick={startTimer}>START</button>
      <button onClick={pauseTimer}>PAUSE</button>
      <button onClick={resetTimer}>RESET</button>
    </>
  );
};

export default StartResetPauseTimer;
