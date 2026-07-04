export const createStreamPipeline = (camera) => {
  return {
    id: camera.id,
    zone: camera.zone,
    status: "INITIALIZED",
    lastFrame: null,
    droppedFrames: 0,

    ingestFrame(frame) {
      this.lastFrame = {
        timestamp: Date.now(),
        motion: frame?.motion || false,
        intensity: frame?.intensity || 0
      };

      return this.lastFrame;
    },

    healthCheck() {
      const now = Date.now();
      const stale = !this.lastFrame || (now - this.lastFrame.timestamp > 5000);

      if (stale) {
        this.droppedFrames++;
        this.status = "DEGRADED";
      } else {
        this.status = "ACTIVE";
      }

      return {
        cameraId: this.id,
        status: this.status,
        droppedFrames: this.droppedFrames
      };
    }
  };
};



export const runStreamEngine = (cameras, emit) => {
  const pipelines = cameras.map(c => createStreamPipeline(c));

  return setInterval(() => {
    pipelines.forEach((pipeline, i) => {
      const fakeFrame = {
        motion: Math.random() > 0.7,
        intensity: Math.random()
      };

      const frame = pipeline.ingestFrame(fakeFrame);

      emit({
        type: "camera-frame",
        cameraId: pipeline.id,
        zone: pipeline.zone,
        frame
      });

      pipeline.healthCheck();
    });
  }, 1000 / 2);
};
