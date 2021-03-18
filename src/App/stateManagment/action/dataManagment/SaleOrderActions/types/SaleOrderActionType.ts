import ISaleOrder from "../../../../../models/saleOrders";
export const GET_ONE_SALE_ORDER = "GET_ONE_SALE_ORDER";
export const CLOSE_ONE_SALE_ORDER = "CLOSE_ONE_SALE_ORDER";
export const FAILED_TO_GET_ONE_SALE_ORDER = "FAILED_TO_GET_ONE_SALE_ORDER";
export const GET_EXIST_SALE_ORDER_DATA = "GET_EXIST_SALE_ORDER_DATA";
export const GET_SALE_ORDER_DATA = "GET_SALE_ORDER_DATA";
export const FAILED_TO_GET_SALE_ORDER_DATA = "FAILED_TO_GET_SALE_ORDER_DATA";
export const CREATE_SALE_ORDER = "CREATE_SALE_ORDER";
export const FAILED_TO_CREATE_SALE_ORDER = "FAILED_TO_CREATE_SALE_ORDER";
export const EDIT_SALE_ORDER = "CREATE_EDIT_ORDER";
export const FAILED_TO_EDIT_SALE_ORDER = "FAILED_TO_CREATE_EDIT_ORDER";
export const EDIT_SALE_ORDER_STATUS = "EDIT_SALE_ORDER_STATUS";
export const FAILED_TO_EDIT_SALE_ORDER_STATUS = "FAILED_TO_EDIT_SALE_ORDER_STATUS";
export const DELETE_SALE_ORDER = "DELETE_SALE_ORDER";
export const FAILED_TO_DELETE_SALE_ORDER = "FAILED_TO_DELETE_SALE_ORDER";
export const EDIT_SALE_ORDER_PRICE = "EDIT_SALE_ORDER_PRICE";
export const FAILED_TO_EDIT_SALE_ORDER_PRICE = "FAILED_TO_EDIT_SALE_ORDER_PRICE";
interface ResponseDelete {
  type: typeof DELETE_SALE_ORDER;
}
interface  FaildResponseDelete {
  type: typeof FAILED_TO_DELETE_SALE_ORDER ;
}
interface ResponseEditPriceStatus {
  type: typeof  EDIT_SALE_ORDER_PRICE;
}
interface  FaildResponseEditPriceStatus {
  type: typeof FAILED_TO_EDIT_SALE_ORDER_PRICE ;
}
export interface ResponseEditOrderStatus {
  type: typeof EDIT_SALE_ORDER_STATUS;
}
export interface FAILEDResponseEditOrderStatus {
  type: typeof FAILED_TO_EDIT_SALE_ORDER_STATUS;
}
export interface ResponseEditOrder{
  type: typeof EDIT_SALE_ORDER;
}
export interface FAILEDResponseEditOrder {
  type: typeof FAILED_TO_EDIT_SALE_ORDER;
}
export interface ResponseCreateOrder {
  type: typeof CREATE_SALE_ORDER;
}
export interface FAILEDResponseCreateOrder {
  type: typeof FAILED_TO_CREATE_SALE_ORDER;
}
export interface GetExistingData {
  type: typeof GET_EXIST_SALE_ORDER_DATA;
  payload: ISaleOrder;
}
export interface ResponseOneOrder {
  type: typeof GET_ONE_SALE_ORDER;
  payload: ISaleOrder;
}
export interface ResponseCloseOneOrder {
  type: typeof CLOSE_ONE_SALE_ORDER;
}
export interface FAILEDResponseOneOrder {
  type: typeof FAILED_TO_GET_ONE_SALE_ORDER;
}
export interface ResponseOrder {
  type: typeof GET_SALE_ORDER_DATA;
  payload: ISaleOrder[];
}
export interface FAILEDResponseOrder {
  type: typeof FAILED_TO_GET_SALE_ORDER_DATA;
  payload: null;
}
export type GetSaleOrdersType = ResponseOrder | FAILEDResponseOrder;
export type CreateSaleOrderType = ResponseCreateOrder | FAILEDResponseCreateOrder;
export type EditSaleOrderType = ResponseEditOrder | FAILEDResponseEditOrder;
export type EditSaleOrderStatusType = ResponseEditOrderStatus | FAILEDResponseEditOrderStatus;
export type UpdateCreditSaleOrderType = ResponseEditPriceStatus | FaildResponseEditPriceStatus
export type DeleteSaleOrdersType = ResponseDelete | FaildResponseDelete;
export type GetOneSaleOrdersType =
  |ResponseCloseOneOrder
  | GetExistingData
  | ResponseOneOrder
  | FAILEDResponseOneOrder;
