import React from "react";

export default function AIOverlayPanel({ suggestions = [], onApply }) {
  return (
    <div className="ai-overlay">
      <h3>🧠 AI Desktop Suggestions</h3>

      {suggestions.map((s, i) => (
        <div key={i} className="suggestion-card">
          <p>{s.title}</p>

          <button onClick={() => onApply(s)}>
            Apply Layout
          </button>
        </div>
      ))}
    </div>
  );
}
