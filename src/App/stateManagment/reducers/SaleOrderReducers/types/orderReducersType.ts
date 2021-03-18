import ISaleOrder from "../../../../models/saleOrders";


export interface IDefaultState{
    loading:boolean,
    data:ISaleOrder[] | null
}
export interface IDefaultStateOnaData{
    data:ISaleOrder | null
    isSuccesfull:boolean,
    isLoading:boolean
}
export interface IDefaultStatePostData{
    isSuccesfull:boolean,
    isLoading:boolean
}
