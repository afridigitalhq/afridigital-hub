import React, { useEffect, useState } from "react";

export default function TimelinePanel() {
  const [events, setEvents] = useState([]);
  const [incident, setIncident] = useState(null);

  useEffect(() => {
    if (!window.AfriMonitorBus) return;

    const unsubscribe = window.AfriMonitorBus.subscribe((event) => {
      setEvents((prev) => [event, ...prev].slice(0, 20));
    });

    const incidentWatcher = setInterval(() => {
      if (window.AfriMonitorIncidents) {
        setIncident(window.AfriMonitorIncidents);
      }
    }, 1000);

    return () => {
      unsubscribe && unsubscribe();
      clearInterval(incidentWatcher);
    };
  }, []);

  const getColor = (severity) => {
    if (severity === "HIGH") return "#ff1744";
    if (severity === "MEDIUM") return "#ff9100";
    return "#00c853";
  };

  return (
    <div style={{ marginTop: 12 }}>
      <h3>AFRIMONITOR TIMELINE</h3>

      {/* INCIDENT PANEL (PRIORITY VIEW) */}
      {incident && (
        <div
          style={{
            padding: 10,
            marginBottom: 12,
            border: `2px solid ${getColor(incident.severity)}`,
            background: "#0a0f16",
            borderRadius: 6
          }}
        >
          <strong>ACTIVE INCIDENT</strong>

          <div>Severity: {incident.severity}</div>
          <div>Events: {incident.eventCount}</div>
          <div>Motion: {incident.motionCount}</div>
          <div>Cameras: {incident.affectedCameras?.join(", ")}</div>
        </div>
      )}

      {/* EVENT LIST (SECONDARY FEED) */}
      {events.length === 0 && <p>No events yet...</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((e, i) => (
          <li
            key={i}
            style={{
              marginBottom: 8,
              padding: 8,
              border: "1px solid #333",
              borderRadius: 6
            }}
          >
            <div>
              <strong>{e.type}</strong>
            </div>

            <div>
              CATEGORY: {e.category} | PRIORITY: {e.priority}
            </div>

            <div>
              CAM: {e.payload?.cameraId} |{" "}
              {new Date(e.timestamp).toLocaleTimeString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
