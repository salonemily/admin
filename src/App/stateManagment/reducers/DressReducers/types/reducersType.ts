import IDress from "../../../../models/salonDress";

export interface IDefaultState {
    isLoading : boolean,
    isSuccesfull:boolean,
    data : IDress[] | null
  
  }
  export interface IDefaultStateOnaData {
    isLoading : boolean,
    data : IDress | null
    isSuccesfull:boolean

  }
  export interface IDefaultStatePostData {
    isSuccesfull : boolean ,
    isLoading : boolean
  
  }