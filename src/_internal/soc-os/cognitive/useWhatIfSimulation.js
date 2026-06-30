export function simulateScenario(event, modifiers = {}) {
  return {
    baseline: event,
    
    scenario: {
      trafficMultiplier: modifiers.traffic || 1.5,
      delayImpact: modifiers.delay || "low",
      cascadeRisk: modifiers.cascade || "medium"
    },

    prediction: {
      nodeImpact: "3–5 services affected",
      estimatedSpreadTime: "120s",
      criticalPath: ["API → Auth → DB"]
    }
  };
}
