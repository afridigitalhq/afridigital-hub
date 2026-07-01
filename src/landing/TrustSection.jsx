import React from "react";

const items = [
  ["🧠","One AI","AfriAI powers the entire ecosystem from a single command interface."],
  ["🔒","Secure by Design","SOC monitors every connected service in real time."],
  ["📱","Desktop & Mobile","Designed to work seamlessly across phones, tablets and desktops."],
  ["🌍","One Ecosystem","Banking, communication, security, commerce, sports and virtual worlds together."]
];

export default function TrustSection(){
  return(
    <div style={{
      maxWidth:"1200px",
      margin:"70px auto",
      padding:"0 20px"
    }}>
      <h2 style={{
        textAlign:"center",
        color:"#22ff99",
        marginBottom:"30px"
      }}>
        Why AfriDigital?
      </h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px"
      }}>
        {items.map(([icon,title,text])=>(
          <div key={title} style={{
            background:"rgba(18,18,18,.82)",
            border:"1px solid #22ff99",
            borderRadius:"16px",
            padding:"22px"
          }}>
            <div style={{fontSize:"34px"}}>{icon}</div>
            <h3>{title}</h3>
            <p style={{opacity:.85}}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
