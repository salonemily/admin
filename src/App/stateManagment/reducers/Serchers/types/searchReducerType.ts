
import { ISearchDress } from "../../../action/searchInputActions/types/searchInputTypes";

export interface IDefaultState{
    loading:boolean,
    results:ISearchDress[],
    value:string
    clearing: boolean
}