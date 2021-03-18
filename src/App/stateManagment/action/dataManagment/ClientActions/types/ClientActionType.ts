import IClient from "../../../../../models/clients";

export const GET_CLIENT_DATA = "GET_CLIENT_DATA";
export const FAIL_TO_GET_CLIENT_DATA = "FAIL_TO_GET_CLIENT_DATA";
export const GET_ONE_CLIENT = "GET_ONE_CLIENT_DATA";
export const GET_EXIST_CLIENT = "GET_EXIST_CLIENT_DATA";
export const FAIL_TO_GET_ONE_CLIENT = "FAIL_TO_GET_ONE_CLIENT";
export const CLOSE_CLIENT_DETAILS = "CLOSE_CLIENT_DETAILS";
export const CREATE_CLIENT = "CREATE_CLIENT";
export const FAIL_TO_CREATE_CLIENT = "FAIL_TO_CREATE_CLIENT";
export const EDIT_CLIENT = "EDIT_CLIENT";
export const FAIL_TO_EDIT_CLIENT = "FAIL_TO_EDIT_CLIENT";
export const DELETE_CLIENT = "DELETE_CLIENT";
export const FAIL_TO_DELETE_CLIENT = "FAIL_TO_DELETE_CLIENT";
export interface GetResponseDeleteClient {
  type: typeof DELETE_CLIENT;
}
export interface FaildResponseDeleteClients {
  type: typeof FAIL_TO_DELETE_CLIENT;
}
export interface GetResponseOneClient {
  type: typeof GET_ONE_CLIENT;
  payload: IClient;
}
export interface GetExistingOneClient {
  type: typeof GET_EXIST_CLIENT;
  payload: IClient;
}
export interface FaildResponseOneClient {
  type: typeof FAIL_TO_GET_ONE_CLIENT;
}
export interface ResponseClients {
  type: typeof GET_CLIENT_DATA;
  payload: IClient[];
}
export interface FaildResponseClients {
  type: typeof FAIL_TO_GET_CLIENT_DATA;
  payload: null;
}
export interface CloseClientDetails {
  type: typeof CLOSE_CLIENT_DETAILS;
}
export interface PostResponseClient {
  type: typeof CREATE_CLIENT;
}
export interface FailedPostResponseClient {
  type: typeof FAIL_TO_CREATE_CLIENT;
}
export interface PutResponseClient {
  type: typeof EDIT_CLIENT;
}
export interface FaildPutResponseClient {
  type: typeof FAIL_TO_EDIT_CLIENT;
}
export type GetClientsType = ResponseClients | FaildResponseClients;
export type GetOneClientType =
  | GetResponseOneClient
  | GetExistingOneClient
  | FaildResponseOneClient
  | CloseClientDetails;
export type CreateClientType = PostResponseClient | FailedPostResponseClient;
export type EditClientType = PutResponseClient | FaildPutResponseClient;
export type DeleteClientType = GetResponseDeleteClient | FaildResponseDeleteClients;
