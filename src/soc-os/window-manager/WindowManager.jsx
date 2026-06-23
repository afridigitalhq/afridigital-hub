import React, { useEffect, useState } from "react";
import { PhysicsWindows } from "./PhysicsWindows";

const engine = new PhysicsWindows();

export default function WindowManager({ children }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      engine.applyPhysics();
      setTick(t => t + 1);
    }, 16);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="soc-window-layer">
      {children}
    </div>
  );
}
