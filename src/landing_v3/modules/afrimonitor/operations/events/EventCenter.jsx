import React, { useEffect, useRef } from "react";
import { processIncident } from "./incidentEngine";

export default function EventCenter() {
  const listeners = useRef([]);
  const incidentBuffer = useRef(null);

  const emit = (event) => {
    listeners.current.forEach((fn) => fn(event));
  };

  const subscribe = (fn) => {
    listeners.current.push(fn);
    return () => {
      listeners.current = listeners.current.filter((l) => l !== fn);
    };
  };

  const classifyEvent = (event) => {
    if (event.type?.includes("CCTV")) {
      return { ...event, category: "CCTV", priority: "MEDIUM" };
    }

    if (event.type?.includes("FALLBACK")) {
      return { ...event, category: "SYSTEM", priority: "LOW" };
    }

    return { ...event, category: "SYSTEM", priority: "LOW" };
  };

  useEffect(() => {
    const socket = new WebSocket(
      "wss://afridigital-api.onrender.com/afrimonitor-stream"
    );

    socket.onopen = () => {
      console.log("🟢 AfriMonitor incident stream active");
    };

    socket.onmessage = (msg) => {
      try {
        const raw = JSON.parse(msg.data);
        const enriched = classifyEvent(raw);

        emit(enriched);

        // INCIDENT GENERATION LAYER
        const incident = processIncident(enriched);
        incidentBuffer.current = incident;

        window.AfriMonitorIncidents = incident;
      } catch (e) {
        console.error("Stream error", e);
      }
    };

    socket.onerror = () => {
      console.log("🔴 fallback incident mode");

      const fallback = setInterval(() => {
        const raw = {
          type: "FALLBACK_CCTV_FRAME",
          timestamp: Date.now(),
          payload: {
            cameraId: "CAM-01",
            status: "FALLBACK",
            motion: Math.random() > 0.6
          }
        };

        const enriched = classifyEvent(raw);
        emit(enriched);

        const incident = processIncident(enriched);
        window.AfriMonitorIncidents = incident;
      }, 3000);

      return () => clearInterval(fallback);
    };

    window.AfriMonitorBus = { emit, subscribe };

    return () => socket.close();
  }, []);

  return null;
}
