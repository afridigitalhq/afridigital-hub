import { useEffect, useState } from "react";

export function useVisualReadyGate() {
  const [ready, setReady] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let mounted = true;

    const boot = async () => {
      // Phase 1: allow DOM mount
      await new Promise(r => setTimeout(r, 300));

      if (!mounted) return;
      setHydrated(true);

      // Phase 2: stabilize visuals
      await new Promise(r => setTimeout(r, 500));

      if (!mounted) return;
      setReady(true);
    };

    boot();

    return () => {
      mounted = false;
    };
  }, []);

  return { ready, hydrated };
}
