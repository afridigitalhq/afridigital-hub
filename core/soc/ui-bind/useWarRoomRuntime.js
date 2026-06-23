import { useEffect, useState } from "react";
import { useSOCVisualRuntime } from "../bindings/useSOCVisualRuntime";

export function useWarRoomRuntime(stream) {

  const runtime = useSOCVisualRuntime(stream);
  const [state, setState] = useState(runtime.render());

  // live pipeline tick
  useEffect(() => {
    const id = setInterval(() => {
      setState(runtime.render());
    }, 50); // real-time SOC refresh loop

    return () => clearInterval(id);
  }, [runtime]);

  return {
    state,
    ingest: runtime.ingest,
    scrub: runtime.scrub,
    rewind: runtime.rewind
  };
}
