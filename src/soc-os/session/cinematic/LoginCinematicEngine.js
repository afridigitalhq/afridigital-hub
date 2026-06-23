export class LoginCinematicEngine {
  startLogin(callback) {
    callback?.("LOCK_SCREEN");

    setTimeout(() => callback?.("UNLOCK_ANIMATION"), 800);

    setTimeout(() => callback?.("LOADING_DESKTOP"), 1600);

    setTimeout(() => callback?.("DESKTOP_READY"), 2400);
  }
}
