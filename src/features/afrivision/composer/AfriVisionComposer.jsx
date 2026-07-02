import { useEffect, useState } from "react";
import { createVisionEngine } from "../core/vision.core";
import { visionRegistry } from "../registry/vision.registry";

export default function AfriVisionComposer() {
  const [live, setLive] = useState(null);

  useEffect(() => {
    const engine = createVisionEngine();

    if (!engine?.subscribe) return;

    const unsub = engine.subscribe((data) => {
      setLive(data);
    });

    return () => {
      if (typeof unsub === "function") unsub();
    };
  }, []);

  return {
    live,
    meta: visionRegistry
  };
}
