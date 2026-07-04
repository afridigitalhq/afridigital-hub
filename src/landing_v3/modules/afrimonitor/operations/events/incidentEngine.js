let buffer = [];

const WINDOW_MS = 5000;

export const processIncident = (event) => {
  const now = Date.now();

  buffer.push(event);

  // keep only recent events
  buffer = buffer.filter(e => now - e.timestamp < WINDOW_MS);

  const motionEvents = buffer.filter(
    e => e.payload?.motion === true
  );

  const cameras = new Set(
    buffer.map(e => e.payload?.cameraId).filter(Boolean)
  );

  let severity = "LOW";

  if (motionEvents.length >= 5) severity = "HIGH";
  else if (motionEvents.length >= 3) severity = "MEDIUM";

  return {
    id: `INC-${now}`,
    type: "INCIDENT",
    severity,
    affectedCameras: Array.from(cameras),
    eventCount: buffer.length,
    motionCount: motionEvents.length,
    timestamp: now
  };
};
