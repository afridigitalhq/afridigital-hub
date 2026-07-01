import React from "react";
import LandingTheme from "./theme";
import { Link } from "react-router-dom";
import LandingBackground from "./LandingBackground";
import LiveShowcase from "./LiveShowcase";
import EcosystemStats from "./EcosystemStats";
import EcosystemGrid from "./EcosystemGrid";
import ControlCenterPreview from "./ControlCenterPreview";
import TrustSection from "./TrustSection";
import LiveActivityTicker from "./LiveActivityTicker";
import LandingFooter from "./LandingFooter";

export default function LandingPage() {
  return (
    <div style={{background:LandingTheme.colors.background,color:LandingTheme.colors.text,minHeight:"100vh",fontFamily:"system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif"}}>
<LandingBackground />

      <div style={{
        position:"relative",
        zIndex:2,
        minHeight:"100vh",
        color:"#fff",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"60px 20px"
      }}>

        <div style={{textAlign:"center",marginBottom:"20px"}}>
          <div style={{
            fontSize:"58px",
            fontWeight:"900",
            letterSpacing:"4px",
            color:"#22ff99"
          }}>
            AFRIDIGITAL
          </div>

          <div style={{
            fontSize:"20px",
            opacity:.9,
            marginTop:"12px",
            maxWidth:"760px"
          }}>
            One Intelligent Ecosystem powering Security, Banking,
            Communications, Commerce, Sports, Virtual Worlds and AI.
          </div>
        </div>

        <div style={{
          width:"100%",
          maxWidth:"900px",
          margin:"35px 0",
          border:"1px solid #22ff99",
          borderRadius:"18px",
          padding:"18px",
          background:"rgba(0,0,0,.45)"
        }}>
          <div style={{
            fontSize:"18px",
            marginBottom:"10px",
            color:"#22ff99",
            fontWeight:"bold"
          }}>
            🧠 AfriAI Command Dock
          </div>

          <input
            placeholder="Ask AfriAI anything..."
            style={{
              width:"100%",
              padding:"16px",
              borderRadius:"10px",
              border:"none",
              fontSize:"16px"
            }}
          />
        </div>

        <div style={{
          display:"flex",
          gap:"16px",
          flexWrap:"wrap",
          justifyContent:"center",
          marginBottom:"35px"
        }}>
          <Link to="/auth">Enter AfriDigital →</Link>
          <button>Explore Ecosystem</button>
        </div>

      </div>
    </div>
  );
}
