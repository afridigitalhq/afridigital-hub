import React, { useState } from "react";

export default function AiOSLayer({ onCommand }) {
  const [query, setQuery] = useState("");

  const suggestions = [
    "open warroom",
    "switch admin",
    "open dag view",
    "show incidents"
  ];

  return (
    <div className="ai-os-layer">

      {/* SEARCH BAR */}
      <input
        placeholder="Search SOC OS..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* SUGGESTIONS */}
      <div className="ai-suggestions">
        {suggestions
          .filter(s => s.includes(query))
          .map((s, i) => (
            <div
              key={i}
              onClick={() => onCommand(s)}
              className="ai-suggestion"
            >
              {s}
            </div>
        ))}
      </div>

    </div>
  );
}
