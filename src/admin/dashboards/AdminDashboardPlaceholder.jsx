import React from "react";

export default function AdminDashboardPlaceholder({
  title,
  description = "Dashboard surface scaffolded and ready for implementation."
}) {
  return (
    <section style={{ padding: 24 }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>UI SCAFFOLD ONLY · BACKEND NOT WIRED</small>
    </section>
  );
}
