import { useEffect } from "react";

export function useDAGRuntimeBinder(dagRuntime, setState) {
  useEffect(() => {
    if (!dagRuntime) return;

    const handler = (event) => {
      setState(prev => ({
        ...prev,
        lastEvent: event,
        activeNode: event.type,
        timestamp: Date.now()
      }));
    };

    dagRuntime.onEvent?.(handler);
    return () => dagRuntime.offEvent?.(handler);
  }, [dagRuntime]);
}
