import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function AfriWhatsAppFloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isHome = location.pathname === "/";

    const timer = setTimeout(() => {
      setVisible(true);
    }, isHome ? 600 : 2000);

    const onScroll = () => {
      if (window.scrollY > 250) setVisible(true);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [location]);

  const connect = () => {
    const token = "AFRI_" + Date.now();
    window.open(
      `https://wa.me/YOUR_NUMBER?text=CONNECT_${token}`,
      "_blank"
    );
  };

  if (!visible) return null;

  return (
    <div
      onClick={connect}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        position: "fixed",
        bottom: "18px",
        right: "18px",
        zIndex: 99999,
        cursor: "pointer",
        background: "linear-gradient(135deg,#00ffb3,#00b3ff)",
        color: "#000",
        borderRadius: "14px",
        padding: expanded ? "14px 18px" : "12px",
        boxShadow: "0 0 16px rgba(0,255,179,0.4)",
        transform: expanded ? "scale(1.05)" : "scale(1)",
        transition: "all 0.25s ease",
        animation: "afriPulse 2.4s infinite"
      }}
    >
      {expanded ? (
        <div>
          💚 <b>Connect AfriWhatsApp</b>
          <div style={{ fontSize: "11px", opacity: 0.85 }}>
            Earn • Jobs • Boost • AI Access
          </div>
        </div>
      ) : (
        "💚"
      )}
    </div>
  );
}
