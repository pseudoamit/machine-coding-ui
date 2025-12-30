import React from "react";
import { useTimer } from "../../hooks/timer-hook";

const StartResetPauseTimerUsingHook = () => {
  const [counter, start, pause, reset] = useTimer(0);
  return (
    <>
      <h1>Counter: {counter} </h1>
      <button onClick={start}>START</button>
      <button onClick={pause}>PAUSE</button>
      <button onClick={reset}>RESET</button>
    </>
  );
};

export default StartResetPauseTimerUsingHook;
