import React from 'react';

export default function HeroHighlights() {
  const items=[
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
      <div
        className="whitespace-nowrap py-4 px-6 text-cyan-300 font-semibold"
        style={{
          animation:"ticker 28s linear infinite"
        }}
      >
        {items.join("   •   ")}
      </div>

      <style>{`
        @keyframes ticker{
          from{transform:translateX(100%);}
          to{transform:translateX(-100%);}
        }
      `}</style>
    </div>
  );
}
