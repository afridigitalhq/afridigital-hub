import React, { useState } from "react";

export default function SOCStartMenu({ apps = [], onLaunch }) {
  const [query, setQuery] = useState("");

  const filtered = apps.filter(a =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="start-menu">

      <input
        placeholder="Search SOC..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="app-grid">
        {filtered.map((a, i) => (
          <div
            key={i}
            className="app-tile"
            onClick={() => onLaunch(a.id)}
          >
            {a.icon} {a.name}
          </div>
        ))}
      </div>

    </div>
  );
}
