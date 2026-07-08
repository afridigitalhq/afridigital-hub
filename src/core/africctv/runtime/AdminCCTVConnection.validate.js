import {
 adminCCTVConnection
} from "./AdminCCTVConnection.js";


const result =
adminCCTVConnection.connect();


if(result.status!=="CONNECTED"){
 throw new Error("ADMIN CCTV CONNECTION FAILED");
}


console.log("🌐 Endpoint:",result.endpoint);
console.log("🖥️ Status:",result.status);
console.log("🔒 ADMIN CONNECTION LOCKED");
