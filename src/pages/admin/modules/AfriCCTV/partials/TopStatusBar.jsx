import React,{useEffect,useState} from "react";

export default function TopStatusBar(){
const [time,setTime]=useState(new Date());
useEffect(()=>{const id=setInterval(()=>setTime(new Date()),1000);return()=>clearInterval(id);},[]);
return(
<header style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px",background:"#111827",color:"#fff",borderBottom:"1px solid #2b3137"}}>
<div style={{display:"flex",gap:"18px",alignItems:"center"}}>
<span style={{color:"#ef4444",fontWeight:"bold"}}>🔴 LIVE</span>
<span style={{color:"#22c55e"}}>LIVE MONITORING</span>
<span>{time.toLocaleDateString()}</span>
<span>{time.toLocaleTimeString()}</span>
</div>
<div style={{display:"flex",gap:"16px",alignItems:"center"}}>
<span>🔔</span>
<span>⚙️</span>
<strong>AfriAdmin</strong>
</div>
</header>
);
}
