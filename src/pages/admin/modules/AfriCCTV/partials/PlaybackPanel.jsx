import React from "react";

export default function PlaybackPanel({playback=[]}){

return(
<section style={{
marginTop:"20px",
padding:"16px",
background:"#0f1115",
borderTop:"1px solid #2b2b2b"
}}>

<h3>▶️ Playback Control</h3>

{playback.length===0 && (
<div>No playback sessions</div>
)}

{playback.map(item=>(
<div key={item.evidenceId || item.timestamp}
style={{
padding:"10px",
marginBottom:"8px",
background:"#181c22",
borderRadius:"6px"
}}>
<div>📹 {item.cameraId}</div>
<div>🆔 {item.evidenceId}</div>
<div>📌 {item.status}</div>
</div>
))}

</section>
);

}
