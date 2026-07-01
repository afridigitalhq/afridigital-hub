import React from "react";

export default function ModuleCard({icon,name,desc}){
  return (
    <div style={{
      background:"rgba(18,18,18,.82)",
      border:"1px solid #22ff99",
      borderRadius:"16px",
      padding:"20px"
    }}>
      <div style={{fontSize:"36px"}}>{icon}</div>
      <h3>{name}</h3>
      <p style={{opacity:.8}}>{desc}</p>
    </div>
  );
}
