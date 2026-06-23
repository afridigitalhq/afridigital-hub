export class Win11CopilotDesktopHUD {

  suggest(context) {
    return {
      hint: "You may want to reorganize active windows",
      confidence: 0.82,
      actions: [
        "Snap windows left",
        "Focus incident workspace",
        "Open warroom cluster"
      ]
    };
  }
}
