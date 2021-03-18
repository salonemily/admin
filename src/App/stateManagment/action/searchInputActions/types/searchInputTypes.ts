export const CLEAN = "CLEAN"
export const START_SEARCH = "START_SEARCH"
export const FINISH_SEARCH = "FINISH_SEARCH"
export const UPDATE_SELECTION = "UPDATE_SELECTION"
export const CLEAN_CLIENT = "CLEAN_CLIENT"
export const START_SEARCH_CLIENT = "START_SEARCH_CLIENT"
export const FINISH_SEARCH_CLIENT = "FINISH_SEARCH_CLIENT "
export const UPDATE_CLIENT_SELECTION = " UPDATE_CLIENT_SELECTION"
export interface ISearchDress {
    id: string,
    title:string,
    description:string,
    price:string,


}
export interface ISearchClient {
    id: string,
    title:string,
    description:string,
    price:string,
}
export interface Clean{
    type: typeof CLEAN
    

}
export interface Start{
    type: typeof START_SEARCH
    query: string

}
export interface Finish{
    type: typeof FINISH_SEARCH
    results: ISearchDress[]

}
export interface Update{
    type: typeof UPDATE_SELECTION
    selection:string

}
export interface Clean_Client{
    type: typeof CLEAN_CLIENT
    

}
export interface Start_Client{
    type: typeof START_SEARCH_CLIENT
    query: string

}
export interface Finish_Client{
    type: typeof FINISH_SEARCH_CLIENT
    results: ISearchClient[]

}
export interface Update_CLient{
    type: typeof UPDATE_CLIENT_SELECTION
    selection:string

}
export type GetSearchClientInputType = Clean_Client | Start_Client | Finish_Client | Update_CLient
export type GetSearchInputType = Clean | Start | Finish | Update