import IOrder from "../../../../../models/rentOrders";
export const GET_ONE_RENT_ORDER = "GET_ONE_RENT_ORDER";
export const FAILD_TO_GET_ONE_RENT_ORDER = "FAILD_TO_GET_ONE_RENT_ORDER";
export const GET_EXIST_RENT_ORDER_DATA = "GET_EXIST_RENT_ORDER_DATA";
export const GET_RENT_ORDER_DATA = "GET_RENT_ORDER_DATA";
export const FAIL_TO_GET_RENT_ORDER_DATA = "FAIL_TO_GET_RENT_ORDER_DATA";
export const CREATE_RENT_ORDER = "CREATE_RENT_ORDER";
export const FAIL_TO_CREATE_RENT_ORDER = "FAIL_TO_CREATE_RENT_ORDER";
export const CLOSE_ONE_RENT_ORDER = "CLOSE_ONE_RENT_ORDER";
export const EDIT_RENT_ORDER_STATUS = "EDIT_RENT_ORDER_STATUS"
export const FAILED_TO_EDIT_RENT_ORDER_STATUS ="FAILED_TO_EDIT_RENT_ORDER_STATUS"
export const EDIT_RENT_ORDER = "EDIT_RENT_ORDER";
export const FAILED_TO_EDIT_RENT_ORDER = "FAILED_TO_EDIT_RENT_ORDER";
export const DELETE_RENT_ORDER = "DELETE_RENT_ORDER";
export const FAILED_TO_DELETE_RENT_ORDER = "FAILED_TO_DELETE_RENT_ORDER";
export const EDIT_RENT_ORDER_PRICE = "EDIT_RENT_ORDER_PRICE";
export const FAILED_TO_EDIT_RENT_ORDER_PRICE = "FAILED_TO_EDIT_RENT_ORDER_PRICE";
interface ResponseDelete {
  type: typeof DELETE_RENT_ORDER;
}
interface  FaildResponseDelete {
  type: typeof FAILED_TO_DELETE_RENT_ORDER ;
}
interface ResponseEditPriceStatus {
  type: typeof  EDIT_RENT_ORDER_PRICE;
}
interface  FaildResponseEditPriceStatus {
  type: typeof FAILED_TO_EDIT_RENT_ORDER_PRICE ;
}
interface ResponseEdit {
  type: typeof EDIT_RENT_ORDER ;
}
interface  FaildResponseEdit {
  type: typeof FAILED_TO_EDIT_RENT_ORDER;
}
interface ResponseCreateOrder {
  type: typeof CREATE_RENT_ORDER;
}
interface ResponseEditStatus {
  type: typeof EDIT_RENT_ORDER_STATUS;
}
interface  FaildResponseEditStatus {
  type: typeof FAILED_TO_EDIT_RENT_ORDER_STATUS;
}
interface FaildResponseCreateOrder {
  type: typeof FAIL_TO_CREATE_RENT_ORDER;
}
interface GetExistingData {
  type: typeof GET_EXIST_RENT_ORDER_DATA;
  payload: IOrder;
}
interface ResponseOneOrder {
  type: typeof GET_ONE_RENT_ORDER;
  payload: IOrder;
}
interface CloseOneOrder {
  type: typeof CLOSE_ONE_RENT_ORDER;
}
export interface FaildResponseOneOrder {
  type: typeof FAILD_TO_GET_ONE_RENT_ORDER;
}
export interface ResponseOrder {
  type: typeof GET_RENT_ORDER_DATA;
  payload: IOrder[];
}
export interface FaildResponseOrder {
  type: typeof FAIL_TO_GET_RENT_ORDER_DATA;
  payload: null;
}
export type GetRentOrdersType = ResponseOrder | FaildResponseOrder;
export type CreateRentOrderType = ResponseCreateOrder | FaildResponseCreateOrder;
export type UpdateStatusRentOrderType = ResponseEditStatus | FaildResponseEditStatus
export type UpdateCreditRentOrderType = ResponseEditPriceStatus | FaildResponseEditPriceStatus
export type UpdateRentOrderType = ResponseEdit | FaildResponseEdit
export type DeleteRentOrdersType = ResponseDelete | FaildResponseDelete;
export type GetOneRentOrdersType = 
  CloseOneOrder
  | GetExistingData
  | ResponseOneOrder
  | FaildResponseOneOrder;
