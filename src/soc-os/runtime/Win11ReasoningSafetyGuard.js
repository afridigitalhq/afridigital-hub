export class Win11ReasoningSafetyGuard {

  static ALLOW_MUTATION = false;

  static validate(action) {
    if (!this.ALLOW_MUTATION) {
      return {
        allowed: false,
        reason: "mutation_disabled",
        fallback: "suggestion_only_mode"
      };
    }
    return { allowed: true };
  }

}
