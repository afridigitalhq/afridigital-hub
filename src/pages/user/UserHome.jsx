import React from "react";
import { getActiveUserPlugins } from "../../plugins/user/userPluginRegistry";

/**
 * AFRIDIGITAL USER HOME (PLUGIN RUNTIME SHELL)
 */
export default function UserHome() {
  const plugins = getActiveUserPlugins();

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧑‍💻 AFRIDIGITAL USER DASHBOARD</h1>

      <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
        {plugins.map((plugin) => {
          const Component = plugin.component;

          return (
            <div key={plugin.key} style={{
              border: "1px solid #333",
              padding: "15px",
              borderRadius: "8px"
            }}>
              <h2>{plugin.name}</h2>
              <Component />
            </div>
          );
        })}
      </div>
    </div>
  );
}
