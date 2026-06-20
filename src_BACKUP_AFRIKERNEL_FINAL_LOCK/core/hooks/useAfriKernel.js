export const AFRIKERNEL_MODE = "STABLE_DAG_ONLY"
export const AFRIKERNEL_MODE = "DAG_ONLY"
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
