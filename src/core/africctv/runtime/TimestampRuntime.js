import ServerTimeBridge from "./time/ServerTimeBridge.js";

const bridge=new ServerTimeBridge();

export const syncServerTime=(timestamp)=>{
  return bridge.sync(timestamp);
};

export const now=()=>bridge.now();

export const formatCCTVTime=()=>{

  return now()
    .toLocaleString(
      "en-GB",
      {
        timeZone:"Africa/Lagos",
        hour12:false
      }
    )
    + " WAT";

};
