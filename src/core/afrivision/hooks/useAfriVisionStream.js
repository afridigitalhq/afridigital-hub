import { useEffect, useRef, useState } from "react";
import AfriVisionRuntime from "../runtime/AfriVisionRuntime";

/**
 * AfriVision Batched Stream Hook
 * - Collects events
 * - Processes in batches
 * - Outputs grid layout
 */

export default function useAfriVisionStream(eventSource) {
  const runtimeRef = useRef(null);
  const bufferRef = useRef([]);
  const [layout, setLayout] = useState([]);

  // Initialize runtime once
  useEffect(() => {
    runtimeRef.current = new AfriVisionRuntime();
  }, []);

  // =========================================
  // EVENT INGESTION (FROM liveEngine)
  // =========================================
  useEffect(() => {
    if (!eventSource) return;

    const handler = (event) => {
      bufferRef.current.push(event);
    };

    eventSource.on("vision", handler);

    return () => {
      eventSource.off("vision", handler);
    };
  }, [eventSource]);

  // =========================================
  // BATCH PROCESSOR (CORE HEARTBEAT)
  // =========================================
  useEffect(() => {
    const interval = setInterval(() => {
      if (!bufferRef.current.length || !runtimeRef.current) return;

      const batch = bufferRef.current.splice(0, bufferRef.current.length);

      // Process through runtime pipeline
      const resultLayout = runtimeRef.current.processStream(batch);

      setLayout(resultLayout);
    }, 800); // BATCHED MODE (safe + smooth)

    return () => clearInterval(interval);
  }, []);

  // =========================================
  // USER ACTION WRAPPERS
  // =========================================
  const actions = {
    pin: (id) => runtimeRef.current?.pin(id),
    focus: (id) => runtimeRef.current?.focus(id),
    expand: (id) => runtimeRef.current?.expand(id),
    reset: () => runtimeRef.current?.reset()
  };

  return {
    layout,
    actions
  };
}
