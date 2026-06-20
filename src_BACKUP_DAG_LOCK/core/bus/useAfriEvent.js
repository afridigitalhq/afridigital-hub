export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
import { useEffect } from "react";
import { AfriBus } from "./AfriKernelEventBus";

export function useAfriEvent(type, handler) {
  useEffect(() => {
    const unsub = AfriBus.on(type, handler);
    return () => unsub();
  }, [type, handler]);
}
