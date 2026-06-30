import { Win11RealismFrameKernel } from "./Win11RealismFrameKernel";
import { Win11InputLatencySmoother } from "../input/Win11InputLatencySmoother";
import { Win11MemoryIllusionEngine } from "../session/state/Win11MemoryIllusionEngine";
import { Win11DOMGPUBridge } from "../fluent/Win11DOMGPUBridge";
import { Win11PointerAcceleration } from "../input/Win11PointerAcceleration";

export class Win11RealismKernel {

  constructor() {
    this.frame = new Win11RealismFrameKernel();
    this.input = new Win11InputLatencySmoother();
    this.memory = new Win11MemoryIllusionEngine();
    this.gpu = new Win11DOMGPUBridge();
    this.pointer = new Win11PointerAcceleration();
  }

  start(render) {
    return this.frame.sync((ctx) => {
      return render({
        ...ctx,
        input: this.input,
        memory: this.memory,
        gpu: this.gpu,
        pointer: this.pointer
      });
    });
  }

}
