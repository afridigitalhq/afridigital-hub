import React from "react";
import useLandingComposition from "../runtime/useLandingComposition";
import { ModuleRegistry } from "../modules/moduleRegistry";

export default function LandingPage() {
  const { sections, isReady } = useLandingComposition();


  return (
    <div className="landing-root">
      <div className="ecosystem-header">
        <h1>🌍 AfriDigital Ecosystem</h1>
        <p>Unified digital infrastructure across Vision, Sports, and MetaWorld</p>
      </div>

      <div className="ecosystem-grid">
        {sections.map((section) => (
          <div key={section.id} className="ecosystem-card">
            <div className="card-header">{section.id}</div>

            <div className="card-body">
              {ModuleRegistry?.[section.id]
                ? ModuleRegistry[section.id]()
                : section.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
