import { CLEAN, FINISH_SEARCH, GetSearchInputType, START_SEARCH, UPDATE_SELECTION } from "../../action/searchInputActions/types/searchInputTypes"
import { IDefaultState } from "./types/searchReducerType"



const initialState : IDefaultState = {
    loading: false,
    results: [],
    value: '',
    clearing: false
  }


const dressSearchReducer = (state : IDefaultState = initialState, action:GetSearchInputType) : IDefaultState => {
    switch (action.type) {
      case CLEAN:
        return initialState
      case START_SEARCH:
        return { ...state, loading: true, value: action.query,clearing:true }
      case FINISH_SEARCH:
        return { ...state, loading: false, results: action.results,clearing:false }
      case UPDATE_SELECTION:
        return { ...state, value: action.selection,clearing:false  }
  
      default:
        return {...state,clearing:false}
    }
  }
  export default dressSearchReducer