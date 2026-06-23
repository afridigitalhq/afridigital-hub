import { useEffect, useState } from "react";

/**
 * Maps DAG runtime signals → dashboard switching
 */
export function useDAGRouteBinder(dagRuntimeEvents) {
  const [route, setRoute] = useState("war-room");

  useEffect(() => {
    if (!dagRuntimeEvents) return;

    const latest = dagRuntimeEvents[dagRuntimeEvents.length - 1];

    if (!latest) return;

    switch (latest.type) {

      case "FINANCIAL_STRESS":
        setRoute("warroom");
        break;

      case "SECURITY_BREACH":
        setRoute("security");
        break;

      case "AI_TASK":
        setRoute("afriai");
        break;

      case "CHAT_ACTIVITY":
        setRoute("whatsapp");
        break;

      default:
        setRoute("warroom");
    }

  }, [dagRuntimeEvents]);

  return route;
}
