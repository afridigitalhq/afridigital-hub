import React from "react";
import { useCILive } from "./useCILive";

export default function CIDashboard() {
  const ci = useCILive();

  return (
    <div style={{ color: "#0ff", fontFamily: "monospace" }}>
      <h2>CI CONTROL HUD</h2>
      <pre>{JSON.stringify(ci, null, 2)}</pre>
    </div>
  );
}
