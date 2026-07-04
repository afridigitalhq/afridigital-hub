import React from "react";

export default function HeroStatus() {
  return (
    <div className="mt-10 w-full max-w-xl">
      <div className="h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
        <div className="h-full w-1/3 bg-cyan-400 animate-pulse"></div>
      </div>

      <div className="mt-3 flex justify-between text-[10px] tracking-widest text-white/40 uppercase">
        <span>AFRI AI ACTIVE</span>
        <span>ECOSYSTEM SYNCING</span>
        <span>LIVE</span>
      </div>
    </div>
  );
}
