import React, { useState } from "react";

/**
 * 🧠 SOC Timeline Replay Engine UI
 * Windows 11 Task Manager style incident playback system
 */

export default function SOCTimeline// BLOCKED_ENGINE:AFRI_ENGINE_PROXY({
  incidents = [],
  onSelectEvent
}) {
  const [cursor, setCursor] = useState(0);

  const current = incidents[cursor] || null;

  return (
    <div className="soc-timeline-replay">

      {/* HEADER */}
      <div className="timeline-header">
        🧠 Incident Replay Engine
      </div>

      {/* SCRUBBER */}
      <input
        type="range"
        min="0"
        max={incidents.length - 1}
        value={cursor}
        onChange={(e) => setCursor(Number(e.target.value))}
      />

      {/* CURRENT EVENT */}
      {current && (
        <div
          className="timeline-event"
          onClick={() => onSelectEvent?.(current)}
        >
          <div>⏱ {current.timestamp}</div>
          <div>⚠ {current.type}</div>
          <div>📍 {current.source}</div>
          <div>📉 impact: {current.severity}</div>
        </div>
      )}

      {/* MINI TIMELINE LIST */}
      <div className="timeline-list">
        {incidents.slice(0, 10).map((i, idx) => (
          <div
            key={idx}
            className={idx === cursor ? "active-event" : "event"}
            onClick={() => setCursor(idx)}
          >
            {i.timestamp} → {i.type}
          </div>
        ))}
      </div>

    </div>
  );
}
