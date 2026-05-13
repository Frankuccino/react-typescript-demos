// hooks/useTimer.ts
import { useState, useEffect } from "react";

export const useTimer = (isActive: boolean) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [isActive]);

  return seconds;
};
