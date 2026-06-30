import React from "react";

/**
 * 🧠 SOC Incident Drilldown Panel
 * Windows 11 Task Manager + Copilot hybrid inspector
 */

export default function SOCIncidentDrilldownPanel({
  incident = null,
  onClose
}) {

  if (!incident) return null;

  return (
    <div className="soc-incident-drilldown">

      {/* HEADER */}
      <div className="drill-header">
        🧠 Incident Drilldown
        <button onClick={onClose}>✕</button>
      </div>

      {/* CORE SUMMARY */}
      <div className="drill-summary">
        <div>⚠ Type: {incident.type}</div>
        <div>⏱ Time: {incident.timestamp}</div>
        <div>📍 Source: {incident.source}</div>
        <div>🔥 Severity: {incident.severity}</div>
      </div>

      {/* STACK TRACE */}
      <div className="drill-stack">
        <h4>📚 Stack Trace</h4>
        <pre>{incident.stack || "No stack trace available"}</pre>
      </div>

      {/* UI ORIGIN MAP */}
      <div className="drill-ui-map">
        <h4>🪟 UI Origin Map</h4>
        <ul>
          {(incident.uiPath || []).map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* COPILOT EXPLANATION HOOK */}
      <div className="drill-explanation">
        <h4>🧠 Why this happened</h4>
        <p>
          {incident.explanation ||
            "Analysis engine not attached yet (SOC Copilot layer pending)."}
        </p>
      </div>

    </div>
  );
}
