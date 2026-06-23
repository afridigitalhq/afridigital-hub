import React, { useEffect, useState } from "react";

export default function SOCIncidentHUDOverlay({ engine }) {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const data = engine.scan();
      setReport(engine.report());
    }, 1000);

    return () => clearInterval(interval);
  }, [engine]);

  return (
    <div className="soc-incident-hud">
      <h3>🧠 SOC INCIDENT HUD</h3>

      {report?.incidents?.length === 0 && (
        <div className="ok">System Stable</div>
      )}

      {report?.incidents?.map((i, idx) => (
        <div key={idx} className={`incident ${i.severity}`}>
          <b>{i.type}</b>
          <p>{i.message}</p>
        </div>
      ))}
    </div>
  );
}
