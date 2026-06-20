import { useEffect, useState } from "react";

export function usePredictiveDAG(twinEngine) {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!twinEngine) return;

      const result = twinEngine.predictNext(5);
      setPrediction(result);
    }, 1000);

    return () => clearInterval(interval);
  }, [twinEngine]);

  return prediction;
}
