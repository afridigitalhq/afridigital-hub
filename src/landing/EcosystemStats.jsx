import React from "react";

const stats = [
  { title:"🧠 AI Requests", value:"2.4M+" },
  { title:"🎥 Cameras", value:"12,480" },
  { title:"📍 Tracked Devices", value:"86,219" },
  { title:"💬 Messages", value:"18.7M" },
  { title:"🏦 Transactions", value:"₦0.00 (Demo)" },
  { title:"⚽ Live Matches", value:"24" }
];

export default function EcosystemStats(){
  return (
    <div style={{
      maxWidth:"1200px",
      margin:"30px auto",
      padding:"0 20px",
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",
      gap:"16px"
    }}>
      {stats.map((item)=>(
        <div key={item.title} style={{
          background:"rgba(18,18,18,.82)",
          border:"1px solid #22ff99",
          borderRadius:"14px",
          padding:"18px",
          textAlign:"center"
        }}>
          <div style={{fontSize:"14px",opacity:.8}}>{item.title}</div>
          <div style={{
            marginTop:"8px",
            fontSize:"24px",
            fontWeight:"700",
            color:"#22ff99"
          }}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
