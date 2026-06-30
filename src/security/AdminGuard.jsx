import React from "react";
import { isAdmin } from "./useRole";

export default function AdminGuard({ children }) {
  if (!isAdmin()) {
    return (
      <div style={{padding:40}}>
        <h2>⛔ Access Denied</h2>
        <p>Admin privileges required.</p>
      </div>
    );
  }

  return children;
}
