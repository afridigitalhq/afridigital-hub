import AdminCommandCenter from "../dashboards/AdminCommandCenter";
import React from "react";
import AdminDashboardPlaceholder from "../dashboards/AdminDashboardPlaceholder";
import AfriAIDashboard from "../../control-room/afrai/dashboard/AfriAIDashboard";

const dashboards = {
  "command-center": <AdminCommandCenter />,

  afriai: <AfriAIDashboard />,

  afribank: <AdminDashboardPlaceholder title="🏦 AfriBank Admin" />,

  afriaiwhatsappbusiness: (
    <AdminDashboardPlaceholder title="💬 AfriAI WhatsApp Business Admin" />
  ),

  africommerce: (
    <AdminDashboardPlaceholder title="🛒 AfriCommerce Admin" />
  ),

  afridesign: (
    <AdminDashboardPlaceholder title="🎨 AfriDesign Studio Admin" />
  ),

  africctv: (
    <AdminDashboardPlaceholder title="📹 AfriCCTV Admin" />
  ),

  afrieducation: (
    <AdminDashboardPlaceholder title="🎓 AfriEducation Admin" />
  ),

  afrisports: (
    <AdminDashboardPlaceholder title="🏆 AfriSports Admin" />
  ),

  afriboost: (
    <AdminDashboardPlaceholder title="🚀 AfriBoost Admin" />
  ),

  afriwork: (
    <AdminDashboardPlaceholder title="💼 AfriWork Admin" />
  ),

  afritracker: (
    <AdminDashboardPlaceholder title="📍 AfriTracker Admin" />
  ),

  afriticking: (
    <AdminDashboardPlaceholder title="🎟️ AfriTicking Admin" />
  ),

  afrilove: (
    <AdminDashboardPlaceholder title="❤️ AfriLove Admin" />
  ),

  afriads: (
    <AdminDashboardPlaceholder title="📢 AfriAds Platform Admin" />
  ),

  afritrust: (
    <AdminDashboardPlaceholder title="🛡️ AfriTrust Platform Admin" />
  ),

  security: (
    <AdminDashboardPlaceholder title="🔐 Security / SOC" />
  ),

  "war-room": (
    <AdminDashboardPlaceholder title="⚔️ Admin War Room" />
  ),

  approvals: (
    <AdminDashboardPlaceholder title="✅ Approval Center" />
  ),

  system: (
    <AdminDashboardPlaceholder title="⚙️ System Administration" />
  )
};

export default function AdminDashboardRouter({ active = "command-center" }) {
  return dashboards[active] || dashboards["command-center"];
}
