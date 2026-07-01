class BrainServiceRegistry {
  constructor() {
    this.services = new Map();
  }

  register(name, service) {
    this.services.set(name, service);
    return service;
  }

  get(name) {
    return this.services.get(name);
  }

  has(name) {
    return this.services.has(name);
  }

  list() {
    return [...this.services.keys()];
  }

  unregister(name) {
    this.services.delete(name);
  }

  clear() {
    this.services.clear();
  }

  status() {
    return {
      total: this.services.size,
      services: this.list()
    };
  }
}

export default new BrainServiceRegistry();


BrainServiceRegistry.installService=function(name,service={},meta={}){
 if(!this.services)this.services={};
 if(!this.metadata)this.metadata={};

 this.services[name]=service;
 this.metadata[name]={
  installed:true,
  installedAt:Date.now(),
  ...meta
 };

 return this.metadata[name];
};

BrainServiceRegistry.uninstallService=function(name){
 if(this.services) delete this.services[name];
 if(this.metadata) delete this.metadata[name];
 return true;
};

BrainServiceRegistry.listServices=function(){
 return Object.keys(this.services||{});
};

BrainServiceRegistry.getMetadata=function(name){
 return (this.metadata||{})[name]||null;
};

BrainServiceRegistry.serviceCount=function(){
 return this.listServices().length;
};
