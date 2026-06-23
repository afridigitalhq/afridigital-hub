
import { SOCCockpitDashboardEngine } from "./SOCCockpitDashboardEngine";

/**
 * 🧠 Connect SOC global cockpit dashboard
 */

export function connectSOCCockpitDashboard(runtime) {
  const cockpit = new SOCCockpitDashboardEngine(runtime);

  cockpit.attach();

  runtime.attachTelemetry?.({
    type: "COCKPIT_DASHBOARD_LAYER",
    status: "ACTIVE"
  });

  console.log("🧠 SOC Cockpit Dashboard Connected");
}
