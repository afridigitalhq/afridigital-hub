import React from "react";

/**
 * AfriDigitalLayoutEngine
 * Central registry-driven layout system
 * Replaces manual JSX injection ordering
 */

const registry = [];

export function registerSection(component, order = 0) {
  registry.push({ component, order });
}

export default function AfriDigitalLayoutEngine() {
  const sorted = [...registry].sort((a, b) => a.order - b.order);

  return (
    <>
      {sorted.map((item, idx) => {
        const Component = item.component;
        return <Component key={idx} />;
      })}
    </>
  );
}
