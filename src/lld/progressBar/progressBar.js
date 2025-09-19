import React, { useState } from "react";

function ProgressBar() {
  const [currentValue, setCurrentValue] = useState(0);

  const handleIncrement = () => {
    if (currentValue === 100) return;
    setCurrentValue((prev) => prev + 10);
  };

  const handleDecrement = () => {
    if (currentValue === 0) return;
    setCurrentValue((prev) => prev - 10);
  };

  const getColor = () => {
    if (currentValue < 40) {
      return "red";
    } else if (currentValue >= 40 && currentValue < 80) {
      return "orange";
    } else {
      return "green";
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div
        style={{
          width: "100%",
          height: "25px",
          borderRadius: "14px",
          backgroundColor: "#777",
          display: "flex",
          position: "relative",
        }}
      >
        <div
          id="testBgColor"
          style={{
            width: `${currentValue}%`,
            height: "25px",
            borderRadius: "14px",
            backgroundColor: `${getColor()}`,
            display: "flex",
          }}
        ></div>
        <span
          style={{
            margin: "auto",
            color: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >{`${currentValue}%`}</span>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={handleDecrement}>-10%</button>
        <button onClick={handleIncrement}>+10%</button>
      </div>
    </div>
  );
}

export default ProgressBar;
