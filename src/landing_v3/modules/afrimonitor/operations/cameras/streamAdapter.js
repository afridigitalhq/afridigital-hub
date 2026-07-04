export const normalizeStream = (camera, rawFrame) => {
  return {
    cameraId: camera.id,
    zone: camera.zone,
    timestamp: Date.now(),
    motion: rawFrame?.motion || false,
    intensity: rawFrame?.intensity || 0,
    source: camera.streamType
  };
};
