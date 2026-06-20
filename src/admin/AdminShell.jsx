import React, { useState } from "react";
import OSShellSidebar from "../../ui/control-center/dag/OSShellSidebar";

export default function AdminShell({ children }) {
  const [route, setRoute] = useState("/admin/dag");

  const handleNavigate = (path) => {
    setRoute(path);
    window.history.pushState({}, "", path);
  };

  return (
    <div style={{ display: "flex" }}>
      <OSShellSidebar onNavigate={handleNavigate} />
      <div style={{ flex: 1, background: "#0a0a0a", minHeight: "100vh" }}>
        {children}
      </div>
    </div>
  );
}
