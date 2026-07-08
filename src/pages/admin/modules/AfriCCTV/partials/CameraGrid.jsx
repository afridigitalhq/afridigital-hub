import React from "react";
import CameraCard from "../components/CameraCard";



export default function CameraGrid({cameras=[]}){
return(
<section>
<h3>📹 Live Camera Dashboard</h3>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(420px,1fr))",gap:"16px"}}>
{cameras.map(camera=><CameraCard key={camera.id} {...camera}/>)}
</div>
</section>
);
}
