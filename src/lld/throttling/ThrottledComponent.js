import React, { useEffect } from "react";
import { useThrottle } from "../../hooks/useThrottle";

const ThrottledComponent = () => {
  const getScrollPosition = (position) => {
    console.log(`current window position ${position}`);
  };

  const throttledFn = useThrottle(getScrollPosition, 1000);

  const handlePosition = () => {
    throttledFn(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePosition);

    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  }, [throttledFn]);

  return (
    <div style={{ height: "300vh", padding: "20px" }}>
      Scroll to get the window position
    </div>
  );
};

export default ThrottledComponent;
