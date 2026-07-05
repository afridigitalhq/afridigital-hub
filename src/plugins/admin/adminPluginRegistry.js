import React,{lazy} from "react";

const AfriScan=lazy(()=>import("./wrappers/AfriScanWrapper"));

const ADMIN_PLUGINS={
afriScan:{
name:"AfriScan Intelligence Engine",
component:AfriScan,
route:"/admin/scan",
enabled:true,
type:"intelligence",
layer:"control-plane"
}
};

export const getActiveAdminPlugins=()=>Object.entries(ADMIN_PLUGINS).filter(([,p])=>p.enabled).map(([key,p])=>({key,...p}));
export const resolveAdminPlugin=(key)=>ADMIN_PLUGINS[key]||null;
export const listAdminCapabilities=()=>Object.keys(ADMIN_PLUGINS);
