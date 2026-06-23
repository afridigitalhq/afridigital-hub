import React from "react";

export default function NotificationCenter({ notifications = [] }) {
  return (
    <div className="soc-notif-stack">
      {notifications.map(n => (
        <div key={n.id} className="notif-card">
          {n.msg}
        </div>
      ))}
    </div>
  );
}
