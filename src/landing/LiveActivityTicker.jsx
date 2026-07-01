import React from "react";

const events = [
  "🧠 AfriAI analyzed a new request",
  "🛡️ SOC cleared a security event",
  "🎥 AfriVision camera stream active",
  "📡 AfriComm delivered a message",
  "🏦 AfriBank processed a payment",
  "🚀 AfriBoost campaign gaining reach",
  "💰 AfriCommerce new marketplace listing",
  "⚽ AfriSports live match updated",
  "🎮 AfriMetaWorld simulation online",
  "📍 Device Tracking location refreshed"
];

export default function LiveActivityTicker() {
  return (
    <div style={{
      maxWidth:"1200px",
      margin:"40px auto",
      padding:"14px 20px",
      border:"1px solid #22ff99",
      borderRadius:"12px",
      overflow:"hidden",
      whiteSpace:"nowrap",
      color:"#22ff99",
      fontWeight:"bold"
    }}>
      <marquee behavior="scroll" direction="left" scrollamount="6">
        {events.join("   •   ")}
      </marquee>
    </div>
  );
}
