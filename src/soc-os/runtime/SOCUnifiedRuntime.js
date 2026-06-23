import { SOCRootKernel } from "../root/SOCRootKernel";

export class SOCUnifiedRuntime {

  constructor() {
    this.kernel = SOCRootKernel;
    this.state = {
      booted: false,
      activeWorkspace: "warroom",
      session: null
    };
  }

  boot() {
    this.state.booted = true;
    return "SOC OS READY";
  }

  switchWorkspace(name) {
    if (this.kernel.workspaces.includes(name)) {
      this.state.activeWorkspace = name;
    }
    return this.state.activeWorkspace;
  }

  getState() {
    return this.state;
  }

}

import { SOCControlHUDKernel } from "../control-hud/SOCControlHUDKernel";

const controlHUD = new SOCControlHUDKernel(controlPlane);

export function getSOCControlHUD() {
  return controlHUD;
}

  return controlPlane;
}
import { connectHUDTelemetry } from '../hud/telemetry/connectHUDTelemetry';
connectHUDTelemetry(this);
import { connectSystemRealismCore } from './connectSystemRealismCore';
connectSystemRealismCore(this);
import { connectOSStartupOrchestrator } from './connectOSStartupOrchestrator';
connectOSStartupOrchestrator(this);
import { connectWin11OSSelfObservationLoop } from './connectWin11OSSelfObservationLoop';
connectWin11OSSelfObservationLoop(this);
connectSOCCockpitDashboard(this);
import { connectSOCWarroom3DVisualization } from '../warroom/connectSOCWarroom3DVisualization';
connectSOCWarroom3DVisualization(this);
import { connectSOCAISystemConductor } from '../ai/connectSOCAISystemConductor';
connectSOCAISystemConductor(this);
import { connectSOCSafetyGovernor } from '../governance/connectSOCSafetyGovernor';
connectSOCSafetyGovernor(this);
import { connectSOCCinematicUXPolish } from '../cinematic/connectSOCCinematicUXPolish';
connectSOCCinematicUXPolish(this);
import { connectSOCFluentBlurRenderer } from '../fluent/connectSOCFluentBlurRenderer';
connectSOCFluentBlurRenderer(this);
import { connectSOCSystemMotionCompiler } from '../motion/connectSOCSystemMotionCompiler';
connectSOCSystemMotionCompiler(this);
import { connectSOCPerceptionIllusionLayer } from '../perception/connectSOCPerceptionIllusionLayer';
connectSOCPerceptionIllusionLayer(this);
import { connectSOCSystemIdentityFingerprint } from '../identity/connectSOCSystemIdentityFingerprint';
connectSOCSystemIdentityFingerprint(this);
