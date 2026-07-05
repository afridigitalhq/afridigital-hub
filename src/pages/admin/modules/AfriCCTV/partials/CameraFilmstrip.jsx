import React from "react";

const feeds=["Compound","City","Living","Parking","Entrance","Warehouse","Office","Gate"];

export default function CameraFilmstrip(){
return(
<section style={{marginTop:"20px"}}>
<h3>🎞 Camera Filmstrip</h3>
<div style={{display:"flex",gap:"12px",overflowX:"auto"}}>
{feeds.map(feed=><div key={feed} style={{minWidth:"180px",height:"100px",background:"#111",border:"1px solid #2b2b2b",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"#bbb"}}>{feed}</div>)}
</div>
</section>
);
}
