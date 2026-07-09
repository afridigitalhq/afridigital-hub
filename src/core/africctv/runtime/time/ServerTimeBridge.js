export default class ServerTimeBridge {

  constructor(){
    this.serverTime=null;
    this.offset=0;
  }

  sync(serverTimestamp){

    const server=new Date(serverTimestamp).getTime();
    const local=Date.now();

    this.serverTime=server;
    this.offset=server-local;

    return this.offset;
  }

  now(){

    return new Date(
      Date.now()+this.offset
    );

  }

}
