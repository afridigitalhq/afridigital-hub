import React from "react";
import SidebarHeader from "./sections/SidebarHeader";
import SidebarNavigation from "./sections/SidebarNavigation";
import SidebarFooter from "./sections/SidebarFooter";

export default function UserSidebar() {
  return (
    <aside
      style={{
        width: 260,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <SidebarHeader />

      <div style={{ flex: 1 }}>
        <SidebarNavigation />
      </div>

      <SidebarFooter />
    </aside>
  );
}
