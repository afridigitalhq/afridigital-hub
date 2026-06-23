import React, { useEffect, useState } from "react";

export default function AltTabSwitcher({ windows = [] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handler = (e) => {
      if (e.altKey && e.key === "Tab") {
        e.preventDefault();
        setOpen(true);
        setIndex((i) => (i + 1) % windows.length);
      }
    };

    const release = () => setTimeout(() => setOpen(false), 200);

    window.addEventListener("keydown", handler);
    window.addEventListener("keyup", release);

    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("keyup", release);
    };
  }, [windows]);

  if (!open) return null;

  return (
    <div className="alt-tab-overlay">

      <div className="alt-tab-grid">
        {windows.map((w, i) => (
          <div
            key={i}
            className={`alt-tab-card ${i === index ? "active" : ""}`}
          >
            {w.name}
          </div>
        ))}
      </div>

    </div>
  );
}
