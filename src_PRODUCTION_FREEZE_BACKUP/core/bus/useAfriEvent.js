// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
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
