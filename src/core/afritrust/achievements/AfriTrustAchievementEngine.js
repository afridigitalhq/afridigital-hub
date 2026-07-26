const AfriTrustAchievementEngine = {
  celebrate(event){
    return {
      title: "🎉 Congratulations!",
      message: event.message || "You've unlocked a new AfriTrust achievement! 🎉🎉🎉",
      badge: event.badge || null,
      animation: "CONFETTI",
      sound: "ACHIEVEMENT",
      timestamp: Date.now()
    };
  }
};

export default AfriTrustAchievementEngine;
