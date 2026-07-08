import React from "react";
import CameraCard from "../components/CameraCard";

const cameras=[
{id:1,name:"AfriDigital Compound CCTV",status:"LIVE"},
{id:2,name:"Large City View Cam",status:"LIVE"},
{id:3,name:"Living CCTV Live Cam",status:"LIVE"},
{id:4,name:"Sites Live CCTV Monitoring",status:"LIVE"}
];

export default function CameraGrid(){
return(
<section>
<h3>📹 Live Camera Dashboard</h3>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(420px,1fr))",gap:"16px"}}>
{cameras.map(camera=><CameraCard key={camera.id} {...camera}/>)}
</div>
</section>
);
}
