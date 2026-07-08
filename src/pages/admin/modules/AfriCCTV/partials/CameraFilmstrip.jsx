import React from "react";



export default function CameraFilmstrip({cameras=[]}){
return(
<section style={{marginTop:"20px"}}>
<h3>🎞 Camera Filmstrip</h3>
<div style={{display:"flex",gap:"12px",overflowX:"auto"}}>
{cameras.map(camera=><div key={camera.id} style={{minWidth:"180px",height:"100px",background:"#111",border:"1px solid #2b2b2b",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"#bbb"}}>{camera.name}</div>)}
</div>
</section>
);
}
