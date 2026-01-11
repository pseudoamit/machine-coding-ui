import { useEffect } from "react";

export function useClickOutside(elementRef, handler) {
  const cb = (e) => {
    if (!elementRef?.current?.contains(e?.target)) {
      handler();
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", cb);

    return () => {
      window.removeEventListener("mousedown", cb);
    };
  }, [elementRef, handler]);
}
