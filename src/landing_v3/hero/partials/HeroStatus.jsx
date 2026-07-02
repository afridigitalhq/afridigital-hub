import React from "react";

export default function HeroStatus() {
  return (
    <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80">
      <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
      <span>AfriDigital Platform Ready</span>
      <span className="text-white/50">•</span>
      <span>Runtime: Standby</span>
    </div>
  );
}
