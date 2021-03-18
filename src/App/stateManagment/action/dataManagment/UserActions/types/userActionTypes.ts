import {  IUser } from "../../../../../models/user"

export const LOGGIN_SUCCESS = "LOGGIN_SUCCESS"
export const LOGGIN_FAILED = "LOGGIN_FAILED"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const FAILED_TO_GET_USER = "FAILED_TO_GET_USER"
export interface LoginSuceess {
    type: typeof LOGGIN_SUCCESS,
    payload: IUser
}
export interface LoginFailed{
    type: typeof LOGGIN_FAILED,
}
export interface GetUserSuccess {
    type: typeof GET_USER_SUCCESS,
    payload: IUser
}
export interface FailedGetUser{
    type: typeof FAILED_TO_GET_USER,
}
export type GetLoginType = LoginSuceess | LoginFailed
export type GetUserType = GetUserSuccess | FailedGetUser