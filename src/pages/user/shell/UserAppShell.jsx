import React from "react";
import { UserNavigationProvider } from "../context/UserNavigationContext";
import UserSidebar from "../sidebar/UserSidebar";
import UserDashboard from "../dashboard/UserDashboard";

export default function UserAppShell() {
  return (
    <UserNavigationProvider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          minHeight: "100vh"
        }}
      >
        <UserSidebar />

        <main style={{ padding: 20 }}>
          <UserDashboard />
        </main>
      </div>
    </UserNavigationProvider>
  );
}
