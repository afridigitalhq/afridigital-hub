import React from "react";
import WelcomeBanner from "./partials/WelcomeBanner";
import EcosystemOverview from "./partials/EcosystemOverview";
import ProductLauncher from "./partials/ProductLauncher";
import AfriAIPanel from "./partials/AfriAIPanel";
import QuickActions from "./partials/QuickActions";
import InsightsPanel from "./partials/InsightsPanel";
import ActivityFeed from "./partials/ActivityFeed";
import PluginWorkspace from "./partials/PluginWorkspace";

export default function UserDashboard(){
  return (
    <div style={{display:"grid",gap:16}}>
      <WelcomeBanner />
      <EcosystemOverview />
      <ProductLauncher />
      <AfriAIPanel />
      <QuickActions />
      <InsightsPanel />
      <ActivityFeed />
      <PluginWorkspace />
    </div>
  );
}
