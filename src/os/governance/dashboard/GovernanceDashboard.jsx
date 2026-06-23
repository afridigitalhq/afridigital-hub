export default function GovernanceDashboard({ telemetry }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>🧠 Governance Control Cockpit</h2>

      <pre style={{ background: "#111", color: "#0f0", padding: 12 }}>
        {JSON.stringify(telemetry, null, 2)}
      </pre>
    </div>
  );
}
