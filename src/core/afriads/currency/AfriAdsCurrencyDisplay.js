/**
 * AfriAds Multi Currency Display Runtime V1
 * Displays campaign pricing references
 */

const AfriAdsCurrencyDisplay = {

  display(price){

    return {
      africoin:{
        amount:price,
        symbol:"AFRICOiN"
      },
      nativeCurrency:{
        amount:null,
        symbol:null,
        status:"CONVERSION_PENDING"
      },
      crypto:{
        amount:null,
        symbol:null,
        status:"CONVERSION_PENDING"
      }
    };

  }

};

export default AfriAdsCurrencyDisplay;
