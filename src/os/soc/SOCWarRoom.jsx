import React from "react";

export default function SOCWarRoom({ status }) {
  return (
    <div style={{
      height: "100vh",
      background: "#050816",
      color: "#fff",
      padding: 20
    }}>
      <h1>🌍 AFRIDIGITAL SOC WAR ROOM</h1>

      <div style={{
        marginTop: 20,
        padding: 20,
        border: "1px solid #1f2937",
        borderRadius: 10
      }}>
        🧠 Brain: ACTIVE<br/>
        🛡️ AfriScan: MONITORING<br/>
        🔊 Narrator: READY<br/>
        💰 Monetization: ARMED<br/>
        ⚡ Mode: {status?.mode || "UNKNOWN"}
      </div>

      <div style={{ marginTop: 20, opacity: 0.8 }}>
        Real-time global system event fusion active.
      </div>
    </div>
  );
}
