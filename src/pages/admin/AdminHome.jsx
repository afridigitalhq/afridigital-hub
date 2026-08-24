import React,{useState} from "react";
import GlobalExperienceShell from "../../core/layout/global-shell/GlobalExperienceShell";
import LandingFooter from "../landing/footer/LandingFooter";
import ControlRoomShell from "../../control-room/core/ControlRoomShell";
import "../../control-room/admin-control-room.css";
import { AdminExperienceProvider } from "../../admin/context/AdminExperienceContext";

export default function AdminHome() {
  const [active,setActive]=useState("command-center");
  const [mobileOpen,setMobileOpen]=useState(false);

  return (
    <GlobalExperienceShell
      adminHeroControls={{
        active,
        onHome:()=>{ window.location.href="/"; },
        onMenu:()=>setMobileOpen(true)
      }}
    >
      <AdminExperienceProvider>
        <ControlRoomShell
          active={active}
          setActive={setActive}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </AdminExperienceProvider>
      <LandingFooter />
    </GlobalExperienceShell>
  );
}
