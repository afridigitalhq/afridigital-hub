import { useEffect, useState } from "react";
import { AfriAIContext } from "../../core/afriai/AfriAIContext";

export default function AfriBoostSidebar() {

  const adsByMode = {
    general: [
      { title: "🚀 Welcome to AfriDigital", desc: "Explore the ecosystem" },
    ],
    sports: [
      { title: "⚽ AfriSports Live", desc: "Watch trending matches" },
      { title: "🏆 Sponsored Match Alerts", desc: "Stay updated instantly" }
    ],
    commerce: [
      { title: "🛍 AfriCommerce Store", desc: "Sell your products globally" },
      { title: "💰 Boost Your Listings", desc: "Get more buyers fast" }
    ],
    vision: [
      { title: "🎥 AfriCCTV Security", desc: "Monitor your environment" },
      { title: "🛡 Smart Alerts Active", desc: "AI detection system mock" }
    ],
    work: [
      { title: "💼 AfriWork Hub", desc: "Find remote jobs instantly" },
      { title: "📈 Earn From Skills", desc: "Monetize your talent" }
    ]
  };

  const [mode, setMode] = useState(AfriAIContext.getMode());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      const newMode = AfriAIContext.getMode();
      setMode(newMode);
    }, 1000);

    return () => clearInterval(t);
  }, []);

  const ads = adsByMode[mode] || adsByMode.general;
  const ad = ads[index % ads.length];

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % ads.length);
    }, 4000);

    return () => clearInterval(t);
  }, [mode]);

  return (
    <div style={{
      position: "fixed",
      right: "15px",
      top: "120px",
      width: "240px",
      background: "rgba(0,0,0,0.75)",
      border: "1px solid #00ffb3",
      borderRadius: "12px",
      padding: "12px",
      color: "#fff",
      zIndex: 9999
    }}>
      <div style={{ fontSize: "11px", opacity: 0.6 }}>
        AfriAI Mode: {mode.toUpperCase()}
      </div>

      <div style={{ fontSize: "14px", fontWeight: "700", marginTop: "6px" }}>
        {ad.title}
      </div>

      <div style={{ fontSize: "12px", opacity: 0.7, marginTop: "6px" }}>
        {ad.desc}
      </div>

      <button style={{
        marginTop: "10px",
        width: "100%",
        padding: "8px",
        border: "none",
        background: "#00ffb3",
        color: "#000",
        borderRadius: "8px"
      }}>
        Open
      </button>
    </div>
  );
}
