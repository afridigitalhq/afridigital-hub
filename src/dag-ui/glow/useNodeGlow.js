import { useEffect, useState } from "react";

export function useNodeGlow(eventBus) {
  const [nodeState, setNodeState] = useState({});

  useEffect(() => {
    if (!eventBus) return;

    const handler = (event) => {
      const id = event.nodeId || event.type;

      setNodeState(prev => ({
        ...prev,
        [id]: {
          status: event.status || "active",
          lastEvent: Date.now()
        }
      }));
    };

    eventBus.on?.("DAG_EVENT", handler);

    return () => eventBus.off?.("DAG_EVENT", handler);
  }, [eventBus]);

  return nodeState;
}
