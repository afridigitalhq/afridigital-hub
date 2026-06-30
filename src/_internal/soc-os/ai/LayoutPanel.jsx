import React, { useState } from "react";

export default function LayoutPanel({ engine }) {
  const [suggestions, setSuggestions] = useState([]);

  function requestSuggestion() {
    const layout = {
      type: "grid",
      windows: ["warroom", "dashboard", "terminal"]
    };

    setSuggestions([...suggestions, layout]);
  }

  function apply(layout) {
    console.log("🧠 APPLYING LAYOUT (user-approved only)", layout);
  }

  return (
    <div className="fluent-panel">
      <h3>🧠 AI Layout Suggestions (SAFE MODE)</h3>

      <button onClick={requestSuggestion}>
        Generate Suggestion
      </button>

      {suggestions.map((s, i) => (
        <div key={i}>
          <pre>{JSON.stringify(s, null, 2)}</pre>
          <button onClick={() => apply(s)}>
            Apply Layout
          </button>
        </div>
      ))}
    </div>
  );
}
