import { useEffect, useState } from "react";

const API = "https://afridigital-api.onrender.com/api/kernel/decisions";

export default function DecisionCockpit() {
  const [decisions, setDecisions] = useState([]);

  useEffect(() => {
    const load = () =>
      fetch(API).then(r => r.json()).then(setDecisions);

    load();
    const t = setInterval(load, 2000);

    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>🧠 Governance Decision Cockpit</h2>

      {decisions.map((d, i) => (
        <div key={i} style={{ marginBottom: 10, border: "1px solid #333", padding: 10 }}>
          <div><b>Type:</b> {d.type}</div>
          <div><b>Status:</b> {d.status}</div>
          <div><b>Source:</b> {d.source}</div>
          <div><b>Quorum:</b> {d.quorum || 0}</div>
        </div>
      ))}
    </div>
  );
}
