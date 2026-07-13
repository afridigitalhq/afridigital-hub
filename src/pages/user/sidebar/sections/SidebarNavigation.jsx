import React from "react";
import { getActiveUserPlugins } from "../../../../plugins/user/userPluginRegistry";
import { useUserNavigation } from "../../context/UserNavigationContext";

export default function SidebarNavigation() {
  const plugins = getActiveUserPlugins();
  const { activePlugin, setActivePlugin } = useUserNavigation();

  const buttonStyle = (active) => ({
    textAlign: "left",
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid #2a2f45",
    background: active ? "#1d4ed8" : "transparent",
    color: active ? "#fff" : "inherit",
    cursor: "pointer"
  });

  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: 8, padding: 12 }}>
      <button
        style={buttonStyle(activePlugin === "dashboard")}
        onClick={() => setActivePlugin("dashboard")}
      >
        🏠 Dashboard
      </button>

      {plugins.map((plugin) => (
        <button
          key={plugin.key}
          style={buttonStyle(activePlugin === plugin.key)}
          onClick={() => setActivePlugin(plugin.key)}
        >
          {plugin.name}
        </button>
      ))}
    </nav>
  );
}
