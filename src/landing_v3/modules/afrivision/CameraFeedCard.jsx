import React from "react";

export default function CameraFeedCard({
  camera,
  status = "LIVE",
  recording = true,
  motion = false,
  children
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-900 shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-cyan-500/20">
        <div>
          <div className="text-xs text-slate-400">{camera.id}</div>
          <div className="text-sm font-bold text-white">
            {camera.name}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {recording && (
            <span className="flex items-center gap-1 text-red-400 text-xs">
              🔴 REC
            </span>
          )}

          <span className="rounded-full bg-green-600 px-2 py-1 text-[10px] font-bold text-white">
            {status}
          </span>
        </div>
      </div>

      {/* Camera View */}
      <div className="relative h-64 bg-gradient-to-br from-sky-300 via-slate-300 to-slate-700 overflow-hidden">

        <div className="absolute inset-0 animate-pulse opacity-10 bg-cyan-400" />

        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,.05)_50%,transparent_100%)]" />

        {children}

        {motion && (
          <div className="absolute top-3 right-3 rounded bg-yellow-500 px-2 py-1 text-[10px] font-bold text-black">
            📡 MOTION
          </div>
        )}

        <div className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-[10px] text-cyan-300">
          🤖 AI TRACKING
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between px-4 py-2 text-[11px] text-slate-400 border-t border-cyan-500/20">
        <span>{camera.location}</span>
        <span>{new Date().toLocaleTimeString()}</span>
      </div>

    </div>
  );
}
