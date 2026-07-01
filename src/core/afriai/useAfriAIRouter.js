import { useEffect } from "react";
import { AfriAIContext } from "./AfriAIContext";

/**
 * Ecosystem Brain Router
 * Listens to real application route changes
 */
export default function useAfriAIRouter() {

  useEffect(() => {

    const detectMode = (path) => {

      if (!path) return "general";

      if (path.includes("sports")) return "sports";
      if (path.includes("vision")) return "vision";
      if (path.includes("commerce")) return "commerce";
      if (path.includes("work")) return "work";
      if (path.includes("whatsapp")) return "work";

      return "general";
    };

    const updateFromURL = () => {
      const path = window.location.pathname;
      const mode = detectMode(path);
      AfriAIContext.setMode(mode);
    };

    // initial sync
    updateFromURL();

    // listen for navigation changes
    window.addEventListener("popstate", updateFromURL);

    // backup interval sync (covers SPA edge cases)
    const interval = setInterval(updateFromURL, 1500);

    return () => {
      window.removeEventListener("popstate", updateFromURL);
      clearInterval(interval);
    };

  }, []);
}
