import React,{useState} from "react";
import { UserNavigationProvider } from "../context/UserNavigationContext";
import UserSidebar from "../sidebar/UserSidebar";
import UserDashboard from "../dashboard/UserDashboard";

export default function UserAppShell(){
const [collapsed,setCollapsed]=useState(false);

return (
<UserNavigationProvider>
<div style={{display:"grid",gridTemplateColumns:collapsed?"70px 1fr":"260px 1fr",minHeight:"100vh",transition:"0.3s"}}>
<UserSidebar collapsed={collapsed} onToggle={()=>setCollapsed(!collapsed)} />
<main style={{padding:20}}>
<UserDashboard />
</main>
</div>
</UserNavigationProvider>
);
}
