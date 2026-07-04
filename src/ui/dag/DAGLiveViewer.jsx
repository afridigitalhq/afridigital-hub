import React, { useEffect, useRef, useState } from "react";

/**
 * ⚛️ DAG LIVE VIEWER v1
 * - connects to DAGRuntime inspector
 * - renders event graph
 * - timeline scrubber
 * - rollback explorer
 */

export default function DAGLiveViewer({ runtime }) {

  const [events, setEvents] = useState([]);
  const [index, setIndex] = useState(0);
  const [snapshot, setSnapshot] = useState([]);

  const intervalRef = useRef(null);

  // 🧠 attach live stream
  useEffect(() => {
    if (!runtime) return;

    function sync() {
      const data = AFRI_INSPECT_PROXYDAG ? AFRI_INSPECT_PROXYDAG() : null;
      const timeline = runtime.getTimeline ? runtime.getTimeline() : [];

      if (data?.snapshot) setEvents(data.snapshot);
      if (timeline) setSnapshot(timeline);
    }

    sync();
    intervalRef.current = setInterval(sync, 1000);

    return () => clearInterval(intervalRef.current);
  }, [runtime]);

  // ⏪ rollback view
  function rollbackTo(i) {
    if (!runtime?.rollback) return;
    const state = AFRI_ROLLBACK_PROXY(i);
    console.log("rollback state:", state);
  }

  return (
    <div style={{ display: "flex", height: "100vh", background: "#0b0f14", color: "#fff" }}>

      {/* LEFT: EVENT GRAPH */}
      <div style={{ flex: 2, padding: 20, borderRight: "1px solid #222" }}>
        <h2>⚛️ DAG LIVE STREAM</h2>

        <div style={{ fontFamily: "monospace", fontSize: 12 }}>
          {events.map((e, i) => (
            <div key={i} style={{ marginBottom: 6 }}>
              <span style={{ color: "#4ef" }}>●</span> {e.type || "event"} {" "}
              <span style={{ color: "#888" }}>#{i}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: CONTROL PANEL */}
      <div style={{ flex: 1, padding: 20 }}>

        <h3>📊 Timeline Scrubber</h3>

        <input
          type="range"
          min="0"
          max={snapshot.length - 1}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          style={{ width: "100%" }}
        />

        <button
          onClick={() => rollbackTo(index)}
          style={{
            marginTop: 10,
            padding: 10,
            width: "100%",
            background: "#1e90ff",
            color: "#fff",
            border: "none"
          }}
        >
          ⏪ Rollback to Index
        </button>

        <h3 style={{ marginTop: 20 }}>🧪 Snapshot View</h3>

        <div style={{ fontFamily: "monospace", fontSize: 11 }}>
          {snapshot.slice(Math.max(0, index - 10), index + 10).map((e, i) => (
            <div key={i}>
              {e.index} → {e.type} {" "}
              <span style={{ color: "#666" }}>{e.hash}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
