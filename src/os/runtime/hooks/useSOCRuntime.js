import spine from "../../spine/SOCEventSpine";
import { SOCInterruptEngine } from "../../interrupt/SOCInterruptEngine";

const engine = new SOCInterruptEngine(spine);

export function useSOCRuntime() {
  return {
    spine,
    interrupt: (e) => engine.interrupt(e)
  };
}
