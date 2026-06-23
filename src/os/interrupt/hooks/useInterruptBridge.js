import { useEffect } from "react";
import { SOCInterruptEngine } from "../SOCInterruptEngine";

export function useInterruptBridge(spine) {
  const engine = new SOCInterruptEngine(spine);

  return {
    trigger: (event) => engine.interrupt(event),
    flush: () => engine.flush()
  };
}
