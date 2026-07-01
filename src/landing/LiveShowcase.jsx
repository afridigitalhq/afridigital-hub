import React from "react";

const card={
  background:"rgba(18,18,18,.78)",
  border:"1px solid #22ff99",
  borderRadius:"16px",
  padding:"18px",
  minHeight:"220px",
  color:"#fff"
};

export default function LiveShowcase(){
  return(
    <div style={{
      width:"100%",
      maxWidth:"1200px",
      margin:"40px auto",
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
      gap:"20px",
      padding:"0 20px",
      boxSizing:"border-box"
    }}>

      <div style={card}>
        <h2 style={{color:"#22ff99"}}>🎥 AfriVision</h2>
        <div style={{
          height:"150px",
          borderRadius:"12px",
          background:"#050505",
          border:"1px solid #333",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>
          LIVE CCTV FEED (Mock)
        </div>
      </div>

      <div style={card}>
        <h2 style={{color:"#22ff99"}}>🎮 AfriMetaWorld</h2>
        <div style={{
          height:"150px",
          borderRadius:"12px",
          background:"#081018",
          border:"1px solid #333",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>
          LIVE WORLD PREVIEW (Mock)
        </div>
      </div>

    </div>
  );
}
