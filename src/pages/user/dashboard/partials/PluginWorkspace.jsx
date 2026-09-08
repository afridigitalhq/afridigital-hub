import React, { Suspense } from "react";
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

  const PluginComponent = plugin.component;

  return (
    <Suspense
      fallback={
        <section style={{ padding: 16 }}>
          <p>Loading {plugin.name}...</p>
        </section>
      }
    >
      <PluginComponent />
    </Suspense>
  );
}
