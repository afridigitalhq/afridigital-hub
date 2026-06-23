import { useEffect, useState } from "react";

export function useSOCDeviceMode() {
  const [mode, setMode] = useState("desktop");

  useEffect(() => {
    const check = () => {
      const isMobile = window.innerWidth < 768;
      setMode(isMobile ? "mobile" : "desktop");
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return mode;
}
