import IClient from "./clients";
import IDress from "./salonDress";
export default interface IClosingSaleOrder {
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
    weddingDress:IDress ,
    client:IClient 


 }
export interface IClosingSalePost {
    id?: string,
    dressID?: string,
    clientID?:string,
    status?:number,
    totalPrice?:number,
    deposit?:number,
    credit?:number,
    weddingDate?:string,
    fittingNotes?:string,
    realizationDateStart?:string,
    realizationDateEnd?:string,
    realizationDeadLine?:string,
    additionalInfo?:string,
    orderComments?:string,

 }
 export interface IClosingOrderPostCombine {
  id?: string,
  dressID?: string,
  clientID?:string,
  status?:number,
  totalPrice?:number,
  deposit?:number,
  credit?:number,
  weddingDate?:string,
  fittingNotes?:string,
  realizationDateStart?:string,
  realizationDateEnd?:string,
  realizationDeadLine?:string,
  additionalInfo?:string,
  orderComments?:string,
  name?:string,
  surname?:string,
  phoneNumber?:number,
  email?:string,
  city?:string,
  street?:string

}
 export class ClosingSaleOrderFormValues implements IClosingSalePost {
    id?: string = undefined;
    dressID?: string = undefined;
    clientID?:string = undefined;
    totalPrice?:number = undefined;
    deposit?:number = undefined;
    credit?:number = undefined;
    weddingDate?:string = undefined;
    realizationDateStart?:string = undefined;
    realizationDateEnd?:string = undefined;
    realizationDeadLine?:string = undefined;
    status?:number = undefined;
    fittingNotes?:string = "";
    additionalInfo?:string = "";
    orderComments?:string = "";
    constructor(init?: IClosingSalePost) {
      Object.assign(this, init);
    }
  }