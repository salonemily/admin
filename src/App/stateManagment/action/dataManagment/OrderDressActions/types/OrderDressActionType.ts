import IOrderDress from "../../../../../models/orderDress"

export const GET_ORDER_DRESSES = "GET_ORDER_DRESSES"
export const FAIL_TO_GET_ORDER_DRESSES = "FAIL_TO_GET_ORDER_DRESSES"
export const GET_ONE_ORDER_DRESS= "GET_ONE_ORDER_DRESS"
export const GET_EXIST_ORDER_DRESS = "GET_EXIST_ORDER_DRESS"
export const FAIL_TO_GET_ONE_ORDER_DRESS = "FAIL_TO_GET_ONE_ORDER_DRESS"
export const CLOSE_ORDER_DRESS_DETAILS = "CLOSE_ORDER_DRESS_DETAILS"
export const CREATE_ORDER_DRESS = "CREATE_ORDER_DRESS"
export const FAIL_TO_CREATE_ORDER_DRESS = "FAIL_TO_CREATE_ORDER_DRESS"
export const EDIT_ORDER_DRESS= "EDIT_ORDER_DRESS"
export const FAIL_TO_EDIT_ORDER_DRESS = "FAIL_TO_EDIT_ORDER_DRESS"
export const DELETE_ORDER_DRESS = "DELETE_ORDER_DRESS"
export const FAIL_TO_DELETE_ORDER_DRESS = "FAIL_TO_DELETE_ORDER_DRESS"
export interface GetDeleteResponse {
    type: typeof DELETE_ORDER_DRESS,
}
export interface FaildDeleteResponse {
    type: typeof FAIL_TO_DELETE_ORDER_DRESS,
}

export interface GetResponseOneData {
    type: typeof GET_ONE_ORDER_DRESS,
    payload: IOrderDress
}
export interface GetExistingOneDress{
    type: typeof GET_EXIST_ORDER_DRESS ,
    payload: IOrderDress
}
export interface FaildResponseOneData {
    type: typeof FAIL_TO_GET_ONE_ORDER_DRESS,
}
export interface CloseDetials {
    type: typeof CLOSE_ORDER_DRESS_DETAILS,
}
export interface GetResponse {
    type: typeof GET_ORDER_DRESSES,
    payload: IOrderDress[]
}
export interface FaildResponse {
    type: typeof FAIL_TO_GET_ORDER_DRESSES,
    payload: null
}
export interface GetPostResponse {
    type: typeof CREATE_ORDER_DRESS,
}
export interface FaildPostResponse {
    type: typeof FAIL_TO_CREATE_ORDER_DRESS,
}

export interface GetPutResponse {
    type: typeof EDIT_ORDER_DRESS ,
}
export interface FaildPutResponse {
    type: typeof FAIL_TO_EDIT_ORDER_DRESS,
}
export type GetOrderDressType = GetResponse | FaildResponse
export type GetOneOrderDressType =  GetResponseOneData | FaildResponseOneData | CloseDetials | GetExistingOneDress
export type CreateOrderDressType = GetPostResponse | FaildPostResponse
export type EditOrderDressType = GetPutResponse | FaildPutResponse
export type DeleteOrderDressType = GetDeleteResponse | FaildDeleteResponse