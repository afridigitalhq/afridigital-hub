
import React from "react";

/**
 * CinematicLayer — OS Visual Atmosphere Engine
 * Adds depth + motion illusion to AfriDigital UI
 */

export default function CinematicLayer() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">

      {/* Navy gradient base */}
      <div className="absolute inset-0 bg-[#050B1A]" />

      {/* Soft grid glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Moving light haze */}
      <div className="absolute inset-0 opacity-30 animate-pulse bg-gradient-to-b from-blue-900/40 via-transparent to-black" />

    </div>
  );
}
