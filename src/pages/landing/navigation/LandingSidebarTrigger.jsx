import { useState } from "react";
import LandingSidebar from "./LandingSidebar";

export default function LandingSidebarTrigger(){
  const [open,setOpen] = useState(false);

  return (
    <>
      <button
        className="landing-sidebar-trigger"
        onClick={()=>setOpen(!open)}
      >
        ☰
      </button>

      {open && <LandingSidebar />}
    </>
  );
}
