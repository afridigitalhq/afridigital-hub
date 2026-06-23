import React, { useEffect, useState } from "react";

export default function AppReopenStack({ windows = [] }) {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < windows.length) {
        setVisible(prev => [...prev, windows[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [windows]);

  return (
    <div className="reopen-stack">
      {visible.map((w, i) => (
        <div key={i} className="reopen-window">
          {w.name}
        </div>
      ))}
    </div>
  );
}
