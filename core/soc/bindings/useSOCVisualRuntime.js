import { useMemo } from "react";
import { SOCVisualRuntime } from "../runtime/SOCVisualRuntime";

export function useSOCVisualRuntime(stream) {

  const runtime = useMemo(
    () => new SOCVisualRuntime(stream),
    [stream]
  );

  return {
    render: () => runtime.render(),
    ingest: (e) => runtime.ingest(e),
    scrub: (s) => runtime.scrub(s),
    rewind: () => runtime.rewind()
  };
}
