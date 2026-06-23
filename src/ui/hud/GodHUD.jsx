import React, { useEffect, useRef } from "react";
import { GodGPU } from "../../core/godgpu/engine/GodGPU";

export default function GodHUD() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    const engine = new GodGPU(gl);

    const loop = () => {
      const energy = Math.random(); // replace with AfriBus later
      const state = engine.tick(energy);

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // (shader draw would go here in full pipeline)
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return <canvas ref={canvasRef} className="god-hud" />;
}
