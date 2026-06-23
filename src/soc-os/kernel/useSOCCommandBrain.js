import { useState } from "react";

export function useSOCCommandBrain(kernel) {
  const [log, setLog] = useState([]);

  function execute(command) {
    const cmd = command.toLowerCase();

    setLog(l => [...l, command]);

    if (cmd.includes("switch warroom")) kernel.switchView("warroom");
    if (cmd.includes("switch admin")) kernel.switchView("admin");
    if (cmd.includes("switch security")) kernel.switchView("security");

    if (cmd.includes("mobile mode")) kernel.setMode("mobile");
    if (cmd.includes("desktop mode")) kernel.setMode("desktop");

    if (cmd.includes("panic")) kernel.emit({ type: "PANIC_MODE", active: true });
  }

  return { execute, log };
}
