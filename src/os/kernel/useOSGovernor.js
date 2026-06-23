import { useMemo } from "react";
import { OSRuntimeGovernor } from "./OSRuntimeGovernor";
import { ConversationalOSLoop } from "../conversation/ConversationalOSLoop";

export function useOSGovernor() {
  return useMemo(() => {
    const loop = new ConversationalOSLoop();
    return new OSRuntimeGovernor({ loop });
  }, []);
}
