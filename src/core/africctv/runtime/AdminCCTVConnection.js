export class AdminCCTVConnection {

 constructor(){
  this.endpoint =
  "wss://afridigital-api.onrender.com/ws/africctv";
 }

 connect(){
  return {
   endpoint:this.endpoint,
   status:"CONNECTED"
  };
 }

}


export const adminCCTVConnection =
new AdminCCTVConnection();
