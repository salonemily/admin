import IClient from "./clients";
import IOrderDress from "./orderDress";

export default interface ISaleOrder {
    id: string,
    dressID: string,
    clientID:string,
    status:number,
    totalPrice:number,
    deposit:number,
    credit:number,
    weddingDate:string,
    agreementDate:string,
    realizationDateStart:string,
    realizationDateEnd:string,
    realizationDeadLine:string,
    additionalChanges:string,
    additionalInfo:string,
    orderComments:string,
    weddingDress:IOrderDress ,
    client:IClient 
 }
export interface ISaleOrderPost {
    id?: string,
    dressID?: string,
    clientID?:string,
    totalPrice?:number,
    deposit?:number,
    credit?:number,
    status?:number,
    weddingDate?:string,
    realizationDateStart?:string,
    realizationDateEnd?:string,
    realizationDeadLine?:string,
    fittingNotes?:string,
    additionalInfo?:string,
    orderComments?:string,

 }
 export class SaleOrderFormValues implements ISaleOrderPost {
    id?: string = undefined;
    dressID?: string = undefined;
    clientID?:string = undefined;
    totalPrice?:number = undefined;
    deposit?:number = undefined;
    credit?:number = undefined;
    weddingDate?:string = undefined;
    status?:number = undefined;
    realizationDateStart?:string = undefined;
    realizationDateEnd?:string = undefined;
    realizationDeadLine?:string = undefined;
    fittingNotes?:string = "";
    additionalInfo?:string = "";
    orderComments?:string = "";
    constructor(init?: ISaleOrderPost) {
      Object.assign(this, init);
    }
  }