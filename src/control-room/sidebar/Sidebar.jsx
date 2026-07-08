import React from "react";
import DynamicSidebar from "../../os/kernel/ui/DynamicSidebar";

export default function Sidebar({ active, onSelect }) {
  return (
    <DynamicSidebar
      active={active}
      onSelect={onSelect}
    />
  );
}
