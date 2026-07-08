import {
 customerCameraDashboard
} from "./CustomerCameraDashboard.js";


customerCameraDashboard.load([
 {
  id:"cam01",
  status:"LIVE"
 }
]);


const result =
customerCameraDashboard.status();


if(result.state!=="READY"){
 throw new Error("CUSTOMER DASHBOARD FAILED");
}


console.log("🎥 Cameras:",result.cameras);
console.log("🖥️ State:",result.state);
console.log("🔒 CUSTOMER DASHBOARD LOCKED");
