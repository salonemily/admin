import IClosingSaleOrder from "./closingSaleOrder";
import IRentOrder from "./rentOrders";
import ISaleOrder from "./saleOrders";

export default interface IClient {
   id: string,
   name:string,
   surname:string,
   phoneNumber:number,
   email:string,
   city:string,
   street:string,
   rentAgreement: IRentOrder[] | [],
   salesAgreement : ISaleOrder [] | [],
   closingSalesAgrement : IClosingSaleOrder [] | []
   
}
export interface IPostClient {
   id?: string,
   name?:string,
   surname?:string,
   phoneNumber?:number,
   email?:string,
   city?:string,
   street?:string
}
export class ClientFormValues implements IPostClient {
   id?: string = undefined;
   name:string = '';
   surname:string = '';
   phoneNumber?:number=undefined;
   email:string='';
   city:string='';
   street:string='';

   constructor(init?: IPostClient) {
       Object.assign(this, init);
   }
}