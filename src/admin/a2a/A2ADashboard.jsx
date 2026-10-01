import React from "react";
import "./A2ADashboard.css";
import API from "../../config/api";
import A2AOverview from "./components/A2AOverview";
import A2AAgentGrid from "./components/A2AAgentGrid";
import A2ACustomerOverview from "./components/A2ACustomerOverview";
import A2AActivity from "./components/A2AActivity";

export default function A2ADashboard() {
  const [telemetry, setTelemetry] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const loadTelemetry = React.useCallback(async () => {
    try {
      const res = await fetch(`${API.base}/api/a2a/dashboard-telemetry`);
      if (!res.ok) {
        throw new Error(`Telemetry request failed: HTTP ${res.status}`);
      }

      const data = await res.json();
      setTelemetry(data);
      setError(null);
    } catch (err) {
      setError(err?.message || "Unable to load A2A telemetry");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadTelemetry();

    const timer = setInterval(loadTelemetry, 3000);

    return () => clearInterval(timer);
  }, [loadTelemetry]);

  return (
    <section className="a2a-dashboard">
      <header className="a2a-dashboard-header">
        <div>
          <span className="a2a-kicker">AFRIDIGITAL A2A PLATFORM</span>
          <h1>A2A AI Platform</h1>
          <p>Unified control surface for AfriDigital agent-to-agent operations.</p>
        </div>

        <div className="a2a-platform-state">
          <span className="a2a-status-dot" />
          <strong>{error ? "TELEMETRY ERROR" : "PLATFORM"}</strong>
          <small>
            {loading
              ? "Loading live platform data"
              : error
                ? error
                : "Live telemetry • 3s refresh"}
          </small>
        </div>
      </header>

      <A2AOverview telemetry={telemetry} />
      <A2AAgentGrid telemetry={telemetry} />

      <div className="a2a-lower-grid">
        <A2ACustomerOverview telemetry={telemetry} />
        <A2AActivity telemetry={telemetry} />
      </div>
    </section>
  );
}
