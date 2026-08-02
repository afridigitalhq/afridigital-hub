import React, { useState } from "react";
import bus from "../core/runtime/AfriEventBus";

export default function AfriAICommandDock() {
  const [input, setInput] = useState("");

  const sendCommand = () => {
    if (!input.trim()) return;

    bus.emit("AFRIAI_COMMAND", {
      text: input
    });

    setInput("");
  };

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      padding: 10,
      background: "#0a0f1a",
      borderTop: "1px solid #00ffcc",
      zIndex: 9999
    }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="🧠 AfriAI command..."
        style={{
          flex: 1,
          padding: 10,
          background: "#111",
          color: "#00ffcc",
          border: "1px solid #00ffcc"
        }}
        onKeyDown={(e) => e.key === "Enter" && sendCommand()}
      />
      <button onClick={sendCommand} style={{
        marginLeft: 10,
        padding: "10px 20px",
        background: "#00ffcc",
        border: "none",
        cursor: "pointer"
      }}>
        SEND
      </button>
    </div>
  );
}
