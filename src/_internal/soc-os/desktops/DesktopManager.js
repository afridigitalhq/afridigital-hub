import { useState } from "react";

export function useDesktopManager() {
  const [activeDesktop, setActiveDesktop] = useState("warroom");

  const desktops = {
    warroom: {
      name: "🔥 War Room",
      layout: "warroom"
    },
    dag: {
      name: "🌐 DAG Engine",
      layout: "dag"
    },
    replay: {
      name: "🧠 Incident Replay",
      layout: "replay"
    },
    forecast: {
      name: "🧪 AI Forecast",
      layout: "forecast"
    },
    terminal: {
      name: "💻 SOC Terminal",
      layout: "terminal"
    }
  };

  const switchDesktop = (id) => {
    if (desktops[id]) setActiveDesktop(id);
  };

  return {
    activeDesktop,
    desktops,
    switchDesktop
  };
}
