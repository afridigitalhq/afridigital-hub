export class Win11ConvergedBootSequence {

  async start() {

    return [
      "BIOS_INIT",
      "KERNEL_VALIDATE",
      "DRIVER_LOAD",
      "SESSION_RESTORE",
      "DESKTOP_FADE_IN",
      "TASKBAR_HYDRATE"
    ];

  }

}
