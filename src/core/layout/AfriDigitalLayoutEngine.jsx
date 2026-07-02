import React from "react";

/**
 * AfriDigital Layout Engine
 * Registry-driven composition engine.
 * Supports both:
 *   registerSection(Component, order)
 * and
 *   registerSection(Component, { order, layout })
 */

const registry = [];

export function registerSection(component, config = 0) {
  const settings =
    typeof config === "number"
      ? { order: config, layout: "default" }
      : {
          order: config.order ?? 0,
          layout: config.layout ?? "default"
        };

  registry.push({
    component,
    ...settings
  });
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
