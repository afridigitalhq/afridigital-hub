import React from "react";
import WarRoomHUD from "../../warroom/hud/WarRoomHUD";
import ViewRouter from "../router/ViewRouter";
import { resolveAdminPlugin } from "../../../plugins/admin/adminPluginRegistry";

export default function WarRoomLayout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gridTemplateRows: "1fr 1fr",
        height: "100vh",
        background: "#050816",
        gap: 6
      }}
    >
      <div style={{ gridColumn: "1 / 2", gridRow: "1 / 3" }}>
        <ViewRouter
          plugin={resolveAdminPlugin("afriScan")}
          fallback="Loading AfriScan..."
        />
      </div>

      <div style={{ background: "#0a0f1c" }}>
        <ViewRouter
          plugin={resolveAdminPlugin("afriBank")}
          fallback="Loading AfriBank..."
        />
      </div>

      <div style={{ background: "#0a0f1c" }}>
        <ViewRouter
          plugin={resolveAdminPlugin("soc")}
          fallback="Loading SOC..."
        />
      </div>

      <WarRoomHUD />
    </div>
  );
}
