import React from "react";
import { getActiveAdminPlugins } from "../../../plugins/admin/adminPluginRegistry";

const GROUPS = [
  { key: "products", title: "📦 Products" },
  { key: "business", title: "💼 Business" },
  { key: "intelligence", title: "🧠 Intelligence" },
  { key: "operations", title: "🛡️ Operations" },
  { key: "core", title: "⚙️ Core" }
];

export default function DynamicSidebar({ active, onSelect }) {
  const items = getActiveAdminPlugins();

  return (
    <div style={{
      width:260,
      background:"#0a0f1c",
      height:"100%",
      padding:12,
      borderRight:"1px solid #1f2937",
      overflowY:"auto"
    }}>
      <h3 style={{color:"#60a5fa",marginBottom:16}}>
        🧠 AfriDigital Command Center
      </h3>

      {GROUPS.map(group=>{
        const plugins=items.filter(p=>p.sidebarGroup===group.key);

        return (
          <div key={group.key} style={{marginBottom:18}}>
            <div style={{
              color:"#94a3b8",
              fontSize:12,
              fontWeight:"bold",
              textTransform:"uppercase",
              marginBottom:8
            }}>
              {group.title}
            </div>

            {plugins.length===0 ? (
              group.key==="core" &&
              <div style={{color:"#475569",fontSize:12}}>Reserved</div>
            ) : plugins.map(item=>(
              <div
                key={item.key}
                onClick={()=>onSelect(item.key)}
                style={{
                  padding:10,
                  marginBottom:6,
                  cursor:"pointer",
                  borderRadius:6,
                  background:active===item.key?"#1e293b":"transparent",
                  color:"#fff"
                }}
              >
                {item.icon} {item.name}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
