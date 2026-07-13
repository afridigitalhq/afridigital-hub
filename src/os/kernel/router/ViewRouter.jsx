import React from "react";

export default function ViewRouter({ plugin, fallback = "Loading..." }) {
  if (!plugin) {
    return <div>🧠 Plugin not found.</div>;
  }

  const Component = plugin.component;

  return (
    <React.Suspense fallback={<div>{fallback}</div>}>
      <Component />
    </React.Suspense>
  );
}
