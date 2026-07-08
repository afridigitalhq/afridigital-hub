import React from "react";

export default function EvidenceTimelinePanel({evidence=[]}){

return(
<section style={{
marginTop:"20px",
padding:"16px",
background:"#0f1115",
borderTop:"1px solid #2b2b2b"
}}>

<h3>🗂 Evidence Timeline</h3>

{evidence.length === 0 && (
<div>No evidence events</div>
)}

{evidence.map(item=>(
<div key={item.id} style={{
padding:"8px",
marginBottom:"8px",
background:"#181c22",
borderRadius:"6px"
}}>
<div>📹 {item.cameraId}</div>
<div>📌 {item.type}</div>
<div>🕒 {new Date(item.timestamp).toLocaleTimeString()}</div>
</div>
))}

</section>
);

}
