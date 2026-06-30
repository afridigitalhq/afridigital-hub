import React, { useEffect, useState } from "react";

export default function SOCIncidentHUDOverlay({ kernel }) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (kernel) {
        setFeed(kernel.getLiveFeed());
      }
    }, 500);

    return () => clearInterval(interval);
  }, [kernel]);

  return (
    <div className="incident-hud-overlay">
      <div className="hud-header">🧠 SOC INCIDENT HUD</div>

      <div className="hud-stream">
        {feed.map((i) => (
          <div key={i.id} className="hud-event">
            <span>{i.type}</span>
            <span>{i.severity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
