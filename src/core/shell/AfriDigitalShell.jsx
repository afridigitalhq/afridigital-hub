import { useLocation } from "react-router-dom";
import useAfriAIRouter from "../afriai/useAfriAIRouter";
import AfriBoostSidebar from "../../components/ads/AfriBoostSidebar";
import AfriAICommandDock from "../../ai/AfriAICommandDock";

export default function AfriDigitalShell({ children }) {

  const location = useLocation();
  const isLanding = location.pathname === "/";

  // activate ecosystem brain globally
  useAfriAIRouter();

  return (
    <div>
      {children}

      {/* GLOBAL AI COMMAND LAYER */}
      {!isLanding && <AfriAICommandDock />}

      {/* GLOBAL MONETIZATION LAYER */}
      <AfriBoostSidebar />

    </div>
  );
}
