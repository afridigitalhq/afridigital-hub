export const detectAnomaly = (events) => {
  const motionCount = events.filter(e => e.payload?.motion).length;
  const cameraSpread = new Set(events.map(e => e.payload?.cameraId)).size;

  let risk = 0;

  if (motionCount > 8) risk += 50;
  if (motionCount > 15) risk += 30;
  if (cameraSpread > 3) risk += 20;

  return {
    risk: Math.min(risk, 100),
    state:
      risk > 70 ? "ANOMALY_HIGH" :
      risk > 40 ? "ANOMALY_MEDIUM" :
      "NORMAL"
  };
};
