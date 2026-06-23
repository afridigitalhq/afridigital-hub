import { useEffect } from "react";

export function useSOCDesktopTouch(engineRef) {

  useEffect(() => {

    let dragging = null;

    function onMove(e) {
      if (!dragging) return;

      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;

      engineRef.current.moveWindow(dragging, x, y);
    }

    function onStart(e) {
      dragging = e.target?.dataset?.win;
    }

    function onEnd() {
      dragging = null;
    }

    // desktop
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);

    // mobile touch
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };

  }, [engineRef]);
}
