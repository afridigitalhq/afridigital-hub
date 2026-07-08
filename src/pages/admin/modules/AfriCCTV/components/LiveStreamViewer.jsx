import React from "react";

export default function LiveStreamViewer({camera={}}){

return(
<div style={{
height:"220px",
background:"#101418",
border:"1px solid #2b2b2b",
borderRadius:"8px",
display:"flex",
flexDirection:"column",
overflow:"hidden"
}}>

<div style={{
padding:"10px",
display:"flex",
justifyContent:"space-between"
}}>
<strong>{camera.name || "Camera Feed"}</strong>

<span>
{camera.status || "UNKNOWN"}
</span>

</div>

<div style={{
flex:1,
display:"flex",
alignItems:"center",
justifyContent:"center",
color:"#666"
}}>
📹 MOCK LIVE FEED
</div>

<div style={{
padding:"8px",
fontSize:"12px"
}}>
Motion: {camera.motion ?? 0}
<br/>
Zone: {camera.zone || "N/A"}
</div>

</div>
);

}
