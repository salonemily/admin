import { IPostClient } from "../../../../models/clients";
import { IClosingSalePost } from "../../../../models/closingSaleOrder";
import { IPostOrderDress } from "../../../../models/orderDress";
import { IRentOrderPost } from "../../../../models/rentOrders";
import { ISaleOrderPost } from "../../../../models/saleOrders";
import { IPostSalonDress } from "../../../../models/salonDress";
import { CreateFormTypeEnum } from "../../../../utilities/Additional";

export interface IRentOrderSummaryData {
  dress: IPostSalonDress | null;
  dresstype: CreateFormTypeEnum;
  client: IPostClient | null;
  clienttype: CreateFormTypeEnum;
  order: IRentOrderPost | null;
}
export interface ISaleOrderSummaryData {
  dress: IPostOrderDress | null;
  dresstype: CreateFormTypeEnum;
  client: IPostClient | null;
  clienttype: CreateFormTypeEnum;
  order: ISaleOrderPost | null;
}
export interface IClosingSaleOrderSummaryData {
  dress: IPostSalonDress | null;
  dresstype: CreateFormTypeEnum;
  client: IPostClient | null;
  clienttype: CreateFormTypeEnum;
  order: IClosingSalePost | null;
}
export interface IsubmitState {
  isDressReady: boolean;
  isClientReady: boolean;
  isOrderReady: boolean;
}

export const submitStateInit: IsubmitState = {
  isDressReady: false,
  isClientReady: false,
  isOrderReady: false,
};

export class SaleOrderSummaryData implements ISaleOrderSummaryData {
  dress: IPostOrderDress | null = null;
  dresstype: CreateFormTypeEnum = CreateFormTypeEnum.Empty;
  client: IPostClient | null = null;
  clienttype: CreateFormTypeEnum = CreateFormTypeEnum.Empty;
  order: ISaleOrderPost | null = null;
  constructor(init?: ISaleOrderSummaryData) {
    Object.assign(this, init);
  }
}
export class ClosingSaleOrderSummaryData
  implements IClosingSaleOrderSummaryData {
  dress: IPostOrderDress | null = null;
  dresstype: CreateFormTypeEnum = CreateFormTypeEnum.Empty;
  client: IPostClient | null = null;
  clienttype: CreateFormTypeEnum = CreateFormTypeEnum.Empty;
  order: ISaleOrderPost | null = null;
  constructor(init?: IClosingSaleOrderSummaryData) {
    Object.assign(this, init);
  }
}
export class RentOrderSummaryData implements IRentOrderSummaryData {
  dress: IPostSalonDress | null = null;
  dresstype: CreateFormTypeEnum = CreateFormTypeEnum.Empty;
  client: IPostClient | null = null;
  clienttype: CreateFormTypeEnum = CreateFormTypeEnum.Empty;
  order: IRentOrderPost | null = null;
  constructor(init?: IRentOrderSummaryData) {
    Object.assign(this, init);
  }
}
