import React from "react";

const panels = [
  ["🎥","AfriVision","4 Live Camera Feeds"],
  ["🌍","AfriMetaWorld","Digital World Preview"],
  ["⚽","AfriSports","Live Match Intelligence"],
  ["📡","AfriComm","Realtime Communications"],
  ["🧠","AfriAI","Thinking • Monitoring • Assisting"],
  ["🛡️","SOC","Security Operations Center"]
];

export default function ControlCenterPreview(){
  return(
    <div style={{
      maxWidth:"1280px",
      margin:"60px auto",
      padding:"0 20px"
    }}>
      <h2 style={{
        textAlign:"center",
        marginBottom:"28px",
        color:"#22ff99"
      }}>
        Live AfriDigital Control Center
      </h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
        gap:"20px"
      }}>
        {panels.map(([icon,title,text])=>(
          <div key={title} style={{
            background:"rgba(15,15,15,.82)",
            border:"1px solid #22ff99",
            borderRadius:"16px",
            padding:"22px",
            minHeight:"170px"
          }}>
            <div style={{fontSize:"40px"}}>{icon}</div>
            <h3>{title}</h3>
            <div style={{opacity:.8}}>{text}</div>
            <div style={{
              marginTop:"18px",
              height:"70px",
              borderRadius:"10px",
              background:"linear-gradient(135deg,#111,#222)"
            }}/>
          </div>
        ))}
      </div>
    </div>
  );
}
