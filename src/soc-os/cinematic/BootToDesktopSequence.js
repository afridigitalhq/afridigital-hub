export class BootToDesktopSequence {
  run(callback) {
    const stages = [
      "BIOS",
      "Kernel Init",
      "SOC Runtime Load",
      "Security Check",
      "Login Screen",
      "Desktop Fade-in"
    ];

    let i = 0;

    const step = () => {
      if (i >= stages.length) return callback("READY");

      callback(stages[i]);
      i++;

      setTimeout(step, 700);
    };

    step();
  }
}
