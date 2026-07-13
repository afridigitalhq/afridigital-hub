import React from "react";
import DashboardCore from "../dashboard/DashboardCore";
import SOCDashboard from "../soc/SOCDashboard";
import AfriAIDashboard from "../afrai/dashboard/AfriAIDashboard";
import WarRoomOverlay from "../warroom/WarRoomOverlay";

export default function ControlRoomRouter({activeDashboard}){
  if(activeDashboard==="SOC") return <SOCDashboard />;
  if(activeDashboard==="AfriAI") return <AfriAIDashboard />;
  if(activeDashboard==="WarRoom") return <WarRoomOverlay />;
  if(activeDashboard==="Settings") return <section><h2>⚙️ Settings</h2></section>;
  return <DashboardCore />;
}
