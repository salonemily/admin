import ISaleOrder from "./saleOrders";

export default interface IOrderDress {
  id: string;
  name: string;
  producer: string;
  color: string;
  size: string;
  bustSize: number | null;
  waistSize: number | null;
  hipsSize: number | null;
  heightSize: number | null;
  salesAgreement: ISaleOrder
}

export interface IPostOrderDress {
  id?: string;
  name?: string;
  producer?: string;
  color?: string;
  size?: string;
  bustSize?: number | null;
  waistSize?: number | null;
  hipsSize?: number | null;
  heightSize?: number | null;
}
export class OrderDressFormValues implements IPostOrderDress {
  id?: string = undefined;
  name: string = "";
  producer: string = "";
  color: string = "";
  size?: string = "";
  bustSize?: number | null = null;
  waistSize?: number | null = null;
  hipsSize?: number | null = null;
  heightSize?: number | null = null;
  constructor(init?: IPostOrderDress) {
    Object.assign(this, init);
  }
}
