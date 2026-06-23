export class MultiScreenEngine {
  constructor() {
    this.screens = ["main", "warroom", "admin", "analytics"];
    this.active = "main";
  }

  switch(screen) {
    if (this.screens.includes(screen)) {
      this.active = screen;
    }
    return this.active;
  }

  getLayout() {
    return {
      active: this.active,
      screens: this.screens
    };
  }
}
