import React from "react";
import { useAudioReactiveUI } from "../audio/useAudioReactiveUI";
import LayoutPanel from "../ai/LayoutPanel";

export default function Windows11Desktop({ children }) {
  const audioLevel = useAudioReactiveUI();

  return (
    <div className="soc-desktop">

      {/* 🔊 AUDIO REACTIVE BACKGROUND */}
      <div
        className="background-pulse"
        style={{
          opacity: audioLevel / 255,
          transform: `scale(${1 + audioLevel / 500})`
        }}
      />

      {/* 🧠 AI PANEL (SAFE LEVEL 9) */}
      <div className="ai-panel">
        <LayoutPanel />
      </div>

      {/* 🪟 MAIN DESKTOP */}
      <div className="desktop-layer">
        {children}
      </div>

    </div>
  );
}
