class AfriAIVoiceLevelSmoother{

  constructor(){
    this.value=0;
  }

  update(target){

    this.value += (target - this.value) * 0.18;

    return Number(
      this.value.toFixed(3)
    );
  }

  reset(){
    this.value=0;
  }

}

export default new AfriAIVoiceLevelSmoother();
