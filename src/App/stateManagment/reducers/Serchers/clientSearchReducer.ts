import { CLEAN_CLIENT, FINISH_SEARCH_CLIENT, GetSearchClientInputType, START_SEARCH_CLIENT, UPDATE_CLIENT_SELECTION } from "../../action/searchInputActions/types/searchInputTypes"
import { IDefaultState } from "./types/searchReducerType"



const initialState : IDefaultState = {
    loading: false,
    results: [],
    value: '',
    clearing:false 
  }


const clientSearchReducer = (state : IDefaultState = initialState, action:GetSearchClientInputType) : IDefaultState => {
    switch (action.type) {
      case CLEAN_CLIENT:
        return initialState
      case START_SEARCH_CLIENT:
        return { ...state, loading: true, value: action.query,clearing:true }
      case FINISH_SEARCH_CLIENT:
        return { ...state, loading: false, results: action.results,clearing:false}
      case UPDATE_CLIENT_SELECTION:
        return { ...state, value: action.selection,clearing:false   }
  
      default:
        return {...state,clearing:false}
    }
  }
  export default clientSearchReducer