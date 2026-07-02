
import { useEffect, useState } from "react";
import { liveEngine } from "../../core/live/liveEngine";

/**
 * Hook: binds LiveEngine streams to UI state
 */

export function useLiveBindings() {
  const [vision, setVision] = useState(null);
  const [sports, setSports] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    liveEngine.start();

    liveEngine.subscribe("vision", (data) => {
      setVision(data);
    });

    liveEngine.subscribe("sports", (data) => {
      setSports(data);
    });

    liveEngine.subscribe("metaworld", (data) => {
      setMeta(data);
    });
  }, []);

  return { vision, sports, meta };
}
