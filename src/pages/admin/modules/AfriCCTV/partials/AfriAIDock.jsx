import React from "react";

export default function AfriAIDock({observations=[]}){

return(
<section style={{
marginTop:"20px",
padding:"16px",
borderTop:"1px solid #2b2b2b",
background:"#0f1115"
}}>

<h3>🧠 AfriAI Command Dock</h3>

<div style={{marginTop:"12px"}}>

{observations.map(item=>(
<div key={item.cameraId}
style={{
padding:"8px",
marginBottom:"6px",
background:"#151a20"
}}
>
Camera {item.cameraId}
<br/>
Status: {item.status}
<br/>
Motion: {item.motion}
<br/>
Recommendation: {item.recommendation}
</div>
))}

</div>

</section>
);

}
