import React from "react";
import useAfriAIRouter from "../afriai/useAfriAIRouter";
import AfriBoostSidebar from "../../components/ads/AfriBoostSidebar";
import AfriAICommandDock from "../../ai/AfriAICommandDock";

export default function AfriDigitalShell({ children }) {

  useAfriAIRouter();

  return (
    <div>
      {children}

      <AfriAICommandDock />

      <AfriBoostSidebar />
    </div>
  );
}
