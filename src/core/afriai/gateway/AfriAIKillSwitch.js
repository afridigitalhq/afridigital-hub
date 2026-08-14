const AfriAIKillSwitch = {
  state: {
    enabled: false,
    reason: "startup_safety_lock",
    timestamp: null
  },

  enable(){
    this.state.enabled = true;
    this.state.reason = null;
    this.state.timestamp = Date.now();
    return this.state;
  },

  disable(reason="manual_shutdown"){
    this.state.enabled = false;
    this.state.reason = reason;
    this.state.timestamp = Date.now();
    return this.state;
  },

  status(){
    return this.state;
  }
};

export default AfriAIKillSwitch;
