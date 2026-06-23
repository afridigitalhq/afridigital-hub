import { useEffect } from "react";
import { SOCEventSpine } from "../../spine/SOCEventSpine";

export function useNarratorSpine(narrator) {
  useEffect(() => {
    if (!narrator) return;

    SOCEventSpine.subscribe((event) => {
      if (event.type === "DAG_ALERT" || event.type === "FAILURE") {
        narrator.speak?.(event.payload);
      }
    });
  }, [narrator]);
}
