import React from "react";

export default function LeftControlPanel(){
return(
<aside style={{width:"300px",background:"#111827",borderRight:"1px solid #2b3137",padding:"16px",display:"flex",flexDirection:"column",gap:"18px"}}>
<h3 style={{margin:0,color:"#fff"}}>Operations</h3>
<section><strong style={{color:"#22c55e"}}>Camera Groups</strong></section>
<section><strong style={{color:"#22c55e"}}>Sites</strong></section>
<section><strong style={{color:"#22c55e"}}>AI Alerts</strong></section>
<section><strong style={{color:"#22c55e"}}>Device Status</strong></section>
<section><strong style={{color:"#22c55e"}}>Quick Actions</strong></section>
</aside>
);
}
