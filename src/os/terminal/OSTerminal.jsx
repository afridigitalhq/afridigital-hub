import React, { useState } from "react";

export default function OSTerminal({ commandPalette }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  const run = () => {
    if (!commandPalette) return;

    const result = commandPalette.execute(input);
    setOutput(result);
    setInput("");
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "#111827",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999
        }}
      >
        ⚡
      </div>

      {/* TERMINAL PANEL */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 420,
            background: "#0a0f1c",
            border: "1px solid #1f2937",
            padding: 12,
            color: "#fff",
            zIndex: 9999
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.7 }}>
            AfriDigital OS Command Terminal
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command (open afriscan, status, list...)"
            style={{
              width: "100%",
              marginTop: 10,
              padding: 10,
              background: "#111827",
              color: "#fff",
              border: "1px solid #374151"
            }}
            onKeyDown={(e) => e.key === "Enter" && run()}
          />

          <button
            onClick={run}
            style={{
              marginTop: 10,
              width: "100%",
              padding: 10,
              background: "#1f2937",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            EXECUTE
          </button>

          {/* OUTPUT */}
          {output && (
            <pre style={{ marginTop: 10, fontSize: 11, color: "#9ca3af" }}>
              {JSON.stringify(output, null, 2)}
            </pre>
          )}
        </div>
      )}
    </>
  );
}
