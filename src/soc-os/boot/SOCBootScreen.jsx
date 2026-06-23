import React, { useEffect, useState } from "react";
import { SOCBootSequence } from "../lifecycle/SOCBootSequence";

const boot = new SOCBootSequence();

export default function SOCBootScreen({ onFinish }) {
  const [state, setState] = useState({ stage: "BIOS", progress: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const next = boot.next();
      setState(next);

      if (next.stage === "DESKTOP") {
        clearInterval(interval);
        setTimeout(onFinish, 800);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="soc-boot">

      <div className="boot-logo">🧠 SOC OS</div>

      <div className="boot-stage">{state.stage}</div>

      <div className="boot-bar">
        <div
          className="boot-progress"
          style={{ width: state.progress + "%" }}
        />
      </div>

    </div>
  );
}
