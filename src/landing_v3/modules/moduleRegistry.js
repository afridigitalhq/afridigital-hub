import React from "react";
import AfriVisionLiveFeed from "./live/AfriVisionLiveFeed";

function Box({ label }) {
  return React.createElement("div", { className: "module-box" }, label);
}

export const ModuleRegistry = {
  afrivision: () => React.createElement(AfriVisionLiveFeed),
  afrisports: () => Box({ label: "⚽ AfriSports Module Active" }),
  afrimeta: () => Box({ label: "🌐 AfriMetaWorld Module Active" }),
  ecosystem: () => Box({ label: "🧩 Ecosystem Grid Active" })
};
