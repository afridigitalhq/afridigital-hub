import React from "react";
import LiveStreamViewer from "./LiveStreamViewer";

export default function CameraCard({name,status}){
return(
<div style={{border:"1px solid #2b2b2b",borderRadius:"10px",padding:"12px",background:"#181c22"}}>
<LiveStreamViewer camera={{name,status}}/>
<div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
<strong>{name}</strong>
<span style={{color:status==="LIVE"?"#39d353":"#ff4d4f"}}>{status}</span>
</div>
</div>
);
}
