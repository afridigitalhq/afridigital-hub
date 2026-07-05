import React from "react";

export default function LiveStreamViewer({title="Camera Feed",status="LIVE"}){
return(
<div style={{height:"220px",background:"#101418",border:"1px solid #2b2b2b",borderRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"space-between",overflow:"hidden"}}>
<div style={{padding:"10px",display:"flex",justifyContent:"space-between"}}><strong>{title}</strong><span style={{color:"#39d353"}}>{status}</span></div>
<div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"#666"}}>📹 Live Stream Placeholder</div>
</div>
);
}
