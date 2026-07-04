import { useEffect, useState } from "react";

export function useDAGTimelineSync(frame) {
  const [dagState, setDagState] = useState([]);

  useEffect(() => {
    if (!frame?.event) return;

    setDagState(prev => [
      ...prev,
      {
        ...frame.event,
        frame: frame.frame
      }
    ]);
  }, [frame]);

  return dagState;
}
