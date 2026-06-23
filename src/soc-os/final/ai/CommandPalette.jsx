import React, { useEffect, useState } from "react";

export default function CommandPalette({ onCommand }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setOpen(o => !o);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  return (
    <div className="command-palette">
      <input
        placeholder="Type command..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onCommand(e.target.value);
            setOpen(false);
          }
        }}
      />
    </div>
  );
}
