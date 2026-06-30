import React, { useEffect, useState } from "react";

/**
 * 🪟 SOC WIN11 TASK MANAGER + COPILOT HUD
 * Fluent overlay system monitor (Windows 11 inspired)
 */

export default function SOCWin11TaskManagerHUD({ runtime }) {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    if (!runtime) return;

    const interval = setInterval(() => {
      const stream = runtime.getIncidentTimeline?.() || [];
      setEvents(stream.slice(-30));

      if (runtime.getIncidentExplanation) {
        setExplanation(runtime.getIncidentExplanation());
      }
    }, 500);

    return () => clearInterval(interval);
  }, [runtime]);

  return (
    <div className="win11-hud-root">

      {/* LEFT PANEL - INCIDENT LIST (Task Manager style) */}
      <div className="win11-hud-left">
        <div className="win11-title">Processes / Incidents</div>

        {events.map((e, i) => (
          <div
            key={i}
            className="win11-item"
            onClick={() => setSelected(e)}
          >
            <div className="win11-item-type">{e.type}</div>
            <div className="win11-item-meta">{e.severity || "normal"}</div>
          </div>
        ))}
      </div>

      {/* CENTER - PERFORMANCE TIMELINE */}
      <div className="win11-hud-center">
        <div className="win11-title">Performance Timeline</div>

        <div className="win11-graph">
          {events.map((_, i) => (
            <div
              key={i}
              className="win11-bar"
              style={{ height: `${10 + Math.random() * 60}px` }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT - COPILOT PANEL */}
      <div className="win11-hud-right">
        <div className="win11-title">Copilot Insight</div>

        {selected ? (
          <div className="win11-detail">
            <div className="win11-label">Event:</div>
            <pre>{JSON.stringify(selected, null, 2)}</pre>
          </div>
        ) : (
          <div className="win11-ai-box">
            🤖 {explanation || "System stable — no anomalies detected"}
          </div>
        )}
      </div>

    </div>
  );
}
