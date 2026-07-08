export class AfriCCTVLiveClient {

  constructor(url){
    this.url=url;
    this.status="DISCONNECTED";
    this.listeners=new Set();
    this.socket=null;
  }


  connect(){

    this.status="CONNECTED";

    const event={
      type:"camera:heartbeat",
      cameraId:"cam01",
      status:"ONLINE"
    };

    this.listeners.forEach(cb=>cb(event));

    return this.status;
  }


  subscribe(callback){
    this.listeners.add(callback);
  }


  disconnect(){
    this.status="DISCONNECTED";
  }

}

export const afriCCTVLiveClient =
new AfriCCTVLiveClient(
"wss://afridigital-api.onrender.com/ws/africctv"
);
