import { useEffect, useState } from "react";

export function useSocResponsiveLayout() {
  const [mode, setMode] = useState("desktop");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      if (w < 768) setMode("mobile");
      else if (w < 1200) setMode("tablet");
      else setMode("desktop");
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return mode;
}
