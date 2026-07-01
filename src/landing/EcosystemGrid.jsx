import React from "react";
import modules from "./ecosystemModules";
import ModuleCard from "./ModuleCard";

export default function EcosystemGrid() {
  return (
    <div style={{
      maxWidth:"1250px",
      margin:"50px auto",
      padding:"0 20px",
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
      gap:"18px"
    }}>
      {modules.map((m) => (
        <ModuleCard
          key={m.id}
          icon={m.icon}
          name={m.name}
          desc={m.desc}
        />
      ))}
    </div>
  );
}
