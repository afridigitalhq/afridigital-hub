import React, { useEffect, useState } from "react";

/**
 * 🪟 SOC INCIDENT HUD OVERLAY (Win11-style)
 * Task Manager + Copilot hybrid system monitor
 */

export default function SOCIncidentHUDOverlay({ kernel }) {
  const [incidents, setIncidents] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!kernel) return;

    const interval = setInterval(() => {
      setIncidents(kernel.getLiveFeed?.() || []);
    }, 400);

    return () => clearInterval(interval);
  }, [kernel]);

  return (
    <div className="soc-hud-root">

      {/* LEFT: INCIDENT STREAM */}
      <div className="soc-hud-left">
        <div className="hud-title">🧠 Incident Stream</div>

        <div className="hud-list">
          {incidents.map((i) => (
            <div
              key={i.id}
              className="hud-item"
              onClick={() => setSelected(i)}
            >
              <div className="hud-type">{i.type}</div>
              <div className="hud-meta">{i.severity}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CENTER: TIMELINE REPLAY */}
      <div className="soc-hud-center">
        <div className="hud-title">🎬 Timeline Replay</div>

        <div className="hud-timeline">
          {incidents.map((i) => (
            <div key={i.id} className="timeline-dot" />
          ))}
        </div>

        <div className="hud-replay-info">
          Replay window: last {incidents.length} events
        </div>
      </div>

      {/* RIGHT: COPILOT INSPECTOR */}
      <div className="soc-hud-right">
        <div className="hud-title">🧠 Copilot Inspector</div>

        {selected ? (
          <div className="hud-detail">
            <div>ID: {selected.id}</div>
            <div>Type: {selected.type}</div>
            <div>Severity: {selected.severity}</div>
            <pre>{JSON.stringify(selected.payload, null, 2)}</pre>
          </div>
        ) : (
          <div className="hud-empty">
            Select an incident to inspect
          </div>
        )}
      </div>

    </div>
  );
}
