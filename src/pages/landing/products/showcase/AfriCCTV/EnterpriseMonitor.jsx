import EnterpriseHeader from "./partials/EnterpriseHeader";
import CameraWall from "./partials/CameraWall";
import SOCWidgets from "./partials/SOCWidgets";

export default function EnterpriseMonitor(){
  return (
    <section className="enterprise-monitor">
      <EnterpriseHeader />
      <CameraWall />
      <SOCWidgets />
    </section>
  );
}
