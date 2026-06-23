import { useEffect } from "react";

export function useSOCGestures(kernel) {

  useEffect(() => {
    let startX = 0;

    window.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    window.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;

      if (startX - endX > 100) {
        kernel.switchView("warroom");
      }

      if (endX - startX > 100) {
        kernel.switchView("admin");
      }
    });

  }, []);
}
