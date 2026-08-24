import React,{useState} from "react";
import Sidebar from "../sidebar/Sidebar";
import AdminDashboardRouter from "../../admin/router/AdminDashboardRouter";

export default function ControlRoomShell({
  active="command-center",
  setActive,
  mobileOpen=false,
  setMobileOpen
}){
  const [localActive,setLocalActive]=useState(active);
  const [collapsed,setCollapsed]=useState(false);

  const currentActive=setActive ? active : localActive;
  const selectActive=setActive || setLocalActive;

  return (
    <div className="admin-control-room">
      <Sidebar
        active={currentActive}
        onSelect={selectActive}
        collapsed={collapsed}
        onToggle={()=>setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        onClose={()=>setMobileOpen?.(false)}
      />

      <div className={`admin-control-content ${collapsed ? "admin-content-collapsed" : ""}`}>
        <main className="admin-control-main">
          <AdminDashboardRouter active={currentActive}/>
        </main>
      </div>
    </div>
  );
}
