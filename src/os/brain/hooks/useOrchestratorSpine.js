import { useEffect } from "react";
import { SOCEventSpine } from "../../spine/SOCEventSpine";

export function useOrchestratorSpine(orchestrator) {
  useEffect(() => {
    if (!orchestrator) return;

    orchestrator.onEvent = (event) => {
      SOCEventSpine.publish(event);
    };
  }, [orchestrator]);
}
