import IOrder from "../../../../models/rentOrders";


export interface IDefaultState{
    loading:boolean,
    data:IOrder[] | null
}
export interface IDefaultStateOnaData{
    isSuccesfull:boolean,
    isLoading:boolean,
    data:IOrder | null
}
export interface IDefaultStatePostData{
    isSuccesfull:boolean,
    isLoading:boolean
}
