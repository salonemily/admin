import IClosingSaleOrder from "../../../../models/closingSaleOrder";
import ISaleOrder from "../../../../models/saleOrders";


export interface IDefaultState{
    loading:boolean,
    data:IClosingSaleOrder[] | null
}
export interface IDefaultStateOnaData{
    data:IClosingSaleOrder | null
    isSuccesfull:boolean,
    isLoading:boolean
}
export interface IDefaultStatePostData{
    isSuccesfull:boolean,
    isLoading:boolean
}

