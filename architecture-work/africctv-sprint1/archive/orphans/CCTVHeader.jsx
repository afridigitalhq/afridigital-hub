import {LandingHeader} from "../data/LandingDashboard";

export default function CCTVHeader(){
return(
  <header className="cctv-header">
    <div>
      <strong>🛡 AfriCCTV</strong>
      <small>AI Security Monitoring Platform</small>
    </div>
    <div>
      <strong>SYSTEM PROTECTED</strong>
      <small>{LandingHeader.security}</small>
    </div>
    <div>
      <strong>ENCRYPTED VISION NETWORK</strong>
      <small>Enterprise Security Layer</small>
    </div>
    <div>
      <strong>LAGOS HQ</strong>
      <small>{LandingHeader.location}</small>
    </div>
    <div className="cctv-live-pill">{LandingHeader.monitoring}</div>
  </header>
);
}
