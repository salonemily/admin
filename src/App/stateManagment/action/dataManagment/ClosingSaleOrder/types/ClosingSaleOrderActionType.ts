import IClosingSaleOrder from "../../../../../models/closingSaleOrder";
export const GET_ONE_CLOSING_SALE_ORDER = "GET_ONE_CLOSING_SALE_ORDER";
export const FAILED_TO_GET_ONE_CLOSING_SALE_ORDER = "FAILED_TO_GET_ONE_CLOSING_SALE_ORDER";
export const GET_EXIST_CLOSING_SALE_ORDER_DATA = "GET_EXIST_CLOSING_SALE_ORDER_DATA";
export const CLOSE_CLOSING_SALES_DETAILS = "CLOSE_CLOSING_SALES_DETAILS";
export const GET_CLOSING_SALE_ORDER_DATA = "GET_CLOSING_SALE_ORDER_DATA";
export const FAILED_TO_GET_CLOSING_SALE_ORDER_DATA = "FAILED_TO_GET_CLOSING_SALE_ORDER_DATA";
export const CREATE_CLOSING_SALE_ORDER = "CREATE_CLOSING_SALE_ORDER";
export const FAILED_TO_CREATE_CLOSING_SALE_ORDER = "FAILED_TO_CREATE_CLOSING_SALE_ORDER";
export const EDIT_CLOSING_SALE_ORDER_STATUS = "EDIT_CLOSING_SALE_ORDER_STATUS"
export const FAILED_TO_EDIT_CLOSING_SALE_ORDER_STATUS ="FAILED_TO_EDIT_CLOSING_SALE_ORDER_STATUS"
export const EDIT_CLOSING_SALE_ORDER = "EDIT_CLOSING_SALE_ORDER";
export const FAILED_TO_EDIT_CLOSING_SALE_ORDER = "FAILED_TO_EDIT_CLOSING_SALE_ORDER";
export const DELETE_CLOSING_SALE_ORDER = "DELETE_CLOSING_SALE_ORDER";
export const FAILED_TO_DELETE_CLOSING_SALE_ORDER = "FAILED_TO_DELETE_CLOSING_SALE_ORDER";
export const EDIT_CLOSING_SALE_ORDER_PRICE = "EDIT_CLOSING_SALE_ORDER_PRICE";
export const FAILED_TO_EDIT_CLOSING_SALE_ORDER_PRICE = "FAILED_TO_EDIT_CLOSING_SALE_ORDER_PRICE";
interface ResponseDelete {
  type: typeof DELETE_CLOSING_SALE_ORDER;
}
interface  FaildResponseDelete {
  type: typeof FAILED_TO_DELETE_CLOSING_SALE_ORDER ;
}
interface ResponseEditPriceStatus {
  type: typeof  EDIT_CLOSING_SALE_ORDER_PRICE;

}
interface  FaildResponseEditPriceStatus {
  type: typeof FAILED_TO_EDIT_CLOSING_SALE_ORDER_PRICE ;
}
interface ResponseEditStatus {
  type: typeof EDIT_CLOSING_SALE_ORDER_STATUS;
}
interface  FaildResponseEditStatus {
  type: typeof FAILED_TO_EDIT_CLOSING_SALE_ORDER_STATUS;
}
interface ResponseEdit {
  type: typeof EDIT_CLOSING_SALE_ORDER ;
}
interface  FaildResponseEdit {
  type: typeof FAILED_TO_EDIT_CLOSING_SALE_ORDER;
}
 interface ResponseCreateOrder {
  type: typeof CREATE_CLOSING_SALE_ORDER;
}
 interface CloseDetails {
  type: typeof CLOSE_CLOSING_SALES_DETAILS ;
}
 interface FAILEDResponseCreateOrder {
  type: typeof FAILED_TO_CREATE_CLOSING_SALE_ORDER;
}
 interface GetExistingData {
  type: typeof GET_EXIST_CLOSING_SALE_ORDER_DATA;
  payload: IClosingSaleOrder;
}
 interface ResponseOneOrder {
  type: typeof GET_ONE_CLOSING_SALE_ORDER;
  payload: IClosingSaleOrder;
}
interface FAILEDResponseOneOrder {
  type: typeof FAILED_TO_GET_ONE_CLOSING_SALE_ORDER;
}
interface ResponseOrder {
  type: typeof GET_CLOSING_SALE_ORDER_DATA;
  payload: IClosingSaleOrder[];
}
interface FAILEDResponseOrder {
  type: typeof FAILED_TO_GET_CLOSING_SALE_ORDER_DATA;
  payload: null;
}
export type GetClosingSaleOrdersType = ResponseOrder | FAILEDResponseOrder;
export type DeleteClosingSaleOrdersType = ResponseDelete | FaildResponseDelete;
export type CreateClosingSaleOrderType = ResponseCreateOrder | FAILEDResponseCreateOrder;
export type UpdateStatusClosingSaleOrderType = ResponseEditStatus | FaildResponseEditStatus
export type UpdateCreditClosingSaleOrderType = ResponseEditPriceStatus | FaildResponseEditPriceStatus
export type UpdateClosingSaleOrderType = ResponseEdit | FaildResponseEdit
export type GetOneClosingSaleOrdersType =
   CloseDetails 
  | GetExistingData
  | ResponseOneOrder
  | FAILEDResponseOneOrder;
