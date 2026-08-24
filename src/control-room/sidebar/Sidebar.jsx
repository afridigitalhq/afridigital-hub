import React from "react";
import AdminNavigationConfig from "../../admin/navigation/AdminNavigationConfig";

const legacyMap = {
  "command-center": "Dashboard",
  security: "SOC",
  "war-room": "WarRoom",
  afrai: "AfriAI",
  system: "Settings"
};

export default function Sidebar({active,onSelect,collapsed,onToggle}){
  return (
    <aside style={{width:collapsed?70:240,padding:10,transition:"0.3s"}}>
      <button onClick={onToggle}>☰</button>
      {AdminNavigationConfig.map(item => {
        const legacy = legacyMap[item.id];
        return (
          <button key={item.id} onClick={()=>onSelect(legacy || item.id)} style={{display:"block",width:"100%"}}>
            {collapsed ? item.icon : `${item.icon} ${item.label}`}
          </button>
        );
      })}
    </aside>
  );
}
