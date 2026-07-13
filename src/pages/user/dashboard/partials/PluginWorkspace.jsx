import React from "react";
import { getActiveUserPlugins } from "../../../../plugins/user/userPluginRegistry";
import { useUserNavigation } from "../../context/UserNavigationContext";

export default function PluginWorkspace() {
  const { activePlugin } = useUserNavigation();
  const plugins = getActiveUserPlugins();

  if (activePlugin === "dashboard") {
    return (
      <section style={{ padding: 16 }}>
        <h2>🏠 Dashboard</h2>
        <p>Welcome to your AfriDigital workspace.</p>
      </section>
    );
  }

  const plugin = plugins.find((item) => item.key === activePlugin);

  if (!plugin) {
    return (
      <section style={{ padding: 16 }}>
        <h2>Plugin Not Found</h2>
      </section>
    );
  }

  return (
    <section style={{ padding: 16 }}>
      <article
        style={{
          border: "1px solid #2a2f45",
          borderRadius: 12,
          padding: 16,
          background: "#131826"
        }}
      >
        <h2>{plugin.name}</h2>
        <p>{plugin.description || "Plugin workspace ready."}</p>
      </article>
    </section>
  );
}
