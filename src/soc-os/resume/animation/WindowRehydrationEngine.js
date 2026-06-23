export class WindowRehydrationEngine {
  restore(windows, callback) {
    let i = 0;

    const animate = () => {
      if (i >= windows.length) return;

      const win = windows[i];
      win.state = "RESTORING";

      callback?.(win);

      setTimeout(() => {
        win.state = "ACTIVE";
        callback?.(win);
        i++;
        animate();
      }, 400);
    };

    animate();
  }
}
