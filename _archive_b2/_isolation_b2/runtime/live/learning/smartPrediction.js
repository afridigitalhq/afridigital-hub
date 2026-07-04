import { getWeights } from "./adaptiveWeights";

export function smartPredict(basePrediction, eventType) {
  const w = getWeights();

  const weight = w[eventType] || 1;

  // 🧠 we do NOT change logic — only confidence tuning
  return {
    ...basePrediction,
    confidence: Math.min(0.99, basePrediction.confidence * weight)
  };
}
