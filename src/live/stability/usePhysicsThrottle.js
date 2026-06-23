import { useEffect, useRef } from "react";

export function usePhysicsThrottle(updateFn, delay = 100) {
  const lastRun = useRef(0);

  useEffect(() => {
    const handler = (data) => {
      const now = Date.now();

      if (now - lastRun.current < delay) return;

      lastRun.current = now;
      updateFn(data);
    };

    return () => {
      lastRun.current = 0;
    };
  }, [updateFn, delay]);
}
