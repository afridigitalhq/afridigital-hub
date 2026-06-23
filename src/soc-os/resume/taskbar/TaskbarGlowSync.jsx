import React from "react";

export default function TaskbarGlowSync({ active }) {
  const apps = ["warroom", "admin", "dag"];

  return (
    <div className="taskbar-glow">

      {apps.map(app => (
        <div
          key={app}
          className={`task-icon ${active === app ? "glow" : ""}`}
        >
          {app.toUpperCase()}
        </div>
      ))}

    </div>
  );
}
