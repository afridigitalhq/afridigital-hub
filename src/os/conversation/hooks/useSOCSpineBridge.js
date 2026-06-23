import { useEffect } from "react";
import { SOCEventSpine } from "../../spine/SOCEventSpine";

export function useSOCSpineBridge(loop) {
  useEffect(() => {
    if (!loop) return;

    SOCEventSpine.subscribe((event) => {
      loop.ingest?.(event);
    });

    loop.onOutput = (msg) => {
      SOCEventSpine.publish({
        type: "CONVERSATION",
        payload: msg
      });
    };
  }, [loop]);
}
