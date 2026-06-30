
import { SOCFluentBlurRenderer } from "./SOCFluentBlurRenderer";

/**
 * 🪟 Connect Fluent Blur Renderer
 */

export function connectSOCFluentBlurRenderer(runtime) {
  const renderer = new SOCFluentBlurRenderer(runtime);

  renderer.attach();

  runtime.attachTelemetry?.({
    type: "FLUENT_BLUR_LAYER",
    status: "CONNECTED"
  });

  console.log("🪟 Fluent Blur Renderer Connected");
}
