import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import HeroHighlights from "./hero/HeroHighlights";

export default function LandingPage() {
  const navigate = useNavigate();

  const products = useMemo(() => ([
    { id:"AfriCommerce", icon:"💰", desc:"E-commerce ecosystem", route:"/user/modules/AfriCommerce" },
    { id:"AfriCCTV", icon:"🎥", desc:"Surveillance & AI monitoring", route:"/user/modules/AfriCCTV" },
    { id:"AfriSports", icon:"⚽", desc:"Sports ecosystem", route:"/user/modules/AfriSports" },
    { id:"AfriMetaWorld", icon:"🎮", desc:"Virtual world platform", route:"/user/modules/AfriMetaWorld" },
    { id:"AfriBoost", icon:"🚀", desc:"Growth & marketing engine", route:"/user/modules/AfriBoost" },
    { id:"AfriTracker", icon:"📍", desc:"Real-time tracking system", route:"/user/modules/AfriTracker" },
    { id:"AfriTicking", icon:"🎟️", desc:"Event ticketing system", route:"/user/modules/AfriTicking" },
    { id:"AfriLove", icon:"💖", desc:"Social & relationships", route:"/user/modules/AfriLove" },
    { id:"AfriEducation", icon:"🎓", desc:"Learning platform", route:"/user/modules/AfriEducation" },
    { id:"AfriLogistics", icon:"📦", desc:"Supply chain system", route:"/user/modules/AfriLogistics" },
    { id:"AfriWork", icon:"💼", desc:"Work & freelancing", route:"/user/modules/AfriWork" }
  ]), []);

  const services = useMemo(() => ([
    { id:"AfriAI", icon:"🧠" },
    { id:"AfriBank", icon:"💳" },
    { id:"AfriComm", icon:"📡" },
    { id:"AfriScan", icon:"🔍" },
    { id:"EventBus", icon:"⚡" }
  ]), []);

  return (
    <div style={{ padding:"20px", fontFamily:"sans-serif" }}>

      {/* HERO */}
      <div style={{ marginBottom:30 }}>
        <h1>🌍 AfriDigital Ecosystem</h1>
        <p>Unified AI-powered digital infrastructure</p>

        <HeroHighlights />

        <button onClick={() => navigate("/user")}>
          Enter User OS
        </button>

        <button onClick={() => navigate("/admin")} style={{ marginLeft:10 }}>
          Admin Control
        </button>
      </div>

      {/* AfriAI ENTRY */}
      <div style={{ padding:10, border:"1px solid #333", marginBottom:20 }}>
        <h3>🧠 AfriAI Command Dock</h3>
        <p>Ask, build, navigate, or execute across ecosystem</p>
      </div>

      {/* PRODUCTS */}
      <h2>💰 Core Products</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10 }}>
        {products.map(p => (
          <div
            key={p.id}
            onClick={() => navigate(p.route)}
            style={{ border:"1px solid #ccc", padding:10, cursor:"pointer" }}
          >
            <h3>{p.icon} {p.id}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <h2 style={{ marginTop:30 }}>🔌 Platform Services</h2>
      <div style={{ display:"flex", gap:10 }}>
        {services.map(s => (
          <div key={s.id} style={{ border:"1px solid #ccc", padding:10 }}>
            {s.icon} {s.id}
          </div>
        ))}
      </div>

      {/* DISCOVERY */}
      <h2 style={{ marginTop:30 }}>🌐 Ecosystem Discovery</h2>
      <ul>
        <li>Marketplace</li>
        <li>Community</li>
        <li>Events</li>
        <li>Learning Center</li>
        <li>Support Center</li>
      </ul>

    </div>
  );
}
