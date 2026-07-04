import React from 'react';

export default function HeroStatus() {
  const stats=[
    ['8','Core Products'],
    ['24/7','Platform Online'],
    ['AI','Powered'],
    ['∞','Future Ready']
  ];

  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
      {stats.map(([value,label])=>(
        <div
          key={label}
          className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur p-6 text-center"
        >
          <div className="text-3xl font-black text-cyan-300">{value}</div>
          <div className="mt-2 text-sm text-white/70 uppercase tracking-wide">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
