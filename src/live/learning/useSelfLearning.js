import { useEffect } from "react";

import { recordOutcome } from "./outcomeMemory";
import { adjustWeights } from "./adaptiveWeights";
import { smartPredict } from "./smartPrediction";

export function useSelfLearning({
  getTimeline,
  setPrediction
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      const timeline = getTimeline();

      const last = timeline[timeline.length - 1];
      if (!last) return;

      const basePrediction = {
        next: "idle",
        confidence: 0.5
      };

      const eventType = last.intent || last.type;

      const adjusted = smartPredict(basePrediction, eventType);

      recordOutcome(last, adjusted);
      adjustWeights();

      setPrediction(adjusted);
    }, 5000);

    return () => clearInterval(interval);
  }, [getTimeline]);
}
