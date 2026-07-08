import React from "react";

export default function HeroHighlights() {
  const items = [
    "🎥 AfriCCTV Monitoring Online",
    "⚽ AfriSports Match Center Ready",
    "🎮 AfriMetaWorld Connected",
    "💰 AfriCommerce Active",
    "📡 AfriComm Online",
    "💚 AfriWhatsApp Connected",
    "🚀 AfriBoost Campaigns Ready",
    "📍 Device Tracking Live"
  ];

  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="ticker-item">
            {item}
            <span className="mx-4">•</span>
          </span>
        ))}
      </div>

      <style>{`
        .ticker-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          padding: 16px 0;
          color: #67e8f9;
          font-weight: 600;
          animation: ticker 28s linear infinite;
        }

        .ticker-item {
          display: inline-flex;
          align-items: center;
        }

        @keyframes ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
