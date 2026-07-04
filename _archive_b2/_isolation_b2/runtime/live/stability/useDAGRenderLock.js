import { useEffect, useState } from "react";

export function useDAGRenderLock(data) {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const timer = setTimeout(() => {
      setCanRender(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [data]);

  return canRender;
}
