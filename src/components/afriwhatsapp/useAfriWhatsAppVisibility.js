import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useAfriWhatsAppVisibility() {
  const [showCTA, setShowCTA] = useState(false);
  const [contextMode, setContextMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isHome = location.pathname === "/";

    // RESET on route change
    setShowCTA(false);
    setContextMode(false);

    // DASHBOARD PRIORITY
    if (isHome) {
      setShowCTA(true);
      return;
    }

    // DELAY TRIGGER (INNER PAGES)
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 1800);

    // SCROLL INTENT DETECTION
    const onScroll = () => {
      if (window.scrollY > 220) {
        setShowCTA(true);
        setContextMode(true);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [location]);

  return {
    showCTA,
    contextMode
  };
}
