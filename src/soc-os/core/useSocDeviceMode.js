import { useEffect, useState } from "react";

export function useSocDeviceMode() {
  const [mode, setMode] = useState("desktop");

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;

      if (width < 768) setMode("mobile");
      else setMode("desktop");
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return mode;
}
