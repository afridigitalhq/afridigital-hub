import {
 afriCCTVLiveClient
} from "./AfriCCTVLiveClient.js";


let received=null;


afriCCTVLiveClient.subscribe(
 event=>{
  received=event;
 }
);


const state =
afriCCTVLiveClient.connect();


if(
 state!=="CONNECTED" ||
 !received ||
 received.status!=="ONLINE"
){
 throw new Error("ADMIN LIVE WIRING FAILED");
}


console.log("🖥️ Dashboard:",state);
console.log("🎥 Camera:",received.cameraId);
console.log("❤️ Status:",received.status);
console.log("🔒 ADMIN DASHBOARD LIVE WIRING LOCKED");
