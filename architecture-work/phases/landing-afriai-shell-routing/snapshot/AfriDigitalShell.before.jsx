import React from "react";
import useAfriAIRouter from "../afriai/useAfriAIRouter";
import AfriBoostSidebar from "../../components/ads/AfriBoostSidebar";

export default function AfriDigitalShell({ children }) {

  useAfriAIRouter();

  return (
    <div>
      {children}

      <AfriBoostSidebar />
    </div>
  );
}
