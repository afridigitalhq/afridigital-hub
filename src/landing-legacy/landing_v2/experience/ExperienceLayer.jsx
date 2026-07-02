import React from "react";

export default function ExperienceLayer() {
  return (
    <div style={{ padding: "50px", color: "#fff" }}>

      <h2 style={{ color: "#00c2ff", fontSize: "28px", marginBottom: "30px" }}>
        AfriDigital Experience Layer
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>

        {/* HERO - AFRIVISION */}
        <div style={{
          background: "linear-gradient(135deg,#0a0f1f,#101a33)",
          padding: "25px",
          borderRadius: "16px",
          minHeight: "260px"
        }}>
          <h2>AfriVision</h2>
          <p>
            Real-time intelligence monitoring across physical and digital environments.
            Detects motion, anomalies, and environmental patterns instantly.
          </p>
          <div style={{ marginTop: "15px", opacity: 0.7 }}>
            LIVE INTELLIGENCE STREAM ACTIVE
          </div>
        </div>

        {/* STACKED SIDE */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

          <div style={{
            background: "#0b0f1a",
            padding: "20px",
            borderRadius: "14px"
          }}>
            <h3>AfriSports</h3>
            <p>Live analytics, match intelligence, prediction engine.</p>
            <div style={{ opacity: 0.6 }}>REAL-TIME MODE</div>
          </div>

          <div style={{
            background: "#0b0f1a",
            padding: "20px",
            borderRadius: "14px"
          }}>
            <h3>AfriMetaWorld</h3>
            <p>AI-generated simulation environments and interactive worlds.</p>
            <div style={{ opacity: 0.6 }}>SIMULATION ENGINE</div>
          </div>

        </div>

      </div>
    </div>
  );
}
