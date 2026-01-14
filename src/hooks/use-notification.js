import { useEffect, useState } from "react";

export function useNotification(duration = 300) {
  const [toast, setToast] = useState(null);

  const showToast = ({ type, message }) => {
    setToast({ type, message });
  };

  const closeToast = () => {
    setToast(null);
  };

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      closeToast();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [toast, duration]);

  return { toast, showToast, closeToast };
}
