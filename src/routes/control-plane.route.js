import ControlPlaneCockpit from "../os/cockpit/ControlPlaneCockpit";

export const CONTROL_PLANE_ROUTE = "/admin/control-plane";

export default function ControlPlaneRoute() {
  return <ControlPlaneCockpit />;
}
