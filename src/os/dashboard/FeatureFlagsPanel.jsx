import React from "react";
import { useFeatureFlags } from "./useFeatureFlags";

export default function FeatureFlagsPanel() {
  const { flags, toggleFlag } = useFeatureFlags();

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h2>🧠 OS Feature Control Panel</h2>

      {Object.entries(flags).map(([key, value]) => (
        <div key={key} style={{ margin: "10px 0" }}>
          <span>{key}</span>
          <button
            style={{ marginLeft: 10 }}
            onClick={() => toggleFlag(key, !value)}
          >
            {value ? "DISABLE" : "ENABLE"}
          </button>
        </div>
      ))}
    </div>
  );
}
