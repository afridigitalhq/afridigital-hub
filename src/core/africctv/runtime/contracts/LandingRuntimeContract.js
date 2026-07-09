export default class LandingRuntimeContract {
  static validate(state){
    return state && Array.isArray(state.cameras);
  }
}
