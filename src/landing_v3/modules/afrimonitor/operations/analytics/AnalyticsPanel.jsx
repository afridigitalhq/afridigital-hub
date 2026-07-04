import React, { useEffect, useState } from "react";

export default function AnalyticsPanel() {
  const [summary, setSummary] = useState("SYSTEM INITIALIZING...");

  useEffect(() => {
    const interval = setInterval(() => {
      const incident = window.AfriMonitorIncidents;

      if (!incident) {
        setSummary("No active incidents detected. System stable.");
        return;
      }

      if (incident.severity === "HIGH") {
        setSummary(
          "HIGH ACTIVITY DETECTED: Multiple cameras active. Elevated monitoring required."
        );
      } else if (incident.severity === "MEDIUM") {
        setSummary(
          "Moderate activity across zones. System under observation."
        );
      } else {
        setSummary("Low-level activity detected. System stable.");
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <h3>AFRIMONITOR INTELLIGENCE SUMMARY</h3>
      <p>{summary}</p>
    </div>
  );
}
