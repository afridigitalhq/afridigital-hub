export class CustomerCameraDashboard {

 constructor(){
  this.cameras=[];
 }

 load(cameras){
  this.cameras=cameras;
  return this.cameras;
 }

 status(){
  return {
   cameras:this.cameras.length,
   state:"READY"
  };
 }

}

export const customerCameraDashboard =
new CustomerCameraDashboard();
