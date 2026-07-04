export const predictLoad = (incident) => {
  if (!incident) {
    return {
      prediction: "STABLE",
      confidence: 80
    };
  }

  const base = incident.motionCount || 0;

  if (base > 10) {
    return {
      prediction: "SYSTEM_OVERLOAD_RISK",
      confidence: 90
    };
  }

  if (base > 5) {
    return {
      prediction: "ELEVATED_ACTIVITY",
      confidence: 70
    };
  }

  return {
    prediction: "NORMAL_OPERATION",
    confidence: 85
  };
};
