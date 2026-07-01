import React from "react";

const modules = [
  "🧠 AfriAI",
  "🛡️ SOC",
  "🏦 AfriBank",
  "💚 AfriWhatsApp",
  "📡 AfriComm",
  "🎥 AfriVision",
  "📍 Device Tracking",
  "🚀 AfriBoost",
  "💰 AfriCommerce",
  "🎮 AfriMetaWorld",
  "⚽ AfriSports"
];

export default function LandingFooter() {
  return (
    <footer style={{
      marginTop:"80px",
      padding:"40px 20px",
      borderTop:"1px solid #22ff99",
      background:"rgba(10,10,10,.9)"
    }}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <h2 style={{color:"#22ff99"}}>AFRIDIGITAL</h2>
        <p>One Intelligent Ecosystem.</p>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
          gap:"10px",
          margin:"25px 0"
        }}>
          {modules.map(name=>(
            <div key={name}>{name}</div>
          ))}
        </div>

        <div style={{
          opacity:.7,
          marginTop:"20px",
          fontSize:"14px"
        }}>
          © 2026 AfriDigital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
