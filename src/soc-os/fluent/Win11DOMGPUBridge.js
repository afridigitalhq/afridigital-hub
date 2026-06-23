export class Win11DOMGPUBridge {

  render(node) {
    return {
      ...node,
      gpuAccelerated: true,
      compositeLayer: "fluent_win11_blur_stack",
      renderMode: "illusion_layer"
    };
  }

}
