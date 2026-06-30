import { useSocVoiceKernel } from "../input/useSocVoiceKernel";

export function useMobileVoiceOverlay(bus) {
  useSocVoiceKernel({
    onCommand: (cmd) => {
      bus.dispatch(cmd);
    }
  });
}
