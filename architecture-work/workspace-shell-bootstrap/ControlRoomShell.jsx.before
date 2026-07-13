import React,{useState} from "react";
import Sidebar from "../sidebar/Sidebar";
import ViewRouter from "../router/ControlRoomRouter";

export default function ControlRoomShell(){
const [active,setActive]=useState("Dashboard");
const [collapsed,setCollapsed]=useState(false);

return (
<div style={{display:"flex",minHeight:"100vh",background:"#0b0f14",color:"#fff", "--sidebar-width": collapsed ? "72px" : "260px"}}>
<Sidebar active={active} onSelect={setActive} collapsed={collapsed} onToggle={()=>setCollapsed(!collapsed)} />

<div style={{flex:"1 1 auto",width:"calc(100% - var(--sidebar-width))",display:"flex",flexDirection:"column",transition:"width .25s ease"}}>
<header style={{padding:"16px",borderBottom:"1px solid #1f2937",background:"#111827"}}>
<h2>🧠 AfriDigital Command Center</h2>
<p>Unified Plug-and-Play Workspace</p>
</header>
<main style={{flex:1,padding:"20px",overflow:"auto"}}>
<ViewRouter activeDashboard={active}/>
</main>
</div>
</div>
);
}
