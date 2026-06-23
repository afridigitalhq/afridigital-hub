import React, { useState } from "react";

export default function SOCVoicePanel({ voice }) {
  const [cmd, setCmd] = useState("");

  return (
    <div style={{ padding: 12, borderTop: "1px solid #1F2937" }}>
      🔊 SOC Voice Control

      <div style={{ marginTop: 10 }}>
        <input
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          placeholder="Admin override command..."
          style={{ width: "70%" }}
        />

        <button
          onClick={() => {
            voice?.current?.interrupt({
              action: cmd
            });
            setCmd("");
          }}
          style={{ marginLeft: 10 }}
        >
          Override
        </button>
      </div>
    </div>
  );
}
