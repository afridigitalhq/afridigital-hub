import React from "react";

const menu=[
"Live Dashboard",
"Live View",
"Playback",
"Events",
"Snapshots",
"Cameras",
"Sites",
"Users",
"Reports",
"Settings"
];

export default function LeftSidebar(){
return(
<aside style={{width:"260px",background:"#0f172a",color:"#fff",padding:"20px",display:"flex",flexDirection:"column",gap:"12px"}}>
<h2>🎥 AfriCCTV</h2>
<p style={{fontSize:"12px",opacity:.7}}>CCTV Services</p>
<nav>
{menu.map(item=><div key={item} style={{padding:"12px",borderRadius:"8px",marginBottom:"6px",background:item==="Live Dashboard"?"#14532d":"transparent"}}>{item}</div>)}
</nav>
</aside>
);
}
