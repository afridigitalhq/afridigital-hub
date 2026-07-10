import {LandingFooter} from "../data/LandingDashboard";
export default function CCTVFooter(){
return(<footer className="cctv-system-footer"><span>System ID: {LandingFooter.system}</span><span>Version {LandingFooter.version}</span><span>AI Engine: {LandingFooter.engine}</span><span>Last Backup: {LandingFooter.backup}</span><span>Uptime: {LandingFooter.uptime}</span></footer>);
}
