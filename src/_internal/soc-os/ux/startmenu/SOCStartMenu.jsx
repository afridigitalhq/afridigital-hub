import React from "react";

export default function SOCStartMenu({ openApp }) {
  const apps = [
    "warroom",
    "dag-view",
    "incidents",
    "replay",
    "terminal",
    "forecast"
  ];

  return (
    <div className="soc-start-menu">
      <h3>🧿 SOC COMMAND CENTER</h3>
      {apps.map(app => (
        <div key={app} onClick={() => openApp(app)}>
          ⚡ {app}
        </div>
      ))}
    </div>
  );
}
