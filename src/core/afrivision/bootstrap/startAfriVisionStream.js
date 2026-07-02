import { liveEngine } from "../../live/liveEngine";

/**
 * AfriVision Stream Bootstrap
 * Simulates real CCTV + sensor feed
 */

export function startAfriVisionStream() {
  let frame = 0;

  setInterval(() => {
    frame++;

    const event = {
      feed: "CAM_FEED_" + (frame % 6),
      frame,
      motion: Math.random() > 0.6,
      intensity: Math.floor(Math.random() * 100),
      signal: Math.random() > 0.5 ? "ACTIVE" : "IDLE",
      timestamp: Date.now()
    };

    liveEngine.emit("vision", event);
  }, 500); // real-time stream heartbeat
}
