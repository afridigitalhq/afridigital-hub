import React, { useState, useEffect } from "react";

export default function WindowManager({ children }) {
  const [windows, setWindows] = useState([]);

  const move = (id, x, y) => {
    setWindows(prev =>
      prev.map(w =>
        w.id === id ? { ...w, x, y } : w
      )
    );
  };

  const focus = (id) => {
    setWindows(prev =>
      prev.map(w => ({
        ...w,
        z: w.id === id ? 999 : 1
      }))
    );
  };

  return (
    <div className="window-layer">
      {React.Children.map(children, child =>
        React.cloneElement(child, { move, focus })
      )}
    </div>
  );
}
