import React from 'react';

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition">
        Launch Platform
      </button>

      <button className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 transition">
        Explore Ecosystem
      </button>

      <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-white/50 transition">
        Sign In
      </button>

      <button className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-200 transition">
        Sign Up
      </button>
    </div>
  );
}
