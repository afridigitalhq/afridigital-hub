import React, { useEffect, useState } from "react";
import { cameraRegistry as initialCameras } from "./cameraRegistry";

export default function MiniMap() {
  const [cameras, setCameras] = useState(initialCameras);

  const getIntensityColor = (cam) => {
    if (cam.alert) return "#ff1744";
    if (cam.active) return "#ff9100";
    return "#00c853";
  };

  useEffect(() => {
    if (!window.AfriMonitorBus) return;

    const unsubscribe = window.AfriMonitorBus.subscribe((event) => {
      const camId = event?.payload?.cameraId;
      const motion = event?.payload?.motion;
      const priority = event?.priority;

      if (!camId) return;

      setCameras((prev) =>
        prev.map((cam) => {
          if (cam.id !== camId) return cam;

          return {
            ...cam,
            active: !!motion,
            alert: priority === "HIGH"
          };
        })
      );
    });

    return () => unsubscribe && unsubscribe();
  }, []);

  return (
    <div style={{ marginTop: 12 }}>
      <h3>AFRIMONITOR HEATMAP</h3>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {cameras.map((cam) => (
          <div
            key={cam.id}
            style={{
              padding: 12,
              borderRadius: 8,
              border: `1px solid ${getIntensityColor(cam)}`,
              background: cam.active ? "#111" : "#0a0a0a",
              color: "#fff",
              minWidth: 100,
              textAlign: "center",
              boxShadow: cam.alert
                ? "0 0 12px rgba(255,0,0,0.5)"
                : "none"
            }}
          >
            <div>{cam.id}</div>
            <small>{cam.zone}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
