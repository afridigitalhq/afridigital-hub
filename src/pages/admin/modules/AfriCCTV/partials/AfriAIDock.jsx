import React from "react";

export default function AfriAIDock(){
return(
<section style={{marginTop:"20px",padding:"16px",borderTop:"1px solid #2b2b2b",background:"#0f1115"}}>
<h3>🧠 AfriAI Command Dock</h3>
<div style={{display:"flex",gap:"12px",alignItems:"center"}}>
<input type="text" placeholder="Ask AfriAI to search cameras, detect events, or control cctving..." style={{flex:1,padding:"12px"}}/>
<button>Send</button>
</div>
<div style={{marginTop:"10px",fontSize:"12px",opacity:0.8}}>🎙 Voice • 👁 Vision • 🔎 Search • ⚡ Actions</div>
</section>
);
}
