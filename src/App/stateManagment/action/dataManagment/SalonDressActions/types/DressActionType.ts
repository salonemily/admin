import IDress from "../../../../../models/salonDress"
export const GET_DATA = "GET_DATA"
export const FAIL_TO_GETDATA = "FAIL_TO_GETDATA"
export const GET_ONE_DATA = "GET_ONE_DATA"
export const GET_EXIST_DRESS_DATA = "GET_EXIST_DRESS_DATA"
export const FAIL_TO_GET_ONE_DATA = "FAIL_TO_GET_ONE_DATA"
export const CLOSE_DETAILS = "CLOSE_DETAILS"
export const CREATE_DATA = "CREATE_DATA"
export const FAIL_TO_CREATE_DATA = "FAIL_TO_CREATE_DATA"
export const EDIT_DATA = "EDIT_DATA"
export const FAIL_TO_EDIT_DATA = "FAIL_TO_EDIT_DATA"
export const DELETE_DATA = "DELETE_DATA"
export const FAIL_TO_DELETE_DATA = "FAIL_TO_DELETE_DATA"
export interface GetDeleteResponse {
    type: typeof DELETE_DATA,
}
export interface FaildDeleteResponse {
    type: typeof FAIL_TO_DELETE_DATA,
}

export interface GetResponseOneData {
    type: typeof GET_ONE_DATA,
    payload: IDress
}
export interface GetExistingOneDress{
    type: typeof GET_EXIST_DRESS_DATA ,
    payload: IDress
}
export interface FaildResponseOneData {
    type: typeof FAIL_TO_GET_ONE_DATA,
}
export interface CloseDetials {
    type: typeof CLOSE_DETAILS,
}
export interface GetResponse {
    type: typeof GET_DATA,
    payload: IDress[]
}
export interface FaildResponse {
    type: typeof FAIL_TO_GETDATA,
    payload: null
}
export interface GetPostResponse {
    type: typeof CREATE_DATA,
}
export interface FaildPostResponse {
    type: typeof FAIL_TO_CREATE_DATA,
}

export interface GetPutResponse {
    type: typeof EDIT_DATA ,
}
export interface FaildPutResponse {
    type: typeof FAIL_TO_EDIT_DATA,
}
export type GetDressType = GetResponse | FaildResponse
export type GetOneDressType =  GetResponseOneData | FaildResponseOneData | CloseDetials | GetExistingOneDress
export type CreateDataType = GetPostResponse | FaildPostResponse
export type EditDataType = GetPutResponse | FaildPutResponse
export type DeleteDressType = GetDeleteResponse | FaildDeleteResponse 