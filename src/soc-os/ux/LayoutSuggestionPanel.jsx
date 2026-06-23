import React from "react";

export default function LayoutSuggestionPanel({ suggestions = [], onApply }) {
  return (
    <div className="soc-layout-panel">
      <h3>🧠 AI Layout Suggestions (SAFE MODE)</h3>

      {suggestions.map((s, i) => (
        <div key={i} className="layout-card">
          <p>{s.name}</p>
          <button onClick={() => onApply?.(s)}>
            Apply Layout
          </button>
        </div>
      ))}
    </div>
  );
}
