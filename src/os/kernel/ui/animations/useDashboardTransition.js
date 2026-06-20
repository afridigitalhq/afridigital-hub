import { useState, useEffect } from "react";

/**
 * Handles smooth dashboard switching transitions
 */
export function useDashboardTransition(activeDashboard) {
  const [displayed, setDisplayed] = useState(activeDashboard);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (activeDashboard !== displayed) {
      setAnimating(true);

      const t = setTimeout(() => {
        setDisplayed(activeDashboard);
        setAnimating(false);
      }, 250); // transition window

      return () => clearTimeout(t);
    }
  }, [activeDashboard]);

  return { displayed, animating };
}
