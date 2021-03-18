import IClient from "../../../../models/clients";

export interface IDefaultState{
  isSuccesfull:boolean,
  isLoading:boolean,
    data:IClient[] | null
}
export interface IDefaultStateOnaData {
    data : IClient | null
    isLoading: boolean,
    isSuccesfull:boolean

  }
  export interface IDefaultStatePostData {
    isSuccesfull : boolean ,
    isLoading:boolean
  
  }