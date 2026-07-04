import React from "react";
import * as Panels from "../../panels";
import { landingRegistry } from "../../registry/landing.registry";

export function renderPanels() {
  return Object.entries(landingRegistry.panels)
    .filter(([_, cfg]) => cfg.enabled)
    .map(([name]) => {
      const Panel = Panels[`${name}Panel`];
      return Panel ? <Panel key={name} /> : null;
    });
}
