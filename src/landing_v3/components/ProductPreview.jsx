import React from "react";

export default function HeroPreview() {
  return (
    <div className="flex-1 flex justify-center">
      <div className="relative w-[460px] h-[460px] rounded-[40px] border border-cyan-400/30 bg-white/5 backdrop-blur overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse" />

        <div className="absolute inset-0 border border-cyan-300/20 rounded-[40px]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10">

          <div className="text-5xl">🌐</div>

          <h3 className="mt-6 text-2xl font-bold text-cyan-200">
            AfriMonitor Core
          </h3>

          <p className="mt-4 text-white/60 text-sm leading-6">
            Live ecosystem visualization layer powering security, sports,
            commerce and AI intelligence streams.
          </p>

          <div className="mt-8 w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-cyan-400 animate-pulse" />
          </div>

          <p className="mt-3 text-xs text-white/40">
            LIVE SIGNAL STREAM
          </p>

        </div>
      </div>
    </div>
  );
}
