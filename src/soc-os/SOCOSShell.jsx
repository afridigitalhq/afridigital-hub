import React, { useState } from "react";
import { SOCKernel } from "./kernel/SOCKernel";
import { useSOCDeviceMode } from "./kernel/useSOCDeviceMode";
import { useSOCCommandBrain } from "./kernel/useSOCCommandBrain";

const kernel = new SOCKernel();

export default function SOCOSShell({ children }) {
  const mode = useSOCDeviceMode();
  const { execute } = useSOCCommandBrain(kernel);

  const [command, setCommand] = useState("");

  return (
    <div className={`soc-os ${mode}`}>

      {/* 🧠 COMMAND BAR (TEXT + VOICE READY) */}
      <div className="soc-command-bar">
        <input
          placeholder="Type SOC command (e.g. switch warroom)"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />

        <button onClick={() => execute(command)}>
          EXEC
        </button>
      </div>

      {/* 🧿 OS VIEWPORT */}
      <div className="soc-desktop-layer">
        {children}
      </div>

    </div>
  );
}
