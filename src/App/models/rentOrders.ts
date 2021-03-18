
import IClient from "./clients";
import IDress from "./salonDress";

export default interface IRentOrder {
  id: string;
  dressID: string;
  clientID: string;
  status: number;
  totalPrice: number;
  deposit: number;
  credit: number;
  weddingDate: string;
  rentStartDate: string;
  rentEndDate: string;
  agreementDate: string;
  fittingNotes: string;
  additionalInfo: string;
  orderComments: string;
  weddingDress: IDress;
  client: IClient;
}
export interface IRentOrderPost {
  id?: string;
  dressID?: string;
  clientID?: string;
  status?: number;
  totalPrice?: number;
  deposit?: number;
  credit?: number;
  weddingDate?: string;
  rentStartDate?: string;
  rentEndDate?: string;
  fittingNotes?: string;
  additionalInfo?: string;
  orderComments?: string;
}
export interface IRentOrderPostCombine {
  id?: string;
  dressID?: string;
  clientID?: string;
  totalPrice?: number;
  deposit?: number;
  credit?: number;
  weddingDate?: string;
  rentStartDate?: string;
  rentEndDate?: string;
  additionalInfo?: string;
  orderComments?: string;
  name?: string;
  producer?: string;
  color?: string;
  size?: string;
  bustSize?: number | null;
  waistSize?: number | null;
  hipsSize?: number | null;
  heightSize?: number | null;
  availableColor?: string;
  price?: number;
  clientName?: string;
  surname?: string;
  phoneNumber?: number;
  email?: string;
  city?: string;
  street?: string;
}
export class RentOrderFormValues implements IRentOrderPost {
  id?: string = undefined;
  dressID?: string = undefined;
  clientID?: string = undefined;
  totalPrice?: number = undefined;
  deposit?: number = undefined;
  credit?: number = undefined;
  weddingDate?: string = undefined;
  status?: number = undefined;
  rentStartDate?: string = undefined;
  rentEndDate?: string = undefined;
  fittingNotes?: string = "";
  additionalInfo?: string = "";
  orderComments?: string = "";
  constructor(init?: IRentOrderPost) {
    Object.assign(this, init);
  }
}
