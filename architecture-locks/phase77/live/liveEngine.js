import eventBus from "../runtime/EventBus";

export const liveEngine = {
  on: (event, listener) => eventBus.on(event, listener),
  off: (event, listener) => eventBus.off(event, listener),
  emit: (event, payload) => eventBus.emit(event, payload)
};

// ===== AFRIVISION CINEMATIC L20 =====
export function startAfriVisionCinematicStream(engine = liveEngine) {
  let frame = 0;

  setInterval(() => {
    frame++;

    const motion = Math.random() > 0.6;
    const intensity = Math.floor(Math.random() * 100);

    engine.emit("vision", {
      feed: "CINEMATIC_CCTV_STREAM",
      frame,
      motion,
      intensity,
      timestamp: Date.now(),
      signal: motion ? "ACTIVE" : "IDLE",
      layer: "AfriVision"
    });
  }, 1200);
}
