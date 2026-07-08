import React,{useEffect,useState} from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function TopStatusBar({streamSession={}}){
const [time,setTime]=useState(new Date());

useEffect(()=>{
const id=setInterval(()=>setTime(new Date()),1000);
return()=>clearInterval(id);
},[]);

return(
<header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 24px",background:"#111827",color:"#fff",borderBottom:"1px solid #2b3137"}}>
<div style={{display:"flex",alignItems:"center",gap:"18px"}}>
<span style={{padding:"4px 10px",borderRadius:"999px",background:"#7f1d1d",color:"#fff",fontWeight:700}}>🔴 LIVE</span>
<span style={{color:"#22c55e",fontWeight:600}}>LIVE MONITORING</span><span>🟢 {streamSession.heartbeat || "OFFLINE"}</span><span>🆔 {streamSession.frameId || "--"}</span><span>📹 CAM {streamSession.active || "-"}</span>
<span>{time.toLocaleDateString()}</span>
<strong>{time.toLocaleTimeString()}</strong>
</div>

<div style={{display:"flex",alignItems:"center",gap:"18px"}}>
<span style={{cursor:"pointer"}}>🔔</span>
<span style={{cursor:"pointer"}}>⚙️</span>
<span title="AfriWhatsApp Support" style={{display:"flex",alignItems:"center",color:"#25D366",fontSize:"24px",cursor:"pointer"}}>
<FaWhatsapp/>
</span>
<strong>AfriAdmin</strong>
</div>
</header>
);
}
