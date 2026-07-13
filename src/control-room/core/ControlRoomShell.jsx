import React,{useState} from "react";
import Sidebar from "../sidebar/Sidebar";
import ViewRouter from "../router/ControlRoomRouter";

export default function ControlRoomShell(){
const [active,setActive]=useState("Dashboard");

return(
<div style={{display:"flex",minHeight:"100vh",background:"#0b0f14",color:"#fff"}}>
<Sidebar active={active} onSelect={setActive}/>
<div style={{flex:1,display:"flex",flexDirection:"column"}}>
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
