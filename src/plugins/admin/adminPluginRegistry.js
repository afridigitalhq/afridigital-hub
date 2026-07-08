import React,{lazy} from "react";

const AfriScan=lazy(()=>import("./wrappers/AfriScanWrapper"));
const AfriCCTV=lazy(()=>import("../../pages/admin/modules/AfriCCTV/views/AfriCCTVView"));
const AfriBank=lazy(()=>import("../../admin/modules/AfriBank/AfriBankView"));
const AfriAI=lazy(()=>import("../../control-room/afrai/dashboard/AfriAIDashboard"));
const SOC=lazy(()=>import("../../control-room/soc/SOCDashboard"));

const ADMIN_PLUGINS={

afriScan:{
sidebarGroup:"intelligence",
name:"AfriScan Intelligence Engine",
icon:"🔍",
description:"System intelligence and architecture analysis",
order:10,
component:AfriScan,
route:"/admin/scan",
enabled:true,
type:"intelligence",
layer:"control-plane"
},

afriCCTV:{
sidebarGroup:"products",
name:"AfriCCTV Product Control",
icon:"📹",
description:"Security camera product operations and customer monitoring management",
order:20,
component:AfriCCTV,
route:"/admin/cctv",
enabled:true,
type:"product",
layer:"ecosystem"
},

afriBank:{
sidebarGroup:"business",
name:"AfriBank",
icon:"🏦",
description:"Financial ecosystem control module",
order:30,
component:AfriBank,
route:"/admin/bank",
enabled:true,
type:"finance",
layer:"business"
},

afriAI:{
sidebarGroup:"intelligence",
name:"AfriAI",
icon:"🤖",
description:"Unified intelligence reasoning layer",
order:40,
component:AfriAI,
route:"/admin/ai",
enabled:true,
type:"intelligence",
layer:"reasoning"
},

soc:{
sidebarGroup:"operations",
name:"SOC War Room",
icon:"🛡️",
description:"Security operations command workspace",
order:50,
component:SOC,
route:"/admin/soc",
enabled:true,
type:"security",
layer:"operations"
}

};

export const getActiveAdminPlugins=()=>Object.entries(ADMIN_PLUGINS)
.filter(([,p])=>p.enabled)
.map(([key,p])=>({key,...p}))
.sort((a,b)=>a.order-b.order);

export const resolveAdminPlugin=(key)=>ADMIN_PLUGINS[key]||null;

export const listAdminCapabilities=()=>Object.keys(ADMIN_PLUGINS);
