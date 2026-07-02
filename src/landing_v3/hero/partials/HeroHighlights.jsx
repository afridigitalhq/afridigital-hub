import React from "react";

const highlights = [
  { icon: "🎥", name: "AfriVision", style: "bg-blue-900/40" },
  { icon: "⚽", name: "AfriSports", style: "bg-green-900/40" },
  { icon: "🎮", name: "AfriMetaWorld", style: "bg-purple-900/40" },
  { icon: "🛒", name: "AfriCommerce", style: "bg-orange-900/40" },
  { icon: "💬", name: "AfriComm", style: "bg-cyan-900/40" },
  { icon: "🚀", name: "AfriBoost", style: "bg-pink-900/40" }
];

export default function HeroHighlights() {
  return (
    <div className="mt-14 flex flex-wrap gap-4">
      {highlights.map(({ icon, name, style }) => (
        <span
          key={name}
          className={`rounded-full ${style} px-4 py-2`}
        >
          {icon} {name}
        </span>
      ))}
    </div>
  );
}
