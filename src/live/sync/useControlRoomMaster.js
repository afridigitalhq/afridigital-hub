import { useControlRoomSync } from "./useControlRoomSync";
import { useCameraTimelineSync } from "./useCameraTimelineSync";
import { useDAGTimelineSync } from "./useDAGTimelineSync";
import { useNarrativeTimeline } from "./useNarrativeTimeline";

export function useControlRoomMaster(socket) {
  const frame = useControlRoomSync(socket);
  const camera = useCameraTimelineSync(frame);
  const dag = useDAGTimelineSync(frame);
  const narrative = useNarrativeTimeline(frame);

  return {
    frame,
    camera,
    dag,
    narrative
  };
}
