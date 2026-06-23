import { useEffect, useState } from "react";

export function useCameraStabilizer(initialCamera) {
  const [camera, setCamera] = useState({
    zoom: 1,
    mode: "stable",
    motion: "locked"
  });

  useEffect(() => {
    if (!initialCamera) return;

    const timer = setTimeout(() => {
      setCamera(initialCamera);
    }, 600);

    return () => clearTimeout(timer);
  }, [initialCamera]);

  return camera;
}
