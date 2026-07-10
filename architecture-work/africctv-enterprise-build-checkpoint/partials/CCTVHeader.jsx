import useAfriCCTVTimestamp from "../../../../../../core/africctv/runtime/hooks/useAfriCCTVTimestamp";
import {LandingHeader} from "../data/LandingDashboard";
export default function CCTVHeader(){
const t=useAfriCCTVTimestamp().replace("T"," ").replace("Z"," WAT").slice(11);
return(<header className="cctv-header"><div><strong>AfriCCTV</strong><small>AI-Powered Surveillance</small></div><div><strong>System Secure</strong><small>{LandingHeader.security}</small></div><div><strong>{t}</strong></div><div><strong>Lagos HQ</strong><small>{LandingHeader.location}</small></div><div className="cctv-live-pill">{LandingHeader.monitoring}</div></header>);
}
