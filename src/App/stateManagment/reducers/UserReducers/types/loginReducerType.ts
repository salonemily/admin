import { IUser } from "../../../../models/user";


export interface IDefaultState{
    isLoggin:boolean,
    userData:IUser| null,
    logginError:boolean
}
export interface IDefaultGetState{
    loading:boolean,
    userData:IUser| null,
}