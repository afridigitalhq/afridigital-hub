// AFRIKERNEL_INGESTION_SINGLE_PATH_ENFORCED (AFRISYNC → DAGRuntime ONLY)
// AFRIKERNEL_PRODUCTION_MODE_LOCKED (NO ARCHITECTURE CHANGES ALLOWED)
// AFRIKERNEL_COLLAPSED_SINGLE_RUNTIME_ACTIVE
// AFRISYNC_ONLY_INGRESS_LAYER
// EVENT_SOURCED_KERNEL_ENFORCED (NO DIRECT STATE MUTATION)
// AFRIKERNEL_AUTHORITY_LOCK_V2 (EVENT LOG → DAGRuntime → RENDER ONLY)
// DETERMINISTIC_RENDERER_V2_ACTIVE
import { useEffect, useMemo, useState } from "react";
import { AfriKernelRuntime } from "../kernel/AfriKernelRuntime";

const kernel = new AfriKernelRuntime("node-1");

export function useAfriKernel(stream = []) {
  const [tick, setTick] = useState(0);

  // ingest incoming stream (WS or mocked events)
  useEffect(() => {
    for (const e of stream) {
      kernel.ingest(e);
    }
    setTick(t => t + 1);
  }, [stream]);

  const graph = useMemo(() => {
    return kernel.buildDAG();
  }, [tick]);

  return { kernel, graph };
}
