import React from "react";

export default function AIDesktopAssistant({ insight }) {
  if (!insight) return null;

  return (
    <div className="ai-hud">

      <div className="ai-chip">
        🧠 SOC Assistant
      </div>

      <div className="ai-text">
        {insight}
      </div>

    </div>
  );
}
