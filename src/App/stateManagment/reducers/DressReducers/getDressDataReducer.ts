import {
  FAIL_TO_GETDATA,
  GetDressType,
  GET_DATA,
} from "../../action/dataManagment/SalonDressActions/types/DressActionType";
import { IDefaultState } from "./types/reducersType";

const defaultState: IDefaultState = {
  isSuccesfull:false,
  isLoading:true,
  data: null,
};
const getDressDataReducer = (
  state: IDefaultState = defaultState,
  action: GetDressType
): IDefaultState => {
  switch (action.type) {
    case GET_DATA:
      return (state = {
        data: action.payload,
        isSuccesfull:true,
  isLoading:false,
      });
    case FAIL_TO_GETDATA:
      return (state = {
        data:null,
        isSuccesfull:false,
        isLoading:false
      });
    default:
      return {...state,isLoading:true};
  }
};
export default getDressDataReducer;
