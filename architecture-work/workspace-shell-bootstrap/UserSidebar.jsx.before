import React from "react";
import SidebarHeader from "./sections/SidebarHeader";
import SidebarNavigation from "./sections/SidebarNavigation";
import SidebarFooter from "./sections/SidebarFooter";

export default function UserSidebar({collapsed,onToggle}){
return (
<aside style={{width:collapsed?70:260,minHeight:"100vh",display:"flex",flexDirection:"column",transition:"0.3s",overflow:"hidden"}}>
<button onClick={onToggle}>☰</button>
<SidebarHeader />
<div style={{flex:1}}><SidebarNavigation /></div>
<SidebarFooter />
</aside>
);
}
