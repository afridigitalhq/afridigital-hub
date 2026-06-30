import React, { useState } from "react";

export default function SOCWin11Taskbar({ onOpen }) {
  const [active, setActive] = useState("warroom");

  const apps = ["warroom", "admin", "dag"];

  return (
    <div className="win11-taskbar">

      {/* START BUTTON */}
      <div className="taskbar-left">
        <StartButton />
      </div>

      {/* CENTER APP ICONS */}
      <div className="taskbar-center">
        {apps.map(app => (
          <div
            key={app}
            className={`task-icon ${active === app ? "active" : ""}`}
            onClick={() => {
              setActive(app);
              onOpen?.(app);
            }}
          >
            {app.toUpperCase()}
            {active === app && <div className="underline" />}
          </div>
        ))}
      </div>

      {/* SYSTEM TRAY */}
      <div className="taskbar-right">
        🔊 📶 🔋 🕒
      </div>

    </div>
  );
}

function StartButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="start-wrapper">
      <button
        className="start-btn"
        onClick={() => setOpen(!open)}
      >
        🧿
      </button>

      {open && <StartMenu />}
    </div>
  );
}

function StartMenu() {
  return (
    <div className="start-menu">

      {/* LEFT COLUMN (Pinned Apps) */}
      <div className="start-left">
        <h4>Pinned</h4>
        <button>WarRoom</button>
        <button>Admin</button>
        <button>DAG</button>
      </div>

      {/* RIGHT COLUMN (Recommended) */}
      <div className="start-right">
        <h4>Recommended</h4>
        <div className="rec-item">SOC Incident Feed</div>
        <div className="rec-item">AI Layout Engine</div>
      </div>

    </div>
  );
}
