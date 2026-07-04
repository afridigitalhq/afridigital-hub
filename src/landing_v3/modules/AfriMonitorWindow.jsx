const AFRIMONITOR_UI_MODE = 'STREAM_ONLY';

const AFRIMONITOR_MODE = 'remote';

import React, { useEffect, useRef, useState } from "react";
import AfriMonitorDashboardRuntime from "./afrivision/runtime/AfriMonitorDashboardRuntime";
import { cameraRegistry } from "./afrimonitor/operations/cameras/cameraRegistry";
import { runStreamEngine } from "./afrimonitor/operations/streams/streamPipeline";
import useAfriMonitorStream from "../streams/useAfriMonitorStream";

export default function AfriMonitorWindow() {
  const runtimeRef = useRef(null);
  const [frame, setFrame] = useState(0);
  const [status, setStatus] = useState("stopped");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const runtimeRef = useRef(null);

  const { frame: liveFrame, status } = useAfriMonitorStream();

  useEffect(() => {
    const runtime = new AfriMonitorDashboardRuntime();
    runtimeRef.current = runtime;

    runtime.on("frame", (data) => {
      setFrame(data.frame);
      setPulse(true);
      setTimeout(() => setPulse(false), 120);
    });

    
if (AFRIMONITOR_MODE === 'local') {
  const runtimeRef = useRef(null);

  useEffect(() => {
    const runtime = new AfriMonitorDashboardRuntime();
    runtimeRef.current = runtime;

    // runtime controlled by stream engine

    const engine = runStreamEngine(cameraRegistry, (payload) => {
      runtime.emit("frame", {
        frame: payload.frame,
        cameraId: payload.cameraId,
        zone: payload.zone,
        source: "stream-engine"
      });
    });

    return () => {
      runtime.stop();
      clearInterval(engine);
    };
  }, []);
}


    return () => runtime.stop();
  }, []);

  // B2: override runtime frame with server frame if available
  useEffect(() => {
    if (!runtimeRef.current) return;
    if (status !== "live") return;

    runtimeRef.current.emit("frame", {
      frame: liveFrame,
      source: "backend"
    });
  }, [liveFrame, status]);
    runtimeRef.current = runtime;

    runtime.on("runtime:start", () => setStatus("running"));
    runtime.on("runtime:stop", () => setStatus("stopped"));

    runtime.on("frame", (data) => {
      setFrame(data.frame);

      // visual pulse trigger
      setPulse(true);
      setTimeout(() => setPulse(false), 120);
    });

    
if (AFRIMONITOR_MODE === 'local') {
  const runtimeRef = useRef(null);

  useEffect(() => {
    const runtime = new AfriMonitorDashboardRuntime();
    runtimeRef.current = runtime;

    // runtime controlled by stream engine

    const engine = runStreamEngine(cameraRegistry, (payload) => {
      runtime.emit("frame", {
        frame: payload.frame,
        cameraId: payload.cameraId,
        zone: payload.zone,
        source: "stream-engine"
      });
    });

    return () => {
      runtime.stop();
      clearInterval(engine);
    };
  }, []);
}


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
        ⚡ AfriMonitor Live Core
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
