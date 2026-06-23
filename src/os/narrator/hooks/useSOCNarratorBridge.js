import { useEffect } from "react";

export function useSOCNarratorBridge(spine, narrator) {
  useEffect(() => {
    if (!spine || !narrator) return;

    spine.subscribe((event) => {
      if (event.type === "INTERRUPT_EVENT") {
        narrator.speak?.(
          "System interrupt detected: " +
          JSON.stringify(event.payload?.level || "UNKNOWN")
        );
      }

      if (event.type === "FAILURE") {
        narrator.speak?.("Critical system failure detected in SOC runtime.");
      }
    });
  }, [spine, narrator]);
}
