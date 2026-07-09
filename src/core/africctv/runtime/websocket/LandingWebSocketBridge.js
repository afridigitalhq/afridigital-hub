import { afriCCTVLiveClient } from "../../../live/AfriCCTVLiveClient.js";

export default class LandingWebSocketBridge {

  constructor(){
    this.listeners = new Set();
  }

  connect(){
    afriCCTVLiveClient.subscribe((event)=>{
      this.listeners.forEach(cb=>cb(event));
    });

    return afriCCTVLiveClient.connect();
  }

  subscribe(callback){
    this.listeners.add(callback);
  }

  disconnect(){
    this.listeners.clear();
    afriCCTVLiveClient.disconnect();
  }

}
