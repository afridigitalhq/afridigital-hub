import React,{lazy} from "react";

const AfriScan=lazy(()=>import("./wrappers/AfriScanWrapper"));
const AfriCCTV=lazy(()=>import("../../pages/admin/modules/AfriCCTV/views/AfriCCTVView"));
const AfriBank=lazy(()=>import("../../admin/modules/AfriBank/AfriBankView"));
const AfriAI=lazy(()=>import("../../control-room/afrai/dashboard/AfriAIDashboard"));
const SOC=lazy(()=>import("../../control-room/soc/SOCDashboard"));

const ADMIN_PLUGINS={

afriScan:{
name:"AfriScan Intelligence Engine",
component:AfriScan,
route:"/admin/scan",
enabled:true,
type:"intelligence",
layer:"control-plane"
},

afriCCTV:{
name:"AfriCCTV Command Center",
component:AfriCCTV,
route:"/admin/cctv",
enabled:true,
type:"operations",
layer:"security"
},

afriBank:{
name:"AfriBank",
component:AfriBank,
route:"/admin/bank",
enabled:true,
type:"finance",
layer:"business"
},

afriAI:{
name:"AfriAI",
component:AfriAI,
route:"/admin/ai",
enabled:true,
type:"intelligence",
layer:"reasoning"
},

soc:{
name:"SOC War Room",
component:SOC,
route:"/admin/soc",
enabled:true,
type:"security",
layer:"operations"
}

};

export const getActiveAdminPlugins=()=>Object.entries(ADMIN_PLUGINS).filter(([,p])=>p.enabled).map(([key,p])=>({key,...p}));
export const resolveAdminPlugin=(key)=>ADMIN_PLUGINS[key]||null;
export const listAdminCapabilities=()=>Object.keys(ADMIN_PLUGINS);
