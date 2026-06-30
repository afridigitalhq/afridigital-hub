import { ResumeSoundEngine } from "./sound/ResumeSoundEngine";

const sound = new ResumeSoundEngine();

export class ResumeController {
  constructor() {
    this.stage = "boot";
  }

  startResume(session) {
    sound.play("boot");

    setTimeout(() => sound.play("unlock"), 600);
    setTimeout(() => sound.play("restore"), 1200);
    setTimeout(() => sound.play("ready"), 2000);

    return {
      session,
      status: "RESUMING"
    };
  }
}
