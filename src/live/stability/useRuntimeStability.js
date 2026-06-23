import { useVisualReadyGate } from "./useVisualReadyGate";
import { useDAGRenderLock } from "./useDAGRenderLock";
import { useCameraStabilizer } from "./useCameraStabilizer";

export function useRuntimeStability({
  dagData,
  cameraIntent
}) {
  const { ready, hydrated } = useVisualReadyGate();
  const canRenderDAG = useDAGRenderLock(dagData);
  const camera = useCameraStabilizer(cameraIntent);

  return {
    ready,
    hydrated,
    canRenderDAG,
    camera
  };
}
