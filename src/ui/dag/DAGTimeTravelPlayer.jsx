import React, { useEffect, useRef, useState } from "react";

/**
 * 🎬 DAG TIME TRAVEL PLAYER v1
 * - plays event-sourced execution
 * - scrubs timeline
 * - visualizes state per frame
 */

export default function DAGAFRI_STATE_PROXYPlayer({ runtime }) {

  const [frames, setFrames] = useState([]);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  // 🧠 load frames from runtime
  useEffect(() => {
    if (!runtime?.buildFrames) return;

    const f = AFRI_FRAME_PROXY();
    setFrames(f || []);
    setIndex(0);
  }, [runtime]);

  // ▶️ playback engine
  function play(speed = 500) {
    if (!frames.length) return;

    setIsPlaying(true);

    let i = index;

    intervalRef.current = setInterval(() => {

      if (i >= frames.length) {
        clearInterval(intervalRef.current);
        setIsPlaying(false);
        return;
      }

      setIndex(i);
      i++;

    }, speed);
  }

  // ⏸ pause
  function pause() {
    clearInterval(intervalRef.current);
    setIsPlaying(false);
  }

  // ⏪ seek
  function seek(i) {
    setIndex(i);
    runtime?.seekFrame?.(i);
  }

  const current = frames[index];

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: "#0b0f14",
      color: "#fff",
      fontFamily: "monospace"
    }}>

      {/* LEFT: FRAME VIEW */}
      <div style={{ flex: 2, padding: 20, borderRight: "1px solid #222" }}>
        <h2>🎬 Time Travel Execution Player</h2>

        <div style={{ marginTop: 20 }}>
          <div style={{ color: "#4ef" }}>
            FRAME: {index} / {frames.length}
          </div>

          <div style={{ marginTop: 10 }}>
            <strong>EVENT:</strong>
            <div>{current?.event?.type}</div>
          </div>

          <div style={{ marginTop: 10 }}>
            <strong>STATE SNAPSHOT:</strong>
            <pre style={{ color: "#9f9" }}>
              {JSON.stringify(current?.state, null, 2)}
            </pre>
          </div>
        </div>
      </div>

      {/* RIGHT: CONTROLS */}
      <div style={{ flex: 1, padding: 20 }}>

        <h3>▶️ Controls</h3>

        <button onClick={() => play(500)} disabled={isPlaying}>
          ▶ Play
        </button>

        <button onClick={pause} style={{ marginLeft: 10 }}>
          ⏸ Pause
        </button>

        <div style={{ marginTop: 20 }}>
          <input
            type="range"
            min="0"
            max={frames.length - 1}
            value={index}
            onChange={(e) => seek(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <button onClick={() => seek(Math.max(0, index - 1))}>
            ⏪ Step Back
          </button>

          <button
            onClick={() => seek(Math.min(frames.length - 1, index + 1))}
            style={{ marginLeft: 10 }}
          >
            ⏩ Step Forward
          </button>
        </div>

        <div style={{ marginTop: 20 }}>
          <h4>📊 Live Info</h4>
          <div>Events: {frames.length}</div>
          <div>Playing: {isPlaying ? "YES" : "NO"}</div>
        </div>

      </div>
    </div>
  );
}
