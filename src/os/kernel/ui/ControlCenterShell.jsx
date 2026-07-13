import React, { useState } from "react";
import DynamicSidebar from "../ui/DynamicSidebar";
import ViewRouter from "../router/ViewRouter";
import { resolveAdminPlugin } from "../../../plugins/admin/adminPluginRegistry";

export default function OSRuntimeBootstrap() {
  const [active, setActive] = useState("afriScan");
  const plugin = resolveAdminPlugin(active);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        height: "100vh",
        background: "#050816",
        color: "#fff"
      }}
    >
      <DynamicSidebar
        active={active}
        onSelect={setActive}
      />

      <div style={{ padding: 10 }}>
        <ViewRouter
          plugin={plugin}
          fallback="Loading workspace..."
        />
      </div>
    </div>
  );
}
