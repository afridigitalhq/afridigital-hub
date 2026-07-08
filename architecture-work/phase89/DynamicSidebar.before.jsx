import React from "react";
import { getActiveAdminPlugins } from "../../../plugins/admin/adminPluginRegistry";

export default function DynamicSidebar({ active, onSelect }) {
  const items = getActiveAdminPlugins();

  return (
    <div style={{
      width:260,
      background:"#0a0f1c",
      height:"100%",
      padding:12,
      borderRight:"1px solid #1f2937"
    }}>
      <h3 style={{color:"#60a5fa"}}>
        🧠 AfriDigital Command Center
      </h3>

      {items.map(item=>(
        <div
          key={item.key}
          onClick={()=>onSelect(item.key)}
          style={{
            padding:10,
            marginTop:8,
            cursor:"pointer",
            borderRadius:6,
            background:active===item.key?"#1e293b":"transparent",
            color:"#fff"
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
