import IOrderDress from "../../../../models/orderDress";

export interface IDefaultState {
    loading : boolean,
    data : IOrderDress[] | null
  
  }
  export interface IDefaultStateOnaData {
    loading : boolean,
    data : IOrderDress | null

  }
  export interface IDefaultStatePostData {
    isSuccesfull : boolean 
  
  }