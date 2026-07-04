import React from "react";

export default function HeroCTA() {
  return (
    <div className="mt-12">
      <div className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400/70">
        Access the AfriDigital Ecosystem
      </div>

      <div className="flex flex-wrap gap-5">
        <button className="rounded-2xl bg-cyan-500 px-10 py-4 font-bold text-white transition hover:bg-cyan-400">
          Sign Up
        </button>

        <button className="rounded-2xl border border-white/20 px-10 py-4 font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300">
          Sign In
        </button>
      </div>
    </div>
  );
}
