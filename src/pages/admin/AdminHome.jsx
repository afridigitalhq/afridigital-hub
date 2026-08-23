import GlobalExperienceShell from "../../core/layout/global-shell/GlobalExperienceShell";
import LandingFooter from "../landing/footer/LandingFooter";
import ControlRoomShell from "../../control-room/core/ControlRoomShell";

export default function AdminHome() {
  return (
    <GlobalExperienceShell>
      <ControlRoomShell />
      <LandingFooter />
    </GlobalExperienceShell>
  );
}
