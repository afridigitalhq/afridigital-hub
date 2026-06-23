import { useEffect } from "react";

export function useSOCGestures(onSwipeLeft, onSwipeRight) {
  useEffect(() => {
    let startX = 0;

    const down = (e) => startX = e.touches[0].clientX;
    const up = (e) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (diff > 80) onSwipeRight?.();
      if (diff < -80) onSwipeLeft?.();
    };

    window.addEventListener("touchstart", down);
    window.addEventListener("touchend", up);

    return () => {
      window.removeEventListener("touchstart", down);
      window.removeEventListener("touchend", up);
    };
  }, []);
}
