import React from "react";
import ModuleBadge from "./ModuleBadge";

export default function ModuleCard({
  title,
  description,
  status = false,
  color = "bg-slate-700",
  children
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 ${color} transition`}>
      <ModuleBadge live={status} />

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-white/80">
        {description}
      </p>

      <div className="mt-4">
        {children}
      </div>

      <div className="mt-4 text-xs opacity-70">
        Status: Connected to LiveEngine
      </div>
    </div>
  );
}
