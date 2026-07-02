import React, { useEffect, useRef, useState } from "react";
import AfriVisionDashboardRuntime from "./afrivision/runtime/AfriVisionDashboardRuntime";

export default function AfriVisionWindow() {
  const runtimeRef = useRef(null);
  const [frame, setFrame] = useState(0);
  const [status, setStatus] = useState("stopped");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const runtime = new AfriVisionDashboardRuntime();
    runtimeRef.current = runtime;

    runtime.on("runtime:start", () => setStatus("running"));
    runtime.on("runtime:stop", () => setStatus("stopped"));

    runtime.on("frame", (data) => {
      setFrame(data.frame);

      // visual pulse trigger
      setPulse(true);
      setTimeout(() => setPulse(false), 120);
    });

    runtime.start();

    return () => runtime.stop();
  }, []);

  return (
    <div style={{
      padding: 20,
      borderRadius: 14,
      background: "#070b12",
      color: "#d6dde6",
      fontFamily: "monospace",
      border: "1px solid #1b2a3a"
    }}>

      <div style={{ fontSize: 18, marginBottom: 10 }}>
        ⚡ AfriVision Live Core
      </div>

      <div>Status: {status}</div>
      <div>Frame: {frame}</div>

      <div style={{
        marginTop: 20,
        height: 20,
        width: "100%",
        borderRadius: 8,
        background: pulse ? "#2bd4ff" : "#111a24",
        transition: "all 0.12s ease"
      }} />

      <div style={{
        marginTop: 15,
        fontSize: 12,
        opacity: 0.75
      }}>
        Live runtime heartbeat visualized as pulse stream.
      </div>

    </div>
  );
}
