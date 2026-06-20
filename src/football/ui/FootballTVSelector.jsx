import React, { useState } from "react";

export default function FootballTVSelector({ leagues = [], onSelect }) {
  const [active, setActive] = useState(null);

  return (
    <div style={{
      padding: 10,
      background: "#020617",
      color: "#fff"
    }}>
      <h3>📺 Football TV Control Room</h3>

      {leagues.map((l, i) => (
        <div
          key={i}
          onClick={() => {
            setActive(l);
            onSelect(l);
          }}
          style={{
            padding: 8,
            margin: 5,
            background: active === l ? "#1f2937" : "#0f172a",
            cursor: "pointer"
          }}
        >
          ⚽ {l.name}
        </div>
      ))}
    </div>
  );
}
