import React from "react";
import AdminNavigationConfig from "../../admin/navigation/AdminNavigationConfig";

export default function Sidebar({active,onSelect,collapsed,onToggle,mobileOpen,onClose}) {
  return (
    <>
      <aside className={`admin-sidebar ${mobileOpen ? "admin-sidebar-open" : ""} ${collapsed ? "admin-sidebar-collapsed" : ""}`}>
        <div className="admin-sidebar-header">
          <strong>AfriDigital Admin</strong>
          <button onClick={onClose || onToggle} aria-label="Close menu">✕</button>
        </div>

        <nav>
          {AdminNavigationConfig.map(item => (
            <button
              key={item.id}
              className={active === item.dashboard ? "admin-nav-active" : ""}
              onClick={() => {
                onSelect(item.dashboard);
                onClose?.();
              }}
            >
              <span>{item.icon}</span>
              <span className="admin-nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {mobileOpen && (
        <button
          className="admin-sidebar-backdrop"
          aria-label="Close navigation"
          onClick={onClose}
        />
      )}
    </>
  );
}
